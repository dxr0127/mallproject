<template>
  <div>
    <Table :columns="columns" :data="dataList" border>
      <template slot-scope="{ row, index }" slot="action">
        <a href="javascript:void(0)" @click="clearData(row, index)">清空</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" @click="forbidden(row, index)">禁用</a>
      </template>
    </Table>
    <Button @click="getData">打印</Button>
  </div>
</template>
<script>
export default {
  name: 'SpecsList',
  data () {
    return {
      dataList: [{
        stock: '1',
        sales: '',
        salesflag: false,
        market: '',
        cost: '',
        code: ''
      }],
      columns: [
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
  props: [],
  created () {
  },
  components: {
  },
  methods: {
    getData () {
      console.log(JSON.stringify(this.dataList))
    },
    clearData () {},
    forbidden () {}
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
