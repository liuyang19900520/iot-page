<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/zhongguancun.png" alt="People">
    </div>
    <div class="assciation_profile">
      <h3 class="in_small_px">中关村物联网产业联盟</h3>
      <br>
      <h4 class="in_small_px">http://www.ziota.org/</h4>
      <br>
      <p>
        中关村物联网产业联盟成立于2009年11月1日，是中国第一家物联网产业联盟。由中关村在物联网产业链上下游具有优势的单位共同发起。
        目前，联盟已涵盖了物联网产业链重要核心单位近200家，服务于物联网、智慧城市相关领域企业近2000家，形成了产、学、研、用开放式的合作机制。
        联盟致力于推动产业发展、服务企业、服务政府、促进合作四大方面。通过搭建关键技术及公共服务平台，推动物联网技术、产业链和市场应用的协同发展；
        通过协调企业间合作关系、企业与政府间的关系、产业与市场的关系，更好的服务会员，协同创新；在配合政府部门产业调研与政策研究、
        组织实施重大项目基础之上，承接政府部门的产业促进服务任务；协调与相关联盟、协会、机构的关系，实现协同创新和跨界创新的目的。
        <a
          href="http://www.ziota.org/"
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
