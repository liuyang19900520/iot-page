<template>
  <section class="container">
    <div>
      <HeadTool/>
      <ActivityTool/>
    </div>
  </section>
</template>
<script>
import HeadTool from '~/components/HeadTool.vue'
import ActivityTool from '~/components/ActivityTool.vue'
import MemberTabTool from '~/components/MemberTabTool.vue'
export default {
  components: {
    HeadTool,
    ActivityTool,MemberTabTool
  }
}
</script>
<style>
</style>
