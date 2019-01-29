module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'iot-page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'HandheldFriendly', content: 'true' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#448aff' },
  /*
  ** Build configuration
  */
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: '~/assets/theme.scss', lang: 'scss' } // include vue-material theme engine
  ],
  plugins: [
    { src: '~/plugins/vue-material' }
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-material']
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
