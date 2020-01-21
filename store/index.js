export const state = () => ({
  visits: [],
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutations = {
  ADD_VISIT(state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}