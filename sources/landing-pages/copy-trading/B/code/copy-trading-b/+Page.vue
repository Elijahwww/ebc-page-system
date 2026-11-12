<script setup lang="ts">
import riskWarning from "@components/riskWarning.vue";
import footerEs from "@components/footerEs.vue";
import { computed, ref, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const heroTitleLines = computed(() => t('word7').split('\n').map((line) => line.trim()).filter(Boolean))

import topMenuNew from "@components/topMenuNoA.vue"
import jianguan from "@components/jianguan.vue"
import registryForm from "@components/registryFormSSR.vue";
import section2Chart from "@img/copyTradingAB/section2BLogo1.webp"
import section2Art from "@img/copyTradingAB/section2BLogo2.webp"
import section4Logo1 from "@img/copyTradingAB/section4Logo1B.png"
import section4Logo2 from "@img/copyTradingAB/section4Logo2B.png"
import section4Logo3 from "@img/copyTradingAB/section4Logo3B.png"
import section4Logo4 from "@img/copyTradingAB/section4Logo4B.png"
import SignalList from "@components/SignalList.vue"
import ClosingSection from "@components/ClosingSection.vue"
import countTo from "@components/countTo.vue"

const LOSS_DEMO = '$500'

const section4Left = [
  { icon: section4Logo1, title: 'word11', desc: 'word12' },
  { icon: section4Logo2, title: 'word13', desc: 'word14' },
]
const section4Risk = { icon: section4Logo3, title: 'word15', desc: 'word16' }
const section4Shield = { icon: section4Logo4, title: 'word17', desc: 'word18' }

const typedLoss = ref('')
const lossTyping = ref(false)
const confirmShake = ref(false)
const section4Ref = ref<HTMLElement | null>(null)
let lossTimer = 0
let lossRunning = false
let lossObserver: IntersectionObserver | null = null

function clearLossTimer() {
  if (!lossTimer) return
  window.clearTimeout(lossTimer)
  lossTimer = 0
}

function resetLossDemo() {
  typedLoss.value = ''
  lossTyping.value = false
  confirmShake.value = false
}

function runLossCycle() {
  if (!lossRunning) return
  resetLossDemo()
  lossTyping.value = true
  let index = 0
  const typeNext = () => {
    if (!lossRunning) return
    if (index < LOSS_DEMO.length) {
      typedLoss.value = LOSS_DEMO.slice(0, ++index)
      lossTimer = window.setTimeout(typeNext, 300)
      return
    }
    lossTyping.value = false
    lossTimer = window.setTimeout(() => {
      if (!lossRunning) return
      confirmShake.value = false
      requestAnimationFrame(() => {
        confirmShake.value = true
      })
      lossTimer = window.setTimeout(() => {
        confirmShake.value = false
        lossTimer = window.setTimeout(runLossCycle, 1800)
      }, 1400)
    }, 520)
  }
  lossTimer = window.setTimeout(typeNext, 840)
}

function startLossDemo() {
  if (lossRunning) return
  lossRunning = true
  runLossCycle()
}

function stopLossDemo() {
  lossRunning = false
  clearLossTimer()
  resetLossDemo()
}

const linkList = computed(() => [
  { name: t("word2"), target: "section2" },
  { name: t("word3"), target: "section3" },
  { name: t("word4"), target: "section4" },
  { name: t("word5"), target: "section5" },
])

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

onMounted(() => {
  const section = section4Ref.value
  if (!section || typeof IntersectionObserver === 'undefined') {
    startLossDemo()
    return
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typedLoss.value = LOSS_DEMO
    return
  }
  lossObserver = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) startLossDemo()
    else stopLossDemo()
  }, { threshold: 0.15 })
  lossObserver.observe(section)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  stopLossDemo()
  lossObserver?.disconnect()
  lossObserver = null
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
  <div class="copy-trading-page" :class="[locale]">
    <topMenuNew :linkList="linkList" :showRegister="false" :registerAutoToTop="false" :showRightArrow="true"
      @register-click="openRegisterDialog"></topMenuNew>
    <section class="hero" :class="{ 'hero--zh': locale === 'zh' }">
      <div class="hero-inner">
        <h1 class="hero-title">
          <template v-for="(line, index) in heroTitleLines" :key="index">
            <br v-if="index" :class="(locale == 'zh'|| locale == 'zh-TW') ? '':'pc'">
            <span v-if="index" class="hero-title-space"> </span>{{ line }}
          </template>
        </h1>
        <p class="hero-subtitle">{{ $t('word8') }}</p>
        <button class="hero-btn" type="button" @click="openRegisterDialog">
          <span class="hero-btn-pc">{{ $t('word10') }}</span>
          <span class="hero-btn-m">{{ $t('word10') }}</span>
        </button>
      </div>
    </section>

    <div class="copyb-jianguan">
      <jianguan />
    </div>

    <section id="section2" class="section2">
      <h2 class="section2-title">{{ $t('s2Title') }}</h2>
      <div class="section2-cards">
        <article class="section2-card section2-card--followers">
          <div class="section2-copy">
            <p class="section2-value"><countTo :num="4000" :duration="2000" />+</p>
            <p class="section2-label">{{ $t('s2FollowersLabel') }}</p>
          </div>
          <img class="section2-chart" :src="section2Chart" width="193" height="193" alt="">
        </article>
        <article class="section2-card section2-card--profit">
          <img class="section2-art" :src="section2Art" width="527" height="322" alt="">
          <div class="section2-copy">
            <p class="section2-value">$<countTo :num="1000000" :duration="2000" />+</p>
            <p class="section2-label">{{ $t('s2ProfitLabel') }}</p>
          </div>
        </article>
      </div>
    </section>

    <SignalList  @follow="openRegisterDialog" />

    <section id="section4" ref="section4Ref" class="section4">
      <h2 class="section4-title">{{ $t('s4Title') }}</h2>
      <div class="section4-panel">
        <div class="section4-col section4-col--left">
          <article class="section4-feature section4-feature--mode">
            <img :src="section4Left[0].icon" alt="" loading="lazy">
            <div class="section4-feature-copy">
              <h3>{{ $t(section4Left[0].title) }}</h3>
              <p>{{ $t(section4Left[0].desc) }}</p>
            </div>
          </article>
          <span class="section4-line section4-line--after-mode" aria-hidden="true"></span>
          <article class="section4-feature section4-feature--sync">
            <img :src="section4Left[1].icon" alt="" loading="lazy">
            <div class="section4-feature-copy">
              <h3>{{ $t(section4Left[1].title) }}</h3>
              <p>{{ $t(section4Left[1].desc) }}</p>
            </div>
          </article>
          <span class="section4-line section4-line--after-sync" aria-hidden="true"></span>
          <span class="section4-line section4-line--mobile" aria-hidden="true"></span>
          <article class="section4-feature section4-feature--shield">
            <img :src="section4Shield.icon" alt="" loading="lazy">
            <div class="section4-feature-copy">
              <h3>{{ $t(section4Shield.title) }}</h3>
              <p>{{ $t(section4Shield.desc) }}</p>
            </div>
          </article>
        </div>
        <div class="section4-col section4-col--right">
          <article class="section4-feature section4-feature--risk">
            <img :src="section4Risk.icon" alt="" loading="lazy">
            <div class="section4-feature-copy">
              <h3>{{ $t(section4Risk.title) }}</h3>
              <p>{{ $t(section4Risk.desc) }}</p>
            </div>
          </article>
          <div class="section4-form">
            <p class="section4-form-label">{{ $t('word19') }}</p>
            <div class="section4-form-input" aria-hidden="true">
              <span class="section4-form-value">{{ typedLoss }}<i v-show="lossTyping" class="section4-caret"></i></span>
              <span class="section4-form-hint">{{ $t('word20') }}</span>
            </div>
            <button class="section4-confirm" :class="{ 'is-shake': confirmShake }" type="button" @click="openRegisterDialog">{{ $t('word21') }}</button>
          </div>
        </div>
      </div>
    </section>

    <ClosingSection :show-bottom-tips="locale !== 'es'" @register="openRegisterDialog" />

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
  background-color: #000;
  background-image: url("@img/copyTradingAB/headerEnBgB.webp");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
}

.hero.hero--zh {
  background-image: url("@img/copyTradingAB/headerCnBgB.webp");
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
  font-size: 48rem;
  font-weight: 700;
  line-height: 60rem;
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
 
  [lang="zh-TW"] .hero-title,
  [lang="zh"] .hero-title {
    font-size: 56rem;
    line-height: 72rem;
  }

  [lang="mn"] .hero-inner,
  [lang="pt"] .hero-inner {
    padding-top:150rem
  }
  .hero-title {
  max-width:800rem
}
.hero-subtitle{
  max-width:600rem
}
 [lang="ja"] .hero-subtitle{
  max-width:560rem
    
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

.copyb-jianguan {
  background: #fff;
  padding: 48rem 0 0;
}

.section2 {
  scroll-margin-top: 80rem;
  background: #fff;
  padding: 48rem 360rem 100rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56rem;
}

.section2-title {
  margin: 0;
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 32rem;
  font-weight: 700;
  line-height: 48rem;
}

.section2-cards {
  display: flex;
  align-items: center;
  width: 100%;
}

.section2-card {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.section2-card--followers {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  height: 210rem;
  margin-right: -22rem;
  padding: 0 107rem 0 92rem;
  background: #f2f2f2;
  border-radius: 24rem 0 0 24rem;
}

.section2-card--profit {
  z-index: 2;
  flex-shrink: 0;
  width: 733rem;
  height: 262rem;
  border-radius: 24rem;
  background: linear-gradient(180deg, #2d0913 0%, #6e0e29 100%);
}

.section2-copy {
  display: flex;
  flex-direction: column;
  gap: 12rem;
}

.section2-value,
.section2-label {
  margin: 0;
}

.section2-value {
  font-size: 40rem;
  font-weight: 700;
  line-height: 36rem;
}

.section2-label {
  font-size: 16rem;
  font-weight: 400;
  line-height: 16rem;
}

.section2-card--followers .section2-value {
  color: #000;
}

.section2-card--followers .section2-label {
  color: rgba(0, 0, 0, 0.64);
}

.section2-card--profit .section2-copy {
  position: absolute;
  left: 71rem;
  top: 99rem;
}

.section2-card--profit .section2-value {
  color: #fff;
}

.section2-card--profit .section2-label {
  color: rgba(255, 255, 255, 0.64);
}

.section2-chart {
  display: block;
  width: 96rem;
  height: 96rem;
  object-fit: contain;
  flex-shrink: 0;
}

.section2-art {
  position: absolute;
  left: 417rem;
  top: 51rem;
  display: block;
  width: 264rem;
  height: 161rem;
  object-fit: contain;
}

@media (max-width: 996px) {
  html {
    font-size: 0.133333vw !important;
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
    height: auto;
    padding-bottom: 668rem;
    background-color: #000;
    background-image: url("@img/copyTradingAB/headerEnBgMB.webp");
    background-position: center bottom;
    background-size: 100% auto;
  }

  .hero.hero--zh {
    background-image: url("@img/copyTradingAB/headerCnBgMB.webp");
  }

  .hero-inner {
    padding-top: 152rem;
    padding-left: 32rem;
    padding-right: 32rem;
    align-items: center;
    text-align: center;
  }
  [lang="zh-TW"] .hero-title,
  [lang="zh"] .hero-title {
    line-height: 1.4;
  }
  .hero-title {
    font-size: 64rem;
    line-height: 1.2;
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
    line-height: 1.16;
  }

  .hero-btn {
    margin-top: 82rem;
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

  .copyb-jianguan {
    padding: 40rem 0 0;
  }

  .section2 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    gap: 40rem;
    padding: 48rem 32rem 80rem;
  }

  .section2-title {
    font-size: 48rem;
    line-height: 1.2;
  }

  .section2-cards {
    flex-direction: column;
    align-items: stretch;
  }

  .section2-card--followers {
    flex: 0 0 auto;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 52rem;
    width: 100%;
    height: 312rem;
    margin-right: 0;
    margin-bottom: -44rem;
    padding: 0 15rem;
    border-radius: 48rem 48rem 0 0;
  }

  .section2-card--profit {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52rem;
    width: 100%;
    height: 524rem;
    border-radius: 48rem;
  }

  .section2-copy {
    align-items: center;
    gap: 8rem;
  }

  .section2-card--profit .section2-copy {
    position: static;
  }

  .section2-value {
    font-size: 72rem;
    line-height: 72rem;
    text-align: center;

  }
  [lang=es] .section2-card--profit .section2-value {
    order: 2;
  }
  .section2-label {
    font-size: 24rem;
    line-height: 32rem;
    text-align: center;
  }

  .section2-chart {
    width: 151rem;
    height: 151rem;
  }

  .section2-art {
    position: static;
    width: 360rem;
    height: 220rem;
  }
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
  line-height: 48rem;
  font-weight: 700;
}

.section4-panel {
  width: 100%;
  min-height: 347rem;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 103rem;
  padding: 54rem 0;
  background: rgba(0, 0, 0, 0.26);
  border: 1rem solid rgba(255, 255, 255, 0.16);
  border-radius: 24rem;
}

.section4-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 239rem;
  gap:20rem
}

.section4-col--left {
  width: 408rem;
}

.section4-col--right {
  width: 312rem;
}

.section4-feature {
  display: flex;
  align-items: flex-start;
  gap: 16rem;
}

.section4-feature img {
  width: 48rem;
  height: 42rem;
  object-fit: contain;
  flex: none;
  display: block;
}

.section4-feature-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8rem;
  min-width: 0;
}

.section4-feature-copy h3,
.section4-feature-copy p,
.section4-form-label {
  margin: 0;
}

.section4-feature-copy h3 {
  color: #fff;
  font-size: 16rem;
  line-height: 24rem;
  font-weight: 700;
}

.section4-feature-copy p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 400;
}

.section4-line {
  display: block;
  width: 100%;
  height: 1rem;
  background: rgba(255, 255, 255, 0.16);
  flex: none;
}

.section4-line--mobile {
  display: none;
}

.section4-form {
  box-sizing: border-box;
  width: 100%;
  min-height: 166rem;
  padding: 16rem;
  border-radius: 12rem;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12rem;
}

.section4-form-label {
  color: #fff;
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 500;
}

.section4-form-input {
  height: 40rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12rem;
  padding: 0 12rem;
  border-radius: 8rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1rem solid rgba(255, 255, 255, 0.16);
}

.section4-form-value {
  min-width: 0;
  color: #fff;
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 500;
  white-space: nowrap;
}

.section4-form-hint {
  flex: none;
  color: rgba(255, 255, 255, 0.48);
  font-size: 14rem;
  line-height: 21rem;
}

.section4-caret {
  display: inline-block;
  width: 1rem;
  height: 14rem;
  margin-left: 2rem;
  background: #fff;
  vertical-align: -2rem;
  animation: section4-caret-blink 1.6s steps(1) infinite;
}

.section4-confirm {
  height: 40rem;
  border: none;
  border-radius: 999rem;
  background: #a52933;
  color: #fff;
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 500;
  cursor: pointer;
}

.section4-confirm:hover {
  background: #cc333f;
}

.section4-confirm.is-shake {
  animation: section4-confirm-shake 1.3s ease;
}

@keyframes section4-caret-blink {
  50% { opacity: 0; }
}

@keyframes section4-confirm-shake {
  0% { transform: scale(1); }
  18% { transform: scale(1.08); }
  36% { transform: scale(0.94) translateX(-3rem); }
  54% { transform: scale(1.05) translateX(3rem); }
  72% { transform: scale(0.98) translateX(-2rem); }
  100% { transform: scale(1) translateX(0); }
}

@media (max-width: 996px) {
  .section4 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    padding: 80rem 32rem;
    gap: 40rem;
  }

  .section4-title {
    font-size: 48rem;
    line-height: 1.2;
  }

  .section4-panel {
    min-height: 0;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: 40rem;
    border-radius: 32rem;
  }

  .section4-col {
    display: contents;
    width: auto;
    min-height: 0;
  }

  .section4-feature--mode { order: 1; }
  .section4-line--after-mode { order: 2; }
  .section4-feature--sync { order: 3; }
  .section4-line--after-sync { order: 4; }
  .section4-feature--risk { order: 5; }
  .section4-form { order: 6; }
  .section4-line--mobile { order: 7; display: block; }
  .section4-feature--shield { order: 8; }

  .section4-feature {
    gap: 32rem;
  }

  .section4-line {
    margin: 40rem 0;
  }

  .section4-feature img {
    width: 96rem;
    height: 84rem;
  }

  .section4-feature-copy {
    gap: 16rem;
  }

  .section4-feature-copy h3 {
    font-size: 32rem;
    line-height: 1.2;
  }

  .section4-feature-copy p,
  .section4-form-label,
  .section4-form-value,
  .section4-form-hint,
  .section4-confirm {
    font-size: 28rem;
    line-height: 1.16;
  }

  .section4-form {
    min-height: 0;
    margin-top: 40rem;
    padding: 32rem;
    border-radius: 24rem;
    gap: 24rem;
  }

  .section4-form-input,
  .section4-confirm {
    height: 80rem;
    border-radius: 16rem;
  }

  .section4-confirm {
    border-radius: 999rem;
  }

  .section4-form-input {
    padding: 0 24rem;
  }

  .section4-caret {
    width: 2rem;
    height: 28rem;
    vertical-align: -4rem;
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
 

}
</style>
