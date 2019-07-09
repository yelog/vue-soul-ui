import STableContextMenu from './src/menu'

STableContextMenu.install = function (Vue) {
  Vue.component(STableContextMenu.name, STableContextMenu)
}

export const TableContextMenu = STableContextMenu
export default STableContextMenu
