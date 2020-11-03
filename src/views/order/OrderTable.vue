<template>
  <div>
    <div class="listbox">
      <div class="listheader cm-f-b-c">
        <div class="list-header-cell check-cell"><check-box :checkflag="checkflag" @changeSelect="changeSelect"></check-box></div>
        <div class="list-header-cell">商品信息</div>
        <div class="list-header-cell">单价/数量</div>
        <div class="list-header-cell">买家/收货人</div>
        <div class="list-header-cell">配送及付款方式</div>
        <div class="list-header-cell">支付金额</div>
        <div class="list-header-cell">订单状态</div>
        <div class="list-header-cell">操作</div>
      </div>
    </div>
    
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
.check-cell {
  width: 0.3rem;
}
</style>
