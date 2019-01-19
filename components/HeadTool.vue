<template>
  <div>
    <md-toolbar md-elevation="1">
      <img class="logo" src="../assets/logo.jpg">
      <h3 class="md-title" style="flex: 1">日中AI•IoT产业联盟</h3>

      <md-button v-bind:class="{'md-primary':isOn}" @click="toSummary">SUMMARY</md-button>

      <md-button @click="toMembers">MEMBERS</md-button>

      <md-button @click="toSources">SOURCES</md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  data: {
    isOn: false
  },
  methods: {
    toSummary() {
      this.$router.push({ path: "/" });
      this.isOn = true;
    },
    toMembers() {
      this.$router.push({ path: "/members" });
    },
    toSources() {
      this.$router.push({ path: "/sources" });
    }
  }
};
</script>

<style>
.logo {
  width: 3%;
  height: 3%;
}
</style>



