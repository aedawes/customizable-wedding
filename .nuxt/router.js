import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _db548354 = () => interopDefault(import('../pages/createAccount.vue' /* webpackChunkName: "pages/createAccount" */))
const _f67eefe2 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _4b89eaaa = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _40a97cdf = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4398512e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
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
    path: "/createAccount",
    component: _db548354,
    name: "createAccount"
  }, {
    path: "/form",
    component: _f67eefe2,
    name: "form"
  }, {
    path: "/home",
    component: _4b89eaaa,
    name: "home"
  }, {
    path: "/inspire",
    component: _40a97cdf,
    name: "inspire"
  }, {
    path: "/login",
    component: _4398512e,
    name: "login"
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
