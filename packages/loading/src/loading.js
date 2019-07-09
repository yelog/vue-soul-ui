export default {
  name: 'STableLoading',
  props: {
    visible: Boolean
  },
  render (h) {
    return h('div', {
      class: ['s-table--loading'],
      style: {
        display: this.visible ? 'block' : 'none'
      }
    }, [
      h('div', {
        class: 's-table--spinner'
      })
    ])
  }
}
