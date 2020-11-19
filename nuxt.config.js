export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Todo_App_Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '@node_modules/@fortawesome/fontawesome-free/css/all.css',
    '@assets/scss/main'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@plugins/slider-swiper.js"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
