<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div>
        <i-input v-model="searchData.keywords" style="max-width: 470px;" placeholder="请输入关键字">
          <Select v-model="searchData.searchType" slot="prepend" style="width: 100px">
            <Option value="1">订单编号</Option>
            <Option value="2">商品信息</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
        </i-input>
        <div class="cm-f-s-c cm-margin-t-10">
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">下单时间</span>
            <DatePicker type="daterange" :options="options1" placement="bottom-end" placeholder="Select date" style="width: 400px"></DatePicker>
          </div>
        </div>
        <div class="cm-f-s-c cm-f-w cm-margin-t-10">
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">订单类型</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">订单来源</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">订单状态</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="cm-f-s-c cm-f-w cm-margin-t-10">
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">配送方式</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">付款方式</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="cm-margin-r-15 cm-margin-b-10">
            <span class="cm-margin-r-10">维权状态</span>
            <Select v-model="searchData.ordertype" style="width:200px">
              <Option v-for="item in options2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="cm-f-s-c cm-f-w cm-margin-t-10 margin-l">
          <Button type="primary" size="small" class="cm-margin-r-15">筛选</Button>
          <Button type="text" size="small" class="cm-color-blue">清空筛选条件</Button>
        </div>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <order-table></order-table>
    </div>
  </div>
</template>
<script>
import OrderTable from './OrderTable'
import img from '../../../static/images/image/1.png'
const columns = [
  {
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
  }
]
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
      searchData: {
        keywords: '',
        searchType: '1',
        ordertype: ''
      },
      options1: {
        shortcuts: [
          {
            text: '今天',
            value () {
              const end = new Date()
              const start = new Date()
              end.setTime(end.getTime())
              return [start, end]
            }
          },
          {
            text: '昨天',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24)
              return [start, end]
            }
          },
          {
            text: '近七天',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            }
          },
          {
            text: '近30天',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            }
          }
        ]
      },
      options2: [{
        value: '1',
        label: '类型1'
      }]
    }
  },
  created () {
  },
  components: {
    OrderTable
  }
}
</script>
<style scoped>
.margin-l {
  margin-left: 70px;
}
</style>
