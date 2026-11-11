<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();

import topMenuNew from "@components/topMenuNoA.vue"
import registryForm from "@components/registryFormSSR.vue";

// 导入 Swiper 核心模块和 Vue 组件
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// 必须导入 Swiper 样式（全局或按需）
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import flag1 from '@img/jianguan/flag1.webp'
import flag2 from '@img/jianguan/flag2.webp'
import flag3 from '@img/jianguan/flag3.webp'
import flag4 from '@img/jianguan/flag4.webp'
import section5LogoAr from '@img/logo/logo_row_write_ar.svg'
import section5LogoEn from '@img/logo/logo_row_write_en.svg'
import section5LogoEs from '@img/logo/logo_row_write_es.svg'
import section5LogoId from '@img/logo/logo_row_write_id.svg'
import section5LogoJa from '@img/logo/logo_row_write_ja.svg'
import section5LogoKo from '@img/logo/logo_row_write_ko.svg'
import section5LogoMn from '@img/logo/logo_row_write_mn.svg'
import section5LogoPt from '@img/logo/logo_row_write_pt.svg'
import section5LogoTh from '@img/logo/logo_row_write_th.svg'
import section5LogoVi from '@img/logo/logo_row_write_vi.svg'
import section5LogoZhCn from '@img/logo/logo_row_write_zh_CN.svg'
import section5LogoZhTw from '@img/logo/logo_row_write_zh_TW.svg'
import section5Card2Logo from '@img/ETF/a/section5_card2_logo.svg'
import section5Card3Logo from '@img/ETF/a/section5_card3_logo.svg'
import section5CardStars from '@img/ETF/a/section5_card_stars.svg'
import section3BgPc from '@img/ETF/b/section3_bg.webp'
import section3BgMobile from '@img/ETF/b/section3_bg_mobile.webp'
import section2Icon1 from '@img/ETF/b/section2_icon1.webp'
import section2Icon2 from '@img/ETF/b/section2_icon2.webp'
import section2Icon3 from '@img/ETF/b/section2_icon3.webp'
import section2Icon4 from '@img/ETF/b/section2_icon4.webp'
import section4Icon1 from '@img/ETF/b/section4_icon1.webp'
import section4Icon2 from '@img/ETF/b/section4_icon2.webp'
import section4Icon3 from '@img/ETF/b/section4_icon3.webp'
import section4Icon4 from '@img/ETF/b/section4_icon4.webp'
import section5BgPc from '@img/ETF/a/section5_bg.webp'
import section5BgMobile from '@img/ETF/a/section5_bg_mobile.webp'
import section5Card1BgPc from '@img/ETF/a/section5_card1_bg.webp'
import section5Card2BgPc from '@img/ETF/a/section5_card2_bg.webp'
import section5CardZhBgPc from '@img/ETF/a/section5_card_zh_bg.webp'
import section5Card3BgPc from '@img/ETF/a/section5_card3_bg.webp'
import section5Card1BgMobile from '@img/ETF/a/section5_card1_bg_mobile.webp'
import section5Card2BgMobile from '@img/ETF/a/section5_card2_bg_mobile.webp'
import section5CardZhBgMobile from '@img/ETF/a/section5_card_zh_bg_mobile.webp'
import section5Card3BgMobile from '@img/ETF/a/section5_card3_bg_mobile.webp'
import section5CardZhLogo from '@img/ETF/a/section5_card_zh_logo.svg'
import section6Icon1 from '@img/ETF/a/section6_icon1.webp'
import section6Icon2 from '@img/ETF/a/section6_icon2.webp'
import section6Icon3 from '@img/ETF/a/section6_icon3.webp'
import footerIcon from '@img/ETF/a/footer_icon.webp'

const section3TargetTimeMs = new Date('2026-09-12T00:00:00+03:00').getTime()
const section3CountdownEnded = ref(false)
const section3Countdown = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })
let section3CountdownTimer: number | null = null

function pad2(n: number) {
  return String(n).padStart(2, '0')
}
function updateSection3Countdown() {
  const diffMs = section3TargetTimeMs - Date.now()
  if (!Number.isFinite(section3TargetTimeMs) || diffMs <= 0) {
    section3CountdownEnded.value = true
    section3Countdown.value = { days: '00', hours: '00', minutes: '00', seconds: '00' }
    if (section3CountdownTimer !== null) {
      window.clearInterval(section3CountdownTimer)
      section3CountdownTimer = null
    }
    return
  }

  section3CountdownEnded.value = false
  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  section3Countdown.value = {
    days: pad2(days),
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  }
}

const section5Card1Logo = computed(() => {
  const l = locale.value
  if (l === 'ar') return section5LogoAr
  if (l === 'es') return section5LogoEs
  if (l === 'id') return section5LogoId
  if (l === 'ja') return section5LogoJa
  if (l === 'ko') return section5LogoKo
  if (l === 'mn') return section5LogoMn
  if (l === 'pt') return section5LogoPt
  if (l === 'th') return section5LogoTh
  if (l === 'vi') return section5LogoVi
  if (l === 'zh') return section5LogoZhCn
  if (l === 'zh-TW') return section5LogoZhTw
  return section5LogoEn
})

// section5 PC：3 个状态控制位移
// state=1：首张距左侧 360rem（不位移）
// state=2：首张与左侧平齐（左移 360rem）
// state=3：最后一张与右侧平齐（根据滚动条宽度动态修正）
const section5PcState = ref<1 | 2 | 3>(1)
const section5PcViewportRem = ref(1920)
function updateSection5PcViewportRem() {
  if (typeof window === 'undefined') return
  const html = document.documentElement
  const fontSizePx = Number.parseFloat(window.getComputedStyle(html).fontSize || '0')
  if (!fontSizePx) {
    section5PcViewportRem.value = 1920
    return
  }
  // clientWidth 不包含滚动条，vw 计算包含滚动条 → 这里会自动补偿滚动条宽度差
  section5PcViewportRem.value = html.clientWidth / fontSizePx
}
const section5PcTranslateRem = computed(() => {
  if (section5PcState.value === 1) return 0
  if (section5PcState.value === 2) return -360

  const viewportRem = section5PcViewportRem.value || 1920
  const leftPad = 360
  const cardW = 632
  const gap = 48
  const totalW = cardW * 3 + gap * 3
  return viewportRem - leftPad - totalW
})
function section5PcNext() {
  if (section5PcState.value === 1) {
    // 只允许从初始态进入 2
    section5PcState.value = 2
    return
  }
  if (section5PcState.value === 2) {
    // 之后只在 2/3 间切换
    section5PcState.value = 3
  }
}
function section5PcPrev() {
  // 不允许回到初始态，只允许 3 -> 2
  if (section5PcState.value === 3) section5PcState.value = 2
}
const section5MobileIndex = ref(0)
let section5MobileSwiper: any = null
function onSection5MobileSwiper(swiper: any) {
  section5MobileSwiper = swiper
  section5MobileIndex.value = swiper?.activeIndex || 0
}
function onSection5MobileSlideChange(swiper: any) {
  section5MobileIndex.value = swiper?.activeIndex || 0
}
function goSection5Mobile(index: number) {
  section5MobileSwiper?.slideTo?.(index)
  section5MobileIndex.value = index
}
const honorListData = computed(() => {
  let list = [
    {
      icon: flag1,
      label: t('EBC Financial Group (UK) Ltd'),
      text1: t('由英国金融行为监管局(FCA)授权和监管'),
      text2: t('监管号: 927552'),
    },
    {
      icon: flag2,
      label: t('EBC Financial Group (Cayman) Ltd'),
      text1: t('由开曼群岛金融管理局(CIMA)授权和监管'),
      text2: t('监管号: 2038223'),
    },
    {
      icon: flag3,
      label: t('EBC Financial Group (Australia) Pty Ltd'),
      text1: t('由澳大利亚证券和投资委员会(ASIC)授权和监管'),
      text2: t('监管号: 500991'),
    },
    {
      icon: flag4,
      label: t('EBC Financial Group SA (Pty) Ltd'),
      text1: t('由南非金融部门行为监管局(FSCA)授权和监管'),
      text2: t('监管号:51541'),
    },
    {
      icon: flag1,
      label: t('EBC Financial Group (UK) Ltd'),
      text1: t('由英国金融行为监管局(FCA)授权和监管'),
      text2: t('监管号: 927552'),
    },
    {
      icon: flag2,
      label: t('EBC Financial Group (Cayman) Ltd'),
      text1: t('由开曼群岛金融管理局(CIMA)授权和监管'),
      text2: t('监管号: 2038223'),
    },
    {
      icon: flag3,
      label: t('EBC Financial Group (Australia) Pty Ltd'),
      text1: t('由澳大利亚证券和投资委员会(ASIC)授权和监管'),
      text2: t('监管号: 500991'),
    },
    {
      icon: flag4,
      label: t('EBC Financial Group SA (Pty) Ltd'),
      text1: t('由南非金融部门行为监管局(FSCA)授权和监管'),
      text2: t('监管号:51541'),
    },
  ]
  if (locale.value == 'ja') {
    list = [

      {
        icon: flag2,
        label: t('EBC Financial Group (Cayman) Ltd'),
        text1: t('由开曼群岛金融管理局(CIMA)授权和监管'),
        text2: t('监管号: 2038223'),
      },
      {
        icon: flag3,
        label: t('EBC Financial Group (Australia) Pty Ltd'),
        text1: t('由澳大利亚证券和投资委员会(ASIC)授权和监管'),
        text2: t('监管号: 500991'),
      },
      {
        icon: flag4,
        label: t('EBC Financial Group SA (Pty) Ltd'),
        text1: t('由南非金融部门行为监管局(FSCA)授权和监管'),
        text2: t('监管号:51541'),
      },

      {
        icon: flag2,
        label: t('EBC Financial Group (Cayman) Ltd'),
        text1: t('由开曼群岛金融管理局(CIMA)授权和监管'),
        text2: t('监管号: 2038223'),
      },
      {
        icon: flag3,
        label: t('EBC Financial Group (Australia) Pty Ltd'),
        text1: t('由澳大利亚证券和投资委员会(ASIC)授权和监管'),
        text2: t('监管号: 500991'),
      },
      {
        icon: flag4,
        label: t('EBC Financial Group SA (Pty) Ltd'),
        text1: t('由南非金融部门行为监管局(FSCA)授权和监管'),
        text2: t('监管号:51541'),
      },
    ]
  }
  return list
})


const isLargeScreen = ref(true);
const hasShow = ref(false);
const fixedLinkActive = ref(false);
// 手动实现节流
function throttle(fn: Function, delay: number) {
  let lastCall = 0;
  return function (...args: any[]) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
}
function checkScreenSize() {
  isLargeScreen.value = window.innerWidth >= 996;
  if (!isLargeScreen.value) {
    popoverEl.value && popoverEl.value.hide()
  }
  updateSection5PcViewportRem()
  checkScreenScroll()
}

const popoverEl = ref(null);

const footerVisible = ref(false)
let footerBtnObserve: IntersectionObserver | null = null




function checkScreenScroll() {
  if (typeof window === 'undefined') return

  if (isLargeScreen.value) {
    hasShow.value = false
    fixedLinkActive.value = false
    return
  }

  // 规则：移动端当“首屏注册按钮”不在视口内时显示右下角悬浮入口
  const btnEl = document.querySelector('.section1-register-btn') as HTMLElement | null
  if (!btnEl) {
    hasShow.value = false
    return
  }

  const rect = btnEl.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight || 0
  const isInViewport = rect.bottom > 0 && rect.top < vh
  hasShow.value = !isInViewport

  if (!hasShow.value) {
    popoverEl.value && popoverEl.value.hide()
  }

}
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const throttledCheck = throttle(checkScreenScroll, 20);

let fadeUpObserve: IntersectionObserver | null = null;

onMounted(() => {
  checkScreenSize();
  checkScreenScroll()
  window.addEventListener('scroll', throttledCheck, { passive: true } as any);
  window.addEventListener('resize', checkScreenSize);


  /* 显示滑入开始 */
  fadeUpObserve = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          fadeUpObserve.unobserve(e.target);
        }
      });
    },
    { threshold: 0 }
  );
  document
    .querySelectorAll(".scroll-fade-up")
    .forEach((el) => fadeUpObserve.observe(el));

  updateSection5PcViewportRem()
  updateSection3Countdown()
  section3CountdownTimer = window.setInterval(updateSection3Countdown, 1000)

  // footer：监听首屏按钮是否在视口内
  nextTick(() => {
    const btnEl = document.querySelector('.section1-register-btn') as HTMLElement | null
    if (!btnEl) {
      footerVisible.value = false
      return
    }

    footerBtnObserve?.disconnect()
    footerBtnObserve = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        footerVisible.value = !Boolean(e?.isIntersecting)
      },
      { threshold: 0 }
    )
    footerBtnObserve.observe(btnEl)
  })

});

onUnmounted(() => {

  window.removeEventListener('scroll', throttledCheck);
  window.removeEventListener('resize', checkScreenSize);
  footerBtnObserve?.disconnect()
  footerBtnObserve = null
  if (section3CountdownTimer !== null) {
    window.clearInterval(section3CountdownTimer)
    section3CountdownTimer = null
  }
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    document.body.classList.remove('register-modal-open')
    document.documentElement.classList.remove('register-modal-open')
    document.documentElement.style.overflow = ''
    document.documentElement.style.removeProperty('--modal-scrollbar-comp')
    removeDialogScrollBlockers?.()
  }
});


function obfuscateUrl(url: any) {
  const base64 = btoa(encodeURIComponent(url))
  return encodeURIComponent(base64)
}


const dialogVisible = ref(false);
let dialogLockScrollY = 0
let dialogPrevBodyPaddingRight = ''
let dialogPrevHtmlOverflow = ''
let dialogPrevBodyOverflow = ''
let removeDialogScrollBlockers: null | (() => void) = null
let dialogPrevScrollbarCompVar = ''

function openRegisterDialog() {
  dialogVisible.value = true
}
function closeRegisterDialog() {
  dialogVisible.value = false
}

watch(
  dialogVisible,
  (v) => {
    if (typeof window === 'undefined') return
    document.body.classList.toggle('register-modal-open', v)
    document.documentElement.classList.toggle('register-modal-open', v)

    if (v) {
      dialogLockScrollY = window.scrollY || window.pageYOffset || 0

      // 保持右侧滚动条占位，避免 PC 端画面跳动
      dialogPrevHtmlOverflow = document.documentElement.style.overflow || ''
      dialogPrevBodyOverflow = document.body.style.overflow || ''
      // 仅用 padding-right 补偿滚动条宽度，避免 scrollbar-gutter + padding 叠加导致右侧空白
      dialogPrevBodyPaddingRight = document.body.style.paddingRight || ''
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
      // 固定头部（topMenuNew）也需要同样占位，否则会左右跳动
      dialogPrevScrollbarCompVar = document.documentElement.style.getPropertyValue('--modal-scrollbar-comp') || ''
      document.documentElement.style.setProperty('--modal-scrollbar-comp', `${Math.max(0, scrollbarWidth)}px`)

      // 不改变 scrollY 的锁滚动方式：只禁用滚动，不用 position:fixed（避免影响头部根据滚动距离切换样式）
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'

      // iOS/触控设备：额外拦截 touchmove；PC：拦截 wheel/键盘滚动
      const isAllowedTarget = (target: EventTarget | null) => {
        const el = target as HTMLElement | null
        if (!el?.closest) return false
        // 允许弹窗内容区域滚动，以及下拉弹层（Teleport 到 body）
        return Boolean(el.closest('.register-modal-panel') || el.closest('.el-popper'))
      }

      const onTouchMove = (e: TouchEvent) => {
        if (isAllowedTarget(e.target)) return
        e.preventDefault()
      }
      const onWheel = (e: WheelEvent) => {
        if (isAllowedTarget(e.target)) return
        e.preventDefault()
      }
      const onKeyDown = (e: KeyboardEvent) => {
        // 阻止会触发页面滚动的按键（但不影响输入框正常输入）
        const keys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
        if (!keys.includes(e.key)) return
        const target = e.target as HTMLElement | null
        const tag = target?.tagName?.toLowerCase()
        if (tag === 'input' || tag === 'textarea' || (target as any)?.isContentEditable) return
        if (isAllowedTarget(e.target)) return
        e.preventDefault()
      }

      document.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('wheel', onWheel, { passive: false })
      window.addEventListener('keydown', onKeyDown)

      removeDialogScrollBlockers = () => {
        document.removeEventListener('touchmove', onTouchMove as any)
        window.removeEventListener('wheel', onWheel as any)
        window.removeEventListener('keydown', onKeyDown as any)
        removeDialogScrollBlockers = null
      }
    } else {
      document.body.style.paddingRight = dialogPrevBodyPaddingRight
      document.documentElement.style.overflow = dialogPrevHtmlOverflow
      document.body.style.overflow = dialogPrevBodyOverflow
      document.documentElement.style.setProperty('--modal-scrollbar-comp', dialogPrevScrollbarCompVar)
      removeDialogScrollBlockers?.()
    }
  },
  { flush: 'post' }
)


const linkList = ref([
  { name: "交易优势", target: "section2" },
  { name: "限时活动", target: "section3" },
  { name: "EBC优势", target: "section4" },
  { name: t("word5"), target: "section5" },
  { name: t("word6"), target: "section6" },
])
</script>
<template>
  <div :class="[locale]">
    <topMenuNew :linkList="linkList" :showRegister="false" :registerAutoToTop="false"
      @register-click="openRegisterDialog"></topMenuNew>
    <section class="section1">
      <div class="rem-wrapper">
        <div class="section1-content">
          <h1 class="section1-title" >
一个账户<br/>
交易全球热门ETF
          </h1>
          <p class="section1-subtitle" >ETF&美股 限时免手续费和隔夜利息</p>
          <button class="section1-register-btn" type="button" @click="openRegisterDialog">
            <span class="section1-register-btn-text">{{ $t('word9') }}</span>
            <span class="section1-register-btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div id="honor-list" class="honor-list">
        <swiper :modules="[Autoplay]" :speed="5000" :easing-function="'linear'" :loop="true" :autoplay="{
          delay: 0,
          disableOnInteraction: false
        }" :slides-per-view="'auto'" :space-between="isLargeScreen ? 120 : 80" class="auto-width-swiper">
          <swiper-slide class="honor-slide" v-for="(item, index) in honorListData" :key="index">
            <div class="honor-item">
              <img class="honor-item-icon" :src="item.icon" alt="">
              <div class="honor-title">
                <h3>{{ item.label }}</h3>
                <p>{{ item.text1 }}</p>
                <p>{{ item.text2 }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section id="section2" class="section2">
      <div class="rem-wrapper-all-padding">
        <div class="section-title-box">
          <div class="section2-title-wrapper scroll-fade-up">
            <h2 class="section-title section2-title">
              享受ETF CFD交易的最优条件
            </h2>
          </div>
        </div>
        <div class="section-content">
          <div class="section2-grid">
            <div class="section2-card">
              <div class="section2-card-icon" aria-hidden="true">
                <img class="section2-card-icon-img" v-lazy="section2Icon1" alt="">
              </div>
              <div class="section2-card-text">
                <h3 class="section2-card-title">无溢价</h3>
                <p class="section2-card-desc">所见即所得，成本价购买ETF</p>
              </div>
            </div>
            <div class="section2-card">
              <div class="section2-card-icon" aria-hidden="true">
                <img class="section2-card-icon-img" v-lazy="section2Icon2" alt="">
              </div>
              <div class="section2-card-text">
                <h3 class="section2-card-title">无份额限制</h3>
                <p class="section2-card-desc">无申购上限，随时买卖</p>
              </div>
            </div>
            <div class="section2-card">
              <div class="section2-card-icon" aria-hidden="true">
                <img class="section2-card-icon-img" v-lazy="section2Icon3" alt="">
              </div>
              <div class="section2-card-text">
                <h3 class="section2-card-title">无管理费和封闭期</h3>
                <p class="section2-card-desc">灵活调仓，低成本捕捉市场机遇</p>
              </div>
            </div>
            <div class="section2-card">
              <div class="section2-card-icon" aria-hidden="true">
                <img class="section2-card-icon-img" v-lazy="section2Icon4" alt="">
              </div>
              <div class="section2-card-text">
                <h3 class="section2-card-title">多空双向交易</h3>
                <p class="section2-card-desc">无需融券，一键做空捕捉反向机会</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section3" class="section3" v-lazy="isLargeScreen ? section3BgPc : section3BgMobile">
      <div class="rem-wrapper-all-padding">
        <div class="section-title-box">
          <div class="section3-title-wrapper scroll-fade-up">
            <h2 class="section-title section-title-light section3-title">
              <span class="section3-title-num">0</span>手续费 <span class="section3-title-num">0</span>隔夜利息
            </h2>
            <p class="section-text section-text-light ">适用于所有ETF&美股产品</p>
          </div>
        </div>
        <div class="section-content">
          <div class="section3-countdown">
              <p class="section3-countdown-title">
                {{ section3CountdownEnded ? '' : '活动结束倒计时' }}
              </p>
              <div v-if="!section3CountdownEnded" class="section3-countdown-row">
                <div class="section3-countdown-box">{{ section3Countdown.days }}</div>
                <span class="section3-countdown-unit">天</span>
                <div class="section3-countdown-box">{{ section3Countdown.hours }}</div>
                <span class="section3-countdown-unit">时</span>
                <div class="section3-countdown-box">{{ section3Countdown.minutes }}</div>
                <span class="section3-countdown-unit">分</span>
                <div class="section3-countdown-box">{{ section3Countdown.seconds }}</div>
              </div>
            </div>
        </div>
      </div>
    </section>

    <section id="section4" class="section4">
      <div class="rem-wrapper-all-padding">
        <div class="section-title-box">
          <div class="section4-title-wrapper scroll-fade-up">
            <h2 class="section-title section4-title">为什么选择 EBC ？</h2>
            <p class="section-text">EBC为ETF CFD交易提供所需的一切条件</p>
          </div>
        </div>
        <div class="section-content">
          <div class="section4-grid">
            <div class="section4-card">
              <div class="section4-card-icon" aria-hidden="true">
                <img class="section4-card-icon-img" v-lazy="section4Icon1" alt="">
              </div>
              <div class="section4-card-text">
                <h3 class="section4-card-title"><span class="section4-card-title-num">100+</span> 热门ETF</h3>
                <p class="section4-card-desc">
                  <span class="section4-card-desc-pc">所见即所得，成本价购买ETF</span>
                  <span class="section4-card-desc-mobile">全球热门赛道，一站式选择更丰富</span>
                </p>
              </div>
            </div>
            <div class="section4-card">
              <div class="section4-card-icon" aria-hidden="true">
                <img class="section4-card-icon-img" v-lazy="section4Icon2" alt="">
              </div>
              <div class="section4-card-text">
                <h3 class="section4-card-title"><span class="section4-card-title-num">5:1</span> 杠杆</h3>
                <p class="section4-card-desc">灵活杠杆，成本更低</p>
              </div>
            </div>
            <div class="section4-card">
              <div class="section4-card-icon" aria-hidden="true">
                <img class="section4-card-icon-img" v-lazy="section4Icon3" alt="">
              </div>
              <div class="section4-card-text">
                <h3 class="section4-card-title">资金独立托管</h3>
                <p class="section4-card-desc">最高级别资金保护，交易更放心</p>
              </div>
            </div>
            <div class="section4-card">
              <div class="section4-card-icon" aria-hidden="true">
                <img class="section4-card-icon-img" v-lazy="section4Icon4" alt="">
              </div>
              <div class="section4-card-text">
                <h3 class="section4-card-title">毫秒级执行</h3>
                <p class="section4-card-desc">无卡盘延迟，交易更及时</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section5" class="section5" v-lazy="isLargeScreen ? section5BgPc : section5BgMobile">
      <div class="rem-wrapper-top-padding">
        <div class="section-title-box">
          <div class="scroll-fade-up">
            <h2 class="section-title section5-title">{{ $t('word38') }}</h2>
          </div>
        </div>
      </div>
      <div class="section-content">
        <div v-if="isLargeScreen" class="section5-pc">
          <div class="rem-wrapper-bottom-padding">
            <div class="section5-pc-swiper-wrap" :style="{ transform: `translateX(${section5PcTranslateRem}rem)` }">
              <div class="section5-track">
                <div class="section5-slide">
                  <div class="section5-card section5-card--1" v-lazy="section5Card1BgPc">
                    <img class="section5-card-logo section5-card-logo--1" v-lazy="section5Card1Logo" alt="">
                    <p class="section5-card-title">{{ $t('word39') }}</p>
                  </div>
                </div>
                <div class="section5-slide" v-if="locale=='zh'">
                  <div class="section5-card section5-card--2" v-lazy="section5CardZhBgPc">
                    <img class="section5-card-logo section5-card-logo--2" v-lazy="section5CardZhLogo" alt="">
                    <div class="section5-card-center">
                      <p class="section5-card-title" v-html="$t('word40')"></p>
                      <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                    </div>
                  </div>
                </div>
                <div class="section5-slide" v-else>
                  <div class="section5-card section5-card--2" v-lazy="section5Card2BgPc">
                    <img class="section5-card-logo section5-card-logo--2" v-lazy="section5Card2Logo" alt="">
                    <div class="section5-card-center">
                      <p class="section5-card-title" v-html="$t('word40')"></p>
                      <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                    </div>
                  </div>
                </div>
                <div class="section5-slide">
                  <div class="section5-card section5-card--3" v-lazy="section5Card3BgPc">
                    <img class="section5-card-logo section5-card-logo--3" v-lazy="section5Card3Logo" alt="">
                    <div class="section5-card-center">
                      <p class="section5-card-title" v-html="$t('word41')"></p>
                      <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="section5-pc-nav">
              <button class="section5-nav-btn" type="button" :disabled="section5PcState !== 3" @click="section5PcPrev">
                <span class="iconfont icon-Arrow_Left"></span>
              </button>
              <button class="section5-nav-btn" type="button" :disabled="section5PcState === 3" @click="section5PcNext">
                <span class="iconfont icon-Arrow_Right"></span>
              </button>
            </div>
          </div>
        </div>
        <div v-else class="section5-mobile">
          <div class="rem-wrapper-bottom-padding">
            <swiper class="section5-mobile-swiper" :slides-per-view="'auto'" :space-between="0" :loop="false"
              :centered-slides="true" :centered-slides-bounds="true" @swiper="onSection5MobileSwiper"
              @slideChange="onSection5MobileSlideChange">
              <swiper-slide class="section5-slide">
                <div class="section5-card section5-card--1" v-lazy="section5Card1BgMobile">
                  <img class="section5-card-logo section5-card-logo--1" v-lazy="section5Card1Logo" alt="">
                  <p class="section5-card-title">{{ $t('word39') }}</p>
                </div>
              </swiper-slide>
               <swiper-slide class="section5-slide" v-if="locale=='zh'">
                <div class="section5-card section5-card--2" v-lazy="section5CardZhBgMobile">
                  <img class="section5-card-logo section5-card-logo--Zh" v-lazy="section5CardZhLogo" alt="">
                  <div class="section5-card-center">
                    <p class="section5-card-title" v-html="$t('word40')"></p>
                    <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="section5-slide" v-else>
                <div class="section5-card section5-card--2" v-lazy="section5Card2BgMobile">
                  <img class="section5-card-logo section5-card-logo--2" v-lazy="section5Card2Logo" alt="">
                  <div class="section5-card-center">
                    <p class="section5-card-title" v-html="$t('word40')"></p>
                    <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="section5-slide">
                <div class="section5-card section5-card--3" v-lazy="section5Card3BgMobile">
                  <img class="section5-card-logo section5-card-logo--3" v-lazy="section5Card3Logo" alt="">
                  <div class="section5-card-center">
                    <p class="section5-card-title" v-html="$t('word41')"></p>
                    <img class="section5-card-stars" v-lazy="section5CardStars" alt="">
                  </div>
                </div>
              </swiper-slide>
            </swiper>

            <div class="section5-mobile-indicator">
              <div class="section5-mobile-indicator-track"></div>
              <div class="section5-mobile-indicator-active"
                :style="{ transform: `translateX(${section5MobileIndex * 100}%)` }"></div>
              <div class="section5-mobile-indicator-btns" aria-hidden="true">
                <button class="section5-mobile-indicator-btn" type="button" @click="goSection5Mobile(0)"></button>
                <button class="section5-mobile-indicator-btn" type="button" @click="goSection5Mobile(1)"></button>
                <button class="section5-mobile-indicator-btn" type="button" @click="goSection5Mobile(2)"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section id="section6" class="section6">
      <div class="rem-wrapper-all-padding">
        <div class="section-title-box">
          <div class="scroll-fade-up">
            <h2 class="section-title" v-html="$t('word42')"></h2>
          </div>
        </div>
        <div class="section-content">
          <div class="section6-steps">
            <div class="section6-step">
              <div class="section6-icon-wrap">
                <img class="section6-icon" v-lazy="section6Icon1" alt="">
              </div>
              <p class="section6-step-text">{{ $t('word43') }}</p>
            </div>
            <div class="section6-step">
              <div class="section6-icon-wrap">
                <img class="section6-icon" v-lazy="section6Icon2" alt="">
              </div>
              <p class="section6-step-text">{{ $t('word44') }}</p>
            </div>
            <div class="section6-step">
              <div class="section6-icon-wrap">
                <img class="section6-icon" v-lazy="section6Icon3" alt="">
              </div>
              <p class="section6-step-text">{{ $t('word45') }}</p>
            </div>
          </div>
          <div class="section6-footer">
            <div class="section6-footer-text">© 2026, EBC Financial Group (SVG) LLC. All Rights Reserved.</div>
            <div class="section6-footer-tips">{{ $t('bottomTips.tips') }}</div>
          </div>
        </div>
      </div>
    </section>

    <div v-show="footerVisible" class="etf-footer">
      <div class="etf-footer-inner">
        <div class="etf-footer-left">
          <img class="etf-footer-icon" v-lazy="footerIcon" alt="">
          <div class="etf-footer-text" v-html="$t('word46')"></div>
        </div>
        <button class="ebc-btn-large etf-footer-btn" type="button" @click="openRegisterDialog">
          {{ $t('word47') }}
        </button>
      </div>
    </div>
    <div v-show="dialogVisible" class="register-modal" @click="closeRegisterDialog">
      <div class="register-modal-panel" @click.stop>
        <div class="register-modal-close-btn">
          <span class="iconfont icon-close" @click="closeRegisterDialog"></span>
        </div>
        <client-only>
          <registryForm @sumbited="closeRegisterDialog" />
        </client-only>
      </div>
    </div>


  </div>


</template>

<style>
.top-menu {
  box-shadow: none !important;
}

/* 弹窗打开时：给固定头部同步滚动条占位，避免左右跳动 */
body.register-modal-open .top-menu {
  padding-right: var(--modal-scrollbar-comp, 0px);
  box-sizing: border-box;
}

.register-modal-open .etf-footer {
  padding-right: var(--modal-scrollbar-comp, 0px);
}
</style>
<style lang="scss">
@use "@style/page/bestbroker.scss";
@use "swiper/css";
@use "swiper/css/navigation";
@use "swiper/css/pagination";

.mail-link {
  color: #fff !important;
}

.icon-list .swiper-wrapper,
.honor-list .swiper-wrapper {
  transition-timing-function: linear !important;
  /* 同步动画曲线 */
}


.auto-width-swiper .swiper-wrapper {
  transition-timing-function: linear !important;
  /* 同步动画曲线 */
}

.auto-width-swiper .swiper-slide {
  width: auto !important;
  /* 覆盖 Swiper 默认的固定宽度 */
  flex-shrink: 0;
  /* 防止压缩 */
}

.scroll-fade-up {
  transform: translateY(80rem);
  opacity: 0;
  transition: transform 0.6s ease-out, opacity 0.1s ease-out;
}

.in-view {
  transform: translate(0);
  opacity: 1;
}

html {
  font-size: 0.052083vw !important;
}

body {
  font-size: 16rem;
  font-family: "Inter", "Noto Sans", "Noto Sans SC", sans-serif !important;
  /* 自动匹配用户系统默认字体 */
}

.register-modal {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24rem;
  overscroll-behavior: none;
  touch-action: none;
}

body.register-modal-open {
  .el-popper {
    // Element Plus Select/Popper 默认 z-index 较低，会被弹窗遮罩盖住
    z-index: 10001 !important;
  }
}

html.register-modal-open {
  /* 保留：class 仅用于状态标记，不做 gutter 占位（占位交给 body padding-right 补偿） */
}

.register-modal-panel {
  position: relative;
  width: 500rem;
  // max-width: calc(100vw - 48rem);
  // max-height: calc(100vh - 48rem);
  overflow: auto;
  border-radius: 24rem;
  background: #fff;
  overscroll-behavior: contain;
  touch-action: auto;
}

.register-modal-close-btn {
  position: absolute;
  right: 40rem;
  top: 48rem;
  cursor: pointer;
  z-index: 9;

  .icon-close {
    color: #000;
    font-size: 24rem;

  }
}

.rem-container {

  position: relative;
  font-size: 16rem;
  line-height: normal;
}

.rem-wrapper {
  padding-left: 360rem;
  padding-right: 360rem;
  margin: 0 auto;
  max-width: 1920rem;
}

.rem-wrapper-all-padding {
  padding: 160rem 360rem;
  margin: 0 auto;
  max-width: 1920rem;
}

.rem-wrapper-top-padding {
  padding: 160rem 360rem 0;
  margin: 0 auto;
  max-width: 1920rem;
}

.rem-wrapper-bottom-padding {
  padding: 0 360rem 160rem;
  margin: 0 auto;
  max-width: 1920rem;
}



.el-popper {
  .section-form {
    width: 400rem;
  }
}



@media (max-width: 1920px) {
  html {
    font-size: 0.052083vw !important;
  }
}

@media (max-width: 996px) {
  .register-modal-close-btn {
    top: 54rem;

    .icon-close {
      font-size: 32rem;

    }
  }

  .rem-wrapper {
    padding-left: 30rem;
    padding-right: 30rem;
  }

  html {
    font-size: 0.133333vw !important;
  }

  .rem-wrapper-all-padding {
    padding: 160rem 30rem;
  }

  .rem-wrapper-top-padding {
    padding: 160rem 30rem 0;
  }

  .rem-wrapper-bottom-padding {
    padding: 0 30rem 160rem;
  }

  .register-modal {
    padding: 32rem;
  }

  .register-modal-panel {
    width: 686rem;
    max-width: calc(100vw - 64rem);
    border-radius: 32rem;
  }
}


body {
  font-family: "Inter", "Noto Sans JP", sans-serif !important;

}

div {
  box-sizing: border-box;
}

.section-pc {
  width: 100%;
}

.section-mobile {
  display: none;
}

.section-title-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32rem;
}

.section-title {
  text-align: center;
  font-size: 48rem;
  font-style: normal;
  font-weight: 600;
  line-height: 56rem;
  color: #000;
}

.section-text {
  margin-top: 16rem;
  text-align: center;
  font-size: 24rem;
  font-style: normal;
  font-weight: 400;
  line-height: 32rem;
  color: var(--Text-Secondary, rgba(0, 0, 0, 0.64));
}

.section-title-light {
  color: #fff !important;
}

.section-text-light {
  color: var(--Text-Secondary_White, rgba(255, 255, 255, 0.64)) !important;
}

.section-content {
  margin-top: 80rem;
}

.ebc-btn-large {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48rem;
  padding: 0 18rem 0 24rem;
  min-width: 200rem;
  gap: 4rem;
  border-radius: 24rem;
  background: var(--Brand-Secondary-Red, #a52933);
  color: var(--Text-Primary_White, #fff);
  text-align: center;
  font-size: 16rem;
  font-style: normal;
  font-weight: 400;
  line-height: 28rem;
  cursor: pointer;
}

.ebc-btn-large:hover {
  background: var(--Functional-Active-Hover, #cc333f);
  color: var(--Text-Primary_White, #fff);
}

.ebc-btn-large:active {
  background: var(--Functional-Active-Pressed, #7b1e26);
  color: var(--Text-Primary_White, #fff);
}

.ebc-btn-large .iconfont {
  font-size: 20rem;
}

.ebc-btn-large-normal {
  color: var(--Brand-Secondary-Red, #a52933);
  background: var(--Text-Primary_White, #F7F7F7);
}

.ebc-btn-large-normal:hover {
  background: #F7F7F7;
  color: #a52933;
}

.ebc-btn-large-normal:active {
  background: #F7F7F7;
  color: #cc333f;
}






.success-drawer-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .success-drawer-img {
    height: 235rem;
  }

  .success-drawer-title {
    margin-top: 48rem;
    color: var(--Text-Primary, #000);
    text-align: center;
    font-size: 40rem;
    font-style: normal;
    font-weight: 600;
    line-height: 48rem;
  }

  .success-drawer-text {
    margin-top: 16rem;
    color: var(--Text-Primary, #000);
    text-align: center;
    font-size: 20rem;
    font-style: normal;
    font-weight: 400;
    line-height: 28rem;
  }

  .success-drawer-btns {
    margin-top: 40rem;
    display: flex;
    justify-content: center;
    gap: 16rem;
  }
}




.section1 {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 800rem;
  background: url("@img/ETF/b/bg.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  box-sizing: border-box;

  .rem-wrapper {
    flex-grow: 1;
    width: 100%;
  }

  .section1-content {
    padding-top: 180rem;
    padding-right: 600rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
  }



  .section1-title {
    margin: 0;
    font-size: 62rem;
    font-weight: 600;
    line-height: 80rem;

    .line {
      display: block;
    }
  }

  .section1-subtitle {
    margin: 24rem 0 0;
    font-size: 20rem;
    font-weight: 400;
    line-height: 32rem;
    color: rgba(255, 255, 255, 0.8);
  }

  .section1-register-btn {
    margin-top: 48rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    height: 56rem;
    padding: 0 48rem;
    border-radius: 131rem;
    border: none;
    cursor: pointer;
    background: var(--Brand-Primary, #FF4B4E);
    color: #fff;
    font-size: 20rem;
    font-weight: 400;
    line-height: 40rem;
  }

  .section1-register-btn:hover {
    background: var(--Functional-Active-Hover, #cc333f);
  }

  .section1-register-btn:active {
    background: var(--Functional-Active-Pressed, #7b1e26);
  }

  .honor-item {
    display: inline-flex;
    gap: 24rem;
    align-items: center;
  }

  .honor-item-icon {
    align-self: flex-start;
    width: 64rem;
    height: 64rem;
    flex-shrink: 0;
  }

  .honor-list {
    position: relative;
    padding-top: 60rem;
    padding-bottom: 60rem;
    flex-shrink: 0;
  }

  // .honor-list::before {
  //   content: "";
  //   width: 300rem;
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   background: linear-gradient(to right, #000 0%, #19090E 18%, transparent 100%);
  //   ;
  //   z-index: 99;
  // }

  // .honor-list::after {
  //   content: "";
  //   width: 300rem;
  //   height: 100%;
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   background: linear-gradient(to left, #000 0%, #19090E 18%, transparent 100%);
  //   ;
  //   z-index: 99;
  // }

  .honor-title {
    flex-shrink: 0;
    color: #fff;
    max-width: 400rem;

    h3 {
      color: var(--ebc-w, #FFF);
      font-size: 16rem;
      font-weight: 400;
      line-height: normal;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 14rem;
      line-height: 22rem;
    }
  }
}
.section2 {
  background: #fff;

  .section2-grid {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24rem;
  }

  .section2-card {
    width: calc(50% - 12rem);
    height: 188rem;
    border-radius: 24rem;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60rem 40rem;
  }

  .section2-card-text {
    flex: 1;
    min-width: 0;
    padding-right: 24rem;
    order: 1;
  }

  .section2-card-title {
    margin: 0;
    color: #000;
    font-size: 24rem;
    font-weight: 600;
    line-height: 32rem;
  }

  .section2-card-desc {
    margin: 8rem 0 0;
    color: rgba(0, 0, 0, 0.64);
    font-size: 16rem;
    line-height: 24rem;
  }

  .section2-card-icon {
    width: 110rem;
    height: 110rem;
    border-radius: 59rem;
    background: rgba(202, 202, 202, 0.16);
    backdrop-filter: blur(16rem);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    order: 2;
  }

  .section2-card-icon-img {
    width: 100%;
    height: 100%;
   
  }
}
.section3 {
  height: 1023rem;
  background-image: none;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .section3-title-num {
    font-size: 72rem;
    line-height: 80rem;
    color: #ff4b4e;
    font-weight: 600;
  }





  .section3-countdown {
    margin-top: -40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18rem;
  }

  .section3-countdown-title {
    margin: 0;
    font-size: 24rem;
    line-height: 33.6rem;
    color: rgba(255, 255, 255, 0.64);
  }

  .section3-countdown-row {
    display: flex;
    align-items: center;
    gap: 9.2rem;
  }

  .section3-countdown-box {
    width: 74rem;
    height: 74rem;
    border-radius: 12rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.14) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32rem;
    font-weight: 600;
    line-height: 39.7rem;
    color: #fff;
    box-sizing: border-box;
  }

  .section3-countdown-unit {
    font-size: 24rem;
    line-height: 33.6rem;
    color: rgba(255, 255, 255, 0.64);
  }
}
.section4 {
  background: #fff;


  .section4-grid {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 24rem;
  }

  .section4-card {
    width: calc(50% - 12rem);
    height: 188rem;
    border-radius: 24rem;
    background: #f7f7f7;
    padding: 0 0 0 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32rem;
  }

  .section4-card-icon {
    width: 224rem;
    height: 160rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    order: 2;
  }

  .section4-card-icon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    display: block;
  }

  .section4-card-text {
    flex: 1;
    min-width: 0;
    order: 1;
  }

  .section4-card-title {
    margin: 0;
    font-size: 24rem;
    font-weight: 600;
    line-height: 32rem;
    color: #5d2333;
  }
  .section4-card-title-num {
    font-size: 26rem;
  }

  .section4-card-desc {
    margin: 8rem 0 0;
    font-size: 16rem;
    line-height: 24rem;
    color: rgba(0, 0, 0, 0.64);
  }

  .section4-card-desc-mobile {
    display: none;
  }
}

.section5 {
  background-image: none;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  .section5-title {
    color: #fff;
  }

  .section5-pc-swiper-wrap {
    transition: transform 0.45s ease;
    will-change: transform;
  }

  .section5-mobile-swiper {
    overflow: visible;
  }

  .section5-track {
    display: flex;
    flex-wrap: nowrap;
    gap: 48rem;
    align-items: center;
  }

  .section5-slide {
    width: auto;
  }

  .section5-card {
    width: 632rem;
    height: 475rem;
    border-radius: 32rem;
    overflow: hidden;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 42rem 48rem;
    box-sizing: border-box;
  }

  .section5-card--2 {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .section5-card--3 {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .section5-card-logo {
    height: 60rem;
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
  }

  .section5-card-logo--1 {
    height: 52rem;
  }

  .section5-card-title {
    margin: 0;
    font-size: 40rem;
    font-weight: 600;
    line-height: 56rem;
    color: #fff;
  }

  .section5-card--1 .section5-card-title {
    margin-top: auto;
    text-align: center;
    width: 100%;
  }

  .section5-card-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32rem;
    margin-top: 32rem;
  }

  .section5-card-stars {
    width: 73rem;
    height: auto;
    opacity: 0.95;
  }

  .section5-pc-nav {
    display: flex;
    justify-content: flex-end;
    gap: 12rem;
    margin-top: 56rem;
  }

  .section5-nav-btn {
    // width: 48rem;
    // height: 48rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.18);
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .section5-nav-btn .iconfont {
    font-size: 48rem;
    line-height: 1;
  }

  .section5-nav-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .section5-mobile-indicator {
    position: relative;
    width: 104rem;
    height: 4rem;
    margin: 40rem auto 0;
  }

  .section5-mobile-indicator-track {
    position: absolute;
    inset: 0;
    background: #525252;
    border-radius: 999rem;
    opacity: 0.9;
  }

  .section5-mobile-indicator-active {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: calc(100% / 3);
    background: #fff;
    border-radius: 999rem;
    transition: transform 0.3s ease;
  }

  .section5-mobile-indicator-btns {
    position: absolute;
    inset: 0;
    display: flex;
  }

  .section5-mobile-indicator-btn {
    flex: 1 1 0;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
}

.section6 {
  background: #fff;

  .section-title {
    color: #000;
    text-align: center;
  }

  .section6-steps {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }

  .section6-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32rem;
  }

  .section6-icon-wrap {
    width: 101rem;
    height: 101rem;
    border-radius: 52rem;
    backdrop-filter: blur(14rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section6-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .section6-step-text {
    margin: 0;
    font-size: 24rem;
    font-weight: 400;
    line-height: 56rem;
    color: #000;
    text-align: center;
    white-space: nowrap;
  }

  .section6-footer {
    padding: 80rem 0 8rem;
  }

  .section6-footer-text {
    color: var(--Text-Quaternary, rgba(0, 0, 0, 0.24));
    text-align: center;

    font-size: 16rem;
    font-style: normal;
    line-height: 24rem;
  }

  .section6-footer-tips {
    margin-top: 16rem;
    color: var(--Brand-Primary-Burgundy, #5D2333);
    text-align: center;
    font-size: 18rem;
    font-style: normal;
    line-height: 26rem;
  }
}

.etf-footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120rem;
  z-index: 998;
  background: rgba(255, 255, 255, 0.92) url("@img/ETF/a/footer_bg.jpg") center / cover no-repeat;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
}

.etf-footer-inner {
  height: 100%;
  max-width: 1920rem;
  margin: 0 auto;
  padding: 0 360rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24rem;
  box-sizing: border-box;
}

.etf-footer-left {
  display: inline-flex;
  align-items: center;
  gap: 56rem;
  min-width: 0;
}

.etf-footer-icon {
  width: 108rem;
  height: 95rem;
  object-fit: contain;
  flex-shrink: 0;
}

.etf-footer-text {
  font-size: 38rem;
  font-weight: 600;
  line-height: 56rem;
  background-image: linear-gradient(96.72deg, #9f734c 0%, #704722 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.zh-TW .etf-footer-text,
.zh .etf-footer-text {
  font-size: 40rem;
}
.etf-footer-btn {
  height: 72rem;
  border-radius: 200rem;
  padding: 0 64rem;
  font-size: 32rem;
  line-height: 48rem;
  min-width: 266rem;
}

.ja .section1 .section1-title,
.ko .section1 .section1-title,
.en .section1 .section1-title,
.es .section1 .section1-title,
.id .section1 .section1-title,
.pt .section1 .section1-title,
.th .section1 .section1-title,
.vi .section1 .section1-title {
  font-size: 48rem;
  line-height: 1.4;
}





.en .section5 .section5-card-title,
.es .section5 .section5-card-title,
.id .section5 .section5-card-title,
.pt .section5 .section5-card-title,
.th .section5 .section5-card-title,
.vi .section5 .section5-card-title {
  font-size: 36rem;
  line-height: normal;
}





@media (max-width: 996px) {
  .section-pc {
    display: none;
  }

  .section-mobile {
    display: block;

  }

  .section-form {
    width: 100%;
  }

  .section-title {
    font-size: 40rem;
    line-height: 48rem;
  }

  .section-text {
    margin-top: 16rem;
    font-size: 24rem;
    line-height: 32rem;
  }

  .section-content {
    margin-top: 80rem;
  }

  .ebc-btn-large {
    display: inline-flex;
    height: 72rem;
    border-radius: 48rem;
    font-size: 32rem;
    font-style: normal;
    font-weight: 400;
    line-height: 56rem;
    min-width: 620rem;
    padding: 0 30rem;
  }

  .ebc-btn-large .iconfont {
    font-size: 34rem;
  }

  .section1 {
    height: 1626rem;
    padding-top: 160rem;
    padding-bottom: 12rem;
    border-radius: 0 0 40rem 40rem;
    background: url("@img/ETF/b/bg_mobile.webp") center top / cover no-repeat;
    background-color: #370c18;

    .section1-content {
      padding-top: 0;
      padding-right: 0;
      align-items: center;
    }

    .section1-title {
      font-size: 54rem;
      line-height: 80rem;
      text-align: center;
    }

    .section1-subtitle {
      margin-top: 24rem;
      font-size: 28rem;
      line-height: 32rem;
      text-align: center;
    }

    .section1-register-btn {
      margin-top: 106rem;
      height: 96rem;
      padding: 0 48rem;
      font-size: 32rem;
      line-height: 40rem;
      width: 400rem;
      max-width: 100%;
    }


    .honor-list::after {
      display: none;
    }

    .honor-list::before {
      display: none;
    }

    .honor-item {
      gap: 48rem;
    }

    .honor-item-icon {
      height: 128rem;
      width: 128rem;
    }

    .honor-title {
      max-width: 660rem;
    }

    .honor-title h3 {
      font-size: 30rem;
      line-height: normal;
    }

    .honor-title p {
      font-size: 28rem;
      line-height: normal;
    }
  }

  .section2 {
    
    .section2-title-line {
      display: inline;
    }

    .section2-grid {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 16rem;
    }

    .section2-card {
      width: calc(50% - 8rem);
      height: 430rem;
      border-radius: 32rem;
      background: #f7f7f7;
      padding: 48rem 34rem;
      display: flex;
      flex-direction: column;
      gap: 48rem;
      align-items: flex-start;
    }

    .section2-card-text {
      width: 100%;
      order: 2;
      padding-right: 0;
    }

    .section2-card-icon {
      order: 1;
    }

    .section2-card-title {
      font-size: 28rem;
      font-weight: 600;
      line-height: normal;
      text-align: left;
    }

    .section2-card-desc {
      font-size: 24rem;
      line-height: 32rem;
      text-align: left;
      color: #4a5565;
    }
  }
  .section3 {
    height: 1039rem;
    /* 背景图由 v-lazy 注入 background-image */



    .section3-countdown{
      margin-top: -28rem;
    }
  }
  .section4 {
    .section4-grid {
      width: 100%;
      width: 686rem;
      max-width: 100%;
      margin: 0 auto;
      flex-direction: column;
      gap: 16rem;
    }

    .section4-card {
      width: 100%;
      height: auto;
      min-height: 224rem;
      border-radius: 16rem;
      padding: 32rem 24rem 32rem 24rem;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 16rem;
    }

    .section4-card:nth-child(2),
    .section4-card:nth-child(3),
    .section4-card:nth-child(4){
      padding-left: 4rem;
      gap:36rem
    }

    .section4-card-icon {
      width: 224rem;
      height: 160rem;
      order: 1;
    }

    .section4-card-title {
      font-size: 32rem;
      font-weight: 600;
      line-height: 40rem;
      color: #6e263f;
    }
    .section4-card-title-num
    {
      font-size: 34rem;
    }

    .section4-card-desc {
      font-size: 24rem;
      line-height: 32rem;
      color: #4a5565;
    }

    .section4-card-text {
      order: 2;
    }


    .section4-card-desc-pc {
      display: none;
    }
    .section4-card-desc-mobile {
      display: inline;
    }
  }
  .section5 {
    /* 背景图由 v-lazy 注入 background-image */

    .section5-card {
      width: 632rem;
      height: 840rem;
      padding: 60rem 48rem;
      border-radius: 32rem;
    }

    .section5-slide {
      display: flex;
      justify-content: center;
      transform: scale(0.9);
      transform-origin: center center;
      transition: transform 0.3s ease;
    }

    .section5-card--1 .section5-card-title {
      margin-top: 500rem;
    }

    .section5-mobile-swiper .swiper-slide-active {
      transform: scale(1);
    }

    .section5-card-logo--1 {
      height: 60rem;
    }

    .section5-card-center {
      gap: 44rem;
    }
  }

  .section6 {


    .section6-step-text {
      font-size: 32rem;
    }

    .section6-footer {
      padding-top: 120rem;
    }

    .section6-footer-text {
      font-size: 23rem;
      line-height: 32rem;
    }

    .section6-footer-tips {
      font-size: 23rem;
      line-height: 32rem;

    }
  }

  .etf-footer {
    background: rgba(255, 255, 255, 0.92) url("@img/ETF/a/footer_bg_mobile.jpg") center / cover no-repeat;
  }

  .etf-footer-inner {
    padding: 0 34rem;
  }

  .etf-footer-left {
    gap: 16rem;
  }

  .etf-footer-btn {
    padding: 0 48rem;
    min-width: 260rem;
  }


  .success-drawer-content {
    .success-drawer-img {
      height: 303rem;
    }

    .success-drawer-title {
      margin-top: 64rem;
    }

    .success-drawer-text {
      margin-top: 32rem;
      font-size: 28rem;
      line-height: 36rem;
    }

    .success-drawer-btns {
      margin-top: 100rem;
      gap: 32rem;
      flex-direction: column-reverse;
    }
  }

  .el-popper {
    .section-form {
      width: 600rem;
    }
  }


  .es .section1 .section1-title,
  .id .section1 .section1-title,
  .pt .section1 .section1-title {
    font-size: 40rem;
  }

  .ko .section1 .section1-title {
    font-size: 44rem;
  }

  .vi .section1 .section1-register-btn,
  .en .section1 .section1-register-btn,
  .th .section1 .section1-register-btn {
    margin-top: 80rem;
  }


  .en .section5 .section5-card-title,
  .es .section5 .section5-card-title,
  .id .section5 .section5-card-title,
  .pt .section5 .section5-card-title,
  .th .section5 .section5-card-title,
  .vi .section5 .section5-card-title {
    font-size: 38rem;
  }

  .en .section6 .section6-steps,
  .es .section6 .section6-steps,
  .id .section6 .section6-steps,
  .pt .section6 .section6-steps,
  .th .section6 .section6-steps,
  .vi .section6 .section6-steps {
    flex-direction: column;
    align-items: center;
    gap: 80rem;
  }

  .ja .etf-footer-text,
  .ko .etf-footer-text,
  .en .etf-footer-text,
  .es .etf-footer-text,
  .id .etf-footer-text,
  .pt .etf-footer-text,
  .th .etf-footer-text,
  .vi .etf-footer-text {
    font-size: 26rem;
    line-height: normal;
  }

  .ja .etf-footer-btn,
  .ko .etf-footer-btn,
  .en .etf-footer-btn,
  .es .etf-footer-btn,
  .id .etf-footer-btn,
  .pt .etf-footer-btn,
  .th .etf-footer-btn,
  .vi .etf-footer-btn {
    font-size: 24rem;
    line-height: normal;
    padding: 0 24rem;
  }


 
}
</style>
