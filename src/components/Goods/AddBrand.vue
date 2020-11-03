<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="品牌名称" prop="name">
        <i-input v-model="formValidate.name" placeholder="请输入品牌名称"></i-input>
      </FormItem>
      <FormItem label="品牌LOGO" prop="logo">
        <add-files></add-files>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import AddFiles from '../AddFiles'
export default {
  name: 'AddBrand',
  data () {
    return {
      formValidate: {
        name: '',
        logo: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' }
        ],
        logo: [
          { required: true, message: '请输上传品牌logo', trigger: 'change' }
        ]
      }
    }
  },
  props: [],
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
