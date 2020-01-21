<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('about.title') }}</h1>
      <p>{{ $t('about.introduction') }}</p>
    </div>
    <div>
      <pre>{{ userAgent }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t("about.title") };
  },
  asyncData({ store, route, userAgent }) {
    return {
      userAgent
    };
  }
};
</script>
