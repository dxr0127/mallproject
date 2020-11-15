<template>
  <div>
    <!-- <table>
      <tr>
        <th v-for="(item, key) in columns" :key="key" v-text="item.name"></th>
      </tr>
      <tr v-for="(item, key) in dataList" :key="key">
        <td :rowspan="dataList.length">January</td>
        <td>January</td>
        <td>Savings</td>
        <td>$100</td>
        <td>$100</td>
        <td>$100</td>
        <td>$100</td>
      </tr>
    </table> -->
    <Table :columns="columns" :data="dataList" border :span-method="handleSpan">
      <template slot-scope="{ row, index }" slot="action">
        <a href="javascript:void(0)" @click="clearData(row, index)">清空</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" @click="forbidden(row, index)">禁用</a>
      </template>
    </Table>
  </div>
</template>
<script>
import AddFiles from '../../components/AddFiles'
export default {
  name: 'SpecsListMultiple',
  data () {
    return {
      itemnum: [],
      columns: [],
      newcolumns: [],
      defaultColumns: [
        {
          title: '规格图片',
          key: 'img',
          render: (h, params) => {
            return h(AddFiles, {
              style: {
                padding: '5px 0'
              }
            })
          }
        },
        {
          title: '库存',
          key: 'stock',
          render: (h, params) => {
            return h('i-input', {
              props: {
                value: params.row.stock
              },
              on: {
                'input': (val) => {
                  this.dataList[params.index].stock = val
                }
              }
            })
          }
        }, {
          title: '销售量',
          key: 'sales',
          render: (h, params) => {
            return h('div', {
              style: {
                padding: '5px 0'
              }
            }, [
              h('i-input', {
                props: {
                  value: params.row.sales
                },
                on: {
                  'input': (val) => {
                    this.dataList[params.index].sales = val
                    if (this.dataList[params.index].sales) {
                      this.dataList[params.index].salesflag = false
                    } else {
                      this.dataList[params.index].salesflag = true
                    }
                  },
                  'on-blur': () => {
                    if (this.dataList[params.index].sales) {
                      this.dataList[params.index].salesflag = false
                    } else {
                      this.dataList[params.index].salesflag = true
                    }
                  }
                }
              }),
              h('div', {
                class: 'sales' + params.index,
                style: {
                  fontSize: '12px',
                  color: 'red',
                  paddingTop: '5px',
                  display: this.dataList[params.index].salesflag ? 'block' : 'none'
                }
              }, '请输入销售量')
            ])
          },
          renderHeader: (h, params) => {
            return h('div', {
              style: {
                position: 'relative'
              }
            }, [
              h('span', '销售量'),
              h('div', {
                style: {
                  position: 'absolute',
                  top: '5px',
                  right: '-10px',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'red'
                }
              })
            ])
          }
        }, {
          title: '市场价（元）',
          key: 'market',
          render: (h, params) => {
            return h('i-input', {
              props: {
                value: params.row.market
              },
              on: {
                'input': (val) => {
                  this.dataList[params.index].market = val
                }
              }
            })
          }
        }, {
          title: '成本价',
          key: 'cost',
          render: (h, params) => {
            return h('i-input', {
              props: {
                value: params.row.cost
              },
              on: {
                'input': (val) => {
                  this.dataList[params.index].cost = val
                }
              }
            })
          }
        }, {
          title: 'sku编码',
          key: 'code',
          render: (h, params) => {
            return h('i-input', {
              props: {
                value: params.row.code
              },
              on: {
                'input': (val) => {
                  this.dataList[params.index].code = val
                }
              }
            })
          }
        }, {
          title: '操作',
          slot: 'action'
        }
      ]
    }
  },
  props: ['specs', 'dataList'],
  created () {
    this.columns = this.newcolumns.concat(this.defaultColumns)
  },
  components: {
  },
  methods: {
    clearData () {},
    forbidden () {},
    handleSpan ({ row, column, rowIndex, columnIndex }) {
      // var len = this.dataList.length
      // for (var i = 0; i < len; i++) {
      //   this.itemnum
      // }
      // var colind = 0
      // var rowind = 0
      // for (var i in this.specsList) {
      //   let num = this.specsList[i].children.length + rowind
      //   for (var j = rowind; j < num; j++) {
      //     if (rowIndex === rowind && j === rowind && columnIndex === colind) {
      //       // console.log(rowind)
      //       return {
      //         rowspan: num,
      //         colspan: rowind + 1
      //       }
      //     } else if (columnIndex === colind) {
      //       return {
      //         rowspan: 0,
      //         colspan: 0
      //       }
      //     }
      //   }
      //   // rowind = num + rowind
      // }
      // if (rowIndex === 0 && columnIndex === 0) {
      //   return [1, 2]
      // } else if (rowIndex === 0 && columnIndex === 1) {
      //   return [0, 0]
      // }
      // if (rowIndex === 1 && columnIndex === 0) {
      //   return {
      //     rowspan: 3,
      //     colspan: 1
      //   }
      // } else if (rowIndex === 2 && columnIndex === 0) {
      //   return {
      //     rowspan: 0,
      //     colspan: 0
      //   }
      // } else if (rowIndex === 3 && columnIndex === 0) {
      //   return {
      //     rowspan: 0,
      //     colspan: 0
      //   }
      // }
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
