const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/s-table/' : '/',
  outputDir: 'docs',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 's-table 表格'
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('examples'))
    config.output
      .set('libraryExport', 'default')
      .set('library', 'STable')
    if (process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      let XEUtils = {
        root: 'XEUtils',
        commonjs: 'xe-utils/methods/xe-utils',
        commonjs2: 'xe-utils/methods/xe-utils',
        amd: 'xe-utils'
      }
      if (config.has('externals')) {
        config.externals
          // .set('xe-utils', XEUtils)
          .set('xe-utils/methods/xe-utils', XEUtils)
      } else {
        config
          .set('externals', {
            // 'xe-utils': XEUtils,
            'xe-utils/methods/xe-utils': XEUtils
          })
      }
    }
  }
}
