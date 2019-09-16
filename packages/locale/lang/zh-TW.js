export default {
  s: {
    error: {
      rowIdEmpty: '参数 row-id 不允许为空',
      delProp: '参数 prop 已废弃，请使用 field',
      delLabel: '参数 label 已废弃，请使用 title',
      delGetRecords: '方法 getRecords 已废弃，请使用 getData',
      delGetAllRecords: '方法 getAllRecords 已废弃，请使用 getRecordset',
      delRevert: '方法 revert 已废弃，请使用 revertData',
      groupFixed: '如果使用分组表头，固定列必须在左右两侧',
      notResizable: '横向虚拟滚动不支持 resizable',
      notMouse: '虚拟滚动不支持 mouse-config',
      cellEditRender: '渲染器 cell-render 和 edit-render 不能同时使用',
      scrollOriginal: '虚拟滚动启用后只能导出源数据，请将设置 original=true',
      treeInsert: '树结构不支持 insert 操作',
      treeFixedExpand: '树结构的固定列与展开行功能有冲突',
      scrollYHeight: '启用虚拟滚动必须要设置 height 或 max-height',
      unableInsert: '无法插入到指定位置',

      notQuery: 'query 方法不存在',
      notDelete: 'delete 方法不存在',
      notSave: 'save 方法不存在',

      toolbarId: '工具栏需要设置唯一 id',

      reqKeyboard: '缺少 Keyboard 模块',
      reqResize: '缺少 Resize 模块'
    },
    table: {
      emptyText: '暫無資料',
      confirmFilter: '篩選',
      resetFilter: '重置',
      allFilter: '全部'
    },
    grid: {
      selectOneRecord: '請至少選擇壹條記錄！',
      deleteSelectRecord: '您確定要刪除所選記錄嗎？',
      removeSelectRecord: '您確定要移除所選記錄嗎？',
      dataUnchanged: '數據未改動！ ',
      saveSuccess: '保存成功'
    },
    pager: {
      goto: '前往',
      pagesize: '項/頁',
      total: '共 {{total}} 項記錄',
      pageClassifier: '頁'
    },
    alert: {
      title: '消息提示'
    },
    button: {
      confirm: '確認',
      cancel: '取消'
    }
  }
}
