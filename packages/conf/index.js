// import XEUtils from 'xe-utils'
// import zhCNLocat from '../lib/locale/lang/zh-CN'

const GlobalConfig = {
  // showOverflow: null,
  // showHeaderOverflow: null,
  // resizeInterval: 250,
  // size: null,
  // validConfig: {
  //   message: 'default'
  // },
  // resizable: false,
  // stripe: false,
  // border: false,
  fit: true,
  showHeader: true,
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
    jumpPrev: 's-icon--d-arrow-left',
    jumpNext: 's-icon--d-arrow-right',
    prevPage: 's-icon--arrow-left',
    nextPage: 's-icon--arrow-right',
    msgClose: 's-icon--close',
    msgInfo: 's-icon--info',
    msgSuccess: 's-icon--success',
    msgWarning: 's-icon--warning',
    msgError: 's-icon--error',
    msgLoading: 's-icon--refresh roll'
  },
  grid: {},
  menu: {},
  tooltip: {
    // zIndex: 99,
    theme: 'dark'
  },
  pager: {
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  toolbar: {
    // storageKey: 'VXE_TABLE_CUSTOM_HIDDEN',
    // setting: false,
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
  _tip: 0 // 是否按需加载了 tooltip
}

export default GlobalConfig
