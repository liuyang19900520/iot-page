import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

export default ({
  app
}) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    messages: {
      zh: require('~/static/lang/zh/app.json'),
      en: require('~/static/lang/en/app.json'),
      jp: require('~/static/lang/jp/app.json')
    }
  });
}
