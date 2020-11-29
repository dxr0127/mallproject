<template>
  <div>
    <Table :columns="columns" :data="dataList" border :span-method="handleSpan" v-show="dataList.length > 0">
      <template slot-scope="{ row, index }" slot="action">
        <a href="javascript:void(0)" @click="clearData(row, index)">清空</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" @click="forbidden(row, index)">禁用</a>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  name: 'SpecsListMultiple',
  data () {
    return {
      itemnum: []
    }
  },
  props: ['specs', 'dataList', 'numarr', 'columns'],
  created () {
  },
  components: {
  },
  methods: {
    clearData () {},
    forbidden () {},
    handleSpan ({ row, column, rowIndex, columnIndex }) {
      if (this.numarr.length < 2 || (this.numarr.length === 2 && this.numarr[1] === 1)) {
        return
      }
      if (columnIndex > this.numarr.length - 2) {
        return
      }
      var len = this.dataList.length
      var numlen = this.numarr.length // 规格数
      // console.log(len)
      // console.log(numlen)
      for (var i = 0; i < numlen; i++) {
        if (columnIndex === i) {
          if (i < numlen) {
            var size = len
            for (var m = 0; m <= i; m++) {
              size = size / this.numarr[m]
            }
          }
          // console.log(size)
          for (var j = 0; j < len; j++) {
            if (rowIndex % size === 0) {
              return {
                rowspan: size,
                colspan: 1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          }
        }
      }
    }
  }
}
</script>
<style scoped>
table,table tr th, table tr td {
  border:1px solid #eee;
}
table tr th, table tr td {
  padding: 10px;
}
table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  padding:2px;
}
</style>
