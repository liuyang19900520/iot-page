<template>
  <section class="container">
    <div>
      <HeadTool/>
      <!-- <ActivityTool/> -->
    </div>
  </section>
</template>
<script>
import HeadTool from "~/components/pc/HeadTool.vue";
import ActivityTool from "~/components/ActivityTool.vue";
export default {
  components: {
    HeadTool,
    ActivityTool
  },
  layout: 'pc'
};
</script>
<style>
</style>