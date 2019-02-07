<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/lab.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">IoT推進ラボ</h3>
      <br>
      <h4 class="in_small_px">https://iotlab.jp/</h4>
      <br>
      <p>
        IoT推進ラボは、IoT推進コンソーシアムの下に設置され、ラボ3原則（成長性・先導性、波及性（オープン性）、社会性）に基づき個別のIoTプロジェクトを
        発掘・選定し、企業連携・資金・規制の面から徹底的に支援するとともに、
        大規模社会実装に向けた規制改革・制度形成等の環境整備を行います。
        IoT推進ラボの運営における業務（イベントの企画・運営業務、ご本人様への連絡、委託元への報告）については、
        国立研究開発法人新エネルギー・産業技術総合開発機構「IoTを活用した新産業モデル創出基盤整備事業／革新的な産業モデル創出及び推進に関する検討」の委託
        を受けた一般財団法人日本情報経済社会推進協会（JIPDEC）が実施致します。
        <a
          href="https://iotlab.jp/"
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
