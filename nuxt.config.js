import webpack from 'webpack'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Danilo Campos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  pageTransition: {
    name: 'paper',
    mode: ''
  },
  layoutTransition: {
    name: 'layout',
    mode: ''
  },

  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    min: 750,
    max: 3360,
    steps: 4,
    placeholder: true,
    format: 'jpg',
    quality: 85,
    disable: true
  },
  /*
   ** Global CSS
   */
  css: ['~/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/moment-timezone-inject.js', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    '~/plugins/lazysizes.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/moment', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-85228864-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/moment', 'nuxt-responsive-loader'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(
      config,
      {
        isDev,
        isClient,
        loaders: { vue }
      }
    ) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (
          to.matched.some((r) => r.components.default.options.scrollToTop)
        ) {
          position = { x: 0, y: 0 }
        }
        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
    /* base: './' */
  }
}
