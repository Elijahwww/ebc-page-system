<script setup lang="ts">
import riskWarning from "@components/riskWarning.vue";
import footerEs from "@components/footerEs.vue";
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();
const heroTitleLines = computed(() => t('word7').split('\n').map((line) => line.trim()).filter(Boolean))

import topMenuNew from "@components/topMenuNoA.vue"
import jianguan from "@components/jianguan.vue"
import registryForm from "@components/registryFormSSR.vue";
import section2Arrow from "@img/copyTradingAB/section2RightArrow.svg"
import section2IconCross from "@img/copyTradingAB/section2IconCross.svg"
import section2IconCheck from "@img/copyTradingAB/section2IconCheck.svg"
import section4Logo1 from "@img/copyTradingAB/section4Logo1.webp"
import section4Logo2 from "@img/copyTradingAB/section4Logo2.webp"
import section4Logo3 from "@img/copyTradingAB/section4Logo3.webp"
import SignalList from "@components/SignalList.vue"
import ClosingSection from "@components/ClosingSection.vue"

type Section4Feature = {
  icon: string
  title: string
  desc?: string
  before?: string
  highlight?: string
}

const section4Features: Section4Feature[] = [
  { icon: section4Logo1, title: "s4F1Title", desc: "s4F1Desc" },
  { icon: section4Logo2, title: "s4F2Title", before: "s4F2Before", highlight: "s4F2Highlight" },
  { icon: section4Logo3, title: "s4F3Title", desc: "s4F3Desc" },
]

const linkList = computed(() => [
  { name: t("word2"), target: "section2" },
  { name: t("word3"), target: "section3" },
  { name: t("word4"), target: "section4" },
  { name: t("word5"), target: "section5" },
])

const section2Swapped = ref(false)
const section2Stage = ref<HTMLElement | null>(null)
const section2Stacked = computed(() => locale.value !== 'zh' && locale.value !== 'zh-TW')
const selfRows = computed(() => {
  const value = tm('s2SelfRows')
  return Array.isArray(value) ? value as string[][] : []
})
const ebcRows = computed(() => {
  const value = tm('s2EbcRows')
  return Array.isArray(value) ? value as string[][] : []
})

function toggleSection2() {
  section2Swapped.value = !section2Swapped.value
}

function syncSection2Height() {
  const stage = section2Stage.value
  if (!stage) return
  const isMobile = window.matchMedia('(max-width: 996px)').matches
  if (!isMobile || section2Stacked.value) {
    stage.style.height = ''
    return
  }
  const self = stage.querySelector<HTMLElement>('.section2-card--self')
  const ebc = stage.querySelector<HTMLElement>('.section2-card--ebc')
  if (!self || !ebc) return
  const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize) || 1
  const selfShift = 14 * fontSize
  stage.style.height = `${Math.max(self.offsetHeight + selfShift, ebc.offsetHeight)}px`
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

let section2ResizeObserver: ResizeObserver | null = null

onMounted(() => {
  syncSection2Height()
  window.addEventListener('resize', syncSection2Height)
  const stage = section2Stage.value
  if (stage && typeof ResizeObserver !== 'undefined') {
    section2ResizeObserver = new ResizeObserver(() => syncSection2Height())
    stage.querySelectorAll('.section2-card').forEach((card) => section2ResizeObserver?.observe(card))
  }
})

watch([selfRows, ebcRows, section2Swapped, locale], () => {
  nextTick(syncSection2Height)
})

onUnmounted(() => {
  if (typeof window === 'undefined') return
  window.removeEventListener('resize', syncSection2Height)
  section2ResizeObserver?.disconnect()
  section2ResizeObserver = null
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
          <span class="hero-btn-pc">{{ $t('word9') }}</span>
          <span class="hero-btn-m">{{ $t('word9') }}</span>
        </button>
      </div>
    </section>

    <div class="copya-jianguan">
      <jianguan />
    </div>

    <section id="section2" class="section2">
      <h2 class="section2-title">{{ $t('s2Title') }}</h2>
      <div class="section2-viewport" :class="{ 'is-stacked': section2Stacked }">
        <div ref="section2Stage" class="section2-stage" :class="{ 'is-swapped': section2Swapped, 'is-stacked': section2Stacked }">
          <article class="section2-card section2-card--self">
            <div class="section2-card-head">
              <span class="section2-badge">{{ $t('s2SelfBadge') }}</span>
              <h3>{{ $t('s2SelfTitle') }}</h3>
            </div>
            <div class="section2-list">
              <div class="section2-row" v-for="(row, rowIndex) in selfRows" :key="rowIndex">
                <span class="section2-chip" v-for="item in row" :key="item">
                  <img class="section2-chip-icon" :src="section2IconCross" alt="" loading="lazy">
                  <span>{{ item }}</span>
                </span>
              </div>
            </div>
          </article>
          <article class="section2-card section2-card--ebc">
            <div class="section2-card-head">
              <span class="section2-badge">{{ $t('s2EbcBadge') }}</span>
              <h3>{{ $t('s2EbcTitle') }}</h3>
            </div>
            <div class="section2-list">
              <div class="section2-row" v-for="(row, rowIndex) in ebcRows" :key="rowIndex">
                <span class="section2-chip" v-for="item in row" :key="item">
                  <img class="section2-chip-icon" :src="section2IconCheck" alt="" loading="lazy">
                  <span>{{ item }}</span>
                </span>
              </div>
            </div>
          </article>
          <button class="section2-arrow" type="button" aria-label="切换" @click="toggleSection2">
            <img :src="section2Arrow" alt="" loading="lazy">
          </button>
        </div>
      </div>
    </section>

    <SignalList :show-note1="true" @follow="openRegisterDialog" />

    <section id="section4" class="section4">
      <h2 class="section4-title">{{ $t('s4Title') }}</h2>
      <div class="section4-panel">
        <div class="section4-stat">
          <div class="section4-stat-profit">
            <p class="section4-stat-label">{{ $t('s4ProfitLabel') }}</p>
            <p class="section4-stat-value">{{ $t('s4Profit') }}</p>
          </div>
          <p class="section4-stat-followers">
            <span class="section4-stat-count">{{ $t('s4Followers') }}</span>
            <span class="section4-stat-count-label">{{ $t('s4FollowersLabel') }}</span>
          </p>
        </div>
        <div class="section4-features">
          <article class="section4-feature" v-for="item in section4Features" :key="item.title">
            <img :src="item.icon" alt="" loading="lazy">
            <div class="section4-feature-copy">
              <h3>{{ $t(item.title) }}</h3>
              <p>
                <template v-if="item.highlight">{{ $t(item.before || '') }}<span class="section4-highlight">{{ $t(item.highlight) }}</span></template>
                <template v-else>{{ $t(item.desc || '') }}</template>
              </p>
            </div>
          </article>
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
  background-image: url("@img/copyTradingAB/headerEnBg.webp");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% 100%;
}

.hero.hero--zh {
  background-image: url("@img/copyTradingAB/headerCnBg.webp");
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

.copya-jianguan {
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

.section2-viewport {
  width: 100%;
}

.section2-stage {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 215rem;
}

.section2-card {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 20rem;
  height: auto;
  border-radius: 24rem;
}

.section2-card--self {
  z-index: 1;
  width: 663rem;
  min-height: 201rem;
  padding: 40rem;
  background: #f7f7f7;
}

.section2-card--ebc {
  z-index: 2;
  width: 600rem;
  min-height: 215rem;
  margin-left: -63rem;
  padding: 48rem 40rem;
  background: linear-gradient(180deg, #2d0913 0%, #6e0e29 100%);
}

.section2-card-head {
  display: flex;
  align-items: center;
  gap: 8rem;
}

.section2-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  border-radius: 2rem 2rem 2rem 0;
  transform: skewX(-8deg);
  font-size: 12rem;
  font-weight: 400;
  line-height: 20rem;
  white-space: nowrap;
}

.section2-card--self .section2-badge {
  background: #e0e0e0;
  color: rgba(0, 0, 0, 0.64);
}

.section2-card--ebc .section2-badge {
  background: #ff4b4e;
  color: #fff;
}

.section2-card h3 {
  margin: 0;
  font-size: 18rem;
  font-weight: 700;
  line-height: 27rem;
}

.section2-card--self h3 {
  color: rgba(0, 0, 0, 0.64);
}

.section2-card--ebc h3 {
  color: #fff;
}

.section2-list {
  display: flex;
  flex-direction: column;
  gap: 12rem;
  width: 100%;
}

.section2-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12rem;
  width: 100%;
}

.section2-chip {
  display: inline-flex;
  align-items: flex-start;
  gap: 4rem;
  max-width: 100%;
  padding: 4rem 8rem;
  border-radius: 8rem;
  font-weight: 400;
}

.section2-chip span {
  min-width: 0;
}

.section2-card--self .section2-chip {
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.64);
  font-size: 14rem;
  line-height: 21rem;
}

.section2-card--ebc .section2-chip {
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  
  line-height: 20rem;
}

.section2-chip-icon {
  width: 10rem;
  height: 10rem;
  margin-top: 5rem;
  flex-shrink: 0;
}

.section2-arrow {
  display: none;
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
    background-image: url("@img/copyTradingAB/headerEnBgM.webp");
    background-position: center bottom;
    background-size: 100% auto;
  }

  .hero.hero--zh {
    background-image: url("@img/copyTradingAB/headerCnBgM.webp");
  }

  .hero-inner {
    padding-top: 152rem;
    padding-left: 32rem;
    padding-right: 32rem;
    align-items: center;
    text-align: center;
  }

  .hero-title {
    font-size: 64rem;
    line-height: 1.2;
  }
  [lang="zh-TW"] .hero-title,
  [lang="zh"] .hero-title {
    line-height: 1.4;
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

  .copya-jianguan {
    padding: 40rem 0 0;
  }

  .section2 {
    scroll-margin-top: 88rem;
    align-items: stretch;
    gap: 40rem;
    padding: 48rem 32rem 80rem;
    overflow: hidden;
  }

  .section2-title {
    font-size: 48rem;
    line-height: 1.2;
  }

  .section2-viewport {
    width: calc(100% + 32rem);
    margin-right: -32rem;
  }

  .section2-stage {
    display: block;
    height: auto;
    min-height: 504rem;
  }

  .section2-card {
    position: absolute;
    gap: 24rem;
    border-radius: 32rem;
    transition: transform 0.4s ease;
  }

  .section2-card--self {
    width: 388rem;
    min-height: 476rem;
    margin-left: 0;
    padding: 40rem;
    transform: translate(0, 14rem);
  }

  .section2-card--ebc {
    width: 444rem;
    min-height: 504rem;
    margin-left: 0;
    padding: 40rem;
    justify-content: flex-start;
    transform: translate(316rem, 0);
  }

  .section2-stage.is-swapped .section2-card--self {
    transform: translate(372rem, 14rem);
  }

  .section2-stage.is-swapped .section2-card--ebc {
    transform: translate(0, 0);
  }

  .section2-card-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16rem;
  }

  .section2-badge {
    font-size: 20rem;
    line-height: 1.2;
    padding: 4rem 8rem;
    max-width: 50%;
    white-space:wrap
  }

  .section2-card h3 {
    font-size: 36rem;
    line-height: 1.2;
    white-space: normal;
  }

  .section2-list {
    gap: 16rem;
  }

  .section2-row {
    display: contents;
  }

  .section2-chip {
    padding: 0;
    border: none !important;
    border-radius: 0;
    gap: 8rem;
    align-items: flex-start;
  }

  .section2-card--self .section2-chip,
  .section2-card--ebc .section2-chip {
    font-size: 24rem;
    line-height: 1.16;
  }

  .section2-chip-icon {
    width: 20rem;
    height: 20rem;
    margin-top: 2rem;
  }

  .section2-arrow {
    display: block;
    position: absolute;
    z-index: 3;
    left: 266rem;
    top: 50rem;
    width: 44rem;
    height: 44rem;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: left 0.4s ease, top 0.4s ease;
  }

  .section2-arrow img {
    width: 18rem;
    height: 20rem;
    display: block;
  }

  .section2-stage.is-swapped .section2-arrow {
    left: 322rem;
    top: 40rem;
  }

  .section2-stage.is-swapped .section2-arrow img {
    filter: invert(1);
  }

  .section2-viewport.is-stacked {
    width: 100%;
    margin-right: 0;
  }

  .section2-stage.is-stacked {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: auto;
    min-height: 0;
  }

  .section2-stage.is-stacked .section2-card {
    position: relative;
    width: 100%;
    min-height: 0;
    transform: none;
  }

  .section2-stage.is-stacked .section2-card--self {
    z-index: 1;
    padding: 40rem 40rem 80rem;
    border-radius: 32rem 32rem 0 0;
    margin-bottom: -40rem;
  }

  .section2-stage.is-stacked .section2-card--ebc {
    z-index: 2;
    padding: 40rem;
    border-radius: 32rem;
  }

  .section2-stage.is-stacked .section2-badge {
    max-width: none;
  }

  .section2-stage.is-stacked .section2-list {
    gap: 16rem;
  }



  .section2-stage.is-stacked .section2-arrow {
    display: none;
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
  min-height: 227rem;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.26);
  border: 1rem solid rgba(255, 255, 255, 0.16);
  border-radius: 24rem;
}

.section4-stat {
  width: 340rem;
  flex: none;
  margin: -1rem 0 -1rem -1rem;
  padding: 20rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24rem;
  border-radius: 24rem;
  background-color: #f9e5b7;
  background-image: url("@img/copyTradingAB/section4BgM.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.section4-stat-profit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;
}

.section4-stat-label,
.section4-stat-value,
.section4-stat-count,
.section4-stat-count-label,
.section4-feature-copy h3,
.section4-feature-copy p {
  margin: 0;
}

.section4-stat-label {
  color: #000;
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 400;
  text-align: center;
}

.section4-stat-value {
  color: #5d2333;
  font-size: 40rem;
  line-height: 48rem;
  font-weight: 700;
  text-align: center;
}

.section4-stat-followers {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  text-align: center;
}

.section4-stat-count {
  color: #000;
  font-size: 24rem;
  line-height: 36rem;
  font-weight: 700;
}

.section4-stat-count-label {
  color: #000;
  font-size: 14rem;
  line-height: 21rem;
  font-weight: 400;
}

.section4-features {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 24rem 24rem 24rem 0;
}

.section4-feature {
  width: 220rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rem;
}

.section4-feature img {
  width: 48rem;
  height: auto;
  display: block;
}

.section4-feature-copy {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
  text-align: center;
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

.section4-highlight {
  display: block;
  color: #ff4b4e;
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
    gap: 40rem;
    background: none;
    border: none;
    border-radius: 0;
  }

  .section4-stat {
    width: auto;
    margin: 0;
    align-items: flex-start;
    gap: 32rem;
    padding: 40rem;
    border-radius: 32rem;
    background-image: url("@img/copyTradingAB/section4Bg.webp");
  }

  .section4-stat-profit {
    align-items: flex-start;
    gap: 32rem;
  }

  .section4-stat-label {
    font-size: 24rem;
    line-height: 40rem;
    text-align: left;
  }

  .section4-stat-value {
    font-size: 80rem;
    line-height: 96rem;
    text-align: left;
  }

  .section4-stat-followers {
    flex-direction: row;
    align-items: baseline;
    gap: 8rem;
    text-align: left;
  }

  .section4-stat-count,
  .section4-stat-count-label {
    font-size: 32rem;
    line-height: 1.16;
  }

  .section4-features {
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 0;
    padding: 40rem;
    background: rgba(0, 0, 0, 0.26);
    border: 1rem solid rgba(255, 255, 255, 0.16);
    border-radius: 32rem;
  }

  .section4-feature {
    width: auto;
    flex-direction: row;
    align-items: flex-start;
    gap: 40rem;
  }

  .section4-feature + .section4-feature {
    margin-top: 40rem;
    padding-top: 40rem;
    border-top: 1rem solid rgba(255, 255, 255, 0.16);
  }

  .section4-feature img {
    width: 96rem;
    flex: none;
  }

  .section4-feature-copy {
    flex: 1;
    align-items: flex-start;
    gap: 16rem;
    min-width: 0;
    text-align: left;
  }

  .section4-feature-copy h3 {
    font-size: 32rem;
    line-height: 1.16;
  }

  .section4-feature-copy p {
    font-size: 28rem;
    line-height: 1.16;
  }

  .section4-highlight {
    display: inline;
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
