// export const state = () => ({
//   locales: ['en-US','ja-JP', 'zh-CN'],
//   locale: 'en-US'
// })

// export const mutations = {
//   SET_LANG(state, locale) {
//     if (state.locales.indexOf(locale) !== -1) {
//       state.locale = locale
//     }
//   }
// }

export const state = () => ({
  visits: []
})

export const mutations = {
  ADD_VISIT(state, path) {
    state.visits.push({
      path,
      date: new Date().toJSON()
    })
  }
}
