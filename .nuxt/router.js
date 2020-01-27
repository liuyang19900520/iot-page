import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b1495f8 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _656d2f4a = () => interopDefault(import('..\\pages\\mobile\\index.vue' /* webpackChunkName: "pages_mobile_index" */))
const _a4dce4d4 = () => interopDefault(import('..\\pages\\mobile\\about.vue' /* webpackChunkName: "pages_mobile_about" */))
const _7efb42ec = () => interopDefault(import('..\\pages\\mobile\\_lang\\index.vue' /* webpackChunkName: "pages_mobile__lang_index" */))
const _5f436827 = () => interopDefault(import('..\\pages\\mobile\\_lang\\about.vue' /* webpackChunkName: "pages_mobile__lang_about" */))
const _2acc70bd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _45b2684a = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */))
const _25fa8d85 = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0b1495f8,
    name: "about"
  }, {
    path: "/mobile",
    component: _656d2f4a,
    name: "mobile"
  }, {
    path: "/mobile/about",
    component: _a4dce4d4,
    name: "mobile-about"
  }, {
    path: "/mobile/:lang",
    component: _7efb42ec,
    name: "mobile-lang"
  }, {
    path: "/mobile/:lang/about",
    component: _5f436827,
    name: "mobile-lang-about"
  }, {
    path: "/",
    component: _2acc70bd,
    name: "index"
  }, {
    path: "/:lang",
    component: _45b2684a,
    name: "lang"
  }, {
    path: "/:lang/about",
    component: _25fa8d85,
    name: "lang-about"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
