<template>
  <div>
    <Form ref="formValidate" :label-width="120">
      <FormItem label="分类级别" prop="level">
          <RadioGroup v-model="level" @on-change="levelChange">
            <Radio label="1">一级分类</Radio>
            <Radio label="2">二级分类</Radio>
            <Radio label="3">三级分类</Radio>
          </RadioGroup>
      </FormItem>
    </Form>
    <component :is="item" ref="formpage" @onClose="onClose" @setLoad="setLoad"></component>
  </div>
</template>
<script>
import AddClassifyOne from './AddClassifyOne'
import AddClassifyTwo from './AddClassifyTwo'
import AddClassifyThree from './AddClassifyThree'
export default {
  name: 'AddClassify',
  data () {
    return {
      level: '1',
      item: ''
    }
  },
  props: ['leveltype'],
  created () {
    // console.log(this.leveltype)
    this.level = this.leveltype
    if (this.level === '1') {
      this.item = 'add-classify-one'
    } else if (this.level === '2') {
      this.item = 'add-classify-two'
    } else if (this.level === '3') {
      this.item = 'add-classify-three'
    }
  },
  components: {
    AddClassifyOne,
    AddClassifyTwo,
    AddClassifyThree
  },
  methods: {
    levelChange (value) {
      this.level = value
      if (value === '1') {
        this.item = 'add-classify-one'
      } else if (value === '2') {
        this.item = 'add-classify-two'
      } else if (value === '3') {
        this.item = 'add-classify-three'
      }
    },
    onClose (vname) {
      this[vname] = false
    },
    setLoad () {
      this.$emit('setLoad')
    },
    handleSubmit () {
      this.$refs.formpage.handleSubmit()
    }
  }
}
</script>
<style scoped>
@import url(../../assets/css/goods.css);
</style>
