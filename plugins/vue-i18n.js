// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n);

// export default ({
//   app
// }) => {
//   app.i18n = new VueI18n({
//     fallbackLocale: 'en',
//     messages: {
//       zh: require('~/static/lang/zh/app.json'),
//       en: require('~/static/lang/en/app.json'),
//       jp: require('~/static/lang/jp/app.json')
//     }
//   });

//   app.i18n.path = (link) => {
    
//     if (app.i18n.locale === app.i18n.fallbackLocale) {
//       console.log(link)
//       console.log(app.i18n.locale)
//       return `/${link}`;
//     }
//     return `/${app.i18n.locale}/${link}`;
//   }
// }


import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh-CN',
    messages: {
      'en-US': require('@/static/locales/en-US.json'),
      'ja-JP': require('@/static/locales/ja-JP.json'),
      'zh-CN': require('@/static/locales/zh-CN.json')
    }
  })

  app.i18n.path = link => {
    /*
      此情况默认语言不用加lang参数，是官网的案列 ，本人是将页面都放在_lang文件夹下，所以此段代码注释
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    } */
    return `/${app.i18n.locale}/${link}`
  }

}
