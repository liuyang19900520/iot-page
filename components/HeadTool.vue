<template>
  <div>
    <md-toolbar md-elevation="1" class="headbar-style">
      <img class="logo" src="../assets/logo.jpg">
      <h1 class="titlelogo" style="flex: 1">Japan-China AI·IOT Industry Alliance (JCAIoT)</h1>

      <div>
        <md-button
          class="isMenuLetter"
          v-bind:class="{ 'md-primary': isSummary }"
          @click="toSummary"
        >SUMMARY</md-button>

        <md-button
          class="isMenuLetter"
          v-bind:class="{ 'md-primary': isMember }"
          @click="toMembers"
        >MEMBERS</md-button>

        <md-button
          class="isMenuLetter"
          v-bind:class="{ 'md-primary': isSource }"
          @click="toSources"
        >SOURCES</md-button>

        <md-menu class="isMenuIcon" md-direction="bottom-end">
          <md-button md-menu-trigger>
            <md-icon>menu</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item>
              <md-button v-bind:class="{ 'md-primary': isSummary }" @click="toSummary">SUMMARY</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button v-bind:class="{ 'md-primary': isMember }" @click="toMembers">MEMBERS</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button v-bind:class="{ 'md-primary': isSource }" @click="toSources">SOURCES</md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isSummary: null,
      isMember: null,
      isSource: null,
      menuVisible: false
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

<style lang="scss" scoped>
.logo {
  width: 48px;
  height: 48px;
}

.titlelogo {
  margin-left: 1%;
  font-weight: bold;
}

.isMenuIcon {
  display: none;
}

@media only screen and (min-width: 240px) and (max-width: 320px) {
  .logo {
    width: 32px;
    height: 32px;
  }
  .titlelogo {
    display: none;
  }

  .isMenuLetter {
    display: none;
  }

  .headbar-style {
    justify-content: space-between;
  }

  .isMenuIcon {
    display: flex;
  }

  .md-button {
    min-width: 0px;
  }
}

@media only screen and (min-width: 321px) and (max-width: 480px) {
  .logo {
    width: 32px;
    height: 32px;
  }
  .titlelogo {
    display: none;
  }

  .isMenuLetter {
    display: none;
  }

  .isMenuIcon {
    display: flex;
  }
  .headbar-style {
    justify-content: space-between;
  }

  .md-button {
    min-width: 0px;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  .logo {
    width: 48px;
    height: 3248pxpx;
  }
  .titlelogo {
    display: none;
  }

  .isMenuIcon {
    display: none;
  }

  .headbar-style {
    justify-content: space-between;
  }
}

@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .logo {
    width: 48px;
    height: 48px;
  }
  .titlelogo {
    display: none;
  }

  .isMenuIcon {
    display: none;
  }

  .headbar-style {
    justify-content: space-between;
  }
}
</style>



