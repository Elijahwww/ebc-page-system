/* EBC Share — interactive frontend (visual system v3). All mutations are browser-local.
   Structure: icons → copy dictionary → demo data/state → time helpers → view templates
   → overlays & command palette → actions/events → live sky ticker. */
(() => {
  "use strict";
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const paths = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    community: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h10M7 16h6"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    megaphone: '<path d="m3 10 5-1 11-5v15L8 14l-5-1zM8 14l2 7H6l-2-7M22 8v7"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    arrow: '<path d="M4 12h16m-5-5 5 5-5 5"/>',
    external: '<path d="M14 3h7v7m0-7L11 13M10 4H4v16h16v-6"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>',
    translate: '<path d="M3 5h12M9 2v3M5 5c0 5 5 9 9 10M12 5c0 5-4 9-9 11m10 5 4-11 4 11m-6.5-4h5"/>',
    board: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 2v4M17 2v4M3 10h18M7 14h3M14 14h3M7 17h3"/>',
    folder: '<path d="M3 7V5a1 1 0 0 1 1-1h5l2 3h9a1 1 0 0 1 1 1v11H3z"/><path d="M3 11h18"/>',
    shield: '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6zM8 12l3 3 5-6"/>',
    heart: '<path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-4 4 0 9 8 15 8-6 12-11 8-15z"/>',
    plus: '<path d="M12 4v16M4 12h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    settings:
      '<path d="m9 3-.5 3L6 7 3 6l-2 4 2 2v2l-2 2 2 4 3-1 2.5 1L9 23h6l.5-3 2.5-1 3 1 2-4-2-2v-2l2-2-2-4-3 1-2.5-1L15 3z" transform="translate(1 -1) scale(.91)"/><circle cx="12" cy="12" r="3"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2m0 3h.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
    award: '<circle cx="12" cy="8" r="5"/><path d="m8 12-2 9 6-3 6 3-2-9"/>',
    logout: '<path d="M10 3H4v18h6m3-9h9m-4-4 4 4-4 4"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    pin: '<path d="m15 3 6 6-5 1-4 5-3-3 5-4zM10 14l-7 7"/>',
    file: '<path d="M14 2H5v20h14V7zM14 2v6h5M8 12h8M8 16h6"/>',
    user: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>',
    message: '<path d="M21 4H3v14h5l4 4v-4h9zM7 9h10M7 13h6"/>',
    filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1"/><path d="m3 17 5-5 4 4 4-6 5 7"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
    download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  };
  const icon = (n, small = false) =>
    `<svg class="icon${small ? " small" : ""}" viewBox="0 0 24 24" aria-hidden="true">${paths[n] || paths.grid}</svg>`;
  const dict = {
    zh: {
      workspace: "工作台",
      community: "团队动态",
      announcements: "通知公告",
      apps: "应用中心",
      profile: "个人中心",
      mainNav: "工作空间",
      quickAccess: "快捷应用",
      search: "搜索应用、公告或动态",
      hello: "你好，Elijah",
      greeting: "常用工具、重要公告和团队更新，都在这里。",
      thursday: "11 月 12 日，星期四",
      timezone: "上海 · UTC+8",
      important: "重要通知",
      noticeTitle: "集团内部信息安全提醒：请勿对外转发站内内容",
      details: "查看",
      favoriteApps: "常用应用",
      manageApps: "管理应用",
      importantNews: "重要公告",
      allNews: "全部公告",
      latest: "团队新鲜事",
      allUpdates: "浏览动态",
      recent: "最近使用",
      personal: "我的成长",
      nextLevel: "距离 Lv.3 还需 180 XP",
      points: "我的积分",
      favorites: "常用应用",
      monthCalendar: "工作日历",
      campaignReview: "11 月 Campaign 安排",
      seeBoard: "查看活动看板",
      internal: "仅限 EBC 内部使用，请勿对外传播。",
      preview: "交互预览",
      helpTitle: "需要帮助？",
      helpBody: "查找使用指南，或联系应用负责人。",
      help: "帮助与支持",
      all: "全部",
      content: "内容与语言",
      collaboration: "活动协作",
      websites: "站点管理",
      findTools: "查找工具，开始工作。",
      appsDesc: "集团工作工具的统一入口，找到适合你的应用。",
      appSearch: "搜索应用名称或用途",
      myFavorites: "我的常用",
      moreTools: "更多工具，陆续加入",
      moreToolsDesc: "让分散的工作工具，在这里连接。",
      submitTool: "推荐应用",
      open: "打开应用",
      viewApp: "查看应用",
      request: "申请访问",
      requested: "审核中",
      building: "建设中",
      available: "已开放",
      readOnly: "只读统计",
      sampleState: "示例状态",
      favorite: "收藏应用",
      unfavorite: "取消收藏",
      close: "关闭",
      cancel: "取消",
      save: "保存",
      saved: "已保存",
      remove: "移除",
      add: "添加",
      work: "工作动态",
      life: "生活分享",
      project: "项目进展",
      sharing: "精彩分享",
      ideas: "灵感火花",
      post: "发布动态",
      communityDesc: "看见每个团队的进展，分享工作之外的日常。",
      department: "全部部门",
      ranking: "贡献排行榜",
      wholeCompany: "全站",
      myDepartment: "本部门",
      rankingNote: "积分与等级 · 示例数据",
      viewRanking: "查看全部",
      shareTitle: "每一份分享，都有回响",
      shareDesc: "一个项目进展，一次灵感碰撞，或是值得记录的日常。",
      writePost: "分享你的故事",
      noticesDesc: "不错过与你有关的重要信息。",
      unread: "未读",
      markAll: "全部标为已读",
      noResults: "没有找到相关内容",
      tryAgain: "试试其他关键词，或清除筛选条件。",
      clear: "清除筛选",
      aboutAnnouncements: "关于通知公告",
      aboutAnnouncementsDesc: "集团与各部门的正式通知统一收录在这里。切换语言后，优先显示对应语种的内容。",
      guidelines: "查看发布规范",
      publishDept: "发布部门",
      owner: "负责团队",
      supportedLang: "支持语言",
      access: "访问方式",
      appAbout: "应用介绍",
      whatYouCanDo: "你可以在这里",
      featureTranslation: "处理多语言内容，保持不同市场的表达一致。",
      featureBoard: "按月份和地区查看活动，以及每场活动纳入的交付范围。",
      featureDomains: "查询和维护网站与落地页域名，跟进使用状态。",
      featureAssets: "集中查找品牌素材，了解版本和使用范围。",
      previewNote: "当前为前端交互预览。页面内容及权限状态用于展示，操作仅保存在本浏览器。",
      launchNote: "此应用的正式地址尚未配置。接入后，将在新标签页打开原系统。",
      requestReason: "用途说明",
      requestPlaceholder: "简单说明你需要使用此工具的工作场景",
      submitRequest: "提交申请",
      requestHint: "申请将由应用负责人处理。此预览不会发送真实申请。",
      requestSuccess: "演示申请已保存，可在个人中心查看",
      reasonError: "请填写至少 10 个字符的用途说明",
      maintenanceTeam: "应用负责人",
      copyLink: "复制链接",
      copied: "已复制",
      notification: "消息中心",
      noUnread: "没有未读消息",
      notifyDesc: "重要的更新，在这里集中查看。",
      notifyRead: "标记已读",
      chooseApps: "选择常用应用",
      chooseAppsDesc: "常用应用将显示在工作台，最多选择 6 个。",
      favoriteSaved: "常用应用已更新",
      postTitle: "标题",
      postTitlePlaceholder: "给这次分享起个标题",
      postContent: "内容",
      postContentPlaceholder: "分享项目进展、心得，或一个有趣的想法…",
      postCategory: "分类",
      postCover: "封面图片（可选）",
      postCoverDesc: "从电脑选择图片，仅在当前浏览器预览",
      publish: "发布",
      postHint: "这是一条演示动态，仅在本浏览器可见。",
      postError: "请填写标题和至少 10 个字符的内容",
      postSuccess: "演示动态已发布",
      postImageError: "请选择不超过 3MB 的 JPG、PNG 或 WebP 图片",
      boardTitle: "活动看板",
      boardDesc: "活动安排与交付范围，一目了然。",
      sourceDate: "附件数据 · 2026 年 5–11 月",
      period: "2026 年 5–11 月",
      activityCount: "活动总数",
      deliveryCount: "交付项次",
      coverage: "覆盖范围",
      offline: "线下活动",
      activitiesUnit: "场",
      itemsUnit: "项",
      regionsUnit: "个标签",
      includedScope: "纳入交付范围，不代表完成数",
      coverageNote: "含 Global、LATAM 等覆盖标签",
      offlineNote: "原始数据标识为线下",
      monthTrend: "月度活动趋势",
      scopeTypes: "交付范围分布",
      activityList: "活动明细",
      allMonths: "全部月份",
      allRegions: "全部地区",
      activitySearch: "搜索活动或地区",
      onlyOffline: "仅线下",
      month: "月份",
      activity: "活动名称",
      region: "国家 / 地区",
      deliveries: "交付范围",
      note: "备注",
      previous: "上一页",
      next: "下一页",
      boardFoot: "口径：交付项代表纳入范围，不代表已完成；多地区活动按地区分别计数。筛选只影响下方明细。",
      showing: "显示",
      of: "共",
      filtered: "筛选结果",
      sourceTitles: "活动名称保留来源原文",
      activityDetail: "活动详情",
      scopeNotice: "以下项目表示该活动纳入了对应交付范围，不表示当前完成状态。",
      noDeadline: "来源文件未提供负责人、截止日期或完成状态。",
      settingTitle: "偏好设置",
      settingDesc: "让工作平台更适合你的使用习惯。",
      language: "界面语言",
      languageDesc: "优先显示所选语言的内容。",
      timeZone: "显示时区",
      timeZoneDesc: "适用于精确时间；统计月份保持原始口径。",
      defaultHome: "默认首页",
      defaultHomeDesc: "再次打开平台时，进入你选择的页面。",
      myRequests: "我的访问申请",
      noRequests: "还没有访问申请",
      growth: "成长记录",
      growthDesc: "保留现有等级与积分体验",
      demoAccount: "演示账户",
      growthNote: "页面中的积分、排行榜与人员为视觉示例，不代表真实员工数据。",
      privacy: "预览说明",
      languageChanged: "已切换界面语言",
      helpDesc: "从应用中心查看各工具用途和使用状态。如需访问权限，在应用卡片中提交申请。",
      helpBoard: "活动看板中的交付项仅表示范围，不代表进度。",
      helpLinks: "工作台可收藏常用工具；顶部搜索可以查找应用、公告和动态。",
      feedbackTitle: "推荐一个工作工具",
      feedbackDesc: "这份预览展示应用推荐流程，信息不会发给任何人。",
      toolName: "应用名称",
      toolPurpose: "主要用途",
      feedbackSuccess: "推荐已在预览中记录",
      member: "团队同事",
      like: "点赞",
      unlike: "取消点赞",
      bookmark: "收藏动态",
      bookmarked: "已收藏到本地",
      read: "已读",
      comingSoon: "上线准备中",
      comingSoonDesc: "素材库正在准备中。你可以先收藏，开放后从这里进入。",
      back: "返回",
      more: "更多",
      requestStatus: "申请状态",
      requestDate: "提交时间",
      sampleTranslation: "翻译界面示例",
      loadSample: "载入示例",
      translateAction: "查看示例译文",
      source: "原文",
      target: "英文译文",
      translationHint: "此页用于体验翻译工具的进入方式，未连接翻译服务。",
      translationSource: "欢迎使用 EBC Share。你可以在这里查看团队动态、重要公告，以及常用工作工具。",
      translationTarget: "Welcome to EBC Share. Explore team updates, important announcements, and the tools you use every day.",
      sampleOnly: "本预览仅展示预设样例，未提交你的文本。",
      selectTools: "先收藏一个常用工具",
      noRecent: "最近打开的应用会出现在这里",
      readMore: "阅读详情",
      announcementPolicy: "正式公告由获授权的团队发布；中文与英文应保持内容一致。普通动态可在团队动态中分享。",
      storageFull: "本地空间不足，本次操作未保存。",
      reset: "重置预览数据",
      resetDone: "预览数据已重置",
      homeNav: "工作台",
      // v3 additions (draft copy, not user-approved)
      skyNow: "现在",
      skyHint: "拖动时间轴，看看各地同事现在几点",
      skyBack: "回到现在",
      skyYou: "你的时区",
      hoursUnit: "小时",
      minutesUnit: "分",
      calToday: "回到本周",
      calPrev: "上一周",
      calNext: "下一周",
      todayLabel: "今天",
      calEmpty: "这一天没有公告，也没有带日期的活动",
      monthCampaigns: "本月活动",
      monthCampaignsHint: "来源数据按月份记录，不含具体日期",
      noMonthData: "附件数据未覆盖这个月份",
      dateFromName: "日期取自活动名称",
      spanStart: "开始",
      spanOngoing: "进行中",
      spanEnd: "结束",
      scopeItems: "项交付范围",
      goTo: "前往",
      quickActions: "操作",
      palSelect: "选择",
      palOpen: "打开",
    },
    en: {
      workspace: "Workspace",
      community: "Community",
      announcements: "Announcements",
      apps: "App directory",
      profile: "My profile",
      mainNav: "WORKSPACE",
      quickAccess: "QUICK ACCESS",
      search: "Search apps, announcements, updates",
      hello: "Hello, Elijah",
      greeting: "Your everyday tools, important news, and team updates.",
      thursday: "Thursday, November 12",
      timezone: "Shanghai · UTC+8",
      important: "Important",
      noticeTitle: "A reminder: keep internal information within EBC",
      details: "Read",
      favoriteApps: "Your everyday tools",
      manageApps: "Customize",
      importantNews: "Important announcements",
      allNews: "View all",
      latest: "Around EBC",
      allUpdates: "Explore updates",
      recent: "Recently opened",
      personal: "Your progress",
      nextLevel: "180 XP to reach Lv.3",
      points: "Points",
      favorites: "Favorites",
      monthCalendar: "Work calendar",
      campaignReview: "November campaign plans",
      seeBoard: "View EBC Board",
      internal: "For EBC internal use only. Do not share externally.",
      preview: "Interactive preview",
      helpTitle: "Need a hand?",
      helpBody: "Find a guide or get help from the app team.",
      help: "Help & support",
      all: "All",
      content: "Content & language",
      collaboration: "Campaigns",
      websites: "Web operations",
      findTools: "Find a tool. Get to work.",
      appsDesc: "One place to discover the tools your teams use.",
      appSearch: "Search apps or what they do",
      myFavorites: "My favorites",
      moreTools: "More tools, coming together",
      moreToolsDesc: "A connected home for the way we work.",
      submitTool: "Suggest an app",
      open: "Open app",
      viewApp: "View app",
      request: "Request access",
      requested: "Under review",
      building: "In development",
      available: "Available",
      readOnly: "Read-only insights",
      sampleState: "Example state",
      favorite: "Add to favorites",
      unfavorite: "Remove from favorites",
      close: "Close",
      cancel: "Cancel",
      save: "Save changes",
      saved: "Saved",
      remove: "Remove",
      add: "Add",
      work: "Work updates",
      life: "Life at EBC",
      project: "Projects",
      sharing: "Team stories",
      ideas: "Ideas",
      post: "Share an update",
      communityDesc: "See what teams are working on. Share the moments in between.",
      department: "All teams",
      ranking: "Community contributors",
      wholeCompany: "Everyone",
      myDepartment: "My team",
      rankingNote: "Points & levels · Sample data",
      viewRanking: "View everyone",
      shareTitle: "Every story adds something",
      shareDesc: "A project milestone, a fresh idea, or a moment worth sharing.",
      writePost: "Share your story",
      noticesDesc: "Stay up to date with the information that matters.",
      unread: "Unread",
      markAll: "Mark all as read",
      noResults: "Nothing found just yet",
      tryAgain: "Try another keyword, or clear your filters.",
      clear: "Clear filters",
      aboutAnnouncements: "About announcements",
      aboutAnnouncementsDesc:
        "Official updates from EBC and its teams, together in one place. Content appears in your preferred language when available.",
      guidelines: "Publishing guidelines",
      publishDept: "Published by",
      owner: "App team",
      supportedLang: "Languages",
      access: "Access",
      appAbout: "About this app",
      whatYouCanDo: "What you can do",
      featureTranslation: "Work with multilingual content and keep messaging consistent across markets.",
      featureBoard: "Explore campaigns by month and region, and see their delivery scope.",
      featureDomains: "Manage website and landing-page domains and follow their status.",
      featureAssets: "Find brand assets, check versions, and understand where they can be used.",
      previewNote: "This is an interactive frontend preview. Content and access states are examples. Changes stay in this browser.",
      launchNote: "The live app address has not been configured yet. Once connected, the app will open in a new tab.",
      requestReason: "How will you use it?",
      requestPlaceholder: "Briefly describe the work you need this app for",
      submitRequest: "Send request",
      requestHint: "App owners review access requests. This preview does not send a real request.",
      requestSuccess: "Example request saved. Find it in your profile.",
      reasonError: "Please describe your use case in at least 10 characters.",
      maintenanceTeam: "App owner",
      copyLink: "Copy link",
      copied: "Copied",
      notification: "Notifications",
      noUnread: "You are all caught up",
      notifyDesc: "The updates that need your attention.",
      notifyRead: "Mark as read",
      chooseApps: "Choose your everyday tools",
      chooseAppsDesc: "Select up to 6 favorites for your workspace.",
      favoriteSaved: "Your favorites have been updated",
      postTitle: "Title",
      postTitlePlaceholder: "Give your story a title",
      postContent: "Your update",
      postContentPlaceholder: "A milestone, something you learned, or an idea worth sharing…",
      postCategory: "Category",
      postCover: "Cover image (optional)",
      postCoverDesc: "Choose an image to preview in this browser",
      publish: "Share update",
      postHint: "This is an example update, visible only in this browser.",
      postError: "Add a title and at least 10 characters of content.",
      postSuccess: "Your example update has been shared",
      postImageError: "Choose a JPG, PNG, or WebP image under 3 MB.",
      boardTitle: "EBC Board",
      boardDesc: "Campaign plans and delivery scope, in one view.",
      sourceDate: "Source snapshot · May–Nov 2026",
      period: "May–November 2026",
      activityCount: "Campaigns",
      deliveryCount: "Delivery items",
      coverage: "Coverage",
      offline: "In-person events",
      activitiesUnit: "",
      itemsUnit: "",
      regionsUnit: "labels",
      includedScope: "In scope, not a completion count",
      coverageNote: "Includes Global, LATAM and other labels",
      offlineNote: "Marked as in-person in the source",
      monthTrend: "Campaigns by month",
      scopeTypes: "Delivery scope",
      activityList: "Campaign details",
      allMonths: "All months",
      allRegions: "All regions",
      activitySearch: "Search campaigns or regions",
      onlyOffline: "In-person only",
      month: "Month",
      activity: "Campaign",
      region: "Country / region",
      deliveries: "Delivery scope",
      note: "Notes",
      previous: "Previous",
      next: "Next",
      boardFoot: "Items indicate delivery scope, not completion. Multi-region campaigns count once in each region. Filters apply to the table below.",
      showing: "Showing",
      of: "of",
      filtered: "Filtered results",
      sourceTitles: "Campaign names retain their original language",
      activityDetail: "Campaign detail",
      scopeNotice: "These items are included in the campaign’s delivery scope. They do not indicate completion.",
      noDeadline: "The source does not include an owner, due date, or completion status.",
      settingTitle: "Preferences",
      settingDesc: "Make this workspace work for you.",
      language: "Interface language",
      languageDesc: "Content uses your preferred language when available.",
      timeZone: "Time zone",
      timeZoneDesc: "Used for exact timestamps; reporting months remain unchanged.",
      defaultHome: "Start page",
      defaultHomeDesc: "Choose the page you see when you return.",
      myRequests: "My access requests",
      noRequests: "No access requests yet",
      growth: "Your progress",
      growthDesc: "Your existing points and levels, in a familiar place",
      demoAccount: "Example account",
      growthNote: "Points, contributors, and people shown here are visual examples, not actual employee data.",
      privacy: "About this preview",
      languageChanged: "Interface language updated",
      helpDesc: "Explore app descriptions and availability in the app directory. Request access from an app card when needed.",
      helpBoard: "EBC Board delivery items represent scope, not progress.",
      helpLinks: "Pin your everyday tools to the workspace. Search above to find apps, announcements, and updates.",
      feedbackTitle: "Suggest a work tool",
      feedbackDesc: "This preview demonstrates the suggestion flow. Nothing will be sent.",
      toolName: "App name",
      toolPurpose: "What is it for?",
      feedbackSuccess: "Suggestion recorded in this preview",
      member: "Team member",
      like: "Like",
      unlike: "Unlike",
      bookmark: "Save update",
      bookmarked: "Saved in this browser",
      read: "Read",
      comingSoon: "Getting ready for you",
      comingSoonDesc: "The asset library is in development. Add it to favorites so you can find it when it opens.",
      back: "Back",
      more: "More",
      requestStatus: "Request status",
      requestDate: "Submitted",
      sampleTranslation: "Translation workspace preview",
      loadSample: "Load example",
      translateAction: "Show example translation",
      source: "Source text",
      target: "English translation",
      translationHint: "Try the app entry experience. No translation service is connected.",
      translationSource: "欢迎使用 EBC Share。你可以在这里查看团队动态、重要公告，以及常用工作工具。",
      translationTarget: "Welcome to EBC Share. Explore team updates, important announcements, and the tools you use every day.",
      sampleOnly: "This preview shows a preset example. Your text was not sent.",
      selectTools: "Choose your first favorite app",
      noRecent: "Apps you open will appear here",
      readMore: "Read story",
      announcementPolicy:
        "Official announcements are published by authorized teams. Chinese and English versions should convey the same information. Share personal updates in Community.",
      storageFull: "Browser storage is full. This change was not saved.",
      reset: "Reset preview data",
      resetDone: "Preview data reset",
      homeNav: "Home",
      skyNow: "Now",
      skyHint: "Drag the timeline to see the time across offices",
      skyBack: "Back to now",
      skyYou: "Your time zone",
      hoursUnit: "h",
      minutesUnit: "min",
      calToday: "This week",
      calPrev: "Previous week",
      calNext: "Next week",
      todayLabel: "Today",
      calEmpty: "No announcements or dated campaigns on this day",
      monthCampaigns: "Campaigns this month",
      monthCampaignsHint: "The source lists campaigns by month, without exact dates",
      noMonthData: "The source snapshot does not cover this month",
      dateFromName: "Dates taken from the campaign name",
      spanStart: "Starts",
      spanOngoing: "Ongoing",
      spanEnd: "Ends",
      scopeItems: "items in scope",
      goTo: "Go to",
      quickActions: "Actions",
      palSelect: "Navigate",
      palOpen: "Open",
    },
  };
  const base = {
    lang: "zh",
    favorites: ["translation", "board", "domains", "assets"],
    likes: [],
    read: [],
    posts: [],
    requests: [],
    recent: ["board", "translation"],
    tz: "Asia/Shanghai",
    home: "workspace",
    notificationsRead: false,
    suggestions: [],
  };
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("ebcshare-preview-v1") || "{}");
  } catch {}
  let state = { ...base, ...saved },
    ui = {
      appCategory: "all",
      appQ: "",
      favOnly: false,
      communityTab: "work",
      postCategory: "all",
      department: "all",
      noticeTab: "all",
      noticeDept: "all",
      noticeQ: "",
      boardMonth: "all",
      boardRegion: "all",
      boardQ: "",
      offline: false,
      boardPage: 1,
      rankDept: false,
      skyOffset: 0, // minutes the home timeline is scrubbed away from "now"
      weekOffset: 0, // calendar: weeks away from the current week
      calDay: null, // calendar: selected civil day (UTC ms at 00:00)
      palIndex: 0, // command palette: highlighted row
      entering: true, // route just changed → play the page entrance once
      pop: null, // id of the like/star that was just toggled → play its micro-animation once
    };
  if (!["zh", "en"].includes(state.lang)) state.lang = "zh";
  const t = (k) => dict[state.lang][k] ?? dict.en[k] ?? k;
  const bi = (zh, en) => (state.lang === "zh" ? zh : en);
  const persist = () => {
    try {
      localStorage.setItem("ebcshare-preview-v1", JSON.stringify(state));
      return true;
    } catch {
      toast(t("storageFull"));
      return false;
    }
  };
  const apps = [
    {
      id: "translation",
      name: ["多语言翻译", "Translation"],
      desc: ["让内容跨越语言，让表达保持一致。", "Multilingual content. Consistent messaging."],
      icon: "translate",
      tone: "red",
      category: "content",
      owner: "SEO Team",
      state: "available",
      feature: "featureTranslation",
      langs: "中文 · English",
    },
    {
      id: "board",
      name: ["活动看板", "EBC Board"],
      desc: ["每一场活动，进展清晰可见。", "A shared view of every campaign."],
      icon: "board",
      tone: "blue",
      category: "collaboration",
      owner: "Campaign Team",
      state: "readOnly",
      feature: "featureBoard",
      langs: "中文 · English",
    },
    {
      id: "domains",
      name: ["域名管理", "Domain Manager"],
      desc: ["网站与落地页域名，有序管理。", "Keep your web domains organized."],
      icon: "globe",
      tone: "purple",
      category: "websites",
      owner: "Web Operations",
      state: "request",
      feature: "featureDomains",
      langs: "中文 · English",
    },
    {
      id: "assets",
      name: ["素材库", "Asset Library"],
      desc: ["找到对的素材，让创意更快落地。", "The right asset for your next idea."],
      icon: "folder",
      tone: "green",
      category: "content",
      owner: "Brand & Marketing",
      state: "building",
      feature: "featureAssets",
      langs: "中文 · English",
    },
  ];
  // Correct the source-dependent claim: the attached Board is scope statistics, not progress.
  apps[1].desc = ["活动安排与交付范围，清晰可查。", "Campaign plans and delivery scope."];
  const initialPosts = [
    {
      id: "p1",
      title: ["跨越时区，连接每一份专业", "Across time zones, connected by our work"],
      category: "sharing",
      kind: "work",
      media: "london",
      team: "Brand",
      author: "Brand Team",
      initial: "B",
      color: "blue",
      likes: 26,
      body: [
        "从一座城市，到另一座城市，团队以不同的节奏向前。EBC Share 将各地的动态、经验和工作工具放在一起，让协作从彼此了解开始。\n\n这里展示的是团队故事卡片的视觉样例。正式上线后，将由各部门发布真实的工作与团队内容。",
        "Different cities, different rhythms, shared work. EBC Share brings team updates, ideas, and useful tools together, helping colleagues understand what is happening across the organization.\n\nThis is an example story for the visual concept. Teams will publish their own updates in the connected platform.",
      ],
    },
    {
      id: "p2",
      title: ["11 月活动安排，一起看见全局", "A shared look at November campaigns"],
      category: "project",
      kind: "work",
      media: "campaign",
      team: "MKT",
      author: "Campaign Team",
      initial: "C",
      color: "red",
      likes: 18,
      body: [
        "活动看板汇总不同月份、不同地区的活动安排与交付范围。你可以按月份、地区和关键词筛选，快速找到需要的信息。\n\n交付项代表纳入范围，并不等同于已完成。此预览接入了你提供的静态统计数据。",
        "EBC Board brings campaign plans and delivery scope together across months and regions. Filter by month, region, or keyword to find what you need.\n\nDelivery items indicate scope, not completion. This preview uses the static data supplied for the project.",
      ],
    },
    {
      id: "p3",
      title: ["跨语言协作，从一致的表达开始", "One message, across languages"],
      category: "ideas",
      kind: "work",
      media: "translation",
      team: "SEO",
      author: "SEO Team",
      initial: "S",
      color: "green",
      likes: 32,
      body: [
        "为不同地区准备内容时，清晰、准确的表达尤为重要。多语言翻译工具的入口将统一放在应用中心，方便团队找到并使用。\n\n这是一条示例动态，用于展示不同内容类型的卡片与详情。",
        "Clear and accurate communication matters when preparing content for different markets. The translation tool can be found in the app directory, alongside other everyday work tools.\n\nThis example update demonstrates the story card and detail view.",
      ],
    },
    {
      id: "p4",
      title: ["整理灵感，也整理我们的工作方式", "A place for ideas, and the way we work"],
      category: "sharing",
      kind: "work",
      media: "design",
      team: "Design",
      author: "Design Team",
      initial: "D",
      color: "blue",
      likes: 21,
      body: [
        "素材库正在规划中。我们希望让查找、使用与版本管理形成更清晰的体验。\n\n在素材库开放前，你可以先将它添加到常用应用。",
        "The asset library is being planned to make finding, using, and tracking asset versions more straightforward.\n\nAdd it to your favorites so it is easy to find when it becomes available.",
      ],
    },
    {
      id: "p5",
      title: ["工作之外，留一点时间给生活", "A little space for life beyond work"],
      category: "sharing",
      kind: "life",
      media: "life",
      team: "People",
      author: "People Team",
      initial: "P",
      color: "green",
      likes: 42,
      body: [
        "一本书、一杯咖啡，或一段新的旅程。欢迎在这里分享工作之外值得记录的瞬间。\n\n此内容为视觉预览样例。",
        "A book, a coffee, or a new journey. This is a place to share the moments worth remembering outside work.\n\nThis content is an example for the visual preview.",
      ],
    },
    {
      id: "p6",
      title: ["用一张照片，记录城市的另一面", "Another side of the city"],
      category: "sharing",
      kind: "life",
      media: "london",
      team: "MKT",
      author: "Community",
      initial: "E",
      color: "red",
      likes: 16,
      body: [
        "每个人的视角，都是一个新的故事。与不同地区的同事分享你的城市日常。\n\n此内容为视觉预览样例，图片为伦敦城市素材。",
        "Every perspective holds a new story. Share a glimpse of your city with colleagues around the world.\n\nThis is example content, using a London city image.",
      ],
    },
  ];
  const notices = [
    {
      id: "n1",
      title: ["关于集团内部信息的使用与分享", "Keeping internal information within EBC"],
      team: "IT",
      dept: ["信息安全", "Information Security"],
      date: "11-12",
      tag: "important",
      body: [
        "为保护内部信息，请勿将站内文字、图片及附件以任何形式对外转发、截图或传播。",
        "请通过已获授权的内部渠道开展协作。如需对外使用相关内容，请先联系内容负责团队确认。",
      ],
      en: [
        "Please keep internal text, images, and attachments within authorized EBC channels. Do not forward, screenshot, or share them externally.",
        "For any external use, contact the team responsible for the content first.",
      ],
    },
    {
      id: "n2",
      title: ["EBC Share 工作平台使用说明", "Getting started with the EBC Share workspace"],
      team: "MKT",
      dept: ["平台运营", "Platform Team"],
      date: "11-11",
      tag: "guide",
      body: [
        "工作台集中展示常用应用、重要公告和最新团队动态。你可以点击“管理应用”选择自己的常用工具。",
        "团队动态保留原有分享体验。应用中心负责集中呈现工具用途和访问方式，具体业务功能在各应用内完成。",
      ],
      en: [
        "Your workspace brings favorite apps, important announcements, and team updates together. Choose Customize to select your everyday tools.",
        "Community remains a place for stories and updates. The app directory helps you discover tools and how to access them. Business workflows stay inside each app.",
      ],
    },
    {
      id: "n3",
      title: ["11 月活动看板已更新", "November campaign board updated"],
      team: "MKT",
      dept: ["活动团队", "Campaign Team"],
      date: "11-11",
      tag: "update",
      body: [
        "活动看板现有数据覆盖 2026 年 5 月至 11 月，包含 51 场活动和 294 个纳入范围的交付项次。",
        "请注意：勾选和交付项数只表示交付范围，不代表已经完成。按月份或地区筛选后，下方明细会随之更新。",
      ],
      en: [
        "The supplied board covers May to November 2026, with 51 campaigns and 294 delivery items in scope.",
        "Included items indicate delivery scope, not completion. Month and region filters update the detail table.",
      ],
    },
    {
      id: "n4",
      title: ["常用应用与访问权限说明", "Your apps and access permissions"],
      team: "IT",
      dept: ["IT 支持", "IT Support"],
      date: "11-10",
      tag: "guide",
      body: [
        "收藏应用可以帮助你更快找到工具，但不会自动授予访问权限。",
        "如卡片显示“申请访问”，请填写用途说明。应用负责人审核并完成开通后，才能使用相应功能。",
      ],
      en: [
        "Adding an app to favorites makes it easier to find, but does not grant access.",
        "If an app shows Request access, describe your use case. Access becomes available after the app owner approves and provisions it.",
      ],
    },
  ];
  const appName = (a) => a.name[state.lang === "zh" ? 0 : 1];
  const postText = (p, key) => (Array.isArray(p[key]) ? p[key][state.lang === "zh" ? 0 : 1] : p[key]);
  const allPosts = () => [...state.posts, ...initialPosts];
  const appStatus = (a) => (state.requests.some((r) => r.app === a.id) ? "requested" : a.state);
  const route = () => {
    const name = location.hash.replace(/^#/, "").split("?")[0] || state.home;
    return ["workspace", "community", "announcements", "apps", "board", "profile", "translation"].includes(name) ? name : "workspace";
  };
  function currentDate() {
    return new Date().toLocaleDateString(state.lang === "zh" ? "zh-CN" : "en-US", {
      month: "long",
      day: "numeric",
      weekday: "long",
      timeZone: state.tz,
    });
  }
  // The four offices offered in Preferences → Time zone. [IANA zone, 中文, English]
  const ZONES = [
    ["Asia/Shanghai", "上海", "Shanghai"],
    ["Asia/Singapore", "新加坡", "Singapore"],
    ["Europe/London", "伦敦", "London"],
    ["America/New_York", "纽约", "New York"],
  ];
  function zoneLabel() {
    const z = ZONES.find((x) => x[0] === state.tz) || [state.tz, state.tz, state.tz];
    const parts = new Intl.DateTimeFormat("en", { timeZone: state.tz, timeZoneName: "shortOffset" }).formatToParts(new Date());
    return z[state.lang === "zh" ? 1 : 2] + " · " + parts.find((x) => x.type === "timeZoneName").value.replace("GMT", "UTC");
  }
  /* ───────────── Time helpers (home sky + calendar) ───────────── */
  const DAY = 864e5;
  const fmtCache = {};
  // Wall-clock parts of an instant in a zone. `day` is that zone's civil date as UTC midnight ms.
  function zoneParts(tz, ms) {
    const f = (fmtCache[tz] ||= new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }));
    const p = {};
    for (const x of f.formatToParts(new Date(ms))) p[x.type] = x.value;
    const day = Date.UTC(+p.year, +p.month - 1, +p.day);
    const wall = day + (+p.hour * 3600 + +p.minute * 60 + +p.second) * 1000;
    return {
      hour: +p.hour + +p.minute / 60 + +p.second / 3600,
      hm: `${p.hour}:${p.minute}`,
      ss: p.second,
      day,
      offset: Math.round((wall - Math.floor(ms / 1000) * 1000) / 60000),
    };
  }
  const civilToday = () => zoneParts(state.tz, Date.now()).day;
  const dayKey = (ms) => new Date(ms).toISOString().slice(0, 10);
  const fmtDay = (ms, o) => new Date(ms).toLocaleDateString(state.lang === "zh" ? "zh-CN" : "en-US", { timeZone: "UTC", ...o });
  // The source only records a month per campaign. A few names carry an explicit range
  // (e.g. “Global抽奖20261123-1225”); only those are placed on calendar days.
  const datedActs = BOARD_DATA.activities
    .map((a, i) => {
      const m = a.name.match(/(20\d{2})(\d{2})(\d{2})-(\d{2})(\d{2})/);
      if (!m) return null;
      const s = Date.UTC(+m[1], +m[2] - 1, +m[3]);
      let e = Date.UTC(+m[1], +m[4] - 1, +m[5]);
      if (e < s) e = Date.UTC(+m[1] + 1, +m[4] - 1, +m[5]);
      return { i, a, s, e };
    })
    .filter(Boolean);
  function dayItems(ms) {
    const key = dayKey(ms);
    return [
      ...notices.filter((n) => "2026-" + n.date === key).map((n) => ({ kind: "notice", n })),
      ...datedActs.filter((x) => x.s <= ms && ms <= x.e).map((x) => ({ kind: "campaign", x })),
    ];
  }
  function weekDays() {
    const today = civilToday();
    const monday = today - ((new Date(today).getUTCDay() + 6) % 7) * DAY + ui.weekOffset * 7 * DAY;
    return Array.from({ length: 7 }, (_, i) => monday + i * DAY);
  }
  let lastFocus = null,
    toastTimer,
    searchTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("visible"), 3200);
  }
  function appIcon(a) {
    return `<span class="app-icon tone-${a.tone}">${icon(a.icon)}</span>`;
  }
  function navigate(page) {
    closeModal();
    if (location.hash === "#" + page) {
      render();
      window.scrollTo(0, 0);
    } else location.hash = page;
  }
  /* ───────────────────────── View templates (visual system v2) ─────────────────────────
     Markup below is presentation only. Data, state, actions and copy keys are unchanged,
     so IT can replace data sources without touching the visual layer. */
  const L = () => (state.lang === "zh" ? 0 : 1);
  const unreadCount = () => notices.filter((n) => !state.read.includes(n.id)).length;
  const MONTHS_EN = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const XP = { now: 320, goal: 500, level: 2 };
  const KBD = /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl K";
  function xpRing(size = "md") {
    const c = 2 * Math.PI * 34;
    return `<span class="xp-ring ${size}" role="img" aria-label="Lv.${XP.level} · ${XP.now} / ${XP.goal} XP"><svg viewBox="0 0 80 80" aria-hidden="true"><circle class="xp-track" cx="40" cy="40" r="34"/><circle class="xp-value" cx="40" cy="40" r="34" stroke-dasharray="${c.toFixed(1)}" style="--c:${c.toFixed(1)};--o:${(c * (1 - XP.now / XP.goal)).toFixed(1)}"/></svg><span class="xp-level"><small>Lv.</small>${XP.level}</span></span>`;
  }
  function shell() {
    const r = route();
    const nav = [
      ["workspace", "home"],
      ["community", "community"],
      ["announcements", "megaphone"],
      ["apps", "grid"],
    ];
    const active = r === "board" || r === "translation" ? "apps" : r;
    const unread = unreadCount();
    const crumb =
      r === "board" || r === "translation"
        ? `<a href="#apps">${t("apps")}</a>${icon("chevron", true)}<b>${t(r === "board" ? "boardTitle" : "sampleTranslation")}</b>`
        : `<b>${t(active)}</b>`;
    return `<div class="mobile-sidebar-backdrop" data-action="close-menu"></div>
<aside class="sidebar">
  <a href="#workspace" class="brand" aria-label="EBC Share"><span class="brand-ebc">EBC</span><span class="brand-word">Share</span></a>
  <nav class="nav-main" aria-label="${t("mainNav")}">${nav
    .map(
      ([name, i]) =>
        `<a aria-label="${t(name)}" title="${t(name)}" class="nav-link ${active === name ? "active" : ""}" href="#${name}" ${active === name ? 'aria-current="page"' : ""}>${icon(i)}<span>${t(name)}</span>${name === "announcements" && unread ? `<b class="count">${unread}</b>` : ""}</a>`,
    )
    .join("")}</nav>
  <div class="sidebar-bottom">
    <button class="nav-link help-link" title="${t("help")}" data-action="help">${icon("help")}<span>${t("help")}</span></button>
    <button class="profile-row" aria-label="${t("profile")}" data-action="navigate" data-page="profile"><span class="avatar">EW</span><span class="profile-copy"><strong>Elijah Wong</strong><span>Marketing</span></span>${icon("chevron", true)}</button>
  </div>
</aside>
<div class="shell">
  <header class="topbar">
    <button class="icon-button mobile-toggle" data-action="menu" aria-label="${t("mainNav")}">${icon("menu")}</button>
    <div class="breadcrumb"><span>EBC Share</span>${icon("chevron", true)}${crumb}</div>
    <button class="top-search" data-action="palette" aria-haspopup="dialog">${icon("search", true)}<span>${t("search")}</span><kbd>${KBD}</kbd></button>
    <div class="top-actions">
      <button class="lang-switch" data-action="language" aria-label="${bi("切换到 English", "Switch to 中文")}" title="${bi("切换到 English", "Switch to 中文")}"><span class="${state.lang === "zh" ? "on" : ""}">中</span><span class="${state.lang === "en" ? "on" : ""}">EN</span></button>
      <button class="icon-button" data-action="notifications" aria-label="${t("notification")}">${icon("bell")}${!state.notificationsRead ? '<span class="notification-dot"></span>' : ""}</button>
    </div>
  </header>
  <main class="main ${ui.entering ? "enter" : ""}" id="main" tabindex="-1"><div class="page page-${r}">${pageContent()}</div></main>
</div>
<nav class="mobile-nav" aria-label="${t("mainNav")}">${nav
      .map(
        ([name, i]) =>
          `<a href="#${name}" class="${active === name ? "active" : ""}" ${active === name ? 'aria-current="page"' : ""}>${icon(i)}<span>${name === "workspace" ? t("homeNav") : t(name)}</span>${name === "announcements" && unread ? '<i class="nav-dot"></i>' : ""}</a>`,
      )
      .join("")}</nav>`;
  }
  function pageHead(title, desc, action = "", kicker = "") {
    return `<div class="page-heading"><div class="page-heading-copy">${kicker ? `<div class="page-kicker">${kicker}</div>` : ""}<h1>${title}</h1><p>${desc}</p></div>${action ? `<div class="page-heading-action">${action}</div>` : ""}</div>`;
  }
  function footer() {
    return `<footer class="footer"><span>${icon("lock", true)}${t("internal")}</span><button data-action="preview-info">${t("preview")} v3.0 ${icon("external", true)}</button></footer>`;
  }
  /* Each app gets a small illustration built from CSS, so the directory needs no image requests.
     The Board illustration is drawn from the real monthly counts in BOARD_DATA. */
  function appArt(a) {
    switch (a.id) {
      case "translation":
        return `<div class="art art-translate"><span class="glyph g1">文</span><span class="glyph g2">A</span></div>`;
      case "board":
        return `<div class="art art-board">${BOARD_DATA.months.map((m) => `<i class="${m.key === "2026-11" ? "now" : ""}" style="--h:${m.count / 10}"></i>`).join("")}</div>`;
      case "domains":
        return `<div class="art art-domain"><span class="orbit o1"></span><span class="orbit o2"></span><span class="url">${icon("lock", true)}<em>https://</em><b></b><b></b></span></div>`;
      default:
        return `<div class="art art-assets"><i></i><i></i><i></i><i></i></div>`;
    }
  }
  function statusChip(status) {
    return `<span class="status status-${status}"><i></i>${t(status)}</span>`;
  }
  function appCard(a, catalog = false) {
    const status = appStatus(a),
      fav = state.favorites.includes(a.id);
    return `<article class="app-card tone-${a.tone} ${status === "building" ? "is-building" : ""}" data-spot><button class="app-open" data-action="app" data-id="${a.id}" aria-label="${t("viewApp")} ${appName(a)}"></button><div class="app-art-wrap" aria-hidden="true">${appArt(a)}</div><button class="star-button ${fav ? "active" : ""} ${ui.pop === "fav-" + a.id ? "pop" : ""}" data-action="favorite" data-id="${a.id}" aria-label="${fav ? t("unfavorite") : t("favorite")} ${appName(a)}" aria-pressed="${fav}">${icon("star", true)}</button><div class="app-body">${catalog ? `<div class="category-eyebrow">${a.owner}</div>` : ""}<h3>${appName(a)}</h3><p>${a.desc[L()]}</p><div class="app-footer">${statusChip(status)}<span class="app-go">${icon(status === "request" || status === "requested" ? "lock" : "arrow", true)}</span></div></div></article>`;
  }
  function media(p) {
    let art =
      p.media === "london"
        ? '<img src="assets/london.jpg" alt="London skyline at sunset" loading="lazy">'
        : p.media === "campaign"
          ? '<div class="cover cover-campaign"><i class="ring"></i><i class="ring r2"></i><b>Make<br>it happen.</b><span>CAMPAIGN · 2026</span></div>'
          : p.media === "translation"
            ? '<div class="cover cover-translation"><i>文</i><i>A</i><em></em></div>'
            : p.media === "design"
              ? '<div class="cover cover-design"><i></i><i></i><i></i><i></i></div>'
              : '<div class="cover cover-life"><i></i><em></em><em></em><em></em></div>';
    if (p.image && /^data:image\/(jpeg|png|webp);base64,/.test(p.image))
      art = `<img src="${p.image}" alt="${esc(postText(p, "title"))}" loading="lazy">`;
    return `<div class="story-media media-${p.media}" data-action="story" data-id="${p.id}" role="button" tabindex="0" aria-label="${esc(postText(p, "title"))}">${art}<span class="media-label">${t(p.category)}</span></div>`;
  }
  // variant: "" (grid card) | "feature" (home lead story) | "row" (home compact row)
  function storyCard(p, variant) {
    const liked = state.likes.includes(p.id);
    return `<article class="story-card ${typeof variant === "string" ? variant : ""}">${media(p)}<div class="story-content"><h3 role="button" tabindex="0" data-action="story" data-id="${p.id}">${esc(postText(p, "title"))}</h3><div class="story-meta"><span class="avatar small ${p.color}">${esc(p.initial)}</span><span class="story-author">${esc(p.author)}</span><button class="like-btn ${liked ? "liked" : ""} ${ui.pop === "like-" + p.id ? "pop" : ""}" data-action="like" data-id="${p.id}" aria-label="${liked ? t("unlike") : t("like")}" aria-pressed="${liked}">${icon("heart")}<b>${p.likes + (liked ? 1 : 0)}</b></button></div></div></article>`;
  }
  function noticeTag(n) {
    return `<span class="tiny-tag ${n.tag === "important" ? "red" : "gray"}">${n.tag === "important" ? bi("重要", "Important") : n.tag === "guide" ? bi("使用指南", "Guide") : bi("团队更新", "Update")}</span>`;
  }
  function announcementRow(n) {
    const read = state.read.includes(n.id);
    const [m, d] = n.date.split("-");
    return `<button class="announcement-row ${read ? "is-read" : "is-unread"}" data-action="notice" data-id="${n.id}"><time class="a-date" datetime="2026-${n.date}"><b>${d}</b><small>${bi(Number(m) + "月", MONTHS_EN[Number(m) - 1])}</small></time><span class="announce-body"><strong>${!read ? `<i class="unread-dot" aria-label="${t("unread")}"></i>` : ""}${n.title[L()]}</strong><span class="a-meta">${n.dept[L()]}${noticeTag(n)}</span></span><span class="a-go">${icon("arrow", true)}</span></button>`;
  }
  /* Home, top to bottom: sky stage (greeting + live office clocks) → app dock → calendar
     → announcements + stories. Each thing appears once: apps live in the dock only, the
     important notice is the first row of the announcement list, points sit in the sky chip. */
  function skyStage() {
    const hello = esc(t("hello")).replace("Elijah", "<em>Elijah</em>");
    const zones = [...ZONES].sort((a, b) => (b[0] === state.tz) - (a[0] === state.tz));
    return `<section class="sky" id="sky">
  <div class="sky-layer sky-stars" aria-hidden="true"></div>
  <div class="sky-layer sky-orb" aria-hidden="true"><i></i></div>
  <div class="sky-layer sky-hills" aria-hidden="true"></div>
  <div class="sky-head">
    <div class="sky-date"><span data-sky="date">${currentDate()}</span><i></i><span>${icon("globe", true)}${zoneLabel()}</span></div>
    <button class="lvl-chip" data-action="growth" aria-label="${t("personal")} · Lv.${XP.level} · ${XP.now} / ${XP.goal} XP">${xpRing("sm")}<span>Lv.${XP.level}</span><i></i><span><b>${XP.now}</b> / ${XP.goal} XP</span></button>
  </div>
  <div class="sky-main">
    <div class="sky-copy"><h1>${hello}</h1><p>${t("greeting")}</p></div>
    <div class="sky-clock" aria-hidden="true"><b data-sky="hm">--:--</b><small data-sky="ss">--</small></div>
  </div>
  <div class="zones">${zones
    .map(
      (z) =>
        `<div class="zone ${z[0] === state.tz ? "is-home" : ""}" data-zone="${z[0]}"><span class="zone-city">${z[L() + 1]}${z[0] === state.tz ? `<em>${t("skyYou")}</em>` : ""}</span><b class="zone-time" data-z="time">--:--</b><span class="zone-meta"><i class="zone-dot"></i><span data-z="day"></span><span data-z="diff"></span></span></div>`,
    )
    .join("")}</div>
  <div class="scrub">
    <span class="scrub-state" data-sky="state">${t("skyNow")}</span>
    <input type="range" id="sky-scrub" min="-720" max="720" step="15" value="${ui.skyOffset}" aria-label="${t("skyHint")}">
    <button class="scrub-back" data-action="sky-reset" ${ui.skyOffset ? "" : "hidden"}>${t("skyBack")}</button>
    <span class="scrub-hint">${t("skyHint")}</span>
  </div>
</section>`;
  }
  function dock() {
    const favs = apps.filter((a) => state.favorites.includes(a.id));
    return `<section class="dock-row" aria-label="${t("favoriteApps")}">
  <div class="dock-label"><h2>${t("favoriteApps")}</h2>${favs.length ? "" : `<p>${t("selectTools")}</p>`}</div>
  <div class="dock" data-dock>${favs
    .map((a) => {
      const s = appStatus(a);
      return `<button class="dock-item tone-${a.tone} ${s === "building" ? "is-building" : ""}" data-action="app" data-id="${a.id}"><span class="dock-icon">${icon(a.icon)}</span><span class="dock-name">${appName(a)}</span>${statusChip(s)}</button>`;
    })
    .join("")}<button class="dock-item dock-add" data-action="manage-favorites"><span class="dock-icon">${icon("plus")}</span><span class="dock-name">${t("manageApps")}</span></button></div>
</section>`;
  }
  function calendar() {
    const today = civilToday(),
      days = weekDays();
    if (!days.includes(ui.calDay)) ui.calDay = days.includes(today) ? today : days[0];
    const sel = ui.calDay,
      monthKey = dayKey(sel).slice(0, 7),
      items = dayItems(sel),
      monthActs = BOARD_DATA.activities.map((a, i) => ({ a, i })).filter((x) => x.a.month === monthKey),
      spans = datedActs.filter((x) => x.s <= days[6] && x.e >= days[0]);
    const agenda = items.length
      ? items
          .map((it) => {
            if (it.kind === "notice") {
              const n = it.n,
                read = state.read.includes(n.id);
              return `<button class="agenda-item ${read ? "is-read" : ""}" data-action="notice" data-id="${n.id}"><span class="agenda-icon">${icon("megaphone", true)}</span><span class="agenda-copy"><strong>${!read ? `<i class="unread-dot" aria-label="${t("unread")}"></i>` : ""}${n.title[L()]}</strong><small>${n.dept[L()]}${noticeTag(n)}</small></span>${icon("arrow", true)}</button>`;
            }
            const x = it.x,
              tag = sel === x.s ? "spanStart" : sel === x.e ? "spanEnd" : "spanOngoing";
            return `<button class="agenda-item" data-action="activity" data-id="${x.i}"><span class="agenda-icon tone">${icon("board", true)}</span><span class="agenda-copy"><strong>${esc(x.a.name)}</strong><small><span class="tiny-tag red">${t(tag)}</span>${t("dateFromName")}</small></span>${icon("arrow", true)}</button>`;
          })
          .join("")
      : `<p class="agenda-empty">${t("calEmpty")}</p>`;
    return `<section class="cal" aria-label="${t("monthCalendar")}">
  <div class="cal-week">
    <div class="cal-head">
      <h2>${t("monthCalendar")}</h2><span class="cal-month">${fmtDay(sel, { year: "numeric", month: "long" })}</span>
      <div class="cal-nav">${ui.weekOffset ? `<button class="text-button" data-action="cal-today">${t("calToday")}</button>` : ""}<button class="icon-button" data-action="cal-week" data-value="-1" aria-label="${t("calPrev")}"><span class="flip">${icon("chevron", true)}</span></button><button class="icon-button" data-action="cal-week" data-value="1" aria-label="${t("calNext")}">${icon("chevron", true)}</button></div>
    </div>
    <div class="cal-days" role="group" aria-label="${t("monthCalendar")}">${days
      .map((d, i) => {
        const n = dayItems(d).length;
        return `<button class="cal-day ${d === today ? "is-today" : ""} ${d === sel ? "is-selected" : ""} ${i > 4 ? "is-off" : ""}" data-action="cal-day" data-value="${d}" aria-pressed="${d === sel}" aria-label="${fmtDay(d, { month: "long", day: "numeric", weekday: "long" })}${n ? " · " + n : ""}"><small>${fmtDay(d, { weekday: "short" })}</small><b>${new Date(d).getUTCDate()}</b><span class="cal-dots">${"<i></i>".repeat(Math.min(n, 3))}</span></button>`;
      })
      .join("")}</div>
    ${
      spans.length
        ? `<div class="cal-spans">${spans
            .map((x) => {
              const c0 = Math.max(0, Math.round((x.s - days[0]) / DAY)),
                c1 = Math.min(6, Math.round((x.e - days[0]) / DAY));
              return `<button class="cal-span ${x.s < days[0] ? "cut-l" : ""} ${x.e > days[6] ? "cut-r" : ""}" style="grid-column:${c0 + 1}/${c1 + 2}" data-action="activity" data-id="${x.i}" title="${t("dateFromName")}">${esc(x.a.name)}</button>`;
            })
            .join("")}</div>`
        : ""
    }
    <div class="agenda ${ui.pop === "cal" ? "swap" : ""}">
      <div class="agenda-date"><b>${new Date(sel).getUTCDate()}</b><span>${fmtDay(sel, { weekday: "long" })}</span>${sel === today ? `<em>${t("todayLabel")}</em>` : ""}</div>
      <div class="agenda-list">${agenda}</div>
    </div>
  </div>
  <div class="cal-side">
    <div class="cal-side-head"><b class="cal-count">${monthActs.length}</b><div><h3>${t("monthCampaigns")}</h3><p>${fmtDay(sel, { year: "numeric", month: "long" })}</p></div></div>
    ${
      monthActs.length
        ? `<div class="camp-list">${monthActs.map(({ a, i }) => `<button class="camp" data-action="activity" data-id="${i}"><strong>${esc(a.name)}</strong><span class="camp-meta"><span class="camp-region">${esc(a.region)}</span><span>${a.total} ${t("scopeItems")}</span></span></button>`).join("")}</div><p class="cal-side-note">${t("monthCampaignsHint")}</p><button class="text-button" data-action="board-month-go" data-value="${monthKey}">${t("seeBoard")}${icon("arrow", true)}</button>`
        : `<p class="cal-side-note empty-note">${t("noMonthData")}</p>`
    }
  </div>
</section>`;
  }
  function workspace() {
    const posts = allPosts().slice(0, 3);
    return `${skyStage()}
${dock()}
${calendar()}
<div class="home-grid">
  <section class="panel news-panel">
    <div class="panel-title"><h2>${t("importantNews")}</h2><a class="text-button" href="#announcements">${t("allNews")}${icon("arrow", true)}</a></div>
    <div class="announcement-list">${notices.slice(0, 3).map(announcementRow).join("")}</div>
  </section>
  <section class="panel stories-home">
    <div class="panel-title"><h2>${t("latest")}</h2><a class="text-button" href="#community">${t("allUpdates")}${icon("arrow", true)}</a></div>
    ${posts[0] ? storyCard(posts[0], "feature") : ""}
    <div class="story-rows">${posts
      .slice(1)
      .map((p) => storyCard(p, "row"))
      .join("")}</div>
  </section>
</div>${footer()}`;
  }
  function empty(title, desc, action = "", label = "") {
    return `<div class="empty"><span class="empty-icon">${icon("search")}</span><h3>${title}</h3><p>${desc}</p>${action ? `<button class="button" data-action="${action}">${label}</button>` : ""}</div>`;
  }
  function appDirectory() {
    const list = apps.filter(
      (a) =>
        (ui.appCategory === "all" || a.category === ui.appCategory) &&
        (!ui.favOnly || state.favorites.includes(a.id)) &&
        `${a.name.join(" ")} ${a.desc.join(" ")} ${a.owner}`.toLowerCase().includes(ui.appQ.toLowerCase()),
    );
    return `${pageHead(t("apps"), t("appsDesc"), `<button class="button" data-action="suggest">${icon("plus", true)}${t("submitTool")}</button>`, t("findTools"))}
<div class="toolbar"><div class="tabs" role="group">${["all", "content", "collaboration", "websites"].map((c) => `<button class="tab ${ui.appCategory === c ? "active" : ""}" aria-pressed="${ui.appCategory === c}" data-action="app-category" data-value="${c}">${t(c)}</button>`).join("")}</div><div class="filters"><label class="toggle"><input type="checkbox" id="favorite-only" ${ui.favOnly ? "checked" : ""}><span class="toggle-ui"></span>${t("myFavorites")}</label><label class="search-wrap">${icon("search", true)}<input class="field search-field" id="app-q" aria-label="${t("appSearch")}" placeholder="${t("appSearch")}" value="${esc(ui.appQ)}"></label></div></div>
<div class="app-grid app-catalog">${list.length ? list.map((a) => appCard(a, true)).join("") + `<div class="catalog-intro"><span class="ghost-plus">${icon("plus")}</span><h3>${t("moreTools")}</h3><p>${t("moreToolsDesc")}</p><button class="text-button" data-action="suggest">${t("submitTool")}${icon("arrow", true)}</button></div>` : empty(t("noResults"), t("tryAgain"), "clear-apps", t("clear"))}</div>${footer()}`;
  }
  function leaderboard(full = false) {
    const names = ui.rankDept
      ? ["MKT colleague A", "MKT colleague B", "MKT colleague C"]
      : ["Team member A", "Team member B", "Team member C", "Team member D", "Team member E"];
    const rows = names.slice(0, full ? 5 : 4).map((n, i) => ({
      rank: i + 1,
      letter: n.split(" ").at(-1),
      name: bi("团队同事 " + n.split(" ").at(-1), n),
      dept: ui.rankDept ? "MKT" : ["MKT", "SEO", "Design", "People", "IT"][i],
      points: [660, 628, 586, 540, 485][i],
      color: ["red", "blue", "green"][i % 3],
    }));
    const pod = (x) =>
      `<div class="pod pod-${x.rank}"><span class="avatar ${x.color}">${x.letter}</span><strong>${x.name}</strong><small>${x.dept}</small><span class="pod-bar"><b>${x.points}</b><i>${x.rank}</i></span></div>`;
    return `<div class="podium">${[rows[1], rows[0], rows[2]].filter(Boolean).map(pod).join("")}</div>${rows
      .slice(3)
      .map(
        (x) =>
          `<div class="leader-row"><span class="leader-rank">${x.rank}</span><span class="avatar small ${x.color}">${x.letter}</span><span class="leader-name">${x.name}<small>${x.dept}</small></span><span class="leader-points">${x.points}</span></div>`,
      )
      .join("")}`;
  }
  function community() {
    const posts = allPosts().filter(
      (p) =>
        p.kind === ui.communityTab &&
        (ui.postCategory === "all" || p.category === ui.postCategory) &&
        (ui.department === "all" || p.team === ui.department),
    );
    return `${pageHead(t("community"), t("communityDesc"), `<button class="button primary" data-action="publish">${icon("plus", true)}${t("post")}</button>`)}
<div class="tab-line" role="tablist">${["work", "life"].map((x) => `<button role="tab" aria-selected="${ui.communityTab === x}" data-action="community-tab" data-value="${x}" class="${ui.communityTab === x ? "active" : ""}">${t(x)}</button>`).join("")}</div>
<div class="community-layout"><div class="community-main"><div class="toolbar"><div class="tabs" role="group">${["all", "project", "sharing", "ideas"].map((x) => `<button class="tab ${ui.postCategory === x ? "active" : ""}" aria-pressed="${ui.postCategory === x}" data-action="post-category" data-value="${x}">${t(x)}</button>`).join("")}</div><select class="field" id="community-dept" aria-label="${t("department")}"><option value="all">${t("department")}</option>${["MKT", "SEO", "Brand", "Design", "People"].map((d) => `<option ${ui.department === d ? "selected" : ""}>${d}</option>`).join("")}</select></div>
<div class="story-grid community-grid">${posts.map(storyCard).join("") || empty(t("noResults"), t("tryAgain"), "clear-community", t("clear"))}</div></div>
<aside class="community-side"><section class="panel rank-panel"><div class="panel-title"><h2>${t("ranking")}</h2><span class="panel-icon">${icon("award", true)}</span></div><div class="tabs seg" role="group"><button class="tab ${!ui.rankDept ? "active" : ""}" aria-pressed="${!ui.rankDept}" data-action="rank" data-value="all">${t("wholeCompany")}</button><button class="tab ${ui.rankDept ? "active" : ""}" aria-pressed="${ui.rankDept}" data-action="rank" data-value="department">${t("myDepartment")}</button></div>${leaderboard()}<div class="rank-foot"><span class="muted">${t("rankingNote")}</span><button class="text-button" data-action="ranking">${t("viewRanking")}${icon("arrow", true)}</button></div></section>
<div class="community-prompt"><span class="prompt-mark" aria-hidden="true">“</span><h3>${t("shareTitle")}</h3><p>${t("shareDesc")}</p><button class="text-button" data-action="publish">${t("writePost")}${icon("arrow", true)}</button></div></aside></div>${footer()}`;
  }
  function announcements() {
    const list = notices.filter(
      (n) =>
        (ui.noticeTab !== "unread" || !state.read.includes(n.id)) &&
        (ui.noticeDept === "all" || n.team === ui.noticeDept) &&
        n.title.join(" ").toLowerCase().includes(ui.noticeQ.toLowerCase()),
    );
    return `${pageHead(t("announcements"), t("noticesDesc"), `<button class="button" data-action="read-all">${icon("check", true)}${t("markAll")}</button>`)}
<div class="toolbar"><div class="tabs" role="group">${["all", "unread"].map((x) => `<button class="tab ${ui.noticeTab === x ? "active" : ""}" aria-pressed="${ui.noticeTab === x}" data-action="notice-tab" data-value="${x}">${t(x)}${x === "unread" ? `<span class="tab-count">${unreadCount()}</span>` : ""}</button>`).join("")}</div><div class="filters"><label class="search-wrap">${icon("search", true)}<input class="field search-field" id="notice-q" aria-label="${bi("搜索公告", "Search announcements")}" placeholder="${bi("搜索公告", "Search announcements")}" value="${esc(ui.noticeQ)}"></label><select class="field" id="notice-dept" aria-label="${t("department")}"><option value="all">${t("department")}</option>${["MKT", "IT"].map((x) => `<option ${ui.noticeDept === x ? "selected" : ""}>${x}</option>`).join("")}</select></div></div>
<div class="news-layout"><section class="panel full-announcements"><div class="announcement-list">${list.map(announcementRow).join("") || empty(t("noResults"), t("tryAgain"), "clear-notices", t("clear"))}</div></section><aside class="info-card"><span class="panel-icon">${icon("megaphone", true)}</span><h3>${t("aboutAnnouncements")}</h3><p>${t("aboutAnnouncementsDesc")}</p><button class="info-link" data-action="guidelines">${icon("file", true)}<span>${t("guidelines")}</span>${icon("arrow", true)}</button></aside></div>${footer()}`;
  }
  const typeLabels = {
    接需求: "Brief",
    Confluence策划文稿: "Planning",
    BO评审: "BO review",
    营销素材: "Assets",
    落地页: "Landing page",
    "EDM通知＋CRM广告": "EDM / CRM",
    地区通知: "Regional notice",
    发奖: "Rewards",
    复盘: "Review",
  };
  const typeText = (x) => (state.lang === "zh" ? x : typeLabels[x] || x);
  function filteredActivities() {
    return BOARD_DATA.activities.filter(
      (a) =>
        (ui.boardMonth === "all" || a.month === ui.boardMonth) &&
        (ui.boardRegion === "all" || a.region.split(/[\s+]+/).includes(ui.boardRegion)) &&
        (!ui.offline || a.offline) &&
        `${a.name} ${a.region} ${a.note}`.toLowerCase().includes(ui.boardQ.toLowerCase()),
    );
  }
  const monthShort = (key) =>
    state.lang === "zh"
      ? Number(key.slice(5)) + "月"
      : new Date(key + "-15T00:00:00Z").toLocaleDateString("en", { month: "short", timeZone: "UTC" });
  function board() {
    const data = BOARD_DATA;
    const list = filteredActivities(),
      pages = Math.max(1, Math.ceil(list.length / 8));
    ui.boardPage = Math.min(ui.boardPage, pages);
    const filtered = ui.boardMonth !== "all" || ui.boardRegion !== "all" || ui.boardQ || ui.offline;
    const peak = Math.max(...data.months.map((m) => m.count));
    return `${pageHead(t("boardTitle"), t("boardDesc"), `<span class="hint">${t("sourceDate")}</span><span class="preview-label">${icon("lock", true)}${t("readOnly")}</span>`, "Campaigns · 2026")}
<div class="board-summary">${[
      [t("activityCount"), 51, t("activitiesUnit"), t("period")],
      [t("deliveryCount"), 294, t("itemsUnit"), t("includedScope")],
      [t("coverage"), 19, t("regionsUnit"), t("coverageNote")],
      [t("offline"), 10, t("activitiesUnit"), t("offlineNote")],
    ]
      .map((m) => `<div class="metric"><span>${m[0]}</span><strong><b data-count="${m[1]}">${m[1]}</b><small>${m[2]}</small></strong><p>${m[3]}</p></div>`)
      .join("")}</div>
<div class="board-charts"><section class="panel"><div class="panel-title"><h2>${t("monthTrend")}</h2><span class="hint">${bi("点击月份筛选", "Select a month")}</span></div><div class="board-chart ${ui.boardMonth !== "all" ? "has-selection" : ""}">${data.months.map((m, i) => `<button class="chart-bar ${ui.boardMonth === m.key ? "selected" : ""}" style="--i:${i}" data-action="board-month" data-value="${m.key}" aria-pressed="${ui.boardMonth === m.key}" aria-label="${m.key}: ${m.count} ${t("activityCount")}"><b>${m.count}</b><span class="bar-track" style="--h:${m.count / peak}"></span><span class="bar-label">${monthShort(m.key)}</span></button>`).join("")}</div></section>
<section class="panel"><div class="panel-title"><h2>${t("scopeTypes")}</h2><span class="hint">294 ${t("itemsUnit")}</span></div><div class="type-bars">${data.types
      .slice(0, 7)
      .map(
        (x, i) =>
          `<div class="type-row" style="--i:${i}"><span>${esc(typeText(x.key))}</span><span class="type-track"><span style="--w:${(x.count / 51) * 100}%"></span></span><b>${x.count}</b></div>`,
      )
      .join("")}</div><button class="text-button" data-action="scope-types">${bi("全部 9 类交付", "All 9 delivery types")}${icon("arrow", true)}</button></section></div>
<section class="panel table-panel"><div class="board-table-top"><div class="section-head"><h2>${t("activityList")}${filtered ? `<span class="result-count">${list.length}</span>` : ""}</h2><span class="hint">${t("sourceTitles")}</span></div><div class="toolbar"><select class="field" id="board-month" aria-label="${t("month")}"><option value="all">${t("allMonths")}</option>${data.months.map((m) => `<option value="${m.key}" ${ui.boardMonth === m.key ? "selected" : ""}>${m.key}</option>`).join("")}</select><select class="field" id="board-region" aria-label="${t("region")}"><option value="all">${t("allRegions")}</option>${data.regions.map((r) => `<option ${ui.boardRegion === r.name ? "selected" : ""}>${r.name}</option>`).join("")}</select><label class="search-wrap">${icon("search", true)}<input class="field search-field" id="board-q" placeholder="${t("activitySearch")}" aria-label="${t("activitySearch")}" value="${esc(ui.boardQ)}"></label><label class="toggle"><input id="board-offline" type="checkbox" ${ui.offline ? "checked" : ""}><span class="toggle-ui"></span>${t("onlyOffline")}</label>${filtered ? `<button class="text-button clear-btn" data-action="clear-board">${icon("close", true)}${t("clear")}</button>` : ""}</div></div>
<div class="table-wrap"><table><thead><tr><th>${t("month")}</th><th>${t("activity")}</th><th>${t("region")}</th><th>${t("deliveries")}</th><th><span class="sr-only">${t("details")}</span></th></tr></thead><tbody>${
      list
        .slice((ui.boardPage - 1) * 8, ui.boardPage * 8)
        .map(
          (a) =>
            `<tr data-action="activity" data-id="${data.activities.indexOf(a)}"><td class="cell-month">${a.month}</td><td class="cell-name"><strong>${esc(a.name)}</strong>${a.offline ? `<span class="tiny-tag green">${t("offline")}</span>` : ""}</td><td class="cell-region">${esc(a.region)}</td><td class="cell-scope"><div class="table-chips">${a.types
              .slice(0, 3)
              .map((x) => `<span>${esc(typeText(x))}</span>`)
              .join(
                "",
              )}${a.types.length > 3 ? `<span class="more">+${a.types.length - 3}</span>` : ""}</div></td><td class="cell-go"><button class="icon-button" data-action="activity" data-id="${data.activities.indexOf(a)}" aria-label="${t("details")} ${esc(a.name)}">${icon("chevron", true)}</button></td></tr>`,
        )
        .join("") || `<tr class="empty-row"><td colspan="5">${empty(t("noResults"), t("tryAgain"), "clear-board", t("clear"))}</td></tr>`
    }</tbody></table></div>
<div class="pagination"><span>${t("showing")} ${list.length ? (ui.boardPage - 1) * 8 + 1 : 0}–${Math.min(ui.boardPage * 8, list.length)} / ${list.length}</span><div class="pager"><button class="button" data-action="board-page" data-value="-1" ${ui.boardPage === 1 ? "disabled" : ""}>${t("previous")}</button><span>${ui.boardPage} / ${pages}</span><button class="button" data-action="board-page" data-value="1" ${ui.boardPage === pages ? "disabled" : ""}>${t("next")}</button></div></div><p class="board-note">${t("boardFoot")}</p></section>${footer()}`;
  }
  function profile() {
    return `${pageHead(t("profile"), t("settingDesc"))}
<div class="profile-banner"><div class="me-glow" aria-hidden="true"></div>${xpRing("lg")}<div class="profile-id"><h2>Elijah Wong</h2><p>Marketing · ${t("demoAccount")}</p><div class="profile-xp"><span><b>${XP.now}</b> / ${XP.goal} XP</span><span>${t("nextLevel")}</span></div></div><button class="button on-dark" data-action="growth">${icon("award", true)}${t("growth")}</button></div>
<div class="profile-grid"><section class="panel"><div class="panel-title"><h2>${t("settingTitle")}</h2><span class="hint">${currentDate()} · ${zoneLabel()}</span></div>${[
      [
        "language",
        "languageDesc",
        `<select class="field" id="setting-language" aria-label="${t("language")}"><option value="zh" ${state.lang === "zh" ? "selected" : ""}>简体中文</option><option value="en" ${state.lang === "en" ? "selected" : ""}>English</option></select>`,
      ],
      [
        "timeZone",
        "timeZoneDesc",
        `<select class="field" id="setting-tz" aria-label="${t("timeZone")}">${["Asia/Shanghai", "Asia/Singapore", "Europe/London", "America/New_York"].map((z) => `<option ${state.tz === z ? "selected" : ""}>${z}</option>`).join("")}</select>`,
      ],
      [
        "defaultHome",
        "defaultHomeDesc",
        `<select class="field" id="setting-home" aria-label="${t("defaultHome")}">${["workspace", "community", "apps"].map((x) => `<option value="${x}" ${state.home === x ? "selected" : ""}>${t(x)}</option>`).join("")}</select>`,
      ],
    ]
      .map(
        ([name, desc, control]) =>
          `<div class="settings-row"><div class="settings-copy"><strong>${t(name)}</strong><p>${t(desc)}</p></div>${control}</div>`,
      )
      .join(
        "",
      )}</section><section class="panel"><div class="panel-title"><h2>${t("myRequests")}</h2>${state.requests.length ? `<span class="hint">${state.requests.length}</span>` : ""}</div>${state.requests.length ? state.requests.map((r) => `<div class="request-item"><span class="app-mini tone-purple">${icon("lock", true)}</span><div><strong>${appName(apps.find((a) => a.id === r.app))}</strong><small>${t("requestDate")} · ${new Date(r.date).toLocaleDateString(state.lang === "zh" ? "zh-CN" : "en-GB", { timeZone: state.tz })}</small></div>${statusChip("requested")}</div>`).join("") : `<div class="quiet-empty">${icon("lock")}<p>${t("noRequests")}</p></div>`}</section></div>
<button class="text-button reset-btn" data-action="reset">${t("reset")}</button>${footer()}`;
  }
  function translation() {
    return `${pageHead(t("sampleTranslation"), t("translationHint"), `<button class="button" data-action="navigate" data-page="apps"><span class="flip">${icon("arrow", true)}</span>${t("back")}</button>`)}
<section class="tool-placeholder"><div class="tool-bar"><span class="lang-pill">${t("source")}</span><span class="tool-arrow">${icon("arrow", true)}</span><span class="lang-pill">${t("target")}</span><span class="preview-label">${t("preview")}</span></div>
<div class="tool-split"><div class="tool-pane"><textarea id="translation-input" aria-label="${t("source")}" placeholder="${t("translationSource")}"></textarea></div><div class="tool-pane out"><p id="translation-output" class="muted">${bi("选择“载入示例”，体验翻译工作区。", "Load the example to explore the translation workspace.")}</p></div></div>
<div class="inline-actions"><button class="button" data-action="translation-load">${t("loadSample")}</button><button class="button primary" data-action="translation-run">${t("translateAction")}</button><button class="button" data-action="translation-copy">${icon("copy", true)}${t("copyLink").replace("链接", "译文").replace("link", "translation")}</button></div></section>${footer()}`;
  }
  function pageContent() {
    switch (route()) {
      case "workspace":
        return workspace();
      case "community":
        return community();
      case "announcements":
        return announcements();
      case "apps":
        return appDirectory();
      case "board":
        return board();
      case "profile":
        return profile();
      case "translation":
        return translation();
      default:
        return workspace();
    }
  }
  let renderedKey = "";
  const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  function focusKey(el) {
    if (!el || !$("#app").contains(el)) return null;
    if (el.id) return "#" + el.id;
    const d = el.dataset;
    if (!d.action) return null;
    return `[data-action="${d.action}"]` + (d.id ? `[data-id="${d.id}"]` : "") + (d.value ? `[data-value="${d.value}"]` : "") + (d.page ? `[data-page="${d.page}"]` : "");
  }
  function countUp() {
    if (reducedMotion()) return;
    $$("[data-count]").forEach((el) => {
      const end = Number(el.dataset.count),
        start = performance.now(),
        dur = 700;
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1 && el.isConnected) requestAnimationFrame(step);
      };
      el.textContent = "0";
      requestAnimationFrame(step);
    });
  }
  function render() {
    const key = route() + "|" + state.lang;
    ui.entering = key !== renderedKey;
    renderedKey = key;
    const keep = focusKey(document.activeElement);
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    document.title = `EBC Share · ${t(route() === "board" ? "boardTitle" : route() === "translation" ? "sampleTranslation" : route())}`;
    $("#app").innerHTML = shell();
    ui.pop = null;
    if (keep && !$("#overlay-root").firstChild) $("#app " + keep)?.focus({ preventScroll: true });
    paintSky();
    if (ui.entering) countUp();
  }
  function openModal(title, body, footerContent = "", options = {}) {
    lastFocus = document.activeElement;
    $("#overlay-root").innerHTML =
      `<div class="modal-backdrop ${options.drawer ? "drawer-backdrop" : ""}"><section class="modal ${options.large ? "large" : ""} ${options.drawer ? "drawer" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-head"><h2 id="modal-title">${title}</h2><button class="icon-button" data-action="close-modal" aria-label="${t("close")}">${icon("close")}</button></div><div class="modal-body">${body}</div>${footerContent ? `<div class="modal-foot">${footerContent}</div>` : ""}</section></div>`;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => $(".modal .icon-button")?.focus());
  }
  function closeModal() {
    if (!$("#overlay-root").firstChild) return;
    $("#overlay-root").innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus?.isConnected) lastFocus.focus();
  }
  function appDetail(id) {
    const a = apps.find((x) => x.id === id);
    if (!a) return;
    const s = appStatus(a);
    openModal(
      t("appAbout"),
      `<div class="modal-app-hero tone-${a.tone}" aria-hidden="true">${appArt(a)}</div><div class="modal-app-head">${appIcon(a)}<div><h3>${appName(a)}</h3><p>${statusChip(s)}<span class="muted">${t("sampleState")}</span></p></div></div><p class="lead">${t(a.feature)}</p><dl class="details-grid"><div><dt>${t("owner")}</dt><dd>${a.owner}</dd></div><div><dt>${t("supportedLang")}</dt><dd>${a.langs}</dd></div><div><dt>${t("access")}</dt><dd>${s === "request" || s === "requested" ? t(s) : s === "building" ? t("comingSoon") : t("preview")}</dd></div><div><dt>${t("whatYouCanDo")}</dt><dd>${t(a.category)}</dd></div></dl><div class="callout">${id === "board" ? t("scopeNotice") : id === "assets" ? t("comingSoonDesc") : t("previewNote")}</div>`,
      `<button class="button" data-action="favorite-modal" data-id="${a.id}">${icon("star")}${state.favorites.includes(a.id) ? t("unfavorite") : t("favorite")}</button>${s === "requested" ? `<button class="button primary" disabled>${t("requested")}</button>` : s === "request" ? `<button class="button primary" data-action="request" data-id="${a.id}">${t("request")}</button>` : s === "building" ? `<button class="button primary" disabled>${t("comingSoon")}</button>` : `<button class="button primary" data-action="launch" data-id="${a.id}">${t("open")}${icon("arrow")}</button>`}`,
    );
  }
  function showStory(id) {
    const p = allPosts().find((p) => p.id === id);
    if (!p) return;
    openModal(
      t("readMore"),
      `<div class="article-cover">${media(p)}</div><h2 class="article-title">${esc(postText(p, "title"))}</h2><div class="article-meta"><span class="avatar small ${p.color}">${p.initial}</span>${esc(p.author)}<span>·</span>${t(p.category)}<span>·</span>${p.userCreated ? bi("刚刚", "Just now") : "2026-11-12"}</div><div class="article-text"><p>${esc(postText(p, "body"))}</p></div><div class="article-actions"><button class="like-btn ${state.likes.includes(id) ? "liked" : ""}" data-action="like-modal" data-id="${id}">${icon("heart")} ${p.likes + (state.likes.includes(id) ? 1 : 0)}</button><button class="text-button" data-action="copy-current" data-id="${id}">${icon("copy", true)}${t("copyLink")}</button>${id === "p2" ? `<button class="text-button" data-action="board-nov">${t("seeBoard")}${icon("arrow", true)}</button>` : ""}</div>`,
      "",
      { large: true },
    );
  }
  function showNotice(id) {
    const n = notices.find((n) => n.id === id);
    if (!n) return;
    if (!state.read.includes(id)) {
      state.read.push(id);
      persist();
      render();
    }
    openModal(
      t("announcements"),
      `<span class="tiny-tag ${n.tag === "important" ? "red" : "gray"}">${n.tag === "important" ? t("important") : t("read")}</span><h2 class="article-title">${n.title[state.lang === "zh" ? 0 : 1]}</h2><div class="article-meta">${n.dept[state.lang === "zh" ? 0 : 1]}<span>·</span>2026-${n.date}</div><div class="article-text">${(state.lang === "zh" ? n.body : n.en).map((x) => `<p>${x}</p>`).join("")}</div><div class="callout">${t("previewNote")}</div>`,
      `<button class="button" data-action="close-modal">${t("close")}</button>${id === "n3" ? `<button class="button primary" data-action="board-nov">${t("seeBoard")}</button>` : ""}`,
      { large: true },
    );
  }
  function toggleFavorite(id) {
    const previous = [...state.favorites];
    state.favorites = state.favorites.includes(id) ? state.favorites.filter((x) => x !== id) : [...state.favorites, id];
    if (!persist()) state.favorites = previous;
    else if (state.favorites.includes(id)) ui.pop = "fav-" + id;
    render();
  }
  function toggleLike(id) {
    state.likes = state.likes.includes(id) ? state.likes.filter((x) => x !== id) : [...state.likes, id];
    persist();
    if (state.likes.includes(id)) ui.pop = "like-" + id;
    render();
  }
  function showNotifications() {
    openModal(
      t("notification"),
      `<p class="lead">${t("notifyDesc")}</p>${state.notificationsRead ? `<p class="all-read">${icon("check", true)}${t("noUnread")}</p>` : ""}${[{ title: bi("欢迎来到新的工作台", "Welcome to your workspace"), body: bi("选择常用应用，让工作更顺手。", "Choose your favorite apps to make yourself at home."), action: "manage-favorites", i: "grid" }, { title: bi("11 月活动看板已更新", "November EBC Board is ready"), body: bi("查看活动安排与交付范围。", "Explore campaign plans and delivery scope."), action: "board-nov", i: "board" }, ...state.requests.map((r) => ({ title: bi("访问申请已记录", "Access request recorded"), body: appName(apps.find((a) => a.id === r.app)) + " · " + t("requested"), action: "profile", i: "lock" }))].map((n) => `<button class="notification-item" data-action="${n.action}"><span class="announce-icon">${icon(n.i, true)}</span><span><strong>${n.title}</strong><p>${n.body}</p><small>${t("preview")}</small></span></button>`).join("")}`,
      `<button class="button" data-action="notifications-read">${t("markAll")}</button>`,
      { drawer: true },
    );
  }
  function showPublish() {
    openModal(
      t("post"),
      `<form id="publish-form"><label for="post-title">${t("postTitle")}</label><input class="field" id="post-title" name="title" maxlength="100" required placeholder="${t("postTitlePlaceholder")}"><label for="post-category">${t("postCategory")}</label><select class="field" id="post-category" name="category">${["project", "sharing", "ideas"].map((x) => `<option value="${x}">${t(x)}</option>`).join("")}</select><label for="post-content">${t("postContent")}</label><textarea class="field" id="post-content" name="body" maxlength="5000" required placeholder="${t("postContentPlaceholder")}"></textarea><label for="post-image">${t("postCover")}</label><div class="upload-zone">${t("postCoverDesc")}<input id="post-image" name="image" type="file" accept="image/jpeg,image/png,image/webp"></div><p class="form-note">${t("postHint")}</p><p class="form-error" id="post-error" role="alert"></p></form>`,
      `<button class="button" data-action="close-modal">${t("cancel")}</button><button class="button primary" type="submit" form="publish-form">${t("publish")}</button>`,
    );
  }
  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast(t("copied"));
    } catch {
      openModal(
        t("copyLink"),
        `<input class="field" value="${esc(text)}" readonly aria-label="${t("copyLink")}"><p class="lead">${bi("可选中上方内容进行复制。", "Select the text above to copy it.")}</p>`,
      );
      $(".modal input")?.select();
    }
  }
  /* Command palette (Ctrl/⌘ K, or “/”): one place to search apps, announcements and
     updates, jump between pages and run a few actions. Results filter as you type.
     Apps are ordered by “recently opened”, which is where that list now lives. */
  function paletteList(query) {
    const q = query.trim().toLowerCase();
    const hit = (s) => !q || s.toLowerCase().includes(q);
    const row = (attrs, ic, label, hint = "") =>
      `<button class="pal-item" ${attrs}>${ic}<span class="pal-label">${label}</span>${hint ? `<small>${hint}</small>` : ""}</button>`;
    const pages = [
      ["workspace", "home"],
      ["community", "community"],
      ["announcements", "megaphone"],
      ["apps", "grid"],
      ["profile", "user"],
    ].filter(([n]) => hit(dict.zh[n] + " " + dict.en[n]));
    const appList = [...new Set([...state.recent, ...apps.map((a) => a.id)])]
      .map((id) => apps.find((a) => a.id === id))
      .filter((a) => a && hit([...a.name, ...a.desc, a.owner].join(" ")));
    const n = q ? notices.filter((x) => hit(x.title.join(" "))) : [];
    const p = q ? allPosts().filter((x) => hit(Array.isArray(x.title) ? x.title.join(" ") : x.title)) : [];
    const acts = [
      ["publish", "plus", t("post")],
      ["language", "globe", bi("切换到 English", "Switch to 中文")],
      ["manage-favorites", "settings", t("manageApps")],
      ["help", "help", t("help")],
    ].filter((a) => hit(a[2]));
    const groups = [
      [t("apps"), appList.map((a) => row(`data-action="app" data-id="${a.id}"`, `<span class="app-mini tone-${a.tone}">${icon(a.icon, true)}</span>`, appName(a), t(appStatus(a))))],
      [t("goTo"), pages.map(([name, i]) => row(`data-action="navigate" data-page="${name}"`, icon(i, true), t(name)))],
      [t("announcements"), n.map((x) => row(`data-action="notice" data-id="${x.id}"`, icon("megaphone", true), x.title[L()], x.dept[L()]))],
      [t("community"), p.map((x) => row(`data-action="story" data-id="${x.id}"`, icon("community", true), esc(postText(x, "title")), esc(x.author)))],
      [t("quickActions"), acts.map(([action, i, label]) => row(`data-action="${action}"`, icon(i, true), label))],
    ].filter((g) => g[1].length);
    return groups.length
      ? groups.map(([label, rows]) => `<div class="pal-group"><h3>${label}</h3>${rows.join("")}</div>`).join("")
      : empty(t("noResults"), t("tryAgain"));
  }
  function markPalette(index) {
    const rows = $$(".pal-item");
    if (!rows.length) return;
    ui.palIndex = (index + rows.length) % rows.length;
    rows.forEach((el, i) => el.classList.toggle("is-active", i === ui.palIndex));
    rows[ui.palIndex].scrollIntoView({ block: "nearest" });
  }
  function openPalette() {
    if ($(".palette")) return closeModal();
    lastFocus = document.activeElement;
    $("#overlay-root").innerHTML =
      `<div class="modal-backdrop palette-backdrop"><section class="modal palette" role="dialog" aria-modal="true" aria-label="${t("search")}"><div class="pal-input">${icon("search")}<input id="pal-q" placeholder="${t("search")}" aria-label="${t("search")}" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div><div class="pal-list" id="pal-list">${paletteList("")}</div><div class="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd>${t("palSelect")}</span><span><kbd>↵</kbd>${t("palOpen")}</span></div></section></div>`;
    document.body.style.overflow = "hidden";
    markPalette(0);
    requestAnimationFrame(() => $("#pal-q")?.focus());
  }
  function actions(el) {
    const action = el.dataset.action,
      id = el.dataset.id,
      v = el.dataset.value;
    switch (action) {
      case "navigate":
        navigate(el.dataset.page);
        break;
      case "profile":
        navigate("profile");
        break;
      case "language": {
        state.lang = state.lang === "zh" ? "en" : "zh";
        persist();
        render();
        toast(t("languageChanged"));
        break;
      }
      case "menu":
        $(".sidebar").classList.add("is-open");
        $(".mobile-sidebar-backdrop").classList.add("open");
        break;
      case "close-menu":
        $(".sidebar").classList.remove("is-open");
        $(".mobile-sidebar-backdrop").classList.remove("open");
        break;
      case "close-modal":
        closeModal();
        break;
      case "app":
        appDetail(id);
        break;
      case "favorite":
        toggleFavorite(id);
        break;
      case "favorite-modal":
        toggleFavorite(id);
        appDetail(id);
        break;
      case "launch":
        state.recent = [id, ...state.recent.filter((x) => x !== id)].slice(0, 4);
        persist();
        navigate(id === "board" ? "board" : "translation");
        break;
      case "manage-favorites":
        openModal(
          t("chooseApps"),
          `<p class="lead">${t("chooseAppsDesc")}</p><form id="favorites-form">${apps.map((a) => `<label class="check-row">${appIcon(a)}<strong>${appName(a)}</strong><input name="favorite" type="checkbox" value="${a.id}" ${state.favorites.includes(a.id) ? "checked" : ""}></label>`).join("")}</form>`,
          `<button class="button" data-action="close-modal">${t("cancel")}</button><button class="button primary" data-action="save-favorites">${t("save")}</button>`,
        );
        break;
      case "save-favorites":
        state.favorites = $$('input[name="favorite"]:checked').map((x) => x.value);
        persist();
        closeModal();
        render();
        toast(t("favoriteSaved"));
        break;
      case "request":
        openModal(
          t("request"),
          `<p class="lead">${appName(apps.find((a) => a.id === id))} · Web Operations</p><form id="request-form" data-id="${id}"><label for="request-reason">${t("requestReason")}</label><textarea id="request-reason" class="field" name="reason" maxlength="300" required placeholder="${t("requestPlaceholder")}"></textarea><p class="form-note">${t("requestHint")}</p><p id="request-error" class="form-error" role="alert"></p></form>`,
          `<button class="button" data-action="close-modal">${t("cancel")}</button><button class="button primary" type="submit" form="request-form">${t("submitRequest")}</button>`,
        );
        break;
      case "notifications":
        showNotifications();
        break;
      case "notifications-read":
        state.notificationsRead = true;
        persist();
        render();
        showNotifications();
        break;
      case "notice":
        showNotice(id);
        break;
      case "read-all":
        state.read = notices.map((n) => n.id);
        persist();
        render();
        toast(t("markAll"));
        break;
      case "notice-tab":
        ui.noticeTab = v;
        render();
        break;
      case "clear-notices":
        ui.noticeTab = "all";
        ui.noticeDept = "all";
        ui.noticeQ = "";
        render();
        break;
      case "app-category":
        ui.appCategory = v;
        render();
        break;
      case "clear-apps":
        ui.appQ = "";
        ui.appCategory = "all";
        ui.favOnly = false;
        render();
        break;
      case "community-tab":
        ui.communityTab = v;
        ui.postCategory = "all";
        render();
        break;
      case "post-category":
        ui.postCategory = v;
        render();
        break;
      case "clear-community":
        ui.postCategory = "all";
        ui.department = "all";
        render();
        break;
      case "rank":
        ui.rankDept = v === "department";
        render();
        break;
      case "ranking":
        openModal(t("ranking"), leaderboard(true) + `<div class="callout">${t("growthNote")}</div>`);
        break;
      case "story":
        showStory(id);
        break;
      case "like":
        toggleLike(id);
        break;
      case "like-modal":
        toggleLike(id);
        showStory(id);
        break;
      case "copy-current":
        copy(location.href.split("#")[0] + "#community?story=" + encodeURIComponent(id));
        break;
      case "publish":
        showPublish();
        break;
      case "board-nov":
        ui.boardMonth = "2026-11";
        ui.boardPage = 1;
        navigate("board");
        break;
      case "board-month-go":
        ui.boardMonth = BOARD_DATA.months.some((m) => m.key === v) ? v : "all";
        ui.boardPage = 1;
        navigate("board");
        break;
      case "palette":
        openPalette();
        break;
      case "cal-day":
        ui.calDay = Number(v);
        ui.pop = "cal";
        render();
        break;
      case "cal-week":
        ui.weekOffset += Number(v);
        ui.calDay = null;
        ui.pop = "cal";
        render();
        break;
      case "cal-today":
        ui.weekOffset = 0;
        ui.calDay = null;
        ui.pop = "cal";
        render();
        break;
      case "sky-reset":
        resetSky();
        break;
      case "board-month":
        ui.boardMonth = ui.boardMonth === v ? "all" : v;
        ui.boardPage = 1;
        render();
        break;
      case "board-page":
        ui.boardPage += Number(v);
        render();
        break;
      case "clear-board":
        ui.boardMonth = "all";
        ui.boardRegion = "all";
        ui.boardQ = "";
        ui.offline = false;
        ui.boardPage = 1;
        render();
        break;
      case "activity": {
        const a = BOARD_DATA.activities[Number(id)];
        openModal(
          t("activityDetail"),
          `<h2 class="article-title">${esc(a.name)}</h2><div class="article-meta">${a.month} · ${esc(a.region)}</div><p class="lead">${t("scopeNotice")}</p><div class="tag-pills">${a.types.map((x) => `<span class="tag-pill">${esc(typeText(x))}</span>`).join("")}</div>${a.note ? `<p class="activity-note"><b>${t("note")}</b>${esc(a.note)}</p>` : ""}<div class="callout">${t("noDeadline")}</div>`,
        );
        break;
      }
      case "scope-types":
        openModal(
          t("scopeTypes"),
          `<p class="lead">${t("includedScope")}</p><div class="type-bars in-modal">${BOARD_DATA.types.map((x, i) => `<div class="type-row" style="--i:${i}"><span>${esc(typeText(x.key))}</span><span class="type-track"><span style="--w:${(x.count / 51) * 100}%"></span></span><b>${x.count}</b></div>`).join("")}</div>`,
        );
        break;
      case "growth":
        openModal(
          t("growth"),
          `<div class="growth-head">${xpRing("lg")}<div><h3>Elijah Wong</h3><p><b>${XP.now}</b> / ${XP.goal} XP</p><span class="muted">${t("growthDesc")}</span></div></div><div class="progress-track" role="img" aria-label="${XP.now} / ${XP.goal} XP"><span style="--w:${(XP.now / XP.goal) * 100}%"></span></div><p class="lead">${t("nextLevel")}</p><div class="callout">${t("growthNote")}</div>`,
        );
        break;
      case "help":
        openModal(
          t("help"),
          `<div class="article-text"><h3>${t("apps")}</h3><p>${t("helpDesc")}</p><h3>${t("favoriteApps")}</h3><p>${t("helpLinks")}</p><h3>${t("boardTitle")}</h3><p>${t("helpBoard")}</p></div>`,
        );
        break;
      case "guidelines":
        openModal(t("guidelines"), `<p class="lead">${t("announcementPolicy")}</p>`);
        break;
      case "preview-info":
        openModal(
          t("privacy"),
          `<p class="lead">${t("previewNote")}</p><div class="callout">${t("launchNote")}</div><p class="lead">${t("growthNote")}</p>`,
        );
        break;
      case "suggest":
        openModal(
          t("feedbackTitle"),
          `<p class="lead">${t("feedbackDesc")}</p><form id="suggest-form"><label for="tool-name">${t("toolName")}</label><input id="tool-name" class="field" name="name" required maxlength="60"><label for="tool-purpose">${t("toolPurpose")}</label><textarea id="tool-purpose" class="field" name="purpose" required maxlength="300"></textarea></form>`,
          `<button class="button" data-action="close-modal">${t("cancel")}</button><button class="button primary" type="submit" form="suggest-form">${t("submitTool")}</button>`,
        );
        break;
      case "translation-load":
        $("#translation-input").value = t("translationSource");
        break;
      case "translation-run":
        if ($("#translation-input").value.trim() !== t("translationSource")) {
          toast(t("sampleOnly"));
          return;
        }
        $("#translation-output").textContent = t("translationTarget");
        break;
      case "translation-copy":
        copy($("#translation-output").textContent);
        break;
      case "reset":
        openModal(
          t("reset"),
          `<p class="lead">${bi("将清除本浏览器中的演示动态、收藏、点赞和申请记录，恢复初始预览。", "Clear example updates, favorites, likes, and requests in this browser and restore the initial preview.")}</p>`,
          `<button class="button" data-action="close-modal">${t("cancel")}</button><button class="button primary" data-action="confirm-reset">${t("reset")}</button>`,
        );
        break;
      case "confirm-reset":
        state = {
          ...base,
          lang: state.lang,
          favorites: [...base.favorites],
          likes: [],
          read: [],
          posts: [],
          requests: [],
          suggestions: [],
          recent: [...base.recent],
        };
        persist();
        closeModal();
        render();
        toast(t("resetDone"));
        break;
    }
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest(".skip-link")) {
      e.preventDefault();
      $("#main")?.focus();
      return;
    }
    const el = e.target.closest("[data-action]");
    if (el) {
      if (el.closest(".palette")) closeModal(); // a palette row runs its action on the page behind it
      actions(el);
      return;
    }
    if (e.target.classList.contains("modal-backdrop")) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    const typing = e.target.matches?.("input, textarea, select, [contenteditable]");
    if (((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") || (e.key === "/" && !typing && !$("#overlay-root").firstChild)) {
      e.preventDefault();
      openPalette();
      return;
    }
    if ($(".palette") && ["ArrowDown", "ArrowUp", "Enter"].includes(e.key)) {
      e.preventDefault();
      if (e.key === "Enter") $(".pal-item.is-active")?.click();
      else markPalette(ui.palIndex + (e.key === "ArrowDown" ? 1 : -1));
      return;
    }
    if (e.key === "Escape") {
      closeModal();
      $(".sidebar")?.classList.remove("is-open");
      $(".mobile-sidebar-backdrop")?.classList.remove("open");
    }
    if ((e.key === "Enter" || e.key === " ") && e.target.matches('[role="button"][data-action]')) {
      e.preventDefault();
      actions(e.target);
    }
    if (e.key === "Tab" && $(".modal")) {
      const focusable = $$('button:not([disabled]),input:not([disabled]),select,textarea,a[href],[tabindex="0"]', $(".modal"));
      if (!focusable.length) return;
      const first = focusable[0],
        last = focusable.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
  document.addEventListener("change", (e) => {
    const id = e.target.id,
      v = e.target.value;
    switch (id) {
      case "favorite-only":
        ui.favOnly = e.target.checked;
        break;
      case "community-dept":
        ui.department = v;
        break;
      case "notice-dept":
        ui.noticeDept = v;
        break;
      case "board-month":
        ui.boardMonth = v;
        ui.boardPage = 1;
        break;
      case "board-region":
        ui.boardRegion = v;
        ui.boardPage = 1;
        break;
      case "board-offline":
        ui.offline = e.target.checked;
        ui.boardPage = 1;
        break;
      case "setting-language":
        state.lang = v;
        persist();
        break;
      case "setting-tz":
        state.tz = v;
        persist();
        toast(t("saved"));
        break;
      case "setting-home":
        state.home = v;
        persist();
        toast(t("saved"));
        break;
      default:
        return;
    }
    render();
  });
  document.addEventListener("input", (e) => {
    const id = e.target.id,
      v = e.target.value;
    if (id === "pal-q") {
      $("#pal-list").innerHTML = paletteList(v);
      markPalette(0);
      return;
    }
    if (id === "sky-scrub") {
      ui.skyOffset = Number(v);
      paintSky();
      return;
    }
    const mapping = { "app-q": "appQ", "notice-q": "noticeQ", "board-q": "boardQ" };
    if (mapping[id]) {
      ui[mapping[id]] = v;
      ui.boardPage = 1;
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const pos = e.target.selectionStart;
        render();
        const input = $("#" + id);
        input?.focus();
        input?.setSelectionRange(pos, pos);
      }, 200);
    }
  });
  document.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.id === "favorites-form") return;
    if (form.id === "request-form") {
      const reason = form.elements.reason.value.trim();
      if (reason.length < 10) {
        $("#request-error").textContent = t("reasonError");
        return;
      }
      if (!state.requests.some((r) => r.app === form.dataset.id)) {
        state.requests.push({ id: "r" + Date.now(), app: form.dataset.id, reason, date: new Date().toISOString() });
        if (!persist()) {
          state.requests.pop();
          return;
        }
      }
      closeModal();
      render();
      toast(t("requestSuccess"));
      return;
    }
    if (form.id === "suggest-form") {
      state.suggestions.push({ name: form.elements.name.value.trim(), purpose: form.elements.purpose.value.trim(), date: new Date().toISOString() });
      if (!persist()) {
        state.suggestions.pop();
        return;
      }
      closeModal();
      toast(t("feedbackSuccess"));
      return;
    }
    if (form.id === "publish-form") {
      const title = form.elements.title.value.trim(),
        body = form.elements.body.value.trim();
      if (!title || body.length < 10) {
        $("#post-error").textContent = t("postError");
        return;
      }
      const f = form.elements.image.files[0];
      let image = "";
      if (f) {
        if (!["image/jpeg", "image/png", "image/webp"].includes(f.type) || f.size > 3 * 1024 * 1024) {
          $("#post-error").textContent = t("postImageError");
          return;
        }
        image = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = () => resolve("");
          reader.readAsDataURL(f);
        });
      }
      const p = {
        id: "local" + Date.now(),
        title,
        body,
        category: form.elements.category.value,
        kind: ui.communityTab,
        media: "design",
        image,
        author: "Elijah Wong",
        initial: "EW",
        color: "red",
        team: "MKT",
        likes: 0,
        userCreated: true,
      };
      state.posts.unshift(p);
      if (!persist()) {
        state.posts.shift();
        return;
      }
      ui.postCategory = "all";
      ui.department = "all";
      closeModal();
      navigate("community");
      toast(t("postSuccess"));
    }
  });
  function openLinkedStory() {
    const id = new URLSearchParams(location.hash.split("?")[1] || "").get("story");
    if (route() === "community" && id) showStory(id);
  }
  /* ───────────── Live sky (home hero) ─────────────
     The hero is painted from the wall-clock time of the user's zone: gradient, sun/moon
     position and star opacity. Scrubbing the timeline shifts every office clock together.
     Only CSS variables and text nodes change here, so nothing re-renders each second. */
  const SKY = [
    [0, "#04050d", "#0a0f2c", "#1b2050"],
    [4.5, "#070a1f", "#1a1c4d", "#4a3a72"],
    [6.2, "#1c2a66", "#a04f7c", "#f5a26a"],
    [8, "#215fb8", "#5f9fe0", "#f7d9ae"],
    [12, "#1857b6", "#3f86da", "#9fcdf3"],
    [16, "#1f58ad", "#5c97d8", "#f1d3a2"],
    [18, "#272b74", "#bd4f6c", "#f6964c"],
    [19.5, "#12173f", "#54306b", "#a8425a"],
    [21.5, "#070a1f", "#141846", "#2a2a5c"],
    [24, "#04050d", "#0a0f2c", "#1b2050"],
  ];
  const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  function skyColors(hour) {
    const i = Math.max(1, SKY.findIndex((s) => s[0] > hour)),
      a = SKY[i - 1],
      b = SKY[i],
      k = (hour - a[0]) / (b[0] - a[0]);
    return [1, 2, 3].map((c) => {
      const x = rgb(a[c]),
        y = rgb(b[c]);
      return `rgb(${x.map((v, j) => Math.round(v + (y[j] - v) * k)).join(",")})`;
    });
  }
  const isDay = (hour) => hour >= 6 && hour < 18;
  function paintSky() {
    const sky = $("#sky");
    if (!sky) return;
    const ms = Date.now() + ui.skyOffset * 60000,
      home = zoneParts(state.tz, ms),
      loc = state.lang === "zh" ? "zh-CN" : "en-US",
      [a, b, c] = skyColors(home.hour),
      day = isDay(home.hour),
      arc = day ? (home.hour - 6) / 12 : ((home.hour + 6) % 24) / 12,
      night = home.hour < 5 || home.hour >= 20 ? 1 : home.hour < 7 ? (7 - home.hour) / 2 : home.hour >= 18 ? (home.hour - 18) / 2 : 0;
    sky.style.setProperty("--a", a);
    sky.style.setProperty("--b", b);
    sky.style.setProperty("--c", c);
    sky.style.setProperty("--ox", (6 + 88 * arc).toFixed(2) + "%");
    // The arc stays in the band above the headline, and the orb fades out near the horizon.
    sky.style.setProperty("--oy", (30 - 21 * Math.sin(Math.PI * arc)).toFixed(2) + "%");
    sky.style.setProperty("--oo", Math.min(1, Math.sin(Math.PI * arc) * 2.2).toFixed(2));
    sky.style.setProperty("--night", night.toFixed(2));
    sky.classList.toggle("is-night", !day);
    const set = (sel, text, root = sky) => {
      const el = $(sel, root);
      if (el && el.textContent !== text) el.textContent = text;
    };
    set('[data-sky="hm"]', home.hm);
    set('[data-sky="ss"]', home.ss);
    set('[data-sky="date"]', new Date(ms).toLocaleDateString(loc, { month: "long", day: "numeric", weekday: "long", timeZone: state.tz }));
    const off = ui.skyOffset,
      h = Math.floor(Math.abs(off) / 60),
      m = Math.abs(off) % 60;
    set('[data-sky="state"]', off ? `${off > 0 ? "+" : "−"}${h ? `${h} ${t("hoursUnit")}` : ""}${h && m ? " " : ""}${m ? `${m} ${t("minutesUnit")}` : ""}` : t("skyNow"));
    sky.classList.toggle("is-scrubbed", off !== 0);
    const back = $(".scrub-back", sky);
    if (back && back.hidden !== !off && document.activeElement !== back) back.hidden = !off;
    $$(".zone", sky).forEach((el) => {
      const z = zoneParts(el.dataset.zone, ms),
        diff = (z.offset - home.offset) / 60;
      set('[data-z="time"]', z.hm, el);
      set('[data-z="day"]', fmtDay(z.day, { weekday: "short" }), el);
      set('[data-z="diff"]', el.dataset.zone === state.tz ? "" : `${diff > 0 ? "+" : diff < 0 ? "−" : "±"}${Math.abs(diff)}h`, el);
      el.classList.toggle("is-night", !isDay(z.hour));
    });
  }
  function resetSky() {
    const from = ui.skyOffset,
      start = performance.now(),
      input = $("#sky-scrub");
    const finish = () => {
      ui.skyOffset = 0;
      if (input?.isConnected) input.value = 0;
      paintSky();
      const back = $(".scrub-back");
      if (back) {
        if (document.activeElement === back) $("#sky-scrub")?.focus({ preventScroll: true });
        back.hidden = true;
      }
    };
    if (!from || reducedMotion()) return finish();
    const step = (now) => {
      const p = Math.min(1, (now - start) / 650);
      ui.skyOffset = Math.round((from * Math.pow(1 - p, 3)) / 15) * 15;
      if (input?.isConnected) input.value = ui.skyOffset;
      paintSky();
      p < 1 ? requestAnimationFrame(step) : finish();
    };
    requestAnimationFrame(step);
  }
  // Decorative pointer effects: spotlight on app cards, parallax in the sky, dock magnification.
  document.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType === "touch") return;
      const spot = e.target.closest?.("[data-spot]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", e.clientX - r.left + "px");
        spot.style.setProperty("--my", e.clientY - r.top + "px");
      }
      const sky = e.target.closest?.("#sky");
      if (sky && !reducedMotion()) {
        const r = sky.getBoundingClientRect();
        sky.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
        sky.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
      }
      const dockEl = $("[data-dock]");
      if (dockEl && !reducedMotion()) {
        const inside = e.target.closest?.("[data-dock]");
        $$(".dock-icon", dockEl).forEach((ic) => {
          if (!inside) return ic.style.removeProperty("--s");
          const r = ic.getBoundingClientRect(),
            d = Math.abs(e.clientX - (r.left + r.width / 2));
          ic.style.setProperty("--s", (1 + 0.34 * Math.max(0, 1 - d / 170) ** 2).toFixed(3));
        });
      }
    },
    { passive: true },
  );
  window.addEventListener("hashchange", () => {
    closeModal();
    render();
    window.scrollTo(0, 0);
    openLinkedStory();
  });
  setInterval(paintSky, 1000);
  render();
  openLinkedStory();
})();
