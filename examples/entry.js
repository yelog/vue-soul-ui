import Vue from 'vue'
import entry from './App'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import SoulUI from '../index'
import hljs from 'highlight.js'
import routes from './route.config'
import demoBlock from './components/demo-block'
import SideNav from './components/side-nav'
import title from './i18n/title'
import './mockData'

import 'element-ui/lib/theme-chalk/index.css'
import '../styles/theme-layui/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'
import icon from './icon.json'

import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'
Vue.use(VXEUtils, XEUtils)

Vue.use(Element)
Vue.use(SoulUI)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)
Vue.component('side-nav', SideNav)

const globalEle = new Vue({
  data: { $isEle: false } // 是否 ele 用户
})

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => { globalEle.$data.$isEle = data }
    }
  }
})

Vue.prototype.$icon = icon // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  const data = title[route.meta.lang]
  for (const val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val]
      return
    }
  }
  document.title = 'Element'
})

new Vue({ // eslint-disable-line
  ...entry,
  router
}).$mount('#app')
