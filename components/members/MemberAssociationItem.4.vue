<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/smartiot.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">スマートIoT推進フォーラム</h3>
      <br>
      <h4 class="in_small_px">https://smartiot-forum.jp/</h4>
      <br>
      <p>
        IoTはさまざまな目的で導入され、そのサービス内容、取扱いデータ、創出価値は多様です。
        また、導入や事業化において技術開発が必要であったり、想定通りのデータが収集できない、導入メリットの理解に時間がかかるなど、
        思わぬところで苦労したりします。
        スマートIoT推進フォーラムでは、その活動の一環として先進事例を取材するとともに、会員の皆様からも事例を募集し、
        紹介しております。さまざまな事例をご覧いただくことで、気付きの誘発や新たな知見の獲得などにつながるのではと期待しております。この事例紹介が、IoTの事例集としてIoTビジネスの推進、会員相互の交流促進などに役立てば幸いです。
        <a
          href="https://smartiot-forum.jp/"
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
