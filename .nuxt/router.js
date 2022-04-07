import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a029a9c = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _db548354 = () => interopDefault(import('../pages/createAccount.vue' /* webpackChunkName: "pages/createAccount" */))
const _f67eefe2 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _0a0d0b5b = () => interopDefault(import('../pages/guestList.vue' /* webpackChunkName: "pages/guestList" */))
const _40a97cdf = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4398512e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4c4443f0 = () => interopDefault(import('../pages/home/_index.vue' /* webpackChunkName: "pages/home/_index" */))
const _79f0ae17 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _3a029a9c,
    name: "account"
  }, {
    path: "/createAccount",
    component: _db548354,
    name: "createAccount"
  }, {
    path: "/form",
    component: _f67eefe2,
    name: "form"
  }, {
    path: "/guestList",
    component: _0a0d0b5b,
    name: "guestList"
  }, {
    path: "/inspire",
    component: _40a97cdf,
    name: "inspire"
  }, {
    path: "/login",
    component: _4398512e,
    name: "login"
  }, {
    path: "/home/:index",
    component: _4c4443f0,
    name: "home"
  }, {
    path: "/",
    component: _79f0ae17,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
