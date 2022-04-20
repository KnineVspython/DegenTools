import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07aaedef = () => interopDefault(import('..\\pages\\manage.vue' /* webpackChunkName: "pages/manage" */))
const _138945fe = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _12aea55e = () => interopDefault(import('..\\pages\\twitter\\callback.vue' /* webpackChunkName: "pages/twitter/callback" */))
const _5fe673b8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1c225ec4 = () => interopDefault(import('..\\pages\\_project\\index.vue' /* webpackChunkName: "pages/_project/index" */))
const _1d1743d8 = () => interopDefault(import('..\\pages\\_project\\sales.vue' /* webpackChunkName: "pages/_project/sales" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/manage",
    component: _07aaedef,
    name: "manage"
  }, {
    path: "/projects",
    component: _138945fe,
    name: "projects"
  }, {
    path: "/twitter/callback",
    component: _12aea55e,
    name: "twitter-callback"
  }, {
    path: "/",
    component: _5fe673b8,
    name: "index"
  }, {
    path: "/:project",
    component: _1c225ec4,
    name: "project"
  }, {
    path: "/:project/sales",
    component: _1d1743d8,
    name: "project-sales"
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
