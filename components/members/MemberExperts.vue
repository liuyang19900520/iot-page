<template>
  <div>
    <md-card class="md-card">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="../../assets/liujin.jpg" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">刘劲</span>
            <span class="md-subhead">协会会长。东北大学工学博士</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <md-card class="md-card">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="../../assets/qin.jpg" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">秦中陵</span>
            <span class="md-subhead">协会运营委员会事务局长。xxx方面专家</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
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

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .md-card {
    width: 98%;
    margin-bottom: 5%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .md-card {
    width: 98%;
    margin-bottom: 5%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .md-card {
    width: 46%;
    margin-left: 2%;
    margin-right: 2%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .md-card {
    width: 29%;
    margin-left: 2%;
    margin-right: 2%;
    display: inline-block;
    vertical-align: top;
  }
}
</style>

<script>
export default {
  name: "MediaCover"
};
</script>