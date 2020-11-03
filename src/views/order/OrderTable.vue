<template>
  <div>
    <check-box :checkflag="checkflag" @changeSelect="changeSelect"></check-box>
  </div>
</template>
<script>
import CheckBox from '../../components/CheckBox'
export default {
  name: 'OrderTable',
  data () {
    return {
      checkflag: false
    }
  },
  created () {
  },
  components: {
    CheckBox
  },
  methods: {
    changeSelect () {
      this.checkflag = !this.checkflag
    }
  }
}
</script>
<style scoped>
</style>
