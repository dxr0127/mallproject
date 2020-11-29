<template>
  <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
    <FormItem label="商品规格" prop="specs">
      <RadioGroup v-model="formValidate.specs" @on-change="onChange">
        <Radio label="1">单一规格</Radio>
        <Radio label="2">多规格</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="商品规格" prop="specslist" v-if="formValidate.specs === '2'">
      <div class="listbox">
        <div class="list cm-margin-b-10" v-for="(item, key) in specs" :key="key">
          <div class="cm-f-b-c bg-grey cm-padded-10">
            <Select style="width:200px" @on-change="handleChange" @on-open-change="onOpenChange(key)" :label-in-value="true">
              <Option v-for="item in specsData[key]" :value="item.value" :key="item.value">{{ item.name }}</Option>
            </Select>
            <div class="cm-color-blue cm-pointer" @click="delSpecs(key)">删除规格</div>
          </div>
          <div class="bg-light-grey cm-padded-10">
            <div>
              <Tag v-for="(v, k) in item.children" :key="k" :name="v.value" closable size="large" @on-close="handleClose(key, k)" class="cm-bg-white cm-margin-r-10">{{ v.value }}</Tag>
            </div>
            <Poptip content="content" placement="bottom-start" v-model="item.visible">
              <div class="cm-color-blue cm-pointer" v-show="item.value">添加规格值</div>
              <div class="api cm-padded-10" slot="content">
                <i-input v-model="specsValue">
                  <span slot="append" class="cm-pointer" @click.stop="addSpecsValue(key)">添加</span>
                </i-input>
                <div class="cm-f-e-c cm-margin-t-10">
                  <Button type="primary" class="cm-margin-r-10" size="small" @click="onClose(key)">确定</Button>
                  <Button size="small" @click="onClose(key)">取消</Button>
                </div>
              </div>
            </Poptip>
          </div>
        </div>
        <Button size="small" @click="addSpecs">添加规格</Button>
      </div>
    </FormItem>
    <FormItem label="价格及库存" prop="list" v-show="dataList.length > 0">
      <component :is="formValidate.specs === '1' ? 'specs-list' : 'specs-list-multiple'" :specs="specs" :dataList="dataList" :numarr="numarr" :columns="columns"></component>
    </FormItem>
    <FormItem label="商品参数" prop="">
      <div class="bg-light-grey cm-padded-10">
        <div class="cm-f-s-c">
          <div class="item cm-f-s-c">
            <div>型号：</div>
            <Select v-model="model1" style="width: 300px">
              <Option v-for="item in params" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <div class="cm-color-blue cm-margin-l-10">移除</div>
          </div>
        </div>
        <Button type="primary" ghost size="small" class="cm-margin-t-10">添加参数</Button>
      </div>
    </FormItem>
  </Form>
</template>
<script>
import SpecsList from './SpecsList'
import SpecsListMultiple from './SpecsListMultiple'
import AddFiles from '../../components/AddFiles'
export default {
  name: 'AddSpecs',
  data () {
    return {
      specs: [],
      dataList: [],
      numarr: [],
      specsKey: '',
      specsData: [
        [{
          name: '型号',
          value: 1
        }],
        [{
          name: '颜色',
          value: 1
        }],
        [{
          name: '版本',
          value: 1
        }]
      ],
      specsValue: '',
      columns: [],
      newColumns: [],
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
      ],
      defaultList: {
        img: '',
        stock: '',
        sales: '',
        market: '',
        cost: '',
        code: ''
      },
      params: [{
        value: '型号1'
      }],
      model1: ''
    }
  },
  props: ['formValidate', 'ruleValidate'],
  created () {
  },
  components: {
    SpecsList,
    SpecsListMultiple
  },
  methods: {
    handleClose (key, k) { // 删除规格值
      if (this.specs[key + 1]) {
        if (this.specs[key].children.length === 1) {
          this.warning('请删除下级规格')
          return
        }
      }
      this.specs[key].children.splice(k, 1)
      var flag = false
      this.specs.forEach((data, index) => {
        if (data.children.length > 0) {
          flag = true
          return true
        }
      })
      if (flag) {
        this.setDataList()
      } else {
        this.dataList = []
      }
    },
    onClose (key) { // 关闭添加规格值弹窗
      this.specs[key].visible = false
    },
    addSpecsValue (key) { // 添加规格值
      let obj = {}
      obj.value = this.specsValue
      this.specs[key].children.push(obj)
      this.specs[key].visible = false
      this.specsValue = ''
      // console.log(JSON.stringify(this.specs))
      // let len = this.specs.length
      // console.log(this.specs.length)
      this.setDataList()
    },
    setDataList () {
      this.dataList = []
      // var num = 1
      this.numarr = []
      this.newColumns = []
      // console.log(this.specs)
      this.specs.forEach((data, index) => {
        if (data.children.length > 0) {
          this.numarr.push(data.children.length)
          // num *= data.children.length
          let obj = {}
          obj.title = data.name
          obj.key = 'specs' + index
          this.newColumns.push(obj)
          // 设置datalist
          if (index === 0) {
            data.children.forEach(res => {
              let obj = {}
              obj['specs' + index] = res.value
              this.dataList.push(obj)
            })
          } else {
            let arrs = []
            this.dataList.forEach(dt => {
              data.children.forEach(res => {
                let obj = JSON.parse(JSON.stringify(dt))
                obj['specs' + index] = res.value
                arrs.push(obj)
              })
            })
            this.dataList = arrs
          }
        }
      })
      this.columns = this.newColumns.concat(this.defaultColumns)
      // console.log(this.columns)
      // for (let j = 0; j < num; j++) {
      //   let obj = JSON.parse(JSON.stringify(this.defaultList))
      //   // console.log(obj)
      //   this.dataList.push(obj)
      // }
      // // console.log(this.dataList)
      // // console.log(this.numarr)
      // // console.log(this.specs)
      // var size = this.dataList.length
      // this.numarr.forEach((data, index) => {
      //   var n = 0
      //   var snum = 1
      //   var nprev = 1
      //   size = size / this.numarr[index]
      //   console.log(size)
      //   this.dataList.forEach((v, k) => {
      //     // console.log(index)
      //     // console.log(n)
      //     this.dataList[k]['specs' + index] = this.specs[index].children[n].value
      //     if (snum === size) {
      //       console.log('aa')
      //       n += 1
      //       snum = 1
      //     } else {
      //       n = 0
      //       snum += 1
      //     }
      //   })
      // })
      // // console.log(this.dataList)
      // // let arr1 = this.classify(this.dataList, 'specs0')
      // // if (this.columns.specs1) {
      // //   arr1.forEach((data, index) => {
      // //     arr1[index].data = this.classify(data.data, 'specs1')
      // //   })
      // // }
      // // console.log(arr1)
    },
    classify (arr, attr) {
      let map = {}
      let myArr = []
      arr.forEach(data => {
        if (!map[data[attr]]) {
          myArr.push({
            [attr]: data[attr],
            data: [data]
          })
          map[data[attr]] = data
        } else {
          for (let j = 0; j < myArr.length; j++) {
            if (data[attr] === myArr[j][attr]) {
              myArr[j].data.push(data)
              break
            }
          }
        }
      })
      return myArr
    },
    onOpenChange (key) {
      // console.log(key)
      this.specsKey = key
    },
    handleChange (data) {
      // console.log(data)
      this.specs[this.specsKey].name = data.label
      this.specs[this.specsKey].value = data.value
      // console.log(this.specs)
    },
    addSpecs () { // 添加规格
      let len = this.specs.length
      if (len > 0 && this.specs[len - 1].children.length === 0) {
        this.warning('请为上级规格添加规格值')
        return
      }
      let obj = {
        name: '',
        value: '',
        visible: false,
        children: []
      }
      this.specs.push(obj)
    },
    delSpecs (key) { // 删除规格
      // console.log(key)
      if (this.specs.length > (key + 1)) {
        this.warning('请删除下级规格')
        return
      }
      this.specs.splice(key, 1)
      if (this.specs.length > 0) {
        this.setDataList()
      } else {
        this.dataList = []
      }
    },
    onChange (value) {
      // console.log(value)
      this.$emit('changeForm', 'specs', value)
    },
    success (info) {
      this.$Message.success(info)
    },
    warning (info) {
      this.$Message.warning(info)
    },
    error (info) {
      this.$Message.error(info)
    }
  }
}
</script>
<style scoped>
  @import url(../../assets/css/form.css);
  .tab {
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
</style>
