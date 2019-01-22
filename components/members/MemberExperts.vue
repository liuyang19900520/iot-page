<template>
  <div>
    <md-card class="md-card" v-for="n in 10" :key="n">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="../../assets/card-sky.jpg" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">张三</span>
            <span class="md-subhead">
              张三，xx大学博士，xx领域专家。
              著有《xxxx》
            </span>
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
</style>

<script>
export default {
  name: "MediaCover"
};
</script>