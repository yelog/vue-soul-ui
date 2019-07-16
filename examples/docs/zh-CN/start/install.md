## npm 安装
推荐使用 `npm` 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

依赖库： `xe-utils1.9+`  `vue2.6+`

```js
import Vue from 'vue'
import SoulUI from 'vue-soul-ui'
import 'vue-soul-ui/lib/index.css'

Vue.use(SoulUI)
```

## CDN
可以通过 `unpkg` 或 `cdnjs` 获取到最新版本的资源，并在页面上引入即可

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-soul-ui/lib/index.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/xe-utils"></script>
<script src="https://unpkg.com/vue-soul-ui"></script>
```    

