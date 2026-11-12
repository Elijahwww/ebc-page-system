<script setup lang="ts">
import riskWarning from "@components/riskWarning.vue";
import footerEs from "@components/footerEs.vue";
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const heroTitleLines = computed(() => t('word7').split('\n').map((line) => line.trim()).filter(Boolean))

import topMenuNew from "@components/topMenuNoA.vue"
import registryForm from "@components/registryFormSSR.vue";
import section2Logo1 from "@img/oil-trading-a/section2Logo1.webp"
import section2Logo2 from "@img/oil-trading-a/section2Logo2.webp"
import section2Logo3 from "@img/oil-trading-a/section2Logo3.webp"
import section2Logo4 from "@img/oil-trading-a/section2Logo4.webp"
import section2Spark from "@img/oil-trading-a/section2Spark.svg"
import footerLogo from "@img/oil-trading-a/footerLogo.webp"
import section4Logo1 from "@img/oil-trading-a/section4Logo1.png"
import section4Logo2 from "@img/oil-trading-a/section4Logo2.png"
import section4Logo3 from "@img/oil-trading-a/section4Logo3.png"
import ClosingSection from "@components/ClosingSection.vue"
import jianguan from "@components/jianguan.vue"
import JoinSteps from "@components/JoinSteps.vue"

type Section4Feature = {
  icon: string
  title: string
  desc: string
}

const section4Features: Section4Feature[] = [
  { icon: section4Logo1, title: "s4F1Title", desc: "s4F1Desc" },
  { icon: section4Logo2, title: "s4F2Title", desc: "s4F2Desc" },
  { icon: section4Logo3, title: "s4F3Title", desc: "s4F3Desc" },
]

const linkList = computed(() => {
  const list = [
    { name: t("word2"), target: "section2" },
    { name: t("word3"), target: "section3" },
    { name: t("word4"), target: "section4" },
    { name: t("word5"), target: "section5" },
  ]
  const howToStart = t("word6")
  if (howToStart !== "word6") {
    list.push({ name: howToStart, target: "section6" })
  }
  return list
})

function pageText(key: string) {
  const value = t(key)
  return value === key ? '' : value
}

const closingBarText = computed(() => pageText('s6BarText'))
const closingBarBtn = computed(() => pageText('s6BarBtn'))
const joinSteps = computed(() => [t('s6Step1'), t('s6Step2'), t('s6Step3')])

const section2Cards = [
  { icon: section2Logo1, title: "s2C1Title", desc: "s2C1Desc" },
  { icon: section2Logo2, title: "s2C2Title", desc: "s2C2Desc" },
  { icon: section2Logo3, title: "s2C3Title", desc: "s2C3Desc" },
  { icon: section2Logo4, title: "s2C4Title", desc: "s2C4Desc" },
]

type Section3Card = {
  key: 'wti' | 'brent'
  symbol: string
  name: string
  desc: string
  quote: string
  quoteSub: string
}

const section3Cards: Section3Card[] = [
  { key: 'wti', symbol: 'XTIUSD', name: 's3WtiName', desc: 's3WtiDesc', quote: 's3WtiQuote', quoteSub: 's3WtiSub' },
  { key: 'brent', symbol: 'XBRUSD', name: 's3BrentName', desc: 's3BrentDesc', quote: 's3BrentQuote', quoteSub: 's3BrentSub' },
]

const section3Prices = ref<Record<Section3Card['key'], string>>({
  wti: '--',
  brent: '--',
})

const section3ChartEls: Partial<Record<Section3Card['key'], HTMLElement>> = {}
const section3DotEls: Partial<Record<Section3Card['key'], HTMLElement>> = {}
const section3Charts: Record<string, { remove: () => void } | undefined> = {}
const section3DotUpdates: Partial<Record<Section3Card['key'], () => void>> = {}
let section3RefreshTimer: ReturnType<typeof setInterval> | null = null
let section3InViewObserver: IntersectionObserver | null = null
let section3Started = false
let section3ResizeHandler: (() => void) | null = null

function setSection3ChartEl(key: Section3Card['key'], el: unknown) {
  if (el instanceof HTMLElement) section3ChartEls[key] = el
}

function setSection3DotEl(key: Section3Card['key'], el: unknown) {
  if (el instanceof HTMLElement) section3DotEls[key] = el
}

function loadLightweightCharts() {
  const win = window as Window & { LightweightCharts?: unknown }
  if (win.LightweightCharts) return Promise.resolve()
  const existed = document.querySelector<HTMLScriptElement>('script[data-lw-charts]')
  if (existed) {
    return new Promise<void>((resolve, reject) => {
      existed.addEventListener('load', () => resolve(), { once: true })
      existed.addEventListener('error', () => reject(), { once: true })
    })
  }
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js'
    script.async = true
    script.dataset.lwCharts = '1'
    script.onload = () => resolve()
    script.onerror = () => reject()
    document.head.appendChild(script)
  })
}

function utcToYYYYMMDD(ts: number) {
  const date = new Date(ts * 1000)
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  return `${date.getUTCFullYear()}-${month}-${day}`
}

function fetchQuoteBars(symbol: string) {
  const to = Math.floor(Date.now() / 1000) + 60
  const from = to - 86400 * 90
  const url = `https://trade.ebccrm.com/trading/view/history?symbol=${encodeURIComponent(symbol)}&resolution=1D&from=${from}&to=${to}`
  return fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      token: '__REDACTED_QUOTE_API_TOKEN__',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.s !== 'ok' || !data.c?.length) return []
      return data.t.map((time: number, index: number) => ({
        time: utcToYYYYMMDD(time),
        value: data.c[index] as number,
      }))
    })
    .catch(() => [])
}

function paintSection3Chart(key: Section3Card['key'], bars: { time: string; value: number }[]) {
  const container = section3ChartEls[key]
  const dot = section3DotEls[key]
  const LightweightCharts = (window as Window & { LightweightCharts?: any }).LightweightCharts
  if (!container || !LightweightCharts || !bars.length) return
  section3Charts[key]?.remove()
  const chart = LightweightCharts.createChart(container, {
    width: container.clientWidth,
    height: container.clientHeight,
    autoSize: true,
    layout: {
      background: { type: 'solid', color: 'transparent' },
      textColor: 'transparent',
      attributionLogo: false,
    },
    grid: {
      vertLines: { visible: false },
      horzLines: { visible: false },
    },
    rightPriceScale: {
      visible: false,
      borderVisible: false,
      scaleMargins: { top: 0.12, bottom: 0.18 },
    },
    leftPriceScale: { visible: false, borderVisible: false },
    timeScale: { visible: false, borderVisible: false, rightOffset: 1 },
    crosshair: {
      horzLine: { visible: false },
      vertLine: { visible: false },
    },
    handleScroll: false,
    handleScale: false,
  })
  section3Charts[key] = chart
  const series = chart.addAreaSeries({
    topColor: 'rgba(49, 159, 117, 0.25)',
    bottomColor: 'rgba(49, 159, 117, 0)',
    lineColor: '#319f75',
    lineWidth: 2,
    priceLineVisible: false,
    lastValueVisible: false,
    crosshairMarkerVisible: false,
  })
  series.setData(bars)
  chart.timeScale().fitContent()
  const updateDot = () => {
    if (!dot) return
    const last = bars[bars.length - 1]
    const x = chart.timeScale().timeToCoordinate(last.time)
    const y = series.priceToCoordinate(last.value)
    if (x == null || y == null) return
    dot.style.left = `${x}px`
    dot.style.top = `${y}px`
    dot.style.display = 'block'
  }
  section3DotUpdates[key] = updateDot
  window.setTimeout(updateDot, 50)
  chart.timeScale().subscribeVisibleTimeRangeChange(updateDot)
}

async function refreshSection3Quotes() {
  await Promise.all(section3Cards.map(async (item) => {
    const bars = await fetchQuoteBars(item.symbol)
    if (!bars.length) return
    section3Prices.value[item.key] = bars[bars.length - 1].value.toFixed(3)
    paintSection3Chart(item.key, bars)
  }))
}

const dialogVisible = ref(false);
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
      dialogPrevHtmlOverflow = document.documentElement.style.overflow || ''
      dialogPrevBodyOverflow = document.body.style.overflow || ''
      dialogPrevBodyPaddingRight = document.body.style.paddingRight || ''
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`
      dialogPrevScrollbarCompVar = document.documentElement.style.getPropertyValue('--modal-scrollbar-comp') || ''
      document.documentElement.style.setProperty('--modal-scrollbar-comp', `${Math.max(0, scrollbarWidth)}px`)

      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'

      const isAllowedTarget = (target: EventTarget | null) => {
        const el = target as HTMLElement | null
        if (!el?.closest) return false
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

function startSection3() {
  if (section3Started || typeof window === 'undefined') return
  section3Started = true
  loadLightweightCharts()
    .then(() => refreshSection3Quotes())
    .catch(() => {})
  section3RefreshTimer = window.setInterval(() => {
    refreshSection3Quotes()
  }, 30000)
  section3ResizeHandler = () => {
    Object.values(section3DotUpdates).forEach((update) => update?.())
  }
  window.addEventListener('resize', section3ResizeHandler)
}

const pcDockVisible = ref(false)
function updatePcDock() {
  const section = document.getElementById('section2')
  const desktop = window.matchMedia('(min-width: 997px)').matches
  pcDockVisible.value = Boolean(desktop && section && section.getBoundingClientRect().top <= 0)
}

onMounted(() => {
  if (typeof window === 'undefined') return
  window.addEventListener('scroll', updatePcDock, { passive: true })
  window.addEventListener('resize', updatePcDock)
  updatePcDock()
  const section = document.getElementById('section3')
  if (!section || typeof IntersectionObserver === 'undefined') {
    startSection3()
    return
  }
  section3InViewObserver = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return
    section3InViewObserver?.disconnect()
    section3InViewObserver = null
    startSection3()
  }, { rootMargin: '200px 0px' })
  section3InViewObserver.observe(section)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('scroll', updatePcDock)
  window.removeEventListener('resize', updatePcDock)
  section3InViewObserver?.disconnect()
  section3InViewObserver = null
  if (section3RefreshTimer) window.clearInterval(section3RefreshTimer)
  if (section3ResizeHandler) window.removeEventListener('resize', section3ResizeHandler)
  Object.values(section3Charts).forEach((chart) => chart?.remove())
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.body.classList.remove('register-modal-open')
  document.documentElement.classList.remove('register-modal-open')
  document.documentElement.style.overflow = ''
  document.documentElement.style.removeProperty('--modal-scrollbar-comp')
  removeDialogScrollBlockers?.()
})
</script>
<template>
<riskWarning />
  <div class="copy-trading-page" :class="[locale, { 'has-pc-dock': pcDockVisible }]">
    <topMenuNew :linkList="linkList" :showRegister="false" :registerAutoToTop="false" :showRightArrow="true"
      @register-click="openRegisterDialog"></topMenuNew>
    <section class="hero" :class="{ 'hero--zh': locale === 'zh' }">
      <div class="hero-inner">
        <h1 class="hero-title">
          <template v-for="(line, index) in heroTitleLines" :key="index">
            <br v-if="index" :class="(locale == 'zh'|| locale == 'zh-TW') ? '':'pc'">
            <span v-if="index && locale !== 'zh' && locale !== 'zh-TW'" class="hero-title-space"> </span>{{ line }}
          </template>
        </h1>
        <p class="hero-subtitle">{{ $t('word8') }}</p>
        <button class="hero-btn" type="button" @click="openRegisterDialog">
          <span class="hero-btn-pc">{{ $t('word9') }}</span>
          <span class="hero-btn-m">{{ $t('word10') }}</span>
        </button>
      </div>
      <div class="oila-jianguan">
        <jianguan theme="white" />
      </div>
    </section>

    <section id="section2" class="section2">
      <h2 class="section2-title">
        <span class="section2-title-pc" v-html="$t('s2TitlePc')"></span>
        <span class="section2-title-m">{{ $t('s2Title') }}<br v-if="$t('s2TitleEnd')">{{ $t('s2TitleEnd') }}</span>
      </h2>
      <div class="section2-grid">
        <article class="section2-card" v-for="item in section2Cards" :key="item.title">
          <div class="section2-card-copy">
            <h3>{{ $t(item.title) }}</h3>
            <p>{{ $t(item.desc) }}</p>
          </div>
          <img class="section2-card-icon" v-lazy="item.icon" alt="">
        </article>
        <img class="section2-spark" v-lazy="section2Spark" alt="">
      </div>
    </section>

    <section id="section3" class="section3">
      <h2 class="section3-title">
        <span class="section3-title-pc">{{ $t('s3TitlePc') }}</span>
        <span class="section3-title-m">{{ $t('s3Title') }}<br v-if="$t('s3TitleEnd')">{{ $t('s3TitleEnd') }}</span>
      </h2>
      <div class="section3-list">
        <article class="section3-card" v-for="item in section3Cards" :key="item.key">
          <div class="section3-main">
            <div class="section3-name">
              <h3>{{ $t(item.name) }}</h3>
              <p>{{ $t(item.desc) }}</p>
            </div>
            <div class="section3-stats">
              <div class="section3-stat">
                <strong>{{ $t('s3Amount') }}</strong>
                <span>{{ $t('s3AmountLabel') }}</span>
              </div>
              <i class="section3-split"></i>
              <div class="section3-stat">
                <strong>{{ $t('s3Leverage') }}</strong>
                <span>{{ $t('s3LeverageLabel') }}</span>
              </div>
            </div>
          </div>
          <div class="section3-quote">
            <div class="section3-quote-name">
              <p class="section3-quote-symbol">{{ $t(item.quote) }}</p>
              <p class="section3-quote-sub">{{ $t(item.quoteSub) }}</p>
            </div>
            <div class="section3-quote-market">
              <p class="section3-quote-price">{{ section3Prices[item.key] }}</p>
              <div class="section3-quote-chart" :ref="(el) => setSection3ChartEl(item.key, el)">
                <span class="section3-quote-dot" :ref="(el) => setSection3DotEl(item.key, el)"></span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="section4" class="section4">
      <h2 class="section4-title">{{ $t('s4Title') }}</h2>
      <div class="section4-panel">
        <article class="section4-feature" v-for="item in section4Features" :key="item.title">
          <img v-lazy="item.icon" alt="">
          <div class="section4-feature-copy">
            <h3 v-html="$t(item.title)"></h3>
            <p v-html="$t(item.desc)"></p>
          </div>
        </article>
      </div>
    </section>

    <ClosingSection :show-bottom-tips="locale !== 'es'" :bar-text="closingBarText" :bar-btn="closingBarBtn" @register="openRegisterDialog">
      <JoinSteps :steps="joinSteps" />
    </ClosingSection>

    <div v-show="pcDockVisible" class="pc-dock">
      <img class="pc-dock-logo" :src="footerLogo" alt="">
      <p class="pc-dock-text">{{ $t('word10') }}</p>
      <button class="pc-dock-btn" type="button" @click="openRegisterDialog">{{ closingBarBtn }}</button>
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
<footerEs />
</template>

<style>
.top-menu {
  box-shadow: none !important;
}

.top-menu .link-box a.is-active {
  font-weight: 700;
}

@media (min-width: 997px) {
  .copy-trading-page .top-menu {
    height: auto !important;
    min-height: 80rem;
  }

  .copy-trading-page .top-menu-inner {
    height: auto !important;
    min-height: 80rem;
    overflow: visible !important;
    box-sizing: border-box;
  }

  /* .copy-trading-page .top-menu-content {
    flex: 1;
    min-width: 0;
  } */

  /* .copy-trading-page .top-menu .link-box.top-menu-pc {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    flex: 1;
    width: 100%;
    min-width: 0;
    gap: 16rem;
    align-items: center;
  } */

  /* .copy-trading-page .top-menu .link-box.top-menu-pc a {
    width: 100%;
    min-width: 0;
    white-space: normal;
    overflow-wrap: break-word;
    text-align: center;
  } */
}

body.register-modal-open .top-menu {
  padding-right: var(--modal-scrollbar-comp, 0px);
  box-sizing: border-box;
}
</style>
<style lang="scss">
@use "@style/page/bestbroker.scss";

html {
  font-size: 0.052083vw !important;
}

body {
  font-size: 16rem;
  font-family: "Inter", "Noto Sans", "Noto Sans SC", sans-serif !important;
}

div {
  box-sizing: border-box;
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
    z-index: 10001 !important;
  }
}

.register-modal-panel {
  position: relative;
  width: 500rem;
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

.hero {
  position: relative;
  height: 700rem;
  overflow: hidden;
  background-color: #100205;
  background-image: url("@img/oil-trading-a/headerLogo.webp");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
}

.hero-inner {
  padding-top: 228rem;
  padding-left: 360rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hero-title {
  margin: 0;
  color: #fff;
  font-size: 56rem;
  font-weight: 700;
  line-height: 74rem;
}


.hero-title-space {
  display: none;
}

.hero-subtitle {
  margin: 24rem 0 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20rem;
  font-weight: 500;
  line-height: 30rem;
}
@media (min-width: 996px) {
  .pt .hero-title ,
  .ko .hero-title ,
  .ja .hero-title ,
  .id .hero-title ,
  .es .hero-title {
    font-size: 50rem;
    line-height: 68rem;
    max-width: 700rem
  }

  [lang="mn"] .hero-inner{
    padding-top:150rem
  }
    [lang="es"] .hero-inner ,
    [lang="pt"] .hero-inner {
    padding-top:150rem
  }
  .hero-subtitle,.hero-title {
  max-width:800rem
}
 [lang="mn"] .hero-subtitle{
  max-width: 700rem;
 }
  [lang="mn"] .hero-title {
    font-size: 48rem;
    line-height: 56rem;
  }


}
.hero-btn {
  margin-top: 52rem;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 50rem;
  padding: 0 64rem;
  border: none;
  border-radius: 59rem;
  background: #a52933;
  color: #fff;
  font-size: 16rem;
  font-weight: 500;
  line-height: 18rem;
  cursor: pointer;
}

.hero-btn:hover {
  background: #cc333f;
}

.hero-btn:active {
  background: #7b1e26;
}

.hero-btn-m {
  display: none;
}

.oila-jianguan {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 32rem;
  width: 100%;
  background: transparent;
}

.pc-dock {
  position: fixed;
  z-index: 90;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120rem;
  background: linear-gradient(87deg, #efefef 1.06%, #fff 50.14%, #efefef 103.34%);
  backdrop-filter: blur(10px);
}

.pc-dock-logo {
  position: absolute;
  left: 330rem;
  bottom: 0;
  width: 236rem;
  height: 196rem;
  object-fit: contain;
  object-position: center bottom;
  pointer-events: none;
}

.pc-dock-text {
  position: absolute;
  left: 576rem;
  top: 50%;
  max-width: 820rem;
  margin: 0;
  transform: translateY(-50%);
  color: #000;
  font-size: 36rem;
  font-weight: 700;
  line-height: 56rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pc-dock-btn {
  position: absolute;
  top: 32rem;
  right: 334rem;
  height: 56rem;
  padding: 0 40rem;
  border: 0;
  border-radius: 200rem;
  background: #a52933;
  color: #fff;
  font-size: 16rem;
  font-weight: 500;
  line-height: 24rem;
  cursor: pointer;
}

.pc-dock-btn:hover {
  background: #cc333f;
}

.pc-dock-btn:active {
  background: #7b1e26;
}

.copy-trading-page.has-pc-dock {
  padding-bottom: 120rem;
}

.section2 {
  scroll-margin-top: 80rem;
  background: #000;
  padding: 100rem 360rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80rem;
}

.section2-title {
  margin: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 48rem;
  font-weight: 700;
  line-height: 56rem;
}

.section2-title-m {
  display: none;
}

.section2-grid {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
}

.section2-card {
  box-sizing: border-box;
  height: 200rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16rem 35rem;
  border: 1rem solid rgba(255, 255, 255, 0.16);
  border-radius: 24rem;
  background: linear-gradient(180deg, rgba(26, 26, 26, 0.26) 0%, rgba(93, 35, 51, 0.26) 100%);
  overflow: hidden;
}

.section2-card-copy {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex-shrink: 0;
}

.section2-card-copy h3,
.section2-card-copy p {
  margin: 0;
}

.section2-card-copy h3 {
  color: #fff;
  font-size: 24rem;
  font-weight: 700;
  line-height: 36rem;
}

.section2-card-copy p {
  color: rgba(255, 255, 255, 0.64);
  font-size: 16rem;
  font-weight: 400;
  line-height: 24rem;
}

.section2-card-icon {
  width: 181rem;
  height: 168rem;
  object-fit: contain;
  object-position: center bottom;
  flex-shrink: 0;
}

.section2-spark {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 24rem;
  height: 23rem;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

@media (max-width: 996px) {
  html {
    font-size: 0.133333vw !important;
  }

  .pc-dock {
    display: none !important;
  }

  .copy-trading-page.has-pc-dock {
    padding-bottom: 0;
  }

  .register-modal-close-btn {
    top: 54rem;

    .icon-close {
      font-size: 32rem;
    }
  }

  .register-modal {
    padding: 32rem;
  }

  .register-modal-panel {
    width: 686rem;
    max-width: calc(100vw - 64rem);
    border-radius: 32rem;
  }

  .hero {
    height: 1232rem;
    padding-bottom: 0;
    background-color: #100205;
    background-image: url("@img/oil-trading-a/headerLogoM.webp");
    background-position: center top;
    background-size: 100% 100%;
  }

  .hero-inner {
    padding-top: 166rem;
    padding-left: 32rem;
    padding-right: 32rem;
    align-items: center;
    text-align: center;
  }

  .hero-title {
    font-size: 64rem;
    line-height: 82rem;
  }
  .hero-title .pc {
    display: none;
  }

  .hero-title-space {
    display: inline;
  }

  .hero-subtitle {
    margin-top: 16rem;
    color: #fff;
    font-size: 28rem;
    font-weight: 400;
    line-height: 42rem;
  }

  .hero-btn {
    margin-top: 48rem;
    width: 560rem;
    height: 88rem;
    padding: 0 48rem;
    border-radius: 999rem;
    font-size: 32rem;
    line-height: 48rem;
  }

  .hero-btn-pc {
    display: none;
  }

  .hero-btn-m {
    display: inline;
  }

  .oila-jianguan {
    bottom: 48rem;
  }

  .section2 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    gap: 40rem;
    padding: 80rem 32rem;
  }

  .section2-title {
    font-size: 48rem;
    line-height: 72rem;
  }

  .section2-title-pc {
    display: none;
  }

  .section2-title-m {
    display: inline;
  }

  .section2-grid {
    gap: 16rem;
  }

  .section2-card {
    height: 400rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 24rem 8rem;
    border-width: 2rem;
    border-radius: 48rem;
  }

  .section2-card-copy {
    align-items: center;
    gap: 8rem;
    text-align: center;
  }

  .section2-card-copy h3 {
    font-size: 40rem;
    line-height: 60rem;
  }

  .section2-card-copy p {
    font-size: 24rem;
    line-height: 32rem;
  }

  .section2-card-icon {
    width: 200rem;
    height: 200rem;
  }

  .section2-spark {
    width: 47rem;
    height: 46rem;
  }
}

.section3 {
  scroll-margin-top: 80rem;
  background: #f7f7f7;
  padding: 100rem 360rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80rem;
}

.section3-title {
  margin: 0;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 48rem;
  font-weight: 700;
  line-height: 56rem;
}

.section3-title-m {
  display: none;
}

.section3-list {
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 24rem;
}

.section3-card {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: stretch;
  gap: 16rem;
  padding: 20rem;
  background: #fff;
  border: 1rem solid rgba(0, 0, 0, 0.12);
  border-radius: 16rem;
}

.section3-main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20rem;
}

.section3-name,
.section3-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section3-name {
  gap: 2rem;
}

.section3-name h3,
.section3-name p,
.section3-stat strong,
.section3-stat span,
.section3-quote-symbol,
.section3-quote-sub,
.section3-quote-price {
  margin: 0;
}

.section3-name h3 {
  color: #000;
  font-size: 24rem;
  font-weight: 500;
  line-height: 36rem;
  text-align: center;
}

.section3-name p {
  color: rgba(0, 0, 0, 0.48);
  font-size: 16rem;
  font-weight: 400;
  line-height: 28rem;
  // white-space: nowrap;
  text-align: center;
}

.section3-stats {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section3-stat {
  width: auto;
}

.section3-stat strong {
  color: #5d2333;
  font-size: 32rem;
  font-weight: 700;
  line-height: 48rem;
}
@media screen and (min-width: 996px) {
  .id.copy-trading-page .top-menu .link-box.top-menu-pc a ,
  .mn.copy-trading-page .top-menu .link-box.top-menu-pc a {
      white-space: wrap;
    }
    .copy-trading-page .top-menu .link-box.top-menu-pc{
      max-width: 130%;
    }
    .ja .section3-stat strong {
      font-size: 26rem;
      line-height: 32rem;
    }
    .pt .section3-stat span ,
    .mn .section3-stat span ,
    .es .section3-stat span {
      font-size: 12rem;
    }

  }
.section3-stat span {
  color: rgba(0, 0, 0, 0.48);
  font-size: 14rem;
  font-weight: 400;
  line-height: 24rem;
  text-align: center;
}

.section3-split {
  width: 1rem;
  height: 28rem;
  background: rgba(0, 0, 0, 0.12);
  margin-inline: 15rem;
}

.section3-quote {
  flex: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24rem;
  padding: 16rem;
  border-radius: 12rem;
  background: #f7f7f7;
}

.section3-quote-name {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section3-quote-symbol {
  color: #000;
  font-size: 18rem;
  font-weight: 500;
  line-height: normal;
}

.section3-quote-sub {
  color: rgba(0, 0, 0, 0.48);
  font-size: 12rem;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  white-space: nowrap;
}

.section3-quote-market {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16rem;
}

.section3-quote-price {
  color: #000;
  font-size: 24rem;
  font-weight: 700;
  line-height: 1;
}

.section3-quote-chart {
  position: relative;
  width: 164rem;
  height: 45rem;
}

.section3-quote-chart a[href*="tradingview"] {
  display: none !important;
}

.section3-quote-dot {
  position: absolute;
  display: none;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #319f75;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 2;
}

.section4 {
  scroll-margin-top: 80rem;
  padding: 100rem 360rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56rem;
  background: linear-gradient(180deg, #000 0%, #5d2333 100%);
}

.section4-title {
  margin: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 32rem;
  font-weight: 700;
  line-height: 48rem;
}

.section4-panel {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 72rem;
  padding: 45rem 48rem;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.26);
  border: 1rem solid rgba(255, 255, 255, 0.16);
  border-radius: 24rem;
}

.section4-feature {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rem;
  min-width: 0;
}

.section4-feature img {
  width: 56rem;
  height: 49rem;
  object-fit: contain;
  display: block;
}

.section4-feature-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
  max-width: 240rem;
  min-width: 0;
  text-align: center;
}

.section4-feature-copy h3,
.section4-feature-copy p {
  margin: 0;
}

.section4-feature-copy h3 {
  width: 100%;
  color: #fff;
  font-size: 24rem;
  font-weight: 500;
  line-height: 36rem;
  white-space: normal;
  overflow-wrap: break-word;
}

.section4-feature-copy p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16rem;
  font-weight: 400;
  line-height: 24rem;
}

@media (max-width: 996px) {
  .section3 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    gap: 40rem;
    padding: 80rem 32rem;
  }

  .section3-title {
    font-size: 48rem;
    line-height: 64rem;
  }

  .section3-title-pc {
    display: none;
  }

  .section3-title-m {
    display: inline;
  }

  .section3-list {
    flex-direction: column;
    gap: 40rem;
  }

  .section3-card {
    flex-direction: column;
    align-items: stretch;
    gap: 32rem;
    padding: 40rem;
    border-width: 2rem;
    border-radius: 32rem;
  }

  .section3-main {
    gap: 40rem;
  }

  .section3-name h3 {
    font-size: 40rem;
    line-height: 60rem;
  }

  .section3-name p {
    font-size: 24rem;
    line-height: 40rem;
  }

  .section3-stat {
    width: 240rem;
    flex-shrink: 0;
  }

  .section3-stat strong,
  .section3-stat span {
    white-space: nowrap;
  }

  .section3-stat strong {
    font-size: 48rem;
    line-height: 72rem;
  }


  .section3-stat span {
    font-size: 24rem;
    line-height: 40rem;
  }
  .pt .section3-stat span ,
  .mn .section3-stat span ,
  .es .section3-stat span {
    font-size: 20rem;
    line-height: 32rem;
  }
  .section3-split {
    width: 2rem;
    height: 56rem;
  }

  .section3-quote {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16rem;
    padding: 32rem;
    border-radius: 24rem;
  }

  .section3-quote-name {
    gap: 16rem;
  }

  .section3-quote-symbol {
    font-size: 32rem;
    line-height: 40rem;
  }

  .section3-quote-sub {
    max-width: 222rem;
    font-size: 20rem;
    line-height: 28rem;
    white-space: normal;
  }

  .section3-quote-market {
    align-self: stretch;
    justify-content: space-between;
    gap: 8rem;
  }

  .section3-quote-price {
    font-size: 36rem;
    line-height: 60rem;
    color: #000;
  }

  .section3-quote-chart {
    width: 177rem;
    height: 48rem;
  }

  .section3-quote-dot {
    width: 8rem;
    height: 8rem;
  }

  .section4 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    gap: 40rem;
    padding: 80rem 32rem;
  }

  .section4-title {
    font-size: 48rem;
    line-height: 72rem;
    text-align: center;
  }

  .section4-panel {
    flex-direction: column;
    align-items: stretch;
    gap: 40rem;
    padding: 40rem;
    border-radius: 32rem;
  }

  .section4-feature {
    flex: none;
    flex-direction: row;
    align-items: flex-start;
    gap: 32rem;
  }

  .section4-feature + .section4-feature {
    padding-top: 40rem;
    border-top: 1rem solid rgba(255, 255, 255, 0.16);
  }

  .section4-feature img {
    width: 96rem;
    height: 84rem;
    flex: none;
  }

  .section4-feature-copy {
    flex: 1;
    align-items: flex-start;
    gap: 16rem;
    max-width: none;
    min-width: 0;
    text-align: left;
  }

  .section4-feature-copy h3 {
    font-size: 32rem;
    font-weight: 700;
    line-height: 48rem;
    white-space: normal;
  }

  .section4-feature-copy p {
    font-size: 28rem;
    line-height: 42rem;
  }
}

</style>
<style lang="scss" scoped>
  @media screen and (max-width: 996px) {
    ::v-deep(.register-modal-panel) {
      border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        max-width:100%!important;
        width: 100%;
      }
 ::v-deep(.register-modal) {
      align-items: flex-end;
      padding:0;
      
    }
    @media screen and (max-width: 996px) {
      :deep(.join-steps) {
        margin-bottom:40rem;
      }
  }

}
</style>
