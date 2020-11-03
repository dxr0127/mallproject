<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="一级分类名称" prop="level1">
        <Select v-model="formValidate.level1" placeholder="请选择一级分类">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="二级分类名称" prop="level2name">
        <i-input v-model="formValidate.level2name" placeholder="请输入二级分类名称"></i-input>
      </FormItem>
      <FormItem label="二级分类图片" prop="level2img">
        <add-files></add-files>
      </FormItem>
      <FormItem label="分类状态" prop="status">
          <RadioGroup v-model="formValidate.status">
            <Radio label="1">显示</Radio>
            <Radio label="2">隐藏</Radio>
          </RadioGroup>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import AddFiles from '../AddFiles'
let ruleValidate = {
  level1: [
    { required: true, message: '请选择一级分类', trigger: 'change' }
  ],
  level2name: [
    { required: true, message: '请输入二级分类名称', trigger: 'blur' }
  ],
  level2img: [
    { required: true, message: '请上传二级分类图片', trigger: 'change' }
  ],
  status: [
    { required: false, message: '请选择分类状态', trigger: 'change' }
  ]
}
export default {
  name: 'AddClassify',
  data () {
    return {
      formValidate: {
        level1: '',
        level2name: '',
        level2img: '',
        status: ''
      },
      ruleValidate: ruleValidate,
    }
  },
  created () {
  },
  components: {
    AddFiles
  },
  methods: {
    handleSubmit () {
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          this.$emit('onClose', 'addvisible')
          console.log(JSON.stringify(this.formValidate))
        } else {
          // this.$Message.error('Fail!')
          this.$emit('setLoad')
        }
      })
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/goods.css);
</style>
