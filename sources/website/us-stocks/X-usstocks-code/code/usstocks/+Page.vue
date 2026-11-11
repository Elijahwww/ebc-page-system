<script setup lang="ts">
import riskWarning from "@components/riskWarning.vue";
import footerEs from "@components/footerEs.vue";
import registryForm from "@components/registryFormSSR.vue";
import jianguan from "@components/jianguan.vue";


// 导入 Swiper 核心模块和 Vue 组件
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// 必须导入 Swiper 样式（全局或按需）
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useI18n } from "vue-i18n";
const { t, tm, locale } = useI18n();

const lanListMeta = ref({
  label: "Español",
  value: "es",
  mccCode: "34"

});


const scrollTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}
const distanceFromTop = ref(0)
const showBottom = ref(false)
const handleScroll = () => {
  showBottom.value = window.scrollY > distanceFromTop.value;
};


// 响应式变量：是否为移动端
const isMobile = ref(false)

// 检查屏幕宽度的函数
const checkScreen = () => {
  isMobile.value = window.innerWidth < 996
}

// 组件挂载后：初始化 + 监听窗口大小变化
onMounted(async () => {
  await nextTick();
  checkScreen() // 初始化
  window.addEventListener('resize', checkScreen)
})

// 组件卸载前：移除事件监听，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('resize', checkScreen)
})

function openWindow() {
  dialogVisible.value = true
}

const dialogVisible = ref(false);

// 保存原来的 overflow 值，以便恢复
let originalOverflow = ''

function lockScroll() {
  const html = document.documentElement
  originalOverflow = window.getComputedStyle(html).overflow
  html.style.overflow = 'hidden'
}

function unlockScroll() {
  document.documentElement.style.overflow = originalOverflow || ''
}

import img_es from '@img/usstocks/logo_es.png'
import img_pt from '@img/usstocks/logo_pt.png'

const logo = computed(()=>{
  switch (locale.value) {
    case 'es':
      return img_es
    case 'pt':
      return img_pt
    case 'en':
    default:
      return img_es
  }
})

</script>
<template>
<riskWarning />
  <section class="section1">
    <div class="rem-wrapper">
      <div class="section1-content">
        <div class="section1-left">
          <img class="logo" :src="logo" alt="">
          <div class="main-title">

            <img class="yezi" src="@img/usstocks/icon_left.png" alt="">
            <h1>
              <p v-for="value in $tm('在EBC交易美股')">{{ value }}</p>
            </h1>
            <img class="yezi" src="@img/usstocks/icon_right.png" alt="">
          </div>

          <p class="title-intro">
            {{ $t("一个账户") }}
          </p>
        </div>
        <div class="mobile">
          <div class="section-content-card-title1-m">
            <div class="section-content-card-title1-inner">
              <img class="star-icon" src="@img/usstocks/star_left.png" alt="">
              <img class="ebc-icon" src="@img/usstocks/EBC.png" alt="">

              <img class="star-icon" src="@img/usstocks/star_right.png" alt=""></img>
            </div>
            <div class="section-content-card-title1-inner ">

              {{ $t("美股券商") }}
            </div>
          </div>
          <div class="section-content-card1-m">
            <div class="section-content-card1-left">
              <div class="card1-left-item">
                <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
                {{ $t("无需美股账户") }}
              </div>
              <div class="card1-left-item">
                <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
                {{ $t("双向灵活交易") }}
              </div>
              <div class="card1-left-item">
                <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
                {{ $t("门槛低") }}
              </div>
              <div class="card1-left-item" v-if='$t("无税费")'>
                <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
                {{ $t("无税费") }}
              </div>
            </div>
            <div class="section-content-card1-right">
              <div class="card1-right-item">{{ $t("开户手续繁琐") }}</div>
              <div class="card1-right-item">{{ $t("限制多") }}</div>
              <div class="card1-right-item">{{ $t("卖空资金要求较高") }}</div>
              <div class="card1-right-item">{{ $t("需要缴纳利得税") }}</div>
            </div>
          </div>
        </div>

        <client-only>
          <registryForm :lanListMeta="lanListMeta" @sumbited="openWindow()" />
        </client-only>
      </div>
    </div>
    <div class="usstocks-jianguan">
      <jianguan theme="white" />
    </div>
  </section>
  <section class="section2">
    <div class="rem-wrapper-left-right-padding">
      <div class="section-content">
        <div class="section-content-card-title1">
          <div class="section-content-card-title1-inner">
            <img class="star-icon" src="@img/usstocks/star_left.png" alt="">
            <img class="ebc-icon" src="@img/usstocks/EBC.png" alt="">

            <img class="star-icon" src="@img/usstocks/star_right.png" alt=""></img>
          </div>
          <div class="section-content-card-title1-inner ">
            {{ $t("美股券商") }}
          </div>
        </div>
        <div class="section-content-card1">
          <div class="section-content-card1-left">
            <div class="card1-left-item">
              <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
              {{ $t("无需美股账户") }}
            </div>
            <div class="card1-left-item">
              <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
              {{ $t("双向灵活交易") }}
            </div>
            <div class="card1-left-item">
              <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
              {{ $t("门槛低") }}
            </div>
            <div class="card1-left-item" v-if='$t("无税费")'>
              <img class="section-content-card1-left-icon" src="@img/usstocks/gou.png" alt="">
              {{ $t("无税费") }}
            </div>
          </div>
          <div class="section-content-card1-right">
            <div class="card1-right-item">{{ $t("开户手续繁琐") }}</div>
            <div class="card1-right-item">{{ $t("限制多") }}</div>
            <div class="card1-right-item">{{ $t("卖空资金要求较高") }}</div>
            <div class="card1-right-item">{{ $t("需要缴纳利得税") }}</div>
          </div>
        </div>

      </div>
      <div class="section-content">
        <div class="section-content-card-title2">
          <img class="star-icon" src="@img/usstocks/star_left.png" alt="">
          <h2>
            {{ $t("为什么选择EBC做美股") }}
          </h2>
          <img class="star-icon" src="@img/usstocks/star_right.png" alt="">
        </div>
        <div class="section-content-card2">
          <img class="bg3" src="@img/usstocks/bg3.png" alt="">
          <div class="card2-list">
            <div class="card2-item">
              <img class="card2-item-icon" src="@img/usstocks/icon1.png" alt="">
              <div class="card2-item-content">
                <h3 class="card2-item-title">{{ $t("零门槛入场") }}</h3>
                <p class="card2-item-text">{{ $t("无需开设美股开户") }}</p>
              </div>
            </div>
            <div class="card2-item">
              <img class="card2-item-icon" src="@img/usstocks/icon2.png" alt="">
              <div class="card2-item-content">
                <h3 class="card2-item-title">{{ $t("双向灵活交易") }}</h3>
                <p class="card2-item-text">{{ $t("多空T+0交易") }}</p>
              </div>
            </div>
            <div class="card2-item">
              <img class="card2-item-icon" src="@img/usstocks/icon3.png" alt="">
              <div class="card2-item-content">
                <h3 class="card2-item-title">{{ $t("一个账户交易全球") }}</h3>
                <p class="card2-item-text">{{ $t("除美股外") }}</p>
              </div>
            </div>
            <div class="card2-item">
              <img class="card2-item-icon" src="@img/usstocks/icon4.png" alt="">
              <div class="card2-item-content">
                <h3 class="card2-item-title">{{ $t("稳定透明的交易环境") }}</h3>
                <p class="card2-item-text">{{ $t("极速订单执行和机构级流动性") }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="section-content">
        <div class="section-content-card-title2">
          <img class="star-icon" src="@img/usstocks/star_left.png" alt="">
          <h2>
            {{ $t("关于EBC") }}
          </h2>
          <img class="star-icon" src="@img/usstocks/star_right.png" alt="">
        </div>
        <div class="section-content-card3">

          <div class="card3-box">
            <div class="mobile"><img class="card3-star mobile" src="@img/usstocks/star_red.png" alt=""></div>
            <p class="card3-text">
              {{ $t("EBC金融集团总部位于伦敦") }}

            </p>
            <div class="pc"><img class="card3-star" src="@img/usstocks/star_red.png" alt=""></div>

          </div>
          <img class="bg4" src="@img/usstocks/bg4_2.png" alt="">

        </div>
      </div>
    </div>
  </section>

<footerEs />
</template>
<style lang="scss">
@use "@style/page/bestbroker.scss";
@use "@style/page/rem2.css";

#globe {
  div {
    pointer-events: none !important;
  }
}

.ebc-btn-large {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 48rem;
  min-width: 220rem;
  gap: 8rem;
  border-radius: 24rem;
  background: var(--Brand-Secondary-Red, #a52933);
  color: #fff;
  text-align: center;
  font-size: 16rem;
  font-style: normal;
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
  font-size: 24rem;
}

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

@media screen and (max-width: 996px) {
  .ebc-btn-large {
    display: inline-flex;
    height: 72rem;
    border-radius: 36rem;
    font-size: 32rem;
    font-style: normal;
    font-weight: 500;
    line-height: 56rem;
    min-width: 380rem;
    padding: 0 30rem;
  }

  .ebc-btn-large .iconfont {
    font-size: 34rem;
  }

  header {
    position: fixed !important;
  }

}
</style>
<style lang="scss" scoped>
div {
  box-sizing: border-box;
}

.section1 {
  position: relative;
  height: 960rem;
  box-sizing: content-box;
  padding-bottom: 100rem;
  background: url("@img/usstocks/bg1.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .usstocks-jianguan {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20rem;
    width: 100%;
  }

  .section1-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40rem;
  }

  .section1-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    .logo {
      height: 84rem;
    }

    .main-title {
      margin-top: 80rem;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {

        p {
          text-align: center;
          filter: drop-shadow(2rem 2rem 10rem #D3321E);
          font-size: 56rem;
          font-style: normal;
          font-weight: 700;
          line-height: normal;


          background: linear-gradient(0deg, #FBE4AF 8.75%, #FFF 77.7%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

      }

      .yezi {
        width: 86rem;
      }
    }




    .title-intro {
      margin-top: 18rem;
      color: var(--Text-Primary_White, #FFF);
      text-align: center;
      font-size: 24rem;
      font-style: normal;
      font-weight: 500;
      line-height: 32rem;
    }


  }

}

.section2 {
  background: #FCECE7;

  .section-content {
    padding: 64rem 0;
  }

  .section-content-card-title1 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 84rem;
    width: 650rem;
    background: url("@img/usstocks/title_bg1.png") no-repeat;
    background-size: 100% 100%;


    .section-content-card-title1-inner {
      width: 50%;
      display: inline-flex;
      justify-content: center;
      gap: 11rem;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 0;
      font-size: 32rem;
      font-style: normal;
      font-weight: 700;
      line-height: 40rem;
      background: linear-gradient(0deg, #FBE4AF 8.75%, #FFF 81.66%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    .ebc-icon {
      height: 32rem;
    }

    .star-icon {
      height: 16rem;
    }
  }

  .section-content-card1 {
    height: 460rem;
    background: url("@img/usstocks/bg2.png") no-repeat;
    background-size: 100% 100%;
    display: flex;

    .section-content-card1-left {
      flex-shrink: 0;
      width: 50%;
      padding: 42rem 200rem 42rem 90rem;

      .section-content-card1-left-icon {
        width: 26rem;
      }

      .card1-left-item {
        display: flex;
        align-items: center;
        padding: 30rem 10rem;
        gap: 16rem;
        font-size: 24rem;
        font-style: normal;
        font-weight: 700;
        line-height: 32rem;
        background: linear-gradient(180deg, #DD785A 0%, #57322C 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .card1-left-item+.card1-left-item {
        border-top: 1px solid rgba(255, 255, 255, 0.16);
      }
    }

    .section-content-card1-right {
      width: 50%;
      flex-shrink: 0;
      padding: 82rem 90rem 42rem 200rem;

      .card1-right-item {
        color: #FFF;
        padding: 20rem 10rem;
        text-align: right;
        font-size: 24rem;
        font-style: normal;
        font-weight: 700;
        line-height: 32rem;
      }

      .card1-right-item+.card1-right-item {
        border-top: 1px solid rgba(255, 255, 255, 0.16);
      }
    }
  }

  .section-content-card-title2 {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16rem;
    height: 84rem;
    width: 720rem;
    background: url("@img/usstocks/title_bg2.png") no-repeat;
    background-size: 100% 100%;

    h2 {
      background: linear-gradient(0deg, #FBE4AF 8.75%, #FFF 81.66%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 48rem;
      font-style: normal;
      font-weight: 700;
      line-height: 56rem;
      text-align: center;
    }

    .star-icon {
      height: 16rem;
    }
  }

  .section-content-card2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    min-height: 610rem;
    border-radius: 24rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
    background-size: 100% 100%;
    padding: 48rem 32rem;

    .bg3 {
      width: 600rem;
      flex-shrink: 0;
    }

    .card2-list {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      gap: 24rem;
    }

    .card2-item {
      display: flex;
      border-radius: 16rem;
      align-items: center;
      background: linear-gradient(90deg, #F4F4F4 0%, #F4F4F4 100%);
      height: 120rem;
      padding: 0 70rem 0 32rem;
      gap: 32rem;

      .card2-item-icon {
        width: 46rem;
        height: 46rem;
        flex-shrink: 0;
      }

      .card2-item-title {
        color: #000;
        font-size: 24rem;
        font-style: normal;
        font-weight: 500;
        line-height: 32rem;
      }

      .card2-item-text {
        margin-top: 8rem;
        color: var(--Text-Secondary, rgba(0, 0, 0, 0.64));
        font-size: 16rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24rem;
      }
    }
  }

  .section-content-card3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
    border-radius: 24rem;
    background: url("@img/usstocks/bg4.png") no-repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
    background-size: 456rem 294rem, 100% 100%;
    padding: 20rem 0 20rem 32rem;

    .bg4 {
      width: 636rem;
      // height: 403rem;
    }

    .card3-star {
      margin-top: 20rem;
      height: 18rem;
    }

    .card3-text {
      color: var(--Text-Secondary, rgba(0, 0, 0, 0.64));
      font-size: 16rem;
      font-style: normal;
      font-weight: 400;
      line-height: 24rem;
    }
  }
}


html[lang="pt"] {
  .section1 .section1-left .main-title .yezi {
    width: 76rem;
  }

  .section1 .section1-left .main-title h1 p {
    font-size: 40rem;
    line-height: 60rem;
  }

  .section1 .section1-left .title-intro {
    margin-top: 24rem;
  }

  .section2 .section-content-card1 .section-content-card1-left {
    padding: 42rem 160rem 42rem 62rem;
  }

  .section2 .section-content-card1 .section-content-card1-left .card1-left-item {
    padding: 30rem 0;
    // font-weight: normal;
  }

  .section2 .section-content-card1 .section-content-card1-right {
    padding: 82rem 50rem 42rem 80rem;
  }

  .section2 .section-content-card1 .section-content-card1-right .card1-right-item {
    padding: 26rem 0;
    // font-weight: normal;
  }

  .section2 .section-content-card2 .bg3 {
    width: 516rem;
  }

  .section2 .section-content-card3 .bg4 {
    width: 536rem;
    height: auto;
  }
}

html[lang="es"] {
  .section1 .section1-left .main-title .yezi {
    width: 64rem;
  }

  .section1 .section1-left .main-title h1 p {
    font-size: 32rem;
    line-height: 60rem;
  }

  .section1 .section1-left .title-intro {
    margin-top: 24rem;
  }

  .section2 .section-content-card1 .section-content-card1-left {
    padding: 70rem 90rem 42rem 62rem;
  }

  .section2 .section-content-card1 .section-content-card1-left .card1-left-item {
    padding: 30rem 0;
    // font-weight: normal;
  }

  .section2 .section-content-card1 .section-content-card1-right {
    padding: 110rem 50rem 42rem 80rem;
  }

  .section2 .section-content-card1 .section-content-card1-right .card1-right-item {
    padding: 26rem 0;
    // font-weight: normal;
  }

  .section2 .section-content-card2 .bg3 {
    width: 516rem;
  }

  .section2 .section-content-card3 .bg4 {
    width: 536rem;
    height: auto;
  }
}


@media (max-width: 996px) {

  .section1 {
    height: auto;
    box-sizing: border-box;
    padding: 100rem 0 150rem;
    background: url("@img/usstocks/bg1_m.png"), linear-gradient(180deg, #C2371A 0%, #E86F50 26.44%, #FCECE7 100%);
    background-size: 100% auto, 100% 100%;
    background-repeat: no-repeat;

    .usstocks-jianguan {
      bottom: 24rem;
    }

    .section1-content {
      flex-direction: column;
      gap: 50rem;
    }

    .section1-left {
      align-items: center;

      h1 {}

      .title-intro {
        margin-top: 18rem;
        font-size: 24rem;
        line-height: 32rem;
      }

      .logo {
        height: 85rem;
      }

    }

    .section-content-card-title1-m {
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 84rem;
      width: 650rem;
      background: url("@img/usstocks/title_bg1.png") no-repeat;
      background-size: 100% 100%;


      .section-content-card-title1-inner {
        width: 50%;
        display: inline-flex;
        justify-content: center;
        gap: 12rem;
        align-items: center;
        flex-grow: 1;
        flex-shrink: 0;
        font-size: 32rem;
        font-style: normal;
        font-weight: 700;
        line-height: 40rem;
        background: linear-gradient(0deg, #FBE4AF 8.75%, #FFF 81.66%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

      }

      .ebc-icon {
        height: 36rem;
      }

      .star-icon {
        height: 16rem;
      }
    }

    .section-content-card1-m {
      height: auto;
      background: url("@img/usstocks/bg2_m.png") no-repeat;
      background-size: 100% 100%;
      display: flex;

      .section-content-card1-left {
        flex-shrink: 0;
        width: 50%;
        padding: 28rem 50rem 24rem 50rem;

        .section-content-card1-left-icon {
          width: 26rem;
        }

        .card1-left-item {
          display: flex;
          align-items: center;
          padding: 28rem 10rem;
          gap: 16rem;
          font-size: 26rem;
          font-style: normal;
          font-weight: 700;
          line-height: 34rem;
          background: linear-gradient(180deg, #DD785A 0%, #57322C 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card1-left-item+.card1-left-item {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }
      }

      .section-content-card1-right {
        width: 50%;
        flex-shrink: 0;
        padding: 70rem 45rem 24rem 60rem;

        .card1-right-item {
          color: #FFF;
          padding: 20rem 10rem;
          text-align: right;
          font-size: 24rem;
          font-style: normal;
          font-weight: 700;
          line-height: 32rem;
        }

        .card1-right-item+.card1-right-item {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }
      }
    }
  }

  .section2 {
    .section-content:first-child {
      display: none;
    }

    .section-content {
      padding: 80rem 0 0 0;
    }

    .section-content:last-child {
      padding-bottom: 64rem;
    }

    .section-content-card-title1,
    .section-content-card1 {
      display: none;
    }

    .section-content-card-title2 {
      width: 650rem;
      background: url("@img/usstocks/title_bg2_m.png") no-repeat;
      background-size: 100% 100%;

      h2 {
        font-size: 40rem;
        line-height: 48rem;
      }

    }

    .section-content-card2 {
      align-items: normal;
      flex-direction: column;
      padding: 64rem 24rem;
      gap: 64rem;

      .bg3 {
        width: 518rem;
        flex-shrink: 0;
        align-self: center;
      }



      .card2-item {
        width: 100%;
        height: auto;
        padding: 30rem 32rem;
        gap: 32rem;
        background: #f7f7f7;

        .card2-item-icon {
          width: 76rem;
          height: 76rem;
          flex-shrink: 0;
        }

        .card2-item-title {
          font-size: 32rem;
          font-weight: 500;
          line-height: 40rem;
        }

        .card2-item-text {
          margin-top: 16rem;
          font-size: 24rem;
          line-height: 32rem;
        }
      }
    }

    .section-content-card3 {
      flex-direction: column;
      align-items: normal;

      gap: 24rem;
      border-radius: 24rem;
      background: url("@img/usstocks/bg4.png") no-repeat, linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
      background-size: 456rem 294rem, 100% 100%;
      padding: 64rem 24rem;

      .bg4 {
        width: 636rem;
        height: 403rem;
        order: 1;
        align-self: center;
      }

      .card3-box {
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .card3-star {
        margin: 0 auto;
        height: 18rem;
        order: 3;
      }

      .card3-text {
        margin-top: 24rem;
        font-size: 24rem;
        line-height: 32rem;
      }
    }

  }


  html[lang="pt"] {
    .section1 .section1-left .main-title h1 p {
      font-size: 44rem;
    }

    .section1 .section-content-card1-m .section-content-card1-left {
      padding: 28rem 0rem 24rem 36rem;
    }

    .section1 .section-content-card1-m .section-content-card1-left .card1-left-item {
      padding: 28rem 0;
      gap: 8rem;
    }

    .section1 .section-content-card1-m .section-content-card1-right {
      padding: 78rem 42rem 24rem 40rem;
    }

    .section1 .section-content-card1-m .section-content-card1-right .card1-right-item {
      padding: 16rem 0;
      line-height: 28rem;
    }
  }

  html[lang="es"] {
    .section1 .section1-left .main-title h1 p {
      font-size: 34rem;
    }

    .section1 .section-content-card1-m .section-content-card1-left {
      padding: 28rem 0rem 24rem 36rem;
    }

    .section1 .section-content-card1-m .section-content-card1-left .card1-left-item {
      padding: 16rem 0;
      gap: 8rem;
    }

    .section1 .section-content-card1-m .section-content-card1-right {
      padding: 78rem 42rem 24rem 40rem;
    }

    .section1 .section-content-card1-m .section-content-card1-right .card1-right-item {
      padding: 12rem 0;
      line-height: 28rem;
    }
  }

}
</style>
