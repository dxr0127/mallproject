<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="一级分类名称" prop="level1name">
        <i-input v-model="formValidate.level1name" placeholder="请输入一级分类名称"></i-input>
      </FormItem>
      <FormItem label="一级分类图片" prop="level1img">
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
  level1name: [
    { required: true, message: '请输入一级分类名称', trigger: 'blur' }
  ],
  level1img: [
    { required: true, message: '请上传一级分类图片', trigger: 'change' }
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
        level1name: '',
        level1img: '',
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
