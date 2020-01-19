<template>
  <section class="container">
    <div>
      <HeadTool/>
      <!-- <MainSourcesTool/>
      <content-source-tool/>
      <content-source-tech/>-->
      <br>
      <br>
      <br>
      <md-empty-state
        class="building-style"
        md-icon="access_time"
        md-label="您所浏览的功能建设中"
        md-description="Anything you snooze will go here until it's time for it to return to the inbox."
      ></md-empty-state>
    </div>
  </section>
</template>
<script>
import HeadTool from "~/components/pc/HeadTool.vue";
import MainSourcesTool from "~/components/sources/MainSourcesTool.vue";
import ContentSourceTool from "~/components/sources/ContentSourceTool.vue";
import ContentSourceTech from "~/components/sources/ContentSourceTech.vue";
export default {
  components: {
    HeadTool,
    MainSourcesTool,
    ContentSourceTool,
    ContentSourceTech
  }
};
</script>
 <style lang="scss" scoped>
.building-style {
  width: 100%;
}
</style>


