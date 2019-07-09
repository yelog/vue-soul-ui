<template>
  <div>
    <p>内置的小图标</p>
    <p>如果本身项目有合适的 icon 图标，可以通过全局参数 <router-link class="link" :to="{name: 'Use'}">icon</router-link> 替换自带的，可以减少一些体积</p>
    <ul class="icon-list">
      <li v-for="item in list" :key="item.icon" @click="copyEvent(item)" title="点击复制内容">
        <i :class="item.icon"></i>
        <div class="title">{{ item.icon }}</div>
      </li>
    </ul>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import XEClipboard from 'xe-clipboard'

export default {
  data () {
    return {
      list: [
        {
          icon: 's-icon--caret-top'
        },
        {
          icon: 's-icon--caret-bottom'
        },
        {
          icon: 's-icon--caret-left'
        },
        {
          icon: 's-icon--caret-right'
        },
        {
          icon: 's-icon--arrow-top'
        },
        {
          icon: 's-icon--arrow-bottom'
        },
        {
          icon: 's-icon--arrow-left'
        },
        {
          icon: 's-icon--arrow-right'
        },
        {
          icon: 's-icon--d-arrow-top'
        },
        {
          icon: 's-icon--d-arrow-bottom'
        },
        {
          icon: 's-icon--d-arrow-left'
        },
        {
          icon: 's-icon--d-arrow-right'
        },
        {
          icon: 's-icon--menu'
        },
        {
          icon: 's-icon--edit-outline'
        },
        {
          icon: 's-icon--more'
        },
        {
          icon: 's-icon--close'
        },
        {
          icon: 's-icon--refresh'
        },
        {
          icon: 's-icon--refresh roll'
        },
        {
          icon: 's-icon--funnel'
        },
        {
          icon: 's-icon--question'
        },
        {
          icon: 's-icon--info'
        },
        {
          icon: 's-icon--warning'
        },
        {
          icon: 's-icon--success'
        },
        {
          icon: 's-icon--error'
        }
      ],
      demoCodes: [
        `
        <i class="s-icon--caret-top"></i>
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    copyEvent ({ icon }) {
      if (XEClipboard.copy(icon)) {
        this.$XMsg.message({ message: '已复制到剪贴板！', status: 'success' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list {
  font-size: 26px;
  text-align: center;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  overflow: hidden;
  margin: 0;
  &:after {
    content: "";
    clear: both;
  }
  & > li {
    float: left;
    height: 100px;
    width: 16.66%;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    padding-top: 10px;
    & > i {
      color: #606266;
      border-color: #606266;
    }
    &:hover {
      & > i {
        color: #5CB6FF;
        border-color: #5CB6FF;
      }
    }
    .title {
      font-size: 14px;
      margin-top: 10px;
    }
  }
}
</style>
