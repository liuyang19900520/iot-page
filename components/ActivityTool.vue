<template>
  <div class="activity">
    <div class="title-post">
      <h1>协会介绍</h1>
      <h4 class="title-post-content">
        日中AI•IoT産業联盟（简称JCAIoT），携手中国和日本各界同仁，着眼于中日优势互补，促进中日技术与产业化交融，
        力争在中日之间打造一个更广泛的，国际性的物联网与人工智能的技术与市场交流的平台，
        让更多的企业和个人了解AI•IoT并参与进来，最终能够在AI•IoT领域形成百家争鸣的崭新局面。
        本联盟，会员380余人，其中，企业会员为100多家，其他为各领域的技术精英或专家。
        在日本我们举办了很多次交流会，新技术新商业模式让大家耳目一新，并且实现了数个领域的项目对接，
        得到了日本企业界和学术界的认可，与数家日本本土物联网和人工智能的协会结成了坚定的信赖伙伴关系。
        同时，作为中日纽带，本联盟与中国最大的中关村物联网产业联盟在北京和东京进行多次面对面交流，成为其在日本的唯一的全面战略合作伙伴。
        去年，我们更是放眼全球，与世界上十四个国家的AI•IoT协会建立了合作伙伴关系，包括美国硅谷的AI高新技术协会，英国，芬兰，巴基斯坦等国的团体。
        2019年我们要继续发力，务实再务实，实现AI•IoT生态领域百花齐放！
      </h4>
    </div>
    <h3 class="title-post-title">最新活动</h3>
    <div class="md-layout post-flex">
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
  methods: {}
};
</script>

<style lang="scss" scoped>
.activity {
  width: 100%;
}

.md-card {
  width: 320px;
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

.post-flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .post-flex {
    display: block;
    background-color: red;
  }

  .md-card {
    width: 98%;
    margin: 1%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .post-flex {
    display: block;
    background-color: orange;
  }

  .md-card {
    width: 98%;
    margin: 1%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .post-flex {
    display: block;
    background-color: yellow;
  }

  .md-card {
    width: 98%;
    margin: 1%;
    display: inline-block;
    vertical-align: top;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .post-flex {
    display: block;
    background-color: green;
  }

  .md-card {
    width: 48%;
    margin: 1%;
    display: inline-block;
    vertical-align: top;
  }
}
</style>