<template>
  <div>
    <div class="cm-top">
      <div class="cm-f-b-c">
        <!-- <div>
          <Button type="primary" ghost>新增商品</Button>
          <Select v-model="sale" style="width:160px" class="cm-margin-l-10">
            <Option v-for="item in saleStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="classify" style="width:160px" class="cm-margin-l-10">
            <Option v-for="item in classifys" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <i-input v-model="goodsname" style="width: 200px;" placeholder="请输入商品名称">
            <Button slot="append" icon="ios-search"></Button>
        </i-input> -->
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table ref="selection" :columns="columns" :data="datalist"></Table>
    </div>
  </div>
</template>
<script>
import img from '../../../static/images/image/1.png'
const columns = [{
  type: 'selection',
  width: 60,
  align: 'center'
}, {
  title: '商品信息',
  key: 'info'
}, {
  title: '单价/数量',
  key: 'price'
}, {
  title: '买家/收货人',
  key: 'buyer'
}, {
  title: '配送及付款方式',
  key: 'deliver'
}, {
  title: '支付金额',
  key: 'amount'
}, {
  title: '订单状态',
  key: 'status'
}, {
  title: '操作',
  width: 150,
  align: 'center'
}]
export default {
  name: 'OrderList',
  data () {
    return {
      columns,
      datalist: [{
        name: '助邦轮椅',
        cover: img,
        price: '100',
        buyer: '啊啊',
        deliver: '商家配送',
        amount: '200',
        status: 1
      }, {
        name: '助邦轮椅',
        cover: img,
        price: '100',
        buyer: '啊啊',
        deliver: '商家配送',
        amount: '200',
        status: 1
      }],
    }
  },
  created () {
  },
  components: {
  }
}
</script>
<style scoped>
</style>
