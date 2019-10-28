import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);


export default ({
  app
}) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    messages: {
      zh: require('~/static/i18n/app-zh.json'),
      en: require('~/static/i18n/app-en.json'),
      jp: require('~/static/i18n/app-jp.json')
    }
  });
}
