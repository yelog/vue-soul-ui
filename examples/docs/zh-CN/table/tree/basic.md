### 开启树形表格

通过配置 `tree-config` 和指定列 `tree-node` 属性来开启树表格

还可以通过 `trigger` 指定触发方式

通过 `expand-config` 参数设置默认展开树节点
:::demo
```html
<template>
<s-table
  row-id="id"
  :data.sync="tableData"
  :tree-config="{children: 'children', expandAll: true, trigger: 'row'}">
  <s-table-column type="index" width="120" title="序号" tree-node></s-table-column>
  <s-table-column field="name" title="Name"></s-table-column>
  <s-table-column field="size" title="Size"></s-table-column>
  <s-table-column field="type" title="Type"></s-table-column>
  <s-table-column field="date" title="Date"></s-table-column>
</s-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.tableData = [
       {
         id: '10000',
         name: '文件夹 10000',
         size: '53k',
         type: '',
         date: '2019-05-16',
         children: [
           {
             id: '11000',
             name: '文件 11000',
             size: '11k',
             type: 'js',
             date: '2019-05-16'
           },
           {
             id: '12000',
             name: '文件夹 12000',
             size: '22k',
             type: '',
             date: '2019-05-16',
             children: [
               {
                 id: '12100',
                 name: '文件夹 12100',
                 size: '60k',
                 type: '',
                 date: '2019-05-16',
                 children: [
                   {
                     id: '12110',
                     name: '文件 12110',
                     size: '100k',
                     type: 'html',
                     date: '2019-05-16'
                   }
                 ]
               },
               {
                 id: '122000',
                 name: '文件 122000',
                 size: '80k',
                 type: 'avi',
                 date: '2019-05-16'
               }
             ]
           }
         ]
       },
       {
         id: '20000',
         name: '文件 20000',
         size: '66k',
         type: 'png',
         date: '2019-05-16'
       },
       {
         id: '30000',
         name: '文件夹 30000',
         size: '3k',
         type: '',
         date: '2019-05-16',
         children: [
           {
             id: '31000',
             name: '文件夹 31000',
             size: '9k',
             type: '',
             date: '2019-05-16',
             children: [
               {
                 id: '31100',
                 name: '文件 31100',
                 size: 'mp3',
                 type: 'js',
                 date: '2019-05-16'
               },
               {
                 id: '31200',
                 name: '文件 31200',
                 size: '224k',
                 type: 'java',
                 date: '2019-05-16'
               }
             ]
           },
           {
             id: '32000',
             name: '文件夹 32000',
             size: '33k',
             type: '',
             date: '2019-05-16',
             children: [
               {
                 id: '32100',
                 name: '文件 32100',
                 size: '35k',
                 type: 'mp4',
                 date: '2019-05-16'
               }
             ]
           }
         ]
       }
     ]
  }
}
</script>
```
:::
