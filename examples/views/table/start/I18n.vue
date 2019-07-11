<template>
  <div>
    <h3>国际化</h3>
    <p>目前支持的<a class="link" href="https://github.com/yelog/vue-soul-ui/tree/master/locale/lang" target="_blank">国际化列表</a></p>
    <p>若希望使用指定语言，则需要进行多语言设置。以中/英文为例</p>
     <pre>
      <code class="shell">
        npm install vue-i18n
      </code>
      <code class="javascript">
        import Vue from 'vue'
        import VueI18n from 's-i18n'
        import SoulUI from 'vue-soul-ui'
        import zhCNLocat from 'vue-soul-ui/lib/locale/lang/zh-CN'
        import enLocat from 'vue-soul-ui/lib/locale/lang/en'

        const messages = {
          zh-CN: {
            ...zhCNLocat
          },
          en: {
            ...enLocat
          }
        }

        const i18n = new VueI18n({
          locale: 'zh-CN',
          messages,
        })

        Vue.use(SoulUI, {
          i18n: (key, value) => i18n.t(key, value)
        })

        new Vue({ i18n }).$mount('#app')
      </code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
