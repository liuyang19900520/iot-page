<template>
  <div class="assciation_item">
    <div class="assciation_img">
      <img src="../../assets/post-1.jpg" alt="People">
    </div>
    <div class="assciation_profile">
      <h3>Alibaba Group</h3>
      <br>
      <h4>https://www.alibabagroup.com/</h4>
      <br>
      <p>
        我们旨在赋能企业改变营销、销售和经营的方式，并提升企业效率。我们为商家、品牌及其他企业提供基本的科技基础设施以及营销平台，
        让其可借助新技术的力量与用户和客户互动，以更具效率的形式开展运营。
        我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目。
        我们旨在赋能企业改变营销、销售和经营的方式，并提升企业效率。我们为商家、品牌及其他企业提供基本的科技基础设施以及营销平台，
        让其可借助新技术的力量与用户和客户互动，以更具效率的形式开展运营。
        我们的业务包括核心电商、云计算、数字媒体和娱乐以及创新项目。
        <a
          href
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

<style>

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
</style>
