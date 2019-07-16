<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mainHeader from './components/header'
import { use } from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import esLocale from 'element-ui/lib/locale/lang/es'
import frLocale from 'element-ui/lib/locale/lang/fr'

const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN'
const localize = lang => {
  switch (lang) {
    case 'zh-CN':
      use(zhLocale)
      break
    case 'es':
      use(esLocale)
      break
    case 'fr-FR':
      use(frLocale)
      break
    default:
      use(enLocale)
  }
}
localize(lang)

export default {
  name: 'app',
  components: {
    mainHeader
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1] || 'zh-CN'
    },
    isComponent () {
      return /^component-/.test(this.$route.name || '')
    }
  },

  watch: {
    lang (val) {
      localize(val)
    }
  },

  methods: {
  },

  mounted () {
    localize(this.lang)
  }
}
</script>
