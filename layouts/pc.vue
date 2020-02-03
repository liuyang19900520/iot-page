<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">Nuxt i18n</h1>
        <nav class="Header__Menu">
          <NuxtLink :to="$i18n.path('')" class="Header__Link" exact>{{ $t('links.home') }}</NuxtLink>
          <NuxtLink :to="$i18n.path('about')" class="Header__Link" exact>{{ $t('links.about') }}</NuxtLink>
          <NuxtLink :to="$route.fullPath" class="Header__Link" exact>{{ $t('links.english') }}</NuxtLink>
          <NuxtLink
            :to="'fr'+modifyUrl($route.fullPath)"
            class="Header__Link"
            exact
          >{{ $t('links.french') }}</NuxtLink>
          <NuxtLink
            :to="'zh'+modifyUrl($route.fullPath)"
            class="Header__Link"
            exact
          >{{ $t('links.chinese') }}</NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt />
    <Visits />
  </div>
</template>

<script>
import Visits from "~/components/Visits";

export default {
  components: { Visits },
  computed: {
    modifyUrl: function(routePath) {
      let result = "";
      console.log(routePath);
      if (routePath.indexOf("/mobile") != -1) {
        if (routePath.indexOf("/zh") != -1 || routePath.indexOf("/fr") != -1) {
          result = routePath.substring(11, routePath.length);
        } else {
          result = routePath.substring(8, routePath.length);
        }
      } else {
        if (routePath.indexOf("/zh") != -1 || routePath.indexOf("/fr") != -1) {
          result = routePath.substring(3, routePath.length);
        } else {
          result = routePath.substring(0, routePath.length);
        }
      }

      return result;
    }
  }
};
</script>

<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0;
}
.container {
  width: 75%;
  margin: 0 auto;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.Header {
  color: #fff;
  height: 80px;
  line-height: 80px;
  background-color: #2e2f30;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
  background-color: #2e2f30;
}
.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
</style>
