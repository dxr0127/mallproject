<template>
  <div>
    <Table :columns="columns10" :data="datalist" :show-header="false">
      <template slot-scope="{ row }" slot="name">
        <div class="cm-f-s-c">
          <div class="imgbox cm-margin-r-10">
            <img src="../../../static/images/image/1.png" alt="">
          </div>
          <span v-text="row.name"></span>
        </div>
      </template>
      <template slot-scope="{ row }" slot="count">
        商品数量：
        <span v-text="row.count"></span>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <a href="javascript:void(0)" @click="openAdd(row, index, '3')">新增三级分类</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" @click="edit(row, index)">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:void(0)" @click="remove(row, index)">删除</a>
      </template>
    </Table>
  </div>
</template>
<script>
import ClassifyList from '../../components/Goods/ClassifyList'
export default {
  name: 'GoodsClassify',
  data () {
    return {
      columns10: [{
        type: 'expand',
        width: 50,
        render: (h, params) => {
          // console.log(JSON.stringify(params))
          return h(ClassifyList, {
            props: {
              row: params.row
            }
          })
        }
      }, {
        title: '商品分类',
        key: 'name',
        slot: 'name'
      }, {
        title: '商品数量',
        key: 'count',
        slot: 'count'
      }, {
        title: '操作',
        width: 227,
        slot: 'action'
      }],
      datalist: [{
        name: '康体设备',
        count: 100,
        status: true
      }, {
        name: '营养补充',
        count: 100,
        status: true
      }]
    }
  },
  created () {
  },
  components: { ClassifyList },
  methods: {
    change (key) {
      this.datalist[key].status = !this.datalist[key].status
    },
    openAdd (data, index, level) {
      this.$emit('openAdd', level)
    },
    edit (data, index) {
      this.$emit('edit')
    },
    remove (data, index) {
      this.$emit('remove')
    }
  }
}
</script>
<style scoped>
  @import url(../../assets/css/goods.css);
</style>
