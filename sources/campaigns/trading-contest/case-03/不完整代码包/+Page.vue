<script setup lang="ts">
import { ref ,onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();
import BottomTips from "../../components/bottomTips.vue";
import topMenuNew from "@components/topMenuNoA.vue";
import registryForm from "@components/registryFormSSRAPPGlobal.vue";
import rankingTable from "@components/rankingTable.vue";
import section1_bg from "@img/live-trading2/headerBg.webp";
import section1_bg_mobile from "@img/live-trading2/headerBgM.webp";
import section2_bg from "@img/live-trading2/section2Bg.webp";
import section2_bg_mobile from "@img/live-trading2/section2BgM.webp";
import section2BottomModel from "@img/live-trading2/section2BottomModel.webp";
import section2TopModel from "@img/live-trading2/section2TopModel.webp";
import section2Logo5 from "@img/live-trading2/section2Logo5.webp";
import section2Logo4 from "@img/live-trading2/section2Logo4.webp";
import section2Logo3 from "@img/live-trading2/section2Logo3.webp";
import section2Logo2 from "@img/live-trading2/section2Logo2.webp";
import section2Logo1 from "@img/live-trading2/section2Logo1.webp";
import section3_bg from "@img/live-trading2/section3Bg.webp";
import section3_bg_mobile from "@img/live-trading2/section3BgM.webp";
import section4_bg from "@img/live-trading2/section4Bg.webp";
import section4_bg_mobile from "@img/live-trading2/section4BgM.webp";
import section5_bg from "@img/live-trading2/section5Bg.webp";
import section5_bg_mobile from "@img/live-trading2/section5BgM.webp";
import section6_bg from "@img/live-trading2/section6Bg.webp";
import section6_bg_mobile from "@img/live-trading2/section6BgM.webp";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules"; // 引入 Autoplay 模块
const imageList = ref([
  section2Logo1,
  section2Logo2,
  section2Logo3,
  section2Logo4,
  section2Logo5
]);
const modules = [Autoplay];
function toTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const isLargeScreen = ref(true);
function checkScreenSize() {
  isLargeScreen.value = window.innerWidth >= 996;
}


onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
})


const linkList = ref([
  { name: t("word3"), target: "section2" },
  { name: t("word4"), target: "section3" },
  { name: t("word5"), target: "section4" },
  { name: t("word6"), target: "section5" },
  { name: t("word7"), target: "section6" },
]);
</script>
<template>
  <div :class="[locale]">
    <topMenuNew
      :linkList="linkList"
      :showRegister="false"
      :registerAutoToTop="false"
    ></topMenuNew>
    <section
      class="section1"
      v-lazy="isLargeScreen ? section1_bg : section1_bg_mobile"
    >
            <client-only>
              <registryForm />
            </client-only>
    </section>
   <section id="section2" v-lazy="isLargeScreen ? section2_bg : section2_bg_mobile">
    <div class="pc">
      <img :src="section2TopModel" alt="" class="topModel">
      <img :src="section2BottomModel" alt="" class="bottomModel">
    </div>
    <div class="mobile">
      <h2>เงินรางวัล</h2>
      <h3>ใช้ฝีมือ คว้ารางวัลที่ใช่เป็นของคุณ</h3>
      <div class="prize-swiper-container">
    <Swiper
      :slides-per-view="'auto'"
      :space-between="15"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="prize-swiper"
    >
      <SwiperSlide v-for="(img, index) in imageList" :key="index" class="prize-slide">
        <img :src="img" alt="prize image" class="prize-img" loading="lazy"/>
      </SwiperSlide>
    </Swiper>
  </div>
    </div>
   </section>
    <section id="section3" class="section3" v-lazy="isLargeScreen ? section3_bg : section3_bg_mobile">
      <h2>ตารางอันดับแบบเรียลไทม์</h2>
      <div class="rem-wrapper">
        <rankingTable eventId="aE558t" />
      </div>
      <div class="section2Tip">*หน้านี้แสดงเฉพาะบัญชีเทรดที่ติดอันดับผลตอบแทนสูงสุด 10 อันดับแรกเท่านั้น ระบบจะอัปเดตข้อมูลทุกชั่วโมง </div>
    </section>
    <section id="section4" class="section4" v-lazy="isLargeScreen ? section4_bg : section4_bg_mobile">
      <div class="btn" @click="toTop">สมัครแข่งขัน</div>
    </section>
    <section id="section5" class="section5" v-lazy="isLargeScreen ? section5_bg : section5_bg_mobile">
    </section>
     <section id="section6" class="section6" v-lazy="isLargeScreen ? section6_bg : section6_bg_mobile">
    </section>
    <section id="section7" class="section7">
      <BottomTips />
    </section>
  </div>
</template>


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
  transition:
    transform 0.6s ease-out,
    opacity 0.1s ease-out;
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
  background: var(--Text-Primary_White, #f7f7f7);
}

.ebc-btn-large-normal:hover {
  background: #f7f7f7;
  color: #a52933;
}

.ebc-btn-large-normal:active {
  background: #f7f7f7;
  color: #cc333f;
}

.section1 {
  position: relative;
  min-height: 900rem;
  padding: 149rem 0 80rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #000;
  background-image: none;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .section1-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40rem;
  }

  .section1-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 708rem;
    flex-shrink: 0;
    gap: 26rem;
  }

  .section1-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24rem;
    width: 100%;
    text-align: center;
  }

  .section1-title {
    margin: 0;
    font-size: 54rem;
    font-weight: 700;
    line-height: normal;
    color: #fff;
  }

  .section1-subtitle {
    margin: 0;
    width: 575rem;
    max-width: 100%;
    font-size: 20rem;
    font-weight: 400;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.48);
  }

  .section1-img {
    display: block;
    width: 540rem;
    height: auto;
  }

  .section1-features-pc {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    padding: 16rem 28rem;
    border-radius: 162rem;
    white-space: nowrap;
    background: rgba(0, 0, 0, 0.28);
    border: 1rem solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(20rem);
    -webkit-backdrop-filter: blur(20rem);
    box-shadow: inset 0 1rem 0 rgba(255, 255, 255, 0.08);
  }
  .section1-feature {
    display: flex;
    align-items: center;
    gap: 8rem;
  }

  .section1-feature-num {
    color: #ff4b4e;
    font-size: 32rem;
    font-weight: 700;
  }

  .section1-feature-label {
    color: #fff;
    font-size: 20rem;
    font-weight: 400;
  }

  .section1-feature-divider {
    color: rgba(255, 255, 255, 0.32);
    font-size: 30rem;
    line-height: 1;
  }
  .section1-feature-label-red {
    color: #ff4b4e;
    font-size: 20rem;
    font-weight: 700;
  }

  .section1-features {
    display: none;
  }

  .section1-right {
    flex-shrink: 0;
  }
}
.zh-TW .section1 .section1-title,
.zh .section1 .section1-title {
  font-size: 66rem;
}


.section-form {
  border: 1px solid rgba(255,255,255,.2);
 background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(19px);
  width: 490rem;
  padding: 28rem;
  position: absolute;
  top: 140rem;
  right: 360rem;
  border-radius: 16px;

  h2 {
    text-align: center;
    color: #fff;
  }

  .phone,
  .email,
  .passwordRequest div{
    background: transparent;
    color: #fff;
  }
  .form-box {
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
  .el-select .el-select__selected-item {
    color: #fff !important;
  }

  .private,
  .hasAccount {
    color: rgba(255, 255, 255, 0.64);
  }

  .passwordRequest div {
    border-radius: 4rem;
  }

  // .private {
  //   display: none;
  // }
  .split {
    background-color: #EBEBEB;
    height: 20rem;
    width: 1rem;
  }
}
.mobile-show{
  display: none;
}
@media (max-width: 996px) {
  .mobile-show{
  display: inline;
}
  .section-pc {
    display: none;
  }

  .section-mobile {
    display: block;
  }

  .section-form {
    width: 100%;
    position: static;
    padding-block: 56rem;
  }

  .section-title {
    font-size: 40rem;
    line-height: 48rem;
  }

  .section-text {
    margin-top: 24rem;
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
    min-height: 1807rem;
    padding: 820rem 24rem 47rem;
    background-size: 100% 1807rem;
    background-position: top center;
    background-color: #1C070D;

    .section1-content {
      flex-direction: column;
      align-items: center;
      gap: 32rem;
    }

    .section1-left {
      width: 100%;
      gap: 0;
    }

    .section1-text {
      gap: 24rem;
    }

    .section1-title {
      font-size: 54rem;
    }

    .section1-subtitle {
      width: 100%;
      font-size: 28rem;
      line-height: 1.4;
    }

    .section1-img {
      width: 100%;
      max-width: 686rem;
      margin-top: 48rem;
    }

    .section1-features-pc {
      display: none;
    }
    .section1-features {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14rem;
      padding: 24rem 40rem;
      border-radius: 162rem;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.28);
      border: 1rem solid rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(20rem);
      -webkit-backdrop-filter: blur(20rem);
      box-shadow: inset 0 1rem 0 rgba(255, 255, 255, 0.08);
    }

    .section1-feature {
      display: flex;
      align-items: center;
      gap: 8rem;
    }

    .section1-feature-num {
      color: #ff4b4e;
      font-size: 56rem;
      font-weight: 700;
      line-height: 1;
    }

    .section1-feature-label {
      color: #fff;
      font-size: 32rem;
      font-weight: 400;
      line-height: 1;
    }

    .section1-feature-divider {
      color: rgba(255, 255, 255, 0.32);
      font-size: 40rem;
      line-height: 1;
    }
    .section1-feature-label-red {
      color: #ff4b4e;
      font-size: 32rem;
      font-weight: 700;
    }

    .section1-right {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .zh-TW .section1 .section1-title,
  .zh .section1 .section1-title {
    font-size: 54rem;
  }
  .ja .section1 .section1-title {
    font-size: 52rem;
  }


}
</style>
<style lang="scss" scoped>
  #section2{
    height: 864rem;
    background-size: 100% 100%;
    position: relative;
    z-index: 99;
    .topModel{
      position: absolute;
      left: 80rem;
      top: -100rem;
      width: 258rem;
    }
    .bottomModel{
      position: absolute;
      bottom: -120rem;
      right: 80rem;
      width: 229rem;
    }
  }
  @media  (max-width:996px) {
    #section2{
      padding: 120rem 32rem;
      text-align: center;
      height: auto;
      h2{
        color:  #000;
        font-size: 48rem;
        font-weight: 700;
        line-height: 56rem; 
      }
      h3{
        margin-block: 16rem 80rem;
        color:  rgba(0, 0, 0, 0.64);
        font-size: 24rem;
        font-weight: 400;
        line-height: 32rem; /* 133.333% */
      }
    .prize-swiper-container {
      width: 100%;
      /* 如果外层有容器限制宽度，可以去掉这里的 max-width */
      margin: 0 auto;
    }
    .prize-swiper {
      width: 100%;
      padding-bottom: 20rem;
    }

    /* 核心：根据设计图设定每一屏 Slide 的宽度 */
    .prize-slide {
      width: 316.6rem; /* 对应图中的 W: 316.596rem */
    }

    /* 强制指定图片的宽高 */
    .prize-img {
      width: 100%;
      height: 498.6rem; /* 对应图中的 H: 498.578rem */
      object-fit: contain; /* 保证图片完整显示不变形 */
      display: block;
    }
    }
  }
  #section3{
    padding-block: 96rem 120rem;
    background-size: cover;
    h2{
      color: #FFF;
      text-align: center;
      font-size: 40rem;
      font-weight: 700;
      line-height: 60rem; 
      margin-bottom: 80rem;
    }
    .section2Tip{
      color:  rgba(255, 255, 255, 0.64);
      text-align: center;
      font-size: 16rem;
      font-weight: 400;
      line-height: 28rem;
      margin-top: 24rem;
    }
  }
  @media  (max-width:996px) {
    #section3{
      padding: 120rem 32rem;
      .rem-wrapper{
        padding-inline: 0;
      }
      h2{
        font-size: 48rem;
        line-height: 56rem;
        margin-bottom: 64rem;
      }
      .section2Tip{
          font-size: 26rem;
          line-height: 36rem; 
          margin-top: 64rem;
      }
    }
  }
  #section4{
    height: 773rem;
    position: relative;
    background-size: 100% 100%;
    .btn{
      background: #A52933;
      border-radius: 999px;
      color:  #FFF;
      font-size: 16rem;
      font-weight: 700;
      line-height: 24rem; 
      width: 200rem;
      height: 48rem;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 120rem;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
      &:hover{
        background: #cc333f;
      }
    }
  }
  @media (max-width:996px){
    #section4{
      height: 1275rem;
      .btn{
        width: 388rem;
        height: 96rem;
        font-size: 28rem;
        line-height: 16rem;
      }
    }
  }
  #section5{
    height: 416rem;
    background-size: 100%;
  }
    @media (max-width:996px){
    #section5{
      height: 1280rem;
    }
  }
  #section6{
    height: 760rem;
    background-size: 100%;
  }
    @media (max-width:996px){
    #section6{
      height: 1448rem;
    }
  }
  ::v-deep(.ebc-bottom-tips){
    padding:0;
    .tips-content{
      margin-inline: 24rem;
    }
  }
    @media (max-width:996px){
  ::v-deep(.ebc-bottom-tips){
    padding: 48rem 32rem;
    
  }
    }
</style>
