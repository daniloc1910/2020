import webpack from 'webpack'

const title = 'Danilo Campos'
const url = 'https://danilocampos.com.br'
const description =
  'Danilo Campos is a brazilian designer based in Barcelona focused on digital design and development.'
const cover =
  'https://res.cloudinary.com/dmjl08xas/image/upload/v1600512540/share_myjcye.jpg'

export default {
  mode: 'spa',

  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: cover },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: cover }
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        defer: true
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: {
    color: 'black',
    height: '4px'
  },

  responsiveLoader: {
    name: 'img/[name]-[hash:7]-[width].[ext]',
    placeholder: true,
    placeholderSize: 50,
    min: 750,
    max: 3360,
    steps: 3,
    format: 'jpg',
    quality: 75,
    adapter: require('responsive-loader/sharp'),
    disable: false
  },

  css: ['~/css/main.css'],

  plugins: [
    { src: '~/plugins/moment-timezone-inject.js', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/lazysizes.client.js', ssr: false }
  ],

  buildModules: ['@nuxtjs/moment', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-85228864-1'
  },

  modules: ['@nuxtjs/moment', 'nuxt-responsive-loader', '@nuxtjs/cloudinary'],

  cloudinary: {
    cloudName: 'dzeoohwas'
  },

  axios: {},

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
  }
}
