<template>
  <v-app id="inspire">
    <v-app-bar app dark>
      <v-toolbar-title>{{ $t("title") }}</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-toolbar-items>
        <nuxt-link to="/">
          <v-btn text>{{ $t("home") }}</v-btn>
        </nuxt-link>

        <v-btn text>{{ $t("members") }}</v-btn>
        <v-btn text>{{ $t("sources") }}</v-btn>
        <nuxt-link to="{ path: '/pc/:lang/about' }">
          <v-btn text>{{ $t("about") }}</v-btn>
        </nuxt-link>

        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" class="v-btn--flat,v-btn--contained--out">
              {{ $t("language") }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="handleSetLanguage(index)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid></v-container>
    </v-content>
    <v-footer app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [{ title: "English" }, { title: "日本語" }, { title: "简体中文" }],
    lang: "zh-CN"
  }),
  methods: {
    handleSetLanguage(index) {
      var lang;
      switch (index) {
        case 0:
          lang = "en-US";
          break;

        case 1:
          lang = "ja-JP";
          break;

        case 2:
          lang = "zh-CN";
      }

      console.log(lang);
      this.lang = lang;
      // 切换
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
.v-btn--contained--out {
  box-shadow: none !important;
  background: #424242 !important;
}
</style>