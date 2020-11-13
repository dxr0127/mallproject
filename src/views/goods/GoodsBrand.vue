<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div class="cm-f-b-c">
        <div>
          <Button type="primary" ghost @click="openAdd">新增品牌</Button>
        </div>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table
      :columns="columns"
      :data="datalist"
      :draggable="true"
      @on-drag-drop="onDragDrop">
        <template slot-scope="{ row }" slot="name">
          <div class="cm-f-c-c cm-padded-t-5 cm-padded-b-5">
            <div class="coverbox cm-f-c-c">
              <img :src="row.cover" alt="">
            </div>
            <div class="cm-f-1 cm-margin-l-10">
              <div v-text="row.name" class="goodsname cm-ellipsis-2"></div>
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
                <Button size="small" type="primary" ghost class="cm-margin-l-10" @click.stop="closeTip(index)">取消</Button>
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
    <Modal
      v-model="visible"
      title="新增品牌"
      :loading="loading"
      @on-ok="ok"
      @on-cancel="cancel">
      <add-brand v-if="visible" ref="handlepage" @onClose="onClose" @setLoad="setLoad"></add-brand>
    </Modal>
  </div>
</template>
<script>
import img from '../../../static/images/image/1.png'
import CommonTips from '../common/CommonTips'
import AddBrand from '../../components/Goods/AddBrand'
export default {
  name: 'GoodsBrand',
  data () {
    return {
      columns: [{
        title: '参数名称',
        key: 'name',
        slot: 'name'
      }, {
        title: '关联商品数',
        key: 'num'
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
        title: '创建时间',
        key: 'time'
      }, {
        title: '操作',
        slot: 'action',
        width: 150
      }],
      datalist: [{
        cover: img,
        name: '型号',
        num: '20',
        sort: 2,
        time: '2020-11-03',
        visible: false
      }, {
        cover: img,
        name: '产地',
        num: '20',
        sort: 1,
        time: '2020-11-03',
        visible: false
      }, {
        cover: img,
        name: '型号',
        num: '20',
        sort: 0,
        time: '2020-11-03',
        visible: false
      }, {
        cover: img,
        name: '产地',
        num: '20',
        sort: 0,
        time: '2020-11-03',
        visible: false
      }],
      loading: true,
      visible: false,
      sort: ''
    }
  },
  created () {
  },
  components: {
    CommonTips,
    AddBrand
  },
  methods: {
    onClose (vname) {
      this[vname] = false
    },
    setLoad () {
      this.loading = false
      setTimeout(() => {
        this.loading = true
      })
    },
    openAdd () {
      this.visible = true
    },
    ok () {
      // this.$Message.info('Clicked ok')
      this.$refs.handlepage.handleSubmit()
    },
    edit () {
    },
    remove () {
      this.$Modal.confirm({
        title: '提示',
        content: '确定删除该品牌吗？',
        loading: true,
        onOk: () => {
          this.$Modal.remove()
        }
      })
    },
    openClick (data, key) {
      this.datalist = this.datalist.map(data => {
        let obj = data
        obj.visible = false
        return obj
      })
      this.datalist[key].visible = true
    },
    closeTip (key) {
      // console.log(key)
      this.datalist[key].visible = false
    },
    change (key) {
      this.datalist[key].status = !this.datalist[key].status
    },
    onDragDrop (first, end) {
      if (this.datalist[first].sort !== this.datalist[end].sort) {
        return
      }
      this.datalist.splice(
        end,
        1,
        ...this.datalist.splice(first, 1, this.datalist[end])
      )
    },
    cancel () {}
  }
}
</script>
<style scoped>
.coverbox {
  width: 40px;
  height: 40px;
  overflow: hidden;
}
</style>
