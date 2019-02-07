<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/haurenchuangxin.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">日本华人华侨创新协会</h3>
      <br>
      <h4 class="in_small_px">http://jciahch.org/</h4>
      <br>
      <p>
        在中国＂十三五＂创新型国家经济建设时期，立足＂引进消化吸收再创新＂的发展机遇，着眼发达国家的高新科技信息和创新成果，
        通过各类型交流活动、国际化合作交易平台，汇聚全球华人华侨个人和企业团体的力量，
        为同仁志士创新创业发展事业架设桥梁，促使创新思维结合高新科技积极推动全球华人华侨各类企业的繁荣发展，共园共享中国梦。
        <a
          href="http://jciahch.org/"
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
