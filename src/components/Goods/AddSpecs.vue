<template>
  <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
    <FormItem label="商品规格" prop="specs">
      <RadioGroup v-model="formValidate.specs" @on-change="onChange">
        <Radio label="1">单一规格</Radio>
        <Radio label="2">多规格</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="商品规格" prop="specslist">
      <div class="listbox">
        <div class="list cm-margin-b-10" v-for="(item, key) in specs" :key="key">
          <div class="cm-f-b-c bg-grey cm-padded-10">
            <Select v-model="item.value" style="width:200px">
              <Option v-for="item in specs1" :value="item.value" :key="item.value">{{ item.name }}</Option>
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
    <FormItem label="价格及库存" prop="list">
      <component :is="frmname" :specs="specs" :dataList="dataList"></component>
    </FormItem>
  </Form>
</template>
<script>
import SpecsList from './SpecsList'
import SpecsListMultiple from './SpecsListMultiple'
export default {
  name: 'AddSpecs',
  data () {
    return {
      frmname: 'specs-list',
      specs: [],
      dataList: [],
      specs1: [{
        name: '型号',
        value: 1
      }],
      specs2: [],
      specs3: [],
      specsValue: ''
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
    handleClose (key, k) {
      this.specs[key].children.splice(k, 1)
    },
    onClose (key) {
      this.specs[key].visible = false
    },
    addSpecsValue (key) {
      let obj = {}
      obj.value = this.specsValue
      this.specs[key].children.push(obj)
      this.specs[key].visible = false
      this.specsValue = ''
      console.log(JSON.stringify(this.specs))
      // let len = this.specs.length
      console.log(this.specs.length)
      let num = 0
      for (let s in this.specs.length) {
        // num += this.specs[s].children.length
        // for (let j )
      }
      // for (let j = 0; j < num; j++) {
      //   this.dataList.push()
      // }
    },
    addSpecs () {
      let obj = {
        name: '',
        value: '',
        visible: false,
        children: []
      }
      this.specs.push(obj)
    },
    delSpecs (key) {
      this.specs.splice(key, 1)
    },
    onChange (value) {
      // console.log(value)
      this.$emit('changeForm', 'specs', value)
      if (value === '1') {
        this.frmname = 'specs-list'
      } else {
        this.frmname = 'specs-list-multiple'
      }
    }
  }
}
</script>
<style scoped>
  .tab {
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
  .continfo {
    position: relative;
  }
  .continfo::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 3px;
    height: 15px;
    background-color: rgba(64, 158, 255, 1);
  }
  .formbox {
    padding: 30px 40px;
  }
  .bg-grey {
    background-color: #EFEFEF;
  }
  .bg-light-grey {
    background-color: #F7F7F7;
  }
</style>
