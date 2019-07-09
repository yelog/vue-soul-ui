<template>
  <div>
    <h3>主题</h3>
    <p>Case 1.使用默认的主题样式</p>
    <pre>
      <code class="scss">
        @import 'vue-soul-ui/lib/index.css';
      </code>
    </pre>
    <p>Case 2.修改主题颜色，并引入所有样式（<a class="link" href="https://github.com/yelog/vue-soul-ui/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <code class="scss">
        @import 'vue-soul-ui/styles/variable.scss';
        $s-font-color: #666;
        $s-zindex: 3000;
        @import 'vue-soul-ui/styles/default.scss';
      </code>
    </pre>
    <p>Case 3.修改主题颜色，并按需引入样式（<a class="link" href="https://github.com/yelog/vue-soul-ui/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <code class="scss">
        @import 'vue-soul-ui/styles/variable.scss';
        $s-font-color: #666;
        $s-zindex: 3000;
        @import 'vue-soul-ui/styles/table.scss';
        @import 'vue-soul-ui/styles/column.scss';
        @import 'vue-soul-ui/styles/header.scss';
        @import 'vue-soul-ui/styles/body.scss';
        @import 'vue-soul-ui/styles/footer.scss';
        @import 'vue-soul-ui/styles/icon.scss';
        @import 'vue-soul-ui/styles/filter.scss';
        @import 'vue-soul-ui/styles/loading.scss';
        @import 'vue-soul-ui/styles/grid.scss';
        @import 'vue-soul-ui/styles/excel.scss';
        @import 'vue-soul-ui/styles/menu.scss';
        @import 'vue-soul-ui/styles/toolbar.scss';
        @import 'vue-soul-ui/styles/pager.scss';
        @import 'vue-soul-ui/styles/checkbox.scss';
        @import 'vue-soul-ui/styles/radio.scss';
        @import 'vue-soul-ui/styles/input.scss';
        @import 'vue-soul-ui/styles/button.scss';
        @import 'vue-soul-ui/styles/message.scss';
        @import 'vue-soul-ui/styles/tooltip.scss';
      </code>
    </pre>
    <p>Case 4.如果需要完全重写主题样式，把 vue-soul-ui/styles/** 目录全部复制到项目中自行修改（例如 /assets/styles/xtable 目录下）</p>
    <pre>
      <code class="scss">
        @import './assets/styles/xtable/index.scss';
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
