// import XEUtils from 'xe-utils'
// import zhCNLocat from '../lib/locale/lang/zh-CN'

const GlobalConfig = {
  showOverflow: true,
  showHeaderOverflow: 'title',
  // resizeInterval: 250,
  // size: null,
  // validConfig: {
  //   message: 'default'
  // },
  // resizable: false,
  // stripe: false,
  // border: false,
  fit: true,
  emptyCell: '　',
  showHeader: true,
  rowId: '_XID', // 行数据的唯一主键字段名
  version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  optimization: {
    animat: true,
    scrollX: {
      gt: 500,
      oSize: 6,
      rSize: 18,
      vSize: 0
    },
    scrollY: {
      gt: 1000,
      oSize: 30,
      rSize: 100,
      vSize: 0,
      rHeight: 0
    }
  },
  icon: {
    sortAsc: 's-icon--caret-top',
    sortDesc: 's-icon--caret-bottom',
    filter: 's-icon--funnel',
    edit: 's-icon--edit-outline',
    tree: 's-icon--caret-right',
    refresh: 's-icon--refresh',
    custom: 's-icon--menu',
    jumpPrev: 's-icon--d-arrow-left',
    jumpNext: 's-icon--d-arrow-right',
    prevPage: 's-icon--arrow-left',
    nextPage: 's-icon--arrow-right',
    msgClose: 's-icon--close',
    msgInfo: 's-icon--info',
    msgSuccess: 's-icon--success',
    msgWarning: 's-icon--warning',
    msgError: 's-icon--error',
    msgQuestion: 's-icon--question',
    msgLoading: 's-icon--refresh roll',
    caretBottom: 's-icon--caret-bottom'
  },
  loadingConfig: {
    type: 1,
    text: 'loading', // type 为2时，跳动的字
    fontStyle: {},
    backgroundStyle: {}
  },
  grid: {},
  menu: {},
  tooltip: {
    // zIndex: 3000,
    trigger: 'hover',
    theme: 'dark'
  },
  pager: {
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  toolbar: {
    // resizable: {
    //   storage: false
    // },
    // setting: {
    //   storage: false
    // },
    // buttons: []
  },
  message: {
    // zIndex: 999,
    lockView: true,
    lockScroll: true,
    mask: true,
    duration: 3000,
    animat: true
  },
  i18n: key => key,
  _tip: 0, // 是否按需加载了 tooltip
  _complete: 0
}

export default GlobalConfig
