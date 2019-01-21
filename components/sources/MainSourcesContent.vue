<template>
  <div>
    <md-chip class="md-primary" md-clickable>公开资源</md-chip>
    <hr>

    <main-sources-content-line v-for="n in 4" :key="n"/>
    <br>
    <md-chip class="md-primary" md-clickable>会员独占</md-chip>
    <hr>

    <main-sources-content-line v-for="n in 4" :key="n"/>
  </div>
</template>

<script>
import MainSourcesContentLine from "~/components/sources/MainSourcesContentLine.vue";
export default {
  components: {
    MainSourcesContentLine
  },
  data: function() {
    return {};
  }
};
</script>

<style>
</style>



