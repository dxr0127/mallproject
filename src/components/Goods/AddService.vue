<template>
  <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
  </Form>
</template>
<script>
export default {
  name: 'AddService',
  data () {
    return {
    }
  },
  props: ['formValidate', 'ruleValidate'],
  created () {
  },
  components: {
  },
  methods: {
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
    width: 800px;
    padding: 30px 40px;
  }
</style>
