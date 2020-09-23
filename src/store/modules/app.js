import storage from 'store'
import { APP_THEME_COLOR, APP_THEME_MODE } from '@/core/buildKey'
import { updateTheme } from '@/theme'
import { ConstRoutes } from '@/router/config.routes'
import { loadLangAsync } from '@/locales'

let state = {
  routes: ConstRoutes,
  themeMode: 'light',
  themeColor: 'blue',
  menuIsCollapse: false,
  lang: 'zh-CN'
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = ConstRoutes.concat(r))
  },
  setMenuCollapse(state) {
    return (state.menuIsCollapse = !state.menuIsCollapse)
  },
  setLang(state, lang) {
    return (state.lang = lang)
  },
  setMode(state, mode) {
    return (state.themeMode = mode)
  },
  setColor(state, color) {
    return (state.themeColor = color)
  }
}

let actions = {
  setThemeColor({ commit }, mode) {
    updateTheme(mode).then(() => {
      commit('setColor', mode)
      storage.set(APP_THEME_COLOR, mode)
    })
  },
  setThemeMode({ commit }, mode) {
    updateTheme(mode).then(() => {
      commit('setMode', mode)
      storage.set(APP_THEME_MODE, mode)
    })
  },
  setLanguage({ commit }, lang) {
    commit('setLang', lang)
    return new Promise((resolve, reject) => {
      loadLangAsync(lang)
        .then(() => {
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

let getters = {
  routes: state => state.routes,
  themeMode: state => state.themeMode,
  themeColor: state => state.themeColor,
  menuIsCollapse: state => state.menuIsCollapse,
  locale: state => state.locale,
  lang: state => state.lang
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}