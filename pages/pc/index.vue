<template>
  <v-app id="inspire">
    <v-app-bar app dark>
      <v-toolbar-title>{{ $t("title") }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>{{ $t("home") }}</v-btn>
        <v-btn text>{{ $t("member") }}</v-btn>
        <v-btn text>{{ $t("source") }}</v-btn>
        <v-btn text>{{ $t("language") }}<v-icon>mdi-xbox-controller</v-icon></v-btn>
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
    drawer: null
  })
};
</script>