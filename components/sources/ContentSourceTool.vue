<template>
  <div class="source_outside">
    <div class="source_main_side">1111</div>
    <div class="source_main_middle">
      <br>
      <h3>最新资料</h3>
      <md-card v-for="n in 1" :key="n">
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="../../assets/card-sky.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">HTML 5 开发</span>
              <span class="md-subhead">学习路线</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="../../assets/card-sky.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">Android 开发</span>
              <span class="md-subhead">学习路线</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="../../assets/card-sky.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">IOS 开发</span>
              <span class="md-subhead">学习路线</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="../../assets/card-sky.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">Python 开发</span>
              <span class="md-subhead">学习路线</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
    <div class="source_main_side">1111</div>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 23%;
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
</style>

<script>
export default {
  name: "MediaCover"
};
</script>