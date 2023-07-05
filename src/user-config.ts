export default {
  extends: [
    'ma-typographie',
    'mon-theme',
  ],

  app: {
    secure: true,
  },

  modules: [
    'mes-composants',
    'mon-pinceau',
  ],

  plugins: [
    '~/plugins/mon-plugin',
  ],

  content: {
    defaultLocale: 'fr',
  },
}
