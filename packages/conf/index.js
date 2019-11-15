const GlobalConfig = {
  showOverflow: true,
  showHeaderOverflow: 'title',
  // resizeInterval: 250,
  // size: null,
  // validConfig: {
  //   message: 'default'
  // },
  // tooltipConfig: {
  //   enterable: false
  // },
  // resizable: false,
  // stripe: false,
  // border: false,
  fit: true,
  emptyCell: '　',
  showHeader: true,
  zIndex: 100,
  rowId: '_XID', // 行数据的唯一主键字段名
  version: 0, // 版本号，对于某些带数据缓存的功能有用到，上升版本号可以用于重置数据
  optimization: {
    animat: true,
    delayHover: 250,
    // rHeights: {
    //   default: 48,
    //   medium: 44,
    //   small: 40,
    //   mini: 36
    // },
    scrollX: {
      gt: 100
      // oSize: 0,
      // rSize: 0
      // vSize: 0
    },
    scrollY: {
      gt: 500
      // oSize: 0,
      // rSize: 0
      // vSize: 0,
      // rHeight: 0
    }
  },
  icon: {
    sortAsc: 's-icon--caret-top',
    sortDesc: 's-icon--caret-bottom',
    filter: 's-icon--funnel',
    edit: 's-icon--edit-outline',
    tree: 's-icon--caret-right',
    refresh: 's-icon--refresh',
    import: 's-icon--upload',
    importRemove: 's-icon--close',
    export: 's-icon--download',
    custom: 's-icon--menu',
    jumpPrev: 's-icon--d-arrow-left',
    jumpNext: 's-icon--d-arrow-right',
    prevPage: 's-icon--arrow-left',
    nextPage: 's-icon--arrow-right',
    zoomIn: 's-icon--zoomin',
    zoomOut: 's-icon--zoomout',
    modalClose: 's-icon--close',
    modalInfo: 's-icon--info',
    modalSuccess: 's-icon--success',
    modalWarning: 's-icon--warning',
    modalError: 's-icon--error',
    modalQuestion: 's-icon--question',
    modalLoading: 's-icon--refresh roll',
    caretBottom: 's-icon--caret-bottom',
    dropdownBottom: 's-icon--arrow-bottom',
    btnLoading: 's-icon--refresh roll'
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
    trigger: 'hover',
    theme: 'dark',
    leaveDelay: 300
  },
  pager: {
    // perfect: true,
    // pageSize: 10,
    // pagerCount: 7,
    // pageSizes: [10, 15, 20, 50, 100],
    // layouts: ['PrevJump', 'PrevPage', 'Jump', 'PageCount', 'NextPage', 'NextJump', 'Sizes', 'Total']
  },
  toolbar: {
    // import: {
    //   mode: 'covering'
    // },
    // export: {
    //   types: ['csv', 'html', 'xml', 'txt']
    // },
    // resizable: {
    //   storage: false
    // },
    // export: false,
    // setting: {
    //   storage: false
    // },
    // buttons: []
  },
  modal: {
    minWidth: 340,
    minHeight: 200,
    lockView: true,
    mask: true,
    duration: 3000,
    marginSize: 8,
    dblclickZoom: true,
    animat: true
  },
  i18n: key => key,
  _complete: 0
}

export default GlobalConfig
