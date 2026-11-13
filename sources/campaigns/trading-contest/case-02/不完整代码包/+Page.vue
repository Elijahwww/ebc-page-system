<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import topMenuNew from "@components/topMenuNoA.vue";
import registryForm from "@components/registryFormSSRAPPGlobal.vue";
import { useI18n } from "vue-i18n";

import pageContentBg from "@img/trading-up/page_content_bg.webp";
import pageContentBgMobile from "@img/trading-up/page_content_bg_mobile.webp";
import section2Bg from "@img/trading-up/section2_bg.webp";
import section2Card1 from "@img/trading-up/section2_card1.webp";
import section2Card2 from "@img/trading-up/section2_card2.webp";
import section2Card3 from "@img/trading-up/section2_card3.webp";
import section2Card4 from "@img/trading-up/section2_card4.webp";
import section2Card5 from "@img/trading-up/section2_card5.webp";
import section3Bg from "@img/trading-up/section3_bg.webp";
import section3BgMobile from "@img/trading-up/section3_bg_mobile.webp";
import section4Bg from "@img/trading-up/section4_bg.webp";
import section4BgMobile from "@img/trading-up/section4_bg_mobile.webp";

const { t, tm } = useI18n();

const section2Cards = [
  section2Card1,
  section2Card2,
  section2Card3,
  section2Card4,
  section2Card5,
];

const isMobile = ref(false);
const pageContentBgUrl = computed(() =>
  isMobile.value ? pageContentBgMobile : pageContentBg,
);

function syncScreen() {
  isMobile.value = window.innerWidth <= 996;
}

onMounted(() => {
  syncScreen();
  window.addEventListener("resize", syncScreen);
});

onUnmounted(() => {
  window.removeEventListener("resize", syncScreen);
});

function toForm() {
  document.querySelector(".section1-form")?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
</script>

<template>
  <div class="trading-up">
    <section class="section1">
      <topMenuNew :link-list="tm('linkList')" />
      <div class="section1-form">
        <h1 class="form-title">{{ t("formTitle") }}</h1>
        <p class="form-sub">{{ t("formSub") }}</p>
        <client-only>
          <registryForm theme="blank" />
        </client-only>
      </div>
    </section>

    <div class="page-content" v-lazy="pageContentBgUrl">
      <div class="page-content-inner">
        <section id="section2" class="section2">
          <h2 class="section-title">{{ t("section2Title") }}</h2>
          <p class="section-desc">{{ t("section2Desc") }}</p>
          <img class="section2-pc" v-lazy="section2Bg" alt="" />
          <client-only>
            <swiper
              v-if="isMobile"
              class="section2-swiper"
              slides-per-view="auto"
              :space-between="0"
            >
              <swiper-slide v-for="(card, index) in section2Cards" :key="index">
                <img :src="card" alt="" />
              </swiper-slide>
            </swiper>
          </client-only>
        </section>

        <section id="section3" class="section3">
          <h2 class="section-title">{{ t("section3Title") }}</h2>
          <img class="section-visual pc" v-lazy="section3Bg" alt="" />
          <img class="section-visual mobile" v-lazy="section3BgMobile" alt="" />
        </section>

        <section id="section4" class="section4">
          <h2 class="section-title">{{ t("section4Title") }}</h2>
          <img class="section-visual pc" v-lazy="section4Bg" alt="" />
          <img class="section-visual mobile" v-lazy="section4BgMobile" alt="" />
        </section>

        <div class="page-cta">
          <h2>
            {{ t("ctaTitle1") }}
            <br />
            {{ t("ctaTitle2") }}
          </h2>
          <p>{{ t("ctaSub") }}</p>
          <button type="button" class="join-btn" @click="toForm">
            {{ t("joinBtn") }}
            <i class="iconfont icon-youjiantou" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "@style/page/bestbroker.scss";
.trading-up {
  max-width: 1920rem;
  margin: 0 auto;
  background: #000;
  color: #fff;
  font-family: Sinter, Inter, "Noto Sans Thai", "Noto Sans", sans-serif;
  overflow: hidden;

  .mobile {
    display: none;
  }
}

.trading-up .top-menu {
  box-shadow: none !important;
}

.section1 {
  position: relative;
  height: 900rem;
  background: #000 url("@img/trading-up/section1_bg.webp") top center / 100% auto no-repeat;
}

.section1-form {
  position: absolute;
  top: 176rem;
  right: 360rem;
  box-sizing: border-box;
  width: 464rem;
  padding: 32rem 32rem 40rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(54rem);
  -webkit-backdrop-filter: blur(54rem);
}

.form-title {
  margin: 0;
  color: #fff;
  font-size: 24rem;
  font-weight: 700;
  line-height: 40rem;
}

.form-sub {
  margin: 8rem 0 0;
  color: rgba(255, 255, 255, 0.64);
  font-size: 14rem;
  font-weight: 400;
  line-height: 22rem;
}

.trading-up .section-form {
  width: 100%;
  margin-top: 24rem;
  padding: 0;
  background: transparent;
  border: 0;

  h2 {
    display: none;
  }

  .form-box {
    width: 100%;
    min-height: 48rem;
    margin-top: 12rem;
    padding: 0 16rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 8rem;
    border: 0;
    border-radius: 8rem;
    background: rgba(255, 255, 255, 0.1);
  }

  .el-select {
    width: 100% !important;
  }

  .form-box:has(.phone) .el-select {
    width: 110rem !important;
    flex: 0 0 110rem;
  }

  .el-select__wrapper {
    background: transparent;
    box-shadow: none !important;
    padding: 0;
    min-height: 48rem;
  }

  .el-select__placeholder,
  .el-select__selected-item,
  .el-select__input {
    color: #fff;
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

  input {
    flex: 1;
    width: 100%;
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

  .form-box > svg path {
    stroke: #fff;
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

  .btn-join {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 48rem;
    margin-top: 20rem;
    border-radius: 8rem;
    background: #a52933;
    color: #fff;
    font-size: 16rem;
    font-weight: 500;
    text-decoration: none;
  }

  .hasAccount,
  .private {
    margin-top: 16rem;
    color: rgba(255, 255, 255, 0.64);
    font-size: 14rem;
    line-height: 22rem;
    text-align: center;
  }

  .hasAccount a,
  .private .innerHref {
    color: #ff4b4e;
  }

  .errorTip {
    width: 100%;
    margin-top: 4rem;
    color: #ff4b4e;
    font-size: 12rem;
    text-align: left;
  }
}

.page-content {
  display: flex;
  flex-direction: column;
  // min-height: 3266rem;
  background-color: #05010c;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
}

.page-content-inner {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.page-content section {
  padding-top: 80rem;
  padding-bottom: 80rem;
}

.section-title {
  margin: 0;
  color: #fff;
  font-size: 40rem;
  font-weight: 700;
  line-height: 48rem;
  text-align: center;
  // text-shadow: 0 0 12.7px rgba(255, 0, 0, 0.6);
}

.section-desc {
  max-width: 980rem;
  margin: 16rem auto 0;
  color: rgba(255, 255, 255, 0.64);
  font-size: 24rem;
  font-weight: 400;
  line-height: 36rem;
  text-align: center;
  padding: 0 32rem;
}

.section2,
.section3,
.section4 {
  scroll-margin-top: 96rem;
}

.section2-pc {
  display: block;
  width: 1244rem;
  max-width: calc(100% - 80rem);
  height: auto;
  aspect-ratio: 1866 / 906;
  margin: 48rem auto 0;
}

.trading-up .section2-swiper {
  display: none !important;
}

.section3 .pc {
  width: 1212rem;
  aspect-ratio: 1817 / 470;
}

.section3 .mobile {
  aspect-ratio: 1452 / 2618;
}

.section4 .pc {
  width: 1273rem;
  aspect-ratio: 1909 / 1299;
}

.section4 .mobile {
  aspect-ratio: 1457 / 3579;
}

.section-visual {
  display: block;
  max-width: calc(100% - 80rem);
  height: auto;
  margin: 48rem auto 0;
}

.page-cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 130rem 360rem 210rem;

  h2 {
    margin: 0;
    color: #fff;
    font-size: 48rem;
    font-weight: 700;
    line-height: 72rem;
    text-align: left;
    text-shadow: 0 0 12.7px rgba(255, 0, 0, 0.6);
  }

  p {
    margin: 16rem 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 20rem;
    font-weight: 400;
    line-height: 30rem;
    text-align: left;
  }
}

.join-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  height: 48rem;
  margin-top: 32rem;
  padding: 0 46rem;
  border: 0;
  border-radius: 999rem;
  background: #a52933;
  color: #fff;
  font-size: 16rem;
  font-weight: 500;
  line-height: 28rem;
  cursor: pointer;

  i {
    font-size: 20rem;
    line-height: 1;
  }
}

@media (max-width: 996px) {
  .trading-up {
    .pc {
      display: none;
    }

    .mobile {
      display: block;
    }
  }

  .section1 {
    box-sizing: border-box;
    height: auto;
    min-height: 2313rem;
    padding-top: 1241rem;
    background-image: url("@img/trading-up/section1_bg_mobile.webp");
  }

  .section1-form {
    position: static;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    width: auto;
    margin: 0 32rem 48rem;
    padding: 56rem 32rem;
    border-radius: 24rem;
    backdrop-filter: blur(19rem);
    -webkit-backdrop-filter: blur(19rem);
  }

  .form-title {
    font-size: 40rem;
    font-weight: 500;
    line-height: 48rem;
    text-align: left;
  }

  .form-sub {
    margin-top: 16rem;
    font-size: 24rem;
    line-height: 48rem;
    text-align: left;
  }

  .trading-up .section-form {
    margin-top: 46rem;
    .form-box {
      min-height: 88rem;
      margin-top: 20rem;
      padding: 0 32rem;
      border-radius: 16rem;
    }

    .form-box:has(.phone) .el-select {
      width: 160rem !important;
      flex-basis: 160rem;
    }

    .el-select__wrapper {
      min-height: 88rem;
    }

    .el-select__placeholder,
    .el-select__selected-item,
    .el-select__input,
    input {
      font-size: 28rem;
    }

    .btn-join {
      height: 88rem;
      margin-top: 32rem;
      border-radius: 16rem;
      font-size: 32rem;
    }

    .hasAccount,
    .private {
      font-size: 24rem;
      line-height: 36rem;
    }

    .passwordRequest div {
      font-size: 20rem;
    }
  }

  .page-content-inner{
    width: 750rem;
    overflow: hidden;
  }

  .page-content {
    // min-height: 5887rem;
    background-position: bottom center;
  }

  .section-title {
    padding: 0 32rem;
    font-size: 40rem;
    line-height: 48rem;
  }

  .section2-pc {
    display: none;
  }

  .trading-up .section2-swiper {
    display: block !important;
    width: 100%;
    margin-top: 40rem;
    padding-left: 32rem;
    overflow: hidden;

    .swiper-slide {
      width: 560rem;
      margin-right: 24rem;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .section-visual.mobile {
    width: calc(100% - 64rem);
    max-width: none;
  }

  .page-cta {
    align-items: center;
    padding: 80rem 63rem 798rem;

    h2 {
      font-size: 40rem;
      line-height: 60rem;
      text-align: center;
    }

    p {
      font-size: 24rem;
      line-height: 36rem;
      text-align: center;
    }
  }

  .join-btn {
    height: 96rem;
    min-width: 388rem;
    padding: 24rem 40rem;
    font-size: 28rem;
    font-weight: 700;

    i {
      font-size: 36rem;
    }
  }
}
</style>
