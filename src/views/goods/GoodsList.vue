<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div class="cm-f-b-c">
        <div>
          <Button type="primary" ghost @click="openWin('/goods/addgoods')">新增商品</Button>
          <Select v-model="sale" style="width:160px" class="cm-margin-l-10">
            <Option v-for="item in saleStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          <Select v-model="classify" style="width:160px" class="cm-margin-l-10">
            <Option v-for="item in classifys" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <i-input v-model="goodsname" style="width: 200px;" placeholder="请输入商品名称">
            <Button slot="append" icon="ios-search"></Button>
        </i-input>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table :columns="columns" :data="datalist">
        <template slot-scope="{ row }" slot="name">
          <div class="cm-f cm-padded-t-5 cm-padded-b-5">
            <div class="coverbox cm-f-c-c">
              <img :src="row.cover" alt="">
            </div>
            <div class="cm-f-1 cm-margin-l-5">
              <div v-text="row.name" class="goodsname cm-ellipsis-2"></div>
              <div class="cm-margin-t-5">p19050270582736</div>
            </div>
          </div>
        </template>
        <template slot-scope="{ row, index }" slot="sort">
          <Poptip width="200" placement="right" v-model="row.visible" >
            <div v-text="row.sort" class="cm-pointer" @click.stop="openClick(row, index)"></div>
            <div class="api" slot="content">
              <Input v-model="sort" placeholder="输入排序" style="width: 140px" />
              <div class="cm-margin-t-10">
                <Button size="small" type="primary" ghost>保存</Button>
                <Button size="small" type="primary" ghost class="cm-margin-l-10" @click.stop="cancel(index)">取消</Button>
              </div>
            </div>
          </Poptip>
        </template>
        <template slot-scope="{ row, index }" slot="status">
          <!-- <strong>{{ row.name }}</strong> -->
          <i-switch size="small" v-model="row.status" @on-change="change(index)"></i-switch>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <a href="javascript:void(0)" @click="edit(row, index)">编辑</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="remove(row, index)">删除</a>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import img from '../../../static/images/image/1.png'
import CommonTips from '../common/CommonTips'
const columns = [{
  title: '商品名称',
  key: 'name',
  slot: 'name',
  width: 200
}, {
  title: '品牌',
  key: 'brand'
}, {
  title: '价格',
  key: 'price',
  sortable: true
}, {
  title: '总库存',
  key: 'stock',
  sortable: true
}, {
  title: '实际销量',
  key: 'sales',
  sortable: true
}, {
  title: '排序',
  key: 'sort',
  renderHeader (h, { column, $index }, index) {
    return h(
      'div', // 标签的名称
      {
        style: 'display: inline;'
      },
      [
        h('span', '排序'),
        h(CommonTips)
      ]
    )
  },
  sortable: true,
  slot: 'sort'
}, {
  title: '销售状态',
  key: 'status',
  slot: 'status'
}, {
  title: '创建时间',
  key: 'time',
  sortable: true
}, {
  title: '操作',
  slot: 'action',
  width: 150,
  align: 'center'
}]
export default {
  name: 'GoodsList',
  data () {
    return {
      value: '',
      columns,
      datalist: [{
        name: '助邦轮椅',
        brand: '助邦',
        cover: img,
        price: 1680,
        stock: 100,
        sales: 10,
        sort: 0,
        status: false,
        visible: false,
        time: '2020-10-31 14:12:22'
      }],
      switch1: false,
      saleStatus: [
        {
          value: '0',
          label: '所有销售状态'
        },
        {
          value: '1',
          label: '销售中'
        }
      ],
      classifys: [
        {
          value: '0',
          label: '所有商品分类'
        },
        {
          value: '1',
          label: '女装'
        },
        {
          value: '2',
          label: '日用百货'
        }
      ],
      sale: '0',
      sort: '',
      classify: '0',
      goodsname: ''
    }
  },
  created () {
  },
  components: {
  },
  methods: {
    edit () {},
    remove () {},
    openClick (data, key) {
      this.datalist[key].visible = true
    },
    cancel (key) {
      // console.log(key)
      this.datalist[key].visible = false
    },
    change (key) {
      this.datalist[key].status = !this.datalist[key].status
    },
    openWin (url) {
      this.$router.push({
        path: url
      })
    }
  }
}
</script>
<style scoped>
</style>
