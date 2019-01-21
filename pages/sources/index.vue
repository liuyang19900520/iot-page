<template>
  <section class="container">
    <div>
      <HeadTool/>
      <MainSourcesTool/>
      <content-source-tool/>
      <content-source-tech/>
    </div>
  </section>
</template>
<script>
import HeadTool from "~/components/HeadTool.vue";
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
<style>
</style>
