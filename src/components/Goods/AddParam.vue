<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="参数名称" prop="name">
        <i-input v-model="formValidate.name" placeholder="请输入参数名称"></i-input>
      </FormItem>
      <FormItem label="参数值" prop="value">
        <i-input v-model="formValidate.value" placeholder="请输入参数值"></i-input>
      </FormItem>
      <FormItem label="排序" prop="sort">
        <i-input v-model="formValidate.sort" placeholder="请输入排序"></i-input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: 'AddParam',
  data () {
    return {
      formValidate: {
        name: '',
        value: '',
        sort: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请输入参数名称', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请输入参数值', trigger: 'blur' }
        ],
        sort: [
          { required: false, message: '请输入排序', trigger: 'blur' }
        ]
      }
    }
  },
  props: [],
  created () {
  },
  components: {
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
