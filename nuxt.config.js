module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'iot-page',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        name: 'HandheldFriendly',
        content: 'true'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons'
      }
    ]
  },
  mode: 'universal',
  buildModules: [
    ['@nuxtjs/vuetify']
  ],
  // Vuetify options
  vuetify: {
    optionsPath: '~/plugins/vuetify.js'
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#448aff'
  },
  /*
   ** Build configuration
   */
  css: [{
      src: 'vue-material/dist/vue-material.min.css',
      lang: 'css'
    },
    {
      src: 'vuetify/dist/vuetify.min.css',
      lang: 'css'
    }
  ],
  plugins: [
    '~/plugins/vue-material.js'
  ],
  router: {
    middleware: ['visits', 'user-agent']
  },
  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ['vue-material'],

  }

}
