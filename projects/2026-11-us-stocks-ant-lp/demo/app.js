(() => {
  'use strict';

  // 1. Mobile nav drawer
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (menuToggle && mobileDrawer) {
    const closeMenu = () => {
      mobileDrawer.hidden = true;
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', () => {
      const open = mobileDrawer.hidden;
      mobileDrawer.hidden = !open;
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileDrawer.querySelectorAll('a, button').forEach((el) => el.addEventListener('click', closeMenu));
  }

  // 2. B2 Compact US Stocks Theme Switcher (4 concise chips per group)
  const TICKER_GROUPS = {
    ai: [
      { code: 'ANT', name: 'Anthropic', badge: '新上市', hot: true },
      { code: 'MSFT', name: '微软', badge: 'AI 云' },
      { code: 'GOOGL', name: 'Alphabet', badge: '大模型' },
      { code: 'META', name: 'Meta', badge: 'AI 应用' },
    ],
    chip: [
      { code: 'NVDA', name: '英伟达', badge: 'GPU 核心' },
      { code: 'AMD', name: '超威半导体', badge: 'AI 芯片' },
      { code: 'AVGO', name: '博通', badge: '定制芯片' },
      { code: 'TSM', name: '台积电', badge: '先进制程' },
    ],
    tech: [
      { code: 'AAPL', name: '苹果', badge: '权重标杆' },
      { code: 'TSLA', name: '特斯拉', badge: '热门波动' },
      { code: 'AMZN', name: '亚马逊', badge: '云与电商' },
      { code: 'NFLX', name: '奈飞', badge: '流媒体' },
    ],
  };

  const tickerList = document.getElementById('tickerList');
  const tickerTabs = document.querySelectorAll('.ticker-tab[data-group]');

  const renderTickers = (groupKey) => {
    if (!tickerList || !TICKER_GROUPS[groupKey]) return;
    tickerList.innerHTML = '';
    TICKER_GROUPS[groupKey].forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ticker-chip' + (item.hot ? ' ticker-chip--hot' : '');
      btn.innerHTML =
        '<span><span class="ticker-chip__code">' +
        item.code +
        '</span><span class="ticker-chip__name">' +
        item.name +
        '</span></span><span class="ticker-chip__badge">' +
        item.badge +
        '</span>';
      btn.addEventListener('click', () => openModal('关注标的：' + item.code + ' (' + item.name + ')', btn));
      tickerList.appendChild(btn);
    });
  };

  tickerTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-group');
      tickerTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderTickers(key);
    });
  });
  renderTickers('ai');

  // 3. M07 Partners Carousel Arrows
  const partnersTrack = document.getElementById('partnersTrack');
  const partnerPrev = document.getElementById('partnerPrev');
  const partnerNext = document.getElementById('partnerNext');
  if (partnersTrack && partnerPrev && partnerNext) {
    const scrollByCard = (dir) => {
      const slide = partnersTrack.querySelector('.partner-slide');
      const step = slide ? slide.getBoundingClientRect().width + 20 : 420;
      partnersTrack.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    partnerPrev.addEventListener('click', () => scrollByCard(-1));
    partnerNext.addEventListener('click', () => scrollByCard(1));
  }

  // 4. G3 Sticky Bar (shows after Hero CTA scrolls out)
  const stickyBar = document.getElementById('stickyBar');
  const heroCtaAnchor = document.getElementById('heroCtaAnchor');
  if (stickyBar && heroCtaAnchor && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const show = !entries[0].isIntersecting;
        stickyBar.classList.toggle('is-visible', show);
        stickyBar.setAttribute('aria-hidden', String(!show));
      },
      { threshold: 0.1 }
    );
    observer.observe(heroCtaAnchor);
  }

  // 4. G4 Register Modal
  const modal = document.getElementById('registerModal');
  const modalClose = document.getElementById('modalClose');
  const modalDoneBtn = document.getElementById('modalDoneBtn');
  const modalContext = document.getElementById('modalContext');
  const modalFormView = document.getElementById('modalFormView');
  const modalSuccessView = document.getElementById('modalSuccessView');
  const modalSuccessText = document.getElementById('modalSuccessText');
  const registerForm = document.getElementById('registerForm');

  let lastTrigger = null;
  let sourceTag = '';

  function openModal(label, triggerEl) {
    if (!modal) return;
    lastTrigger = triggerEl || null;
    sourceTag = label || '';
    if (modalFormView) modalFormView.hidden = false;
    if (modalSuccessView) modalSuccessView.hidden = true;
    if (modalContext) {
      modalContext.textContent = sourceTag
        ? `当前入口：${sourceTag}（本地 Demo 演示，不会提交真实数据）。`
        : '填写基本信息，体验开户流程（本地演示不会发送真实数据）。';
    }
    modal.hidden = false;
    document.body.classList.add('is-modal-open');
    const firstInput = document.getElementById('regName');
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('is-modal-open');
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal'), btn));
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      ['errName', 'errEmail', 'errPhone', 'errRisk'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
      });

      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const dial = document.getElementById('regDial').value;
      const phone = document.getElementById('regPhone').value.trim();
      const risk = document.getElementById('regRisk').checked;

      let ok = true;
      if (!name) {
        document.getElementById('errName').textContent = '请填写称呼';
        ok = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('errEmail').textContent = '请输入有效邮箱';
        ok = false;
      }
      if (!/^[0-9\-\s]{6,16}$/.test(phone)) {
        document.getElementById('errPhone').textContent = '请输入有效手机号';
        ok = false;
      }
      if (!risk) {
        document.getElementById('errRisk').textContent = '请先勾选风险确认';
        ok = false;
      }
      if (!ok) return;

      if (modalSuccessText) {
        modalSuccessText.textContent = `已记录 ${name}（${email} / ${dial} ${phone}）的 Demo 意向。正式上线后此处对接 EBC 注册与归因接口。`;
      }
      if (modalFormView) modalFormView.hidden = true;
      if (modalSuccessView) modalSuccessView.hidden = false;
      registerForm.reset();
    });
  }
})();
