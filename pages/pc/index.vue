<template>
  <v-app id="inspire">
    <v-app-bar app dark>
      <v-toolbar-title>{{ $t("title") }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>{{ $t("home") }}</v-btn>
        <v-btn text>{{ $t("members") }}</v-btn>
        <v-btn text>{{ $t("sources") }}</v-btn>
        <v-btn text>
          {{ $t("language") }}
          <v-icon>mdi-expand-more</v-icon>
        </v-btn>
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn class="v-btn--flat" v-on="on">Dropdown</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="handleSetLanguage(index)">
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
    items: [{ title: "English" }, { title: "日本語" }, { title: "简体中文" }]
  }),
  methods: {
    handleSetLanguage(index) {
      var lang;
      switch (index) {
        case 0:
          lang = "en";
          break;

        case 1:
          lang = "jp";
          break;

        case 2:
          lang = "zh";
      }

      console.log(lang);
      // 切换
      this.$i18n.locale = lang;
      // 结合vuex （vuex的mutations方法结合了cookie）
      this.$store.dispatch("setLanguage", lang);
   
    }
  }
};
</script>