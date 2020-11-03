<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="属性名称" prop="name">
        <i-input v-model="formValidate.name" placeholder="请输入属性名称"></i-input>
      </FormItem>
      <FormItem label="排序" prop="sort">
        <i-input v-model="formValidate.sort" placeholder="请输入排序"></i-input>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  name: 'AddUnit',
  data () {
    return {
      formValidate: {
        name: '',
        sort: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请输入属性名称', trigger: 'blur' }
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
