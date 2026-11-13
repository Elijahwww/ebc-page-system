<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useI18n } from "vue-i18n";

import topMenu from "@components/topMenuNoA.vue";
import registryFormCn from "@components/registryFormSSRAPP.vue";
import registryFormTw from "@components/registryFormSSRAPPGlobal.vue";
import bottomTips from "@components/bottomTips.vue";

import titleCN from "@img/double11-2026/zh_CN/title.webp";
import titleTW from "@img/double11-2026/zh_TW/title.webp";
import good1 from "@img/double11-2026/section2_good1.webp";
import good1M from "@img/double11-2026/section2_good1_mobile.webp";
import good2 from "@img/double11-2026/section2_good2.webp";
import good2M from "@img/double11-2026/section2_good2_mobile.webp";
import good3 from "@img/double11-2026/section2_good3.webp";
import good3M from "@img/double11-2026/section2_good3_mobile.webp";
import good3Tw from "@img/double11-2026/section2_good3_tw.webp";
import good3TwM from "@img/double11-2026/section2_good3_tw_mobile.webp";
import good4 from "@img/double11-2026/section2_good4.webp";
import good4M from "@img/double11-2026/section2_good4_mobile.webp";
import good4Tw from "@img/double11-2026/section2_good4_tw.webp";
import good4TwM from "@img/double11-2026/section2_good4_tw_mobile.webp";
import good5 from "@img/double11-2026/section2_good5.webp";
import good5M from "@img/double11-2026/section2_good5_mobile.webp";
import good5Tw from "@img/double11-2026/section2_good5_tw.webp";
import good5TwM from "@img/double11-2026/section2_good5_tw_mobile.webp";
import card1 from "@img/double11-2026/section3_card1.webp";
import card2 from "@img/double11-2026/section3_card2.webp";
import card3 from "@img/double11-2026/section3_card3.webp";
import card4 from "@img/double11-2026/section3_card4.webp";
import card5 from "@img/double11-2026/section3_card5.webp";
import card1Tw from "@img/double11-2026/section3_card1_tw.webp";
import card2Tw from "@img/double11-2026/section3_card2_tw.webp";
import card3Tw from "@img/double11-2026/section3_card3_tw.webp";
import card4Tw from "@img/double11-2026/section3_card4_tw.webp";
import card5Tw from "@img/double11-2026/section3_card5_tw.webp";
import icon1 from "@img/double11-2026/section4_icon1.webp";
import icon2 from "@img/double11-2026/section4_icon2.webp";
import icon3 from "@img/double11-2026/section4_icon3.webp";
import leftImg from "@img/double11-2026/left_img1.webp";
import leftImgM from "@img/double11-2026/left_img1_mobile.webp";
import rightImg from "@img/double11-2026/right_img1.webp";
import rightImgM from "@img/double11-2026/right_img1_mobile.webp";
import starBalloon from "@img/double11-2026/star_y.webp";

const { t, tm, locale } = useI18n();

const isMobile = ref(false);
const isTw = computed(() => locale.value === "zh-TW");
const registryForm = computed(() => (isTw.value ? registryFormTw : registryFormCn));
const titleImg = computed(() => (isTw.value ? titleTW : titleCN));

type PrizeText = { tag: string; name: string };
type StepText = { title: string; desc: string };

const prizeVisuals = computed(() => {
  const tw = isTw.value;
  return [
    { size: "lg", pc: good1, mobile: good1M },
    { size: "lg", pc: good2, mobile: good2M },
    { size: "sm", pc: tw ? good3Tw : good3, mobile: tw ? good3TwM : good3M },
    { size: "sm", pc: tw ? good4Tw : good4, mobile: tw ? good4TwM : good4M },
    { size: "sm", pc: tw ? good5Tw : good5, mobile: tw ? good5TwM : good5M },
  ];
});

const prizes = computed(() => {
  const texts = tm("prizes") as PrizeText[];
  return prizeVisuals.value.map((visual, index) => ({
    ...visual,
    tag: texts[index]?.tag ?? "",
    name: texts[index]?.name ?? "",
  }));
});

const ticketImgs = computed(() =>
  isTw.value
    ? [card1Tw, card2Tw, card3Tw, card4Tw, card5Tw]
    : [card1, card2, card3, card4, card5],
);
const tickets = computed(() => {
  const lots = tm("lots") as string[];
  return ticketImgs.value.map((img, index) => ({
    img,
    lot: lots[index] ?? "",
  }));
});

const stepIcons = [icon1, icon2, icon3];
const steps = computed(() => {
  const list = tm("steps") as StepText[];
  return list.map((item, index) => ({
    title: item?.title ?? "",
    desc: item?.desc ?? "",
    icon: stepIcons[index],
  }));
});

const rules = computed(() => tm("rules") as string[]);

function syncScreen() {
  isMobile.value = window.innerWidth <= 996;
}

function toForm() {
  document.querySelector(".section1 .section-form")?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

const SPARK_COLORS = [
  "#fffdfb",
  "#fff6f4",
  "#fff9f6",
  "#ffeef1",
  "#ffd6dc",
  "#ffe4ea",
  "#e9ccd2",
  "#fff2e5",
  "#ffe3ce",
  "#f9c9a7",
  "#f6c7b4",
  "#f3b7a4",
  "#ffc3cc",
  "#ffb4c0",
  "#ff8fa0",
  "#f3a8b4",
  "#e7a0ae",
  "#e07080",
  "#d98a98",
  "#ff4b4e",
  "#d45d6e",
  "#c45b6e",
  "#b6404b",
  "#aa6879",
  "#9e596b",
  "#925365",
  "#8a4a59",
  "#75414f",
  "#849cd8",
  "#546cc0",
  "#4860b4",
  "#c48ad8",
  "#a854cc",
  "#8430a8",
  "#f0d090",
  "#d89030",
  "#c06c0c",
];

const balloonOn = ref(false);
const cursorEl = ref<HTMLElement | null>(null);
const sparkLayerEl = ref<HTMLElement | null>(null);

let rafId = 0;
let hasPointer = false;
let cursorX = 0;
let cursorY = 0;
let prevCursorX = 0;
let prevCursorY = 0;
let velX = 0;
let velY = 0;
let spawnDebt = 0;
let sparkCount = 0;

const CURSOR_SIZE = 32;
const MAX_SPARKS = 150;

function canFollowPointer() {
  return window.innerWidth > 996 && window.matchMedia("(pointer: fine)").matches;
}

function spawnSpark(x: number, y: number, kind: "trail" | "burst") {
  const layer = sparkLayerEl.value;
  if (!layer) return;
  if (sparkCount >= MAX_SPARKS) {
    layer.firstElementChild?.remove();
    sparkCount = Math.max(0, sparkCount - 1);
  }

  const el = document.createElement("i");
  el.className = `d11-spark iconfont icon-actived ${kind}`;
  el.setAttribute("aria-hidden", "true");

  const burst = kind === "burst";
  const angle = burst
    ? Math.random() * Math.PI * 2
    : Math.atan2(velY, velX) + Math.PI + (Math.random() - 0.5) * 0.9;
  const dist = burst ? 46 + Math.random() * 120 : 8 + Math.random() * 28;
  const dx = Math.cos(angle) * dist;
  const rise = burst ? -(18 + Math.random() * 78) : -(2 + Math.random() * 16);
  const fall = (burst ? 70 : 48) + Math.random() * 90;
  const rot = (Math.random() - 0.5) * (burst ? 220 : 120);
  const size = burst ? 11 + Math.random() * 7 : 9 + Math.random() * 6;

  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.color = SPARK_COLORS[(Math.random() * SPARK_COLORS.length) | 0];
  el.style.fontSize = `${size}px`;
  el.style.setProperty("--dx", `${dx.toFixed(1)}px`);
  el.style.setProperty("--rise", `${rise.toFixed(1)}px`);
  el.style.setProperty("--fall", `${fall.toFixed(1)}px`);
  el.style.setProperty("--rot", `${rot.toFixed(1)}deg`);
  el.style.animationDuration = `${(burst ? 980 : 1100) + Math.random() * 500}ms`;

  layer.appendChild(el);
  sparkCount += 1;
  el.addEventListener(
    "animationend",
    () => {
      el.remove();
      sparkCount = Math.max(0, sparkCount - 1);
    },
    { once: true },
  );
}

function tick() {
  if (!balloonOn.value) {
    rafId = 0;
    return;
  }

  velX = cursorX - prevCursorX;
  velY = cursorY - prevCursorY;
  prevCursorX = cursorX;
  prevCursorY = cursorY;

  if (cursorEl.value) {
    cursorEl.value.style.transform = `translate3d(${cursorX.toFixed(2)}px, ${cursorY.toFixed(2)}px, 0)`;
  }

  const speed = Math.hypot(velX, velY);
  if (speed > 0.8) {
    spawnDebt += speed;
    const tailX = cursorX + CURSOR_SIZE * 0.5;
    const tailY = cursorY + CURSOR_SIZE * 0.72;
    while (spawnDebt > 25.6) {
      spawnDebt -= 25.6;
      spawnSpark(
        tailX + (Math.random() - 0.5) * 8,
        tailY + (Math.random() - 0.5) * 4,
        "trail",
      );
    }
  } else {
    spawnDebt = 0;
  }

  rafId = requestAnimationFrame(tick);
}

function ensureLoop() {
  if (!rafId) rafId = requestAnimationFrame(tick);
}

function setBalloonCursor(active: boolean) {
  document.documentElement.classList.toggle("d11-balloon-cursor", active);
}

function onPointerMove(event: MouseEvent) {
  if (!canFollowPointer()) {
    balloonOn.value = false;
    hasPointer = false;
    setBalloonCursor(false);
    return;
  }
  cursorX = event.clientX;
  cursorY = event.clientY;
  if (!hasPointer) {
    hasPointer = true;
    prevCursorX = cursorX;
    prevCursorY = cursorY;
    velX = 0;
    velY = 0;
    spawnDebt = 0;
  }
  balloonOn.value = true;
  setBalloonCursor(true);
  ensureLoop();
}

function onPointerOut(event: MouseEvent) {
  if (event.relatedTarget) return;
  balloonOn.value = false;
  hasPointer = false;
  setBalloonCursor(false);
}

function onPointerDown(event: MouseEvent) {
  if (!balloonOn.value || !hasPointer || event.button !== 0) return;
  const cursor = cursorEl.value;
  if (!cursor) return;
  cursor.classList.remove("pressing");
  void cursor.offsetWidth;
  cursor.classList.add("pressing");
  for (let i = 0; i < 18; i += 1) {
    spawnSpark(
      cursorX + CURSOR_SIZE * 0.5 + (Math.random() - 0.5) * 8,
      cursorY + CURSOR_SIZE * 0.48 + (Math.random() - 0.5) * 8,
      "burst",
    );
  }
}

function onBalloonAnim(event: AnimationEvent) {
  if (event.animationName !== "d11-balloon-pop") return;
  (event.currentTarget as HTMLElement).classList.remove("pressing");
}

onMounted(() => {
  syncScreen();
  window.addEventListener("resize", syncScreen);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseout", onPointerOut);
  window.addEventListener("mousedown", onPointerDown);
});

onUnmounted(() => {
  window.removeEventListener("resize", syncScreen);
  window.removeEventListener("mousemove", onPointerMove);
  window.removeEventListener("mouseout", onPointerOut);
  window.removeEventListener("mousedown", onPointerDown);
  if (rafId) cancelAnimationFrame(rafId);
  sparkLayerEl.value?.replaceChildren();
  setBalloonCursor(false);
});
</script>

<template>
  <div class="double11-2026" :class="locale">
    <section class="section1">
      <topMenu
        :link-list="tm('linkList')"
        :show-register="false"
        color-type="normal"
      />
      <div class="section1-main">
        <div class="hero-copy">
          <img class="title-img" :src="titleImg" alt="" />
          <p class="subtitle" v-html="t('subtitle')"></p>
          <div class="date">{{ t("date") }}</div>
        </div>
        <div class="section1-form">
          <client-only>
            <component :is="registryForm" />
          </client-only>
        </div>
      </div>
    </section>

    <div class="page-main">
      <img class="side side-right side-pc" :src="rightImg" alt="" />
      <img class="side side-right side-m" :src="rightImgM" alt="" />
      <img class="side side-left side-pc" :src="leftImg" alt="" />
      <img class="side side-left side-m" :src="leftImgM" alt="" />

      <section id="section2" class="section2">
        <i class="star s1 iconfont icon-Vector"></i>
        <i class="star s2 iconfont icon-Vector"></i>
        <i class="star s3 iconfont icon-Vector"></i>
        <i class="star s4 iconfont icon-Vector"></i>
        <i class="star s5 iconfont icon-Vector"></i>
        <div class="inner">
          <div class="section-head">
            <h2 class="section-title">{{ t("section2Title") }}</h2>
            <p class="section-desc">{{ t("section2Desc") }}</p>
          </div>
          <div class="cards">
            <div class="card-row card-row-lg">
              <article
                v-for="item in prizes.slice(0, 2)"
                :key="item.name"
                class="card"
                :class="item.size"
              >
                <img class="good good-pc" :src="item.pc" alt="" />
                <img class="good good-m" :src="item.mobile" alt="" />
                <div class="card-text">
                  <span class="tag">{{ item.tag }}</span>
                  <p class="name">{{ item.name }}</p>
                </div>
              </article>
            </div>
            <div class="card-row card-row-sm">
              <article
                v-for="item in prizes.slice(2)"
                :key="item.name"
                class="card"
                :class="item.size"
              >
                <img class="good good-pc" :src="item.pc" alt="" />
                <img class="good good-m" :src="item.mobile" alt="" />
                <div class="card-text">
                  <span class="tag">{{ item.tag }}</span>
                  <p class="name">{{ item.name }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="section3" class="section3">
        <i class="star s1 iconfont icon-Vector"></i>
        <i class="star s2 iconfont icon-Vector"></i>
        <div class="inner">
          <div class="section-head">
            <h2 class="section-title">{{ t("section3Title") }}</h2>
            <p class="section-desc">{{ t("section3Desc") }}</p>
          </div>
          <div class="ticket-row">
            <article v-for="item in tickets" :key="item.lot" class="ticket">
              <img :src="item.img" alt="" />
              <span class="lot">{{ item.lot }}</span>
            </article>
          </div>
          <client-only>
            <swiper
              v-if="isMobile"
              class="ticket-swiper"
              slides-per-view="auto"
              :space-between="0"
            >
              <swiper-slide v-for="item in tickets" :key="item.lot">
                <article class="ticket">
                  <img :src="item.img" alt="" />
                  <span class="lot">{{ item.lot }}</span>
                </article>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </section>

      <section id="section4" class="section4">
        <i class="star s1 iconfont icon-Vector"></i>
        <i class="star s2 iconfont icon-Vector"></i>
        <div class="inner">
          <div class="section-head">
            <h2 class="section-title">{{ t("section4Title") }}</h2>
          </div>
          <div class="steps">
            <template v-for="(item, index) in steps" :key="item.title">
              <article class="step">
                <img class="step-icon" :src="item.icon" alt="" />
                <div class="step-text">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.desc }}</p>
                </div>
              </article>
            </template>
          </div>
          <button type="button" class="join-btn" @click="toForm">
            {{ t("joinBtn") }}
            <i class="iconfont icon-youjiantou" aria-hidden="true"></i>
          </button>
        </div>
      </section>

      <section id="section5" class="section5">
        <div class="inner">
          <div class="section-head">
            <h2 class="section-title">{{ t("section5Title") }}</h2>
          </div>
          <ul class="rules">
            <li v-for="(item, index) in rules" :key="index">{{ item }}</li>
          </ul>
        </div>
      </section>

      <div class="bottom-box">
        <bottomTips />
      </div>
    </div>

    <client-only>
      <Teleport to="body">
        <div ref="sparkLayerEl" class="d11-spark-layer" aria-hidden="true"></div>
        <div
          v-show="balloonOn"
          ref="cursorEl"
          class="d11-cursor"
          @animationend="onBalloonAnim"
        >
          <img :src="starBalloon" alt="" />
        </div>
      </Teleport>
    </client-only>
  </div>
</template>

<style lang="scss">
@use "@style/page/bestbroker.scss";

.double11-2026 {
  max-width: 1920rem;
  margin: 0 auto;
  overflow: hidden;
  background: #070203;
  color: #fff;

  .side-m {
    display: none;
  }

  @media (max-width: 996px) {
    .side-pc {
      display: none;
    }

    .side-m {
      display: block;
    }
  }

  .private .innerHref {
    color: rgba(255, 255, 255, 0.67);
    cursor: pointer;
}
}

.page-main {
  position: relative;

  .side {
    position: absolute;
    z-index: 3;
    height: auto;
    pointer-events: none;
  }

  .side-right {
    top: 437rem;
    right: 0;
    width: 350rem;
  }

  .side-left {
    top: 892rem;
    left: 0;
    width: 362rem;
  }

  @media (max-width: 996px) {
    .side-right {
      top: -140rem;
      width: 185rem;
    }

    .side-left {
      top: 1520rem;
      width: 190rem;
    }
  }
}

.section1 {
  position: relative;
  height: 940rem;
  background: #000 url("@img/double11-2026/zh_CN/section1.webp") top center /
    100% 100% no-repeat;

  .zh-TW & {
    background-image: url("@img/double11-2026/zh_TW/section1.webp");
  }

  .section1-main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    height: 100%;
    max-width: 1920rem;
    margin: 0 auto;
    padding: 80rem 360rem 0;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 520rem;
    height: 100%;
  }

  .title-img {
    margin-top: 65rem;
    display: block;
    width: 474rem;
    height: auto;
  }

  .subtitle {
    margin: 12rem 0 0;
    color: #fff;
    font-size: 32rem;
    font-weight: 700;
    line-height: 42rem;
    text-align: center;

    .hl {
      color: #ff4b4e;
    }
  }

  .date {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 372rem;
    height: 44rem;
    margin-top: auto;
    margin-bottom: 72rem;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 40rem;
    background: rgba(0, 0, 0, 0.2);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background:
        radial-gradient(
          42% 160% at 0% 0%,
          rgba(255, 255, 255, 0.92) 0%,
          rgba(255, 255, 255, 0.22) 34%,
          transparent 58%
        ),
        radial-gradient(
          42% 160% at 100% 100%,
          rgba(255, 255, 255, 0.7) 0%,
          rgba(255, 255, 255, 0.16) 34%,
          transparent 58%
        );
      pointer-events: none;
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }
    color: #fff;
    font-size: 20rem;
    font-weight: 500;
    line-height: 1;
  }

  .section1-form {
    display: flex;
    align-items: center;
    align-self: stretch;
  }

  .section-form {
    width: 443rem;
    padding: 48rem 32rem;
    border: 0;
    border-radius: 16rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.15) 100%
    );
    backdrop-filter: blur(54rem);
    -webkit-backdrop-filter: blur(54rem);

    h2 {
      width: 100%;
      color: #fff;
      font-size: 24rem;
      font-weight: 700;
      line-height: 40rem;
      text-align: center;
    }

    .form-box {
      display: flex;
      align-items: center;
      gap: 8rem;
      box-sizing: border-box;
      width: 100%;
      min-height: 48rem;
      margin-top: 16rem;
      padding: 0 16rem;
      border: 0;
      border-radius: 8rem;
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    .form-box.checkCodeChoose {
      align-self: flex-start;
      width: 148rem !important;
      height: 48rem !important;
      min-height: 48rem !important;
      padding: 4rem !important;
      background: rgba(255, 255, 255, 0.1) !important;

      div {
        border-radius: 6rem;
        background: transparent;
        color: #fff;
      }

      div.active {
        background: rgba(255, 255, 255, 0.18);
      }

      svg {
        width: 22rem !important;
        height: auto !important;
      }

      svg path {
        fill: #fff;
      }
    }

    .el-select {
      width: 100% !important;
    }

    .form-box:has(.phone) .el-select {
      flex: 0 0 88rem;
      width: 88rem !important;
    }

    .el-select__wrapper {
      min-height: 48rem;
      padding: 0;
      background: transparent;
      box-shadow: none !important;
    }

    .el-select__placeholder,
    .el-select__selected-item,
    .el-select__input,
    .is-transparent {
      color: #fff !important;
      font-size: 14rem;
    }

    .el-select__caret {
      color: rgba(255, 255, 255, 0.64);
    }

    .split {
      width: 1px;
      height: 20rem;
      background: rgba(255, 255, 255, 0.24);
    }

    input,
    .phone,
    .email,
    .norInput {
      flex: 1;
      width: 100%;
      height: auto;
      padding: 12rem 0 !important;
      border: 0;
      outline: none;
      background: transparent;
      color: #fff;
      font-size: 14rem;
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.48);
    }

    .form-box svg {
      width: 24rem;
      height: 24rem;
      color: #fff;
    }

    .form-box svg path {
      fill: currentColor;
    }

    .passwordRequest {
      display: flex;
      flex-wrap: wrap;
      gap: 8rem;
      margin-top: 8rem;

      div {
        padding: 4rem 6rem;
        border-radius: 4rem;
        background: rgba(255, 255, 255, 0.08);
        color: rgba(255, 255, 255, 0.64);
        font-size: 10rem;
      }
    }

    .sendVerify {
      color: rgba(255, 255, 255, 0.64);
      font-size: 14rem;
      white-space: nowrap;
    }

    .btn-join {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 48rem;
      margin-top: 16rem;
      border-radius: 999rem;
      background: #a52933;
      color: #fff;
      font-size: 16rem;
      font-weight: 400;
      line-height: 24rem;
      text-decoration: none;
    }

    .hasAccount {
      margin-top: 16rem;
      color: #fff;
      font-size: 14rem;
      line-height: 22rem;
      text-align: center;
    }
    .private{
      margin-top: 16rem;
    }

  }

  @media (max-width: 996px) {
    height: auto;
    min-height: 1873rem;
    background-color: #000;
    background-image: url("@img/double11-2026/zh_CN/section1_mobile.webp");
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% auto;

    .zh-TW & {
      background-image: url("@img/double11-2026/zh_TW/section1_mobile.webp");
    }

    .section1-main {
      flex-direction: column;
      align-items: center;
      height: auto;
      padding: 154rem 25rem 48rem;
    }

    .hero-copy {
      width: 100%;
      height: auto;
    }

    .title-img {
      margin-top: 0;
      width: 474rem;
    }

    .subtitle {
      margin-top: 8rem;
      font-size: 32rem;
      line-height: 47rem;
    }

    .date {
      width: 468rem;
      height: 48rem;
      margin-top: 430rem;
      margin-bottom: 0;
      font-size: 24rem;
    }

    .section1-form {
      display: block;
      align-self: auto;
      width: 100%;
      height: auto;
    }

    .section-form {
      width: 100%;
      margin-top: 22rem;
      padding: 48rem 38rem;
      border-radius: 24rem;

      h2 {
        margin-bottom: 40rem;
        font-size: 40rem;
        line-height: 56rem;
      }

      .form-box {
        min-height: 86rem;
        margin-top: 26rem;
        padding: 0 28rem;
        border-radius: 16rem;
      }

      .form-box.checkCodeChoose {
        width: 220rem !important;
        height: 80rem !important;
        min-height: 80rem !important;
        padding: 8rem !important;
        border-radius: 16rem !important;

        svg {
          width: 36rem !important;
        }
      }

      .form-box:has(.phone) .el-select {
        flex-basis: 140rem;
        width: 140rem !important;
      }

      .el-select__wrapper {
        min-height: 86rem;
      }

      .el-select__placeholder,
      .el-select__selected-item,
      .el-select__input,
      .is-transparent,
      input,
      .phone,
      .email,
      .norInput {
        font-size: 28rem;
      }

      input[type="password"] {
        font-size: 28rem !important;
      }

      .split {
        height: 34rem;
      }

      .sendVerify,
      .hasAccount,
      .private {
        font-size: 28rem;
        line-height: 37rem;
      }

      .btn-join {
        height: 81rem;
        margin-top: 54rem;
        font-size: 28rem;
      }

      .passwordRequest div {
        font-size: 20rem;
      }
    }
  }
}

.section2 {
  position: relative;
  z-index: 1;
  padding: 100rem 0 40rem;
  scroll-margin-top: 100rem;

  .star {
    position: absolute;
    z-index: 2;
    color: #794554;
    font-style: italic;
    line-height: 1;
    pointer-events: none;
  }

  .s1 {
    top: 167rem;
    left: 195rem;
    color: #794554;
    font-size: 23rem;
  }

  .s2 {
    top: 195rem;
    left: 206rem;
    color: #aa6879;
    font-size: 44rem;
  }

  .s3 {
    top: 249rem;
    right: 190rem;
    color: #9e596b;
    font-size: 43rem;
  }

  .s4 {
    top: 693rem;
    left: 238rem;
    color: #8a4a59;
    font-size: 30rem;
  }

  .s5 {
    top: 917rem;
    right: 200rem;
    color: #84505b;
    font-size: 27rem;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200rem;
    max-width: calc(100% - 80rem);
    margin: 0 auto;
  }

  .section-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .section-title {
    margin: 0;
    background-image: linear-gradient(93deg, #fff 0.8%, #ff4b4e 98%);
    background-clip: text;
    color: transparent;
    font-size: 40rem;
    font-weight: 700;
    line-height: 48rem;
    -webkit-background-clip: text;
  }

  .section-desc {
    margin: 16rem 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 20rem;
    font-weight: 500;
    line-height: 30rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 24rem;
    width: 100%;
    margin-top: 64rem;
  }

  .card-row {
    display: flex;
    justify-content: center;
    gap: 28rem;
  }

  .card-row-sm {
    gap: 24rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
    padding: 24rem 0;
  }

  .card.lg {
    width: 586rem;
    min-height: 398rem;
    border-radius: 16rem;
    background: url("@img/double11-2026/section2_card1.webp") center / 100% 100%
      no-repeat;
  }

  .card.sm {
    width: 385rem;
    min-height: 386rem;
    border-radius: 24rem;
    background: url("@img/double11-2026/section2_card2.webp") center / 100% 100%
      no-repeat;
  }

  .card-text {
    display: contents;
  }

  .tag {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 106rem;
    height: 38rem;
    padding: 0 20rem;
    border: 1px solid #cb6970;
    border-radius: 19rem;
    background: linear-gradient(180deg, #b6404b 0%, #942b39 100%);
    color: #fff9f6;
    font-size: 24rem;
    font-weight: 700;
    line-height: 36rem;
  }

  .good-pc {
    order: 2;
    display: block;
    width: 100%;
    height: auto;
  }

  .good-m {
    display: none;
  }

  .name {
    order: 3;
    margin: 12rem 0 0;
    color: #562632;
    font-size: 20rem;
    font-weight: 700;
    line-height: 30rem;
    text-align: center;
  }

  @media (max-width: 996px) {
    padding: 100rem 24rem 40rem;

    .s1,
    .s2,
    .s4 {
      left: 24rem;
    }

    .s3,
    .s5 {
      right: 16rem;
    }

    .s1 {
      top: 20rem;
    }

    .s2 {
      top: 48rem;
    }

    .s3 {
      top: 80rem;
    }

    .inner {
      width: 100%;
      max-width: none;
    }

    .section-desc {
      font-size: 24rem;
      line-height: 36rem;
    }

    .cards {
      gap: 24rem;
      margin-top: 64rem;
    }

    .card-row,
    .card-row-sm {
      flex-direction: column;
      gap: 24rem;
    }

    .card.lg,
    .card.sm {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      min-height: 232rem;
      padding: 32rem;
      border: 1px solid #ffd6d6;
      border-radius: 24rem;
      background: linear-gradient(180deg, #efa4aa 0%, #f8d9d9 52%, #fff9f6 100%);
      gap: 24rem;
    }

    .card-text {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      order: 2;
      gap: 12rem;
    }

    .good-pc {
      display: none;
    }

    .good-m {
      display: block;
      flex: 0 0 196rem;
      order: 1;
      width: 196rem;
      height: 172rem;
      object-fit: contain;
    }

    .tag,
    .name {
      order: 0;
    }

    .name {
      margin: 0;
      font-size: 28rem;
      line-height: 40rem;
      text-align: left;
    }
  }
}

.section3 {
  position: relative;
  padding: 100rem 0 40rem;
  scroll-margin-top: 100rem;

  .star {
    position: absolute;
    z-index: 2;
    color: #a45f70;
    font-style: italic;
    line-height: 1;
    pointer-events: none;
  }

  .s1 {
    top: -66rem;
    right: 128rem;
    color: #a45f70;
    font-size: 43rem;
  }

  .s2 {
    top: -21rem;
    right: 98rem;
    color: #75414f;
    font-size: 22rem;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200rem;
    max-width: calc(100% - 80rem);
    text-align: center;
  }

  .section-title {
    margin: 0;
    background-image: linear-gradient(93deg, #fff 0.8%, #ff4b4e 98%);
    background-clip: text;
    color: transparent;
    font-size: 40rem;
    font-weight: 700;
    line-height: 48rem;
    -webkit-background-clip: text;
  }

  .section-desc {
    margin: 16rem 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 20rem;
    font-weight: 500;
    line-height: 30rem;
  }

  .ticket-row,
  .ticket-swiper {
    position: relative;
    z-index: 4;
  }

  .ticket-row {
    display: flex;
    justify-content: center;
    gap: 32rem;
    width: 100%;
    margin-top: 60rem;
  }

  .ticket-swiper {
    display: none;
  }

  .ticket {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 214rem;
    height: 291rem;
    padding: 32rem 16rem 54rem;
    // border: 1px solid #ffd6d6;
    border-radius: 16rem;
    background: linear-gradient(180deg, #f9c9a7 0%, #ffe3ce 46%, #fff2e5 100%);
  }

  .ticket img {
    display: block;
    width: 170rem;
    height: auto;
  }

  .lot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 164rem;
    height: 40rem;
    border-radius: 999rem;
    background: #f5d2b8;
    color: #713d30;
    font-size: 16rem;
    font-weight: 500;
    line-height: 1;
  }

  @media (max-width: 996px) {
    padding: 100rem 0 40rem;

    .section-head {
      width: 100%;
      max-width: none;
      padding: 0 24rem;
    }

    .section-desc {
      font-size: 24rem;
      line-height: 36rem;
    }

    .ticket-row {
      display: none;
    }

    .ticket-swiper {
      display: block;
      width: 100%;
      margin-top: 64rem;

      .swiper-slide {
        width: 286rem;
        margin-right: 24rem;
      }

      .swiper-slide:first-child {
        margin-left: 24rem;
      }
    }

    .ticket {
      width: 286rem;
      height: 389rem;
      padding: 44rem 20rem 72rem;
    }

    .ticket img {
      width: 216rem;
    }

    .lot {
      width: 220rem;
      height: 54rem;
      font-size: 24rem;
    }
  }
}

.section4 {
  position: relative;
  z-index: 1;
  padding: 100rem 0 80rem;
  scroll-margin-top: 100rem;

  .star {
    position: absolute;
    z-index: 2;
    color: #925365;
    font-style: italic;
    line-height: 1;
    pointer-events: none;
  }

  .s1 {
    top: 100rem;
    left: 246rem;
    color: #925365;
    font-size: 36rem;
  }

  .s2 {
    top: 74rem;
    left: 24rem;
    display: none;
    color: #935367;
    font-size: 28rem;
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-head {
    display: flex;
    justify-content: center;
  }

  .section-title {
    margin: 0;
    background-image: linear-gradient(93deg, #fff 0.8%, #ff4b4e 98%);
    background-clip: text;
    color: transparent;
    font-size: 40rem;
    font-weight: 700;
    line-height: 48rem;
    -webkit-background-clip: text;
  }

  .steps {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40rem;
    margin-top: 60rem;
    width: 1200rem;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320rem;
    gap: 32rem;
  }

  .step-icon {
    display: block;
    width: 82rem;
    height: 82rem;
  }

  .step-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
  }

  .step-text h3 {
    margin: 0;
    color: #fff;
    font-size: 24rem;
    font-weight: 700;
    line-height: 36rem;
    text-align: center;
  }

  .step-text p {
    margin: 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 16rem;
    font-weight: 400;
    line-height: 24rem;
    text-align: center;
    white-space: pre-line;
  }

  .step-arrow {
    margin-top: 26rem;
    color: rgba(255, 255, 255, 0.48);
    font-size: 24rem;
    font-style: normal;
  }

  .join-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    margin-top: 60rem;
    padding: 16rem 40rem;
    border: 0;
    border-radius: 999rem;
    background: #a52933;
    color: #fff;
    font-size: 20rem;
    font-weight: 700;
    line-height: 30rem;
    cursor: pointer;

    i {
      font-size: 19rem;
      font-style: normal;
      line-height: 1;
    }
  }

  @media (max-width: 996px) {
    padding: 100rem 24rem 80rem;

    .s2 {
      display: block;
    }

    .steps {
      flex-direction: column;
      align-items: center;
      gap: 56rem;
      margin-top: 64rem;
      width: auto;
    }

    .step {
      width: 100%;
      max-width: 620rem;
    }

    .step-icon {
      width: 100rem;
      height: 100rem;
    }

    .step-text h3 {
      font-size: 32rem;
      line-height: 48rem;
    }

    .step-text p {
      font-size: 24rem;
      line-height: 36rem;
    }

    .step-arrow {
      display: none;
    }

    .join-btn {
      width: 520rem;
      height: 96rem;
      margin-top: 64rem;
      padding: 0;
      font-size: 28rem;

      i {
        font-size: 30rem;
      }
    }
  }
}

.section5 {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 100rem 360rem 0;
  scroll-margin-top: 100rem;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200rem;
    max-width: 100%;
  }

  .section-head {
    display: flex;
    justify-content: center;
  }

  .section-title {
    margin: 0;
    background-image: linear-gradient(93deg, #fff 0.8%, #ff4b4e 98%);
    background-clip: text;
    color: transparent;
    font-size: 40rem;
    font-weight: 700;
    line-height: 48rem;
    -webkit-background-clip: text;
  }

  .rules {
    box-sizing: border-box;
    width: 100%;
    margin: 60rem 0 0;
    padding: 0 0 0 24rem;
    color: rgba(255, 255, 255, 0.64);
    font-size: 16rem;
    font-weight: 400;
    line-height: 26rem;
    list-style: disc;

    li {
      list-style: disc;
    }

    li::marker {
      color: rgba(255, 255, 255, 0.64);
    }
  }

  .rules li + li {
    margin-top: 12rem;
  }

  @media (max-width: 996px) {
    padding: 100rem 24rem 0;

    .inner {
      width: 100%;
    }

    .rules {
      margin-top: 64rem;
      padding-left: 32rem;
      font-size: 24rem;
      line-height: 36rem;
    }

    .rules li + li {
      margin-top: 16rem;
    }
  }
}

.bottom-box {
  position: relative;
  z-index: 1;
  margin-top: 80rem;
  background: #070203;

  .ebc-bottom-tips {
    padding: 0;
  }

  .bottom-content {
    width: 1200rem;
    max-width: calc(100% - 80rem);
    margin: 0 auto;
    padding: 32rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.64);
    text-align: center;
  }

  .bottom-info-string {
    color: rgba(255, 255, 255, 0.64);
    font-size: 18rem;
    font-weight: 400;
    line-height: 26rem;
  }

  .tips-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    padding: 0;
    border-radius: 0;
    background: rgba(255, 255, 255, 0.07);
    color: #e9ccd2;
    font-size: 16rem;
    font-weight: 500;
    line-height: 24rem;
  }

  @media (max-width: 996px) {
    margin-top: 64rem;

    .bottom-content {
      box-sizing: border-box;
      width: 100%;
      max-width: none;
      padding: 48rem 20rem 32rem;
      border-top: 0;
    }

    .bottom-info-string {
      font-size: 24rem;
      line-height: 32rem;
    }

    .tips-content {
      height: 64rem;
      font-size: 24rem;
      line-height: 32rem;
    }
  }
}

html.d11-balloon-cursor,
html.d11-balloon-cursor * {
  cursor: none !important;
}

.d11-spark-layer,
.d11-cursor {
  position: fixed;
  z-index: 100000;
  pointer-events: none;
}

.d11-cursor {
  top: 0;
  left: 0;
  z-index: 100001;
  width: 32px;

  img {
    display: block;
    width: 100%;
    height: auto;
    transform-origin: 50% 46%;
  }

  &.pressing img {
    animation: d11-balloon-pop 0.42s cubic-bezier(0.2, 0.85, 0.25, 1);
  }
}

.d11-spark-layer {
  inset: 0;
  overflow: hidden;
}

.d11-spark {
  position: absolute;
  font-style: italic;
  line-height: 1;
  animation-timing-function: cubic-bezier(0.16, 0.6, 0.32, 1);
  animation-fill-mode: forwards;

  &.trail {
    animation-name: d11-spark-trail;
  }

  &.burst {
    animation-name: d11-spark-burst;
  }
}

@keyframes d11-balloon-pop {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }

  30% {
    transform: translateY(2px) rotate(3deg) scale(0.9);
  }

  64% {
    transform: translateY(-2px) rotate(-3deg) scale(1.04);
  }

  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}

@keyframes d11-spark-trail {
  0% {
    transform: translate3d(0, -8px, 0) rotate(0deg) scale(0.55);
    opacity: 0;
  }

  16% {
    transform: translate3d(calc(var(--dx) * 0.12), 0, 0) rotate(calc(var(--rot) * 0.15)) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate3d(var(--dx), var(--fall), 0) rotate(var(--rot)) scale(0.55);
    opacity: 0;
  }
}

@keyframes d11-spark-burst {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg) scale(0.25);
    opacity: 1;
  }

  30% {
    transform: translate3d(calc(var(--dx) * 0.86), var(--rise), 0) rotate(var(--rot)) scale(1.18);
    opacity: 1;
  }

  100% {
    transform: translate3d(var(--dx), calc(var(--rise) + var(--fall)), 0)
      rotate(calc(var(--rot) * 1.5)) scale(0.28);
    opacity: 0;
  }
}

@media (max-width: 996px) {
  .d11-cursor,
  .d11-spark-layer {
    display: none;
  }
}
</style>
