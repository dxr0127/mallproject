<template>
  <div class="cm-cont-box">
    <div class="cm-f-b-c cm-padded-15 bg-white">
      <div class="tab" :class="tabind === 1 ? 'cm-color-blue' : ''" @click="changeTab(1, '基础信息', 'add-basics')">基础信息</div>
      <div class="tab" :class="tabind === 2 ? 'cm-color-blue' : ''" @click="changeTab(2, '规格信息', 'add-specs')">规格信息</div>
      <div class="tab" :class="tabind === 3 ? 'cm-color-blue' : ''" @click="changeTab(3, '服务与承诺', 'add-service')">服务与承诺</div>
      <div class="tab" :class="tabind === 4 ? 'cm-color-blue' : ''" @click="changeTab(4, '商品详情', 'add-detail')">商品详情</div>
    </div>
    <div class="cont cm-padded-15 cm-margin-t-10 bg-white">
      <div class="continfo cm-padded-10 cm-padded-l-20 cm-bg-grey" v-text="tabname">基础信息</div>
      <component :is="frmname" :formValidate="formValidate" :ruleValidate="ruleValidate" @changeForm="changeForm"></component>
    </div>
  </div>
</template>
<script>
import AddFiles from '../../components/AddFiles'
import AddVideo from '../../components/AddVideo'
import AddBasics from '../../components/goods/AddBasics'
import AddSpecs from '../../components/goods/AddSpecs'
import AddService from '../../components/goods/AddService'
import AddDetail from '../../components/goods/AddDetail'
let formValidate1 = {
  name: '',
  code: '',
  desc: '',
  classify: '',
  brand: '',
  unit: '',
  img: '',
  video: ''
}
let formValidate2 = {
  specs: '1'
}
let formValidate3 = {
  name: '',
  code: '',
  desc: '',
  classify: '',
  brand: '',
  unit: '',
  img: '',
  video: ''
}
let formValidate4 = {
  name: '',
  code: '',
  desc: '',
  classify: '',
  brand: '',
  unit: '',
  img: '',
  video: ''
}
let ruleValidate1 = {
  name: [
    { required: true, message: '商品名称不能为空', trigger: 'blur' }
  ],
  code: [
    { required: false, message: '商品编码不能为空', trigger: 'blur' }
  ],
  desc: [
    { required: false, message: '请填写商品描述', trigger: 'blur' },
    { type: 'string', min: 20, message: '请输入至少20个字', trigger: 'blur' }
  ],
  classify: [
    { required: true, message: '请选择商品分类', trigger: 'change' }
  ],
  brand: [
    { required: false, message: '请选择商品品牌', trigger: 'change' }
  ],
  unit: [
    { required: false, message: '请选择库存单位', trigger: 'change' }
  ],
  img: [
    { required: true, message: '请上传商品图片', trigger: 'change' }
  ],
  video: [
    { required: false, message: '请上传商品视频', trigger: 'change' }
  ]
}
export default {
  name: 'AddGoods',
  data () {
    return {
      tabind: 1,
      tabname: '基础信息',
      formValidate: formValidate1,
      ruleValidate: ruleValidate1,
      frmname: 'add-basics'
    }
  },
  created () {
  },
  components: {
    AddFiles,
    AddVideo,
    AddBasics,
    AddSpecs,
    AddService,
    AddDetail
  },
  methods: {
    changeForm (key, value) {
      this.formValidate[key] = value
    },
    changeTab (ind, name, frm) {
      this.tabind = ind
      this.tabname = name
      this.frmname = frm
      if (ind === 1) {
        this.formValidate = formValidate1
      } else if (ind === 2) {
        this.formValidate = formValidate2
      } else if (ind === 3) {
        this.formValidate = formValidate3
      } else if (ind === 4) {
        this.formValidate = formValidate4
      }
    },
    addClassify () {},
    refresh () {}
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
</style>
