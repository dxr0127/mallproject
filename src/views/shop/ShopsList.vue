<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div class="cm-f-b-c">
        <div>
          <Button type="primary" ghost @click="openWin('/shops/addshop')">新增店铺</Button>
        </div>
        <i-input v-model="goodsname" style="width: 200px;" placeholder="请输入店铺名称">
            <Button slot="append" icon="ios-search"></Button>
        </i-input>
      </div>
      <div class="cm-f-s-c cm-margin-t-15">
        <span>店铺类型：</span>
        <Select v-model="sale" style="width:160px" class="cm-margin-r-20">
          <Option v-for="item in saleStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>店铺状态：</span>
        <Select v-model="classify" style="width:160px" class="cm-margin-r-20">
          <Option v-for="item in classifys" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <span>经营模式：</span>
        <Select v-model="classify" style="width:160px" class="cm-margin-r-20">
          <Option v-for="item in mode" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="cm-f-s-c cm-margin-t-15">
        <Button type="primary" size="small">筛选</Button>
        <Button type="text" class="cm-color-blue" size="small">重置筛选条件</Button>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table :columns="columns" :data="datalist">
        <template slot-scope="{ row }" slot="name">
          <div class="cm-f-s-c cm-padded-t-5 cm-padded-b-5">
            <div class="coverbox cm-f-c-c">
              <img :src="row.cover" alt="">
            </div>
            <div class="cm-f-1 cm-margin-l-10 cm-color-blue" v-text="row.name">
            </div>
          </div>
        </template>
        <template slot-scope="{ row }" slot="classify">
          <Tag type="border" color="primary" v-if="row.classify === 1">门店</Tag>
          <Tag type="border" color="error" v-if="row.classify === 2">网店</Tag>
        </template>
        <template slot-scope="{ row }" slot="mode">
          <div v-if="row.mode === 1">直营</div>
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
          <a href="javascript:void(0)" @click="edit(row, index)">商品</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="edit(row, index)">配送</a>
          <a href="javascript:void(0)" @click="edit(row, index)">投放</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="edit(row, index)">越权</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="remove(row, index)">删除</a>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import img1 from '../../../static/images/image/hm.svg'
import img2 from '../../../static/images/image/yx.png'
// import CommonTips from '../common/CommonTips'
const columns = [{
  type: 'selection',
  width: 60,
  align: 'center'
}, {
  title: '店铺名称',
  key: 'name',
  slot: 'name',
  width: 200
}, {
  title: '店铺类型',
  key: 'classify',
  slot: 'classify'
}, {
  title: '经营模式',
  key: 'mode',
  slot: 'mode'
}, {
  title: '组织地址',
  key: 'addr'
}, {
  title: '店铺状态',
  key: 'status',
  slot: 'status'
}, {
  title: '到期时间',
  key: 'time',
  sortable: true
}, {
  title: '操作',
  slot: 'action',
  width: 180,
  align: 'center'
}]
export default {
  name: 'ShopsList',
  data () {
    return {
      value: '',
      columns,
      datalist: [{
        name: '盒马生鲜（济南大明湖店）',
        cover: img1,
        classify: 1,
        mode: 1,
        addr: '山东省济南市天桥区明湖西路万达嘉华735号',
        sort: 0,
        status: false,
        visible: false,
        time: '2020-10-31 14:12:22'
      }, {
        name: '每日优鲜',
        cover: img2,
        classify: 2,
        mode: 1,
        addr: '山东省济南市天桥区明湖西路万达嘉华735号',
        sort: 0,
        status: false,
        visible: false,
        time: '2020-10-31 14:12:22'
      }],
      switch1: false,
      saleStatus: [
        {
          value: '0',
          label: '所有店铺类型'
        }
      ],
      classifys: [
        {
          value: '0',
          label: '所有店铺状态'
        }
      ],
      mode: [
        {
          value: '0',
          label: '所有经营模式'
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
  .coverbox {
    width: 50px;
    height: 50px;
    overflow: hidden;
  }
  .coverbox img {
    width: 100%;
  }
</style>
