export default {
  router: {
    middleware: ['visits', 'user-agent', 'i18n']
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  }
}