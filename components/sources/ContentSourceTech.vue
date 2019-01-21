<template>
  <div class="source_outside">
    <div class="source_main_side"></div>
    <div class="source_main_middle">
      <br>
      <h3>知识体系</h3>
      <div class="source_tech">
        <md-card v-for="n in 12" :key="n">
          <md-card-media>
            <img src="../../assets/post-1.jpg" alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">技术名称</div>
            <div class="md-subhead">开启xx之旅</div>
          </md-card-header>
        </md-card>
      </div>
    </div>
    <div class="source_main_side"></div>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 14%;
  margin: 1%;
  display: inline-block;
  vertical-align: top;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.source_outside {
  display: flex;
  align-items: center;
  justify-content: center; /*水平居中*/
}

.source_main_side {
  width: 8%;
}
.source_main_middle {
  width: 84%;
}

.source_tech {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around; /*水平居中*/
}
</style>

<script>
export default {
  name: "MediaCover"
};
</script>