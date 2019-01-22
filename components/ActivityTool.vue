<template>
  <div class="activity">
    <div class="title-post">
      <h1>协会介绍</h1>
      <h4 class="title-post-content">
        这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，
        这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，
        这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，
        这里是协会介绍，这里是协会介绍，这里是协会介绍，
        这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，这里是协会介绍，
        这里是协会介绍。
      </h4>
    </div>
    <h3 class="title-post-title">最新活动</h3>
    <div class="md-layout">
      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">最新活动一</div>
          <div class="md-subhead">2019年01月21日</div>
        </md-card-header>

        <md-card-content>
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介.
        </md-card-content>
      </md-card>

      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">最新活动二</div>
          <div class="md-subhead">2019年01月21日</div>
        </md-card-header>

        <md-card-content>
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介.
        </md-card-content>
      </md-card>
      <md-card class="md-layout-item">
        <md-card-media>
          <img src="../assets/post-1.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">最新活动三</div>
          <div class="md-subhead">2019年01月21日</div>
        </md-card-header>

        <md-card-content>
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，
          这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介，这里是最新活动一的简介.
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layouts",
  methods: {
    sendMessage() {
      window.alert("Send a message...");
    },
    doACall() {
      window.alert("Calling someone...");
    }
  }
};
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
}

.md-card {
  width: 30%;
  margin: 1%;
  display: inline-block;
  vertical-align: top;
}

.title-post {
  margin: 5%;
}

.title-post-title {
  margin-left: 1%;
}

.title-post-content {
  margin: 3%;
}
</style>