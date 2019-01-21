<template>
  <div>
    <md-toolbar md-elevation="1">
      <img class="logo" src="../assets/logo.jpg">
      <h3 class="md-title" style="flex: 1">日中AI•IoT产业联盟</h3>

      <md-button v-bind:class="{ 'md-primary': isSummary }" @click="toSummary">SUMMARY</md-button>

      <md-button v-bind:class="{ 'md-primary': isMember }" @click="toMembers">MEMBERS</md-button>

      <md-button v-bind:class="{ 'md-primary': isSource }" @click="toSources">SOURCES</md-button>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isSummary: null,
      isMember: null,
      isSource: null
    };
  },
  methods: {
    toSummary() {
      this.$router.push({ path: "/" });
    },
    toMembers() {
      this.$router.push({ path: "/members" });
      this.pathPrimary();
    },
    toSources() {
      this.$router.push({ path: "/sources" });
      this.pathPrimary();
    },

    pathPrimary() {
     
      switch (this.$route.path) {
        case "/":
          this.isSummary = true;
          this.isMember = false;
          this.isSource = false;
          break;
        case "/members":
          this.isSummary = false;
          this.isMember = true;
          this.isSource = false;
          break;
        case "/sources":
          this.isSummary = false;
          this.isMember = false;
          this.isSource = true;
          break;
      }
    }
  },
  created: function() {
    this.pathPrimary();
  }
};
</script>

<style>
.logo {
  width: 3%;
  height: 3%;
}
</style>



