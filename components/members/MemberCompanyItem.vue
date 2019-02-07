<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/huajin.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">華晋グローバル株式会社</h3>
      <br>
      <h4 class="in_small_px">http://www.ks-global.co.jp/</h4>
      <br>
      <p>
        華晋は、人と情報を結ぶコーディネイターとして先進のテクノロジーの構築、提案、納入、保守を目的の専門会社として事業展開しております。
        多様化するニーズに即応し、高度な技術とノウハウを提供することにより、お客様のご満足を得られるよう日々努力を重ねております。
        相変わらず「アプリケーションソフトウェア開発とサービスの提供を核心業務とし、国内、国際市場を同時開拓」する市場戦略を主張してきました。
        <a
          href="http://www.ks-global.co.jp/"
        >查看更多</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableBasic"
};
</script>

<style scoped>
.assciation_item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.assciation_img {
  width: 40%;
  margin: 2%;
}

.assciation_profile {
  width: 100%;
  margin: 2%;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .assciation_img {
    width: 80%;
    margin: 2%;
    text-align: center;
  }
  .assciation_item {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .assciation_profile {
    text-align: center;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 5%;
  }
  .in_small_px {
    margin: 1%;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
}
</style>
