import Table from '../table'
import SoulUI from '../table-core'
import ExportPanel from './src/export-panel'
import ImportPanel from './src/import-panel'
import mixin from './src/mixin'

export const Export = {
  install (Vue) {
    SoulUI.reg('export')
    Object.assign(SoulUI.types, { csv: 1, html: 1, xml: 1, txt: 1 })
    Table.mixins.push(mixin)
    Vue.component(ExportPanel.name, ExportPanel)
    Vue.component(ImportPanel.name, ImportPanel)
  }
}

export default Export
