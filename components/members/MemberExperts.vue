<template>
  <div class="center">
    <md-card v-for="n in 30" :key="n">
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="../../assets/card-sky.jpg" alt="Skyscraper">
        </md-card-media>
        <md-card-area>
          <md-card-header>
            <span class="md-title">Solid background</span>
            <span class="md-subhead">4/3 image</span>
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
            <span class="md-title">Solid background</span>
            <span class="md-subhead">4/3 image</span>
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
            <span class="md-title">Solid background</span>
            <span class="md-subhead">4/3 image</span>
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
            <span class="md-title">Solid background</span>
            <span class="md-subhead">4/3 image</span>
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