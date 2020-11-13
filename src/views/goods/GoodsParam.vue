<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div class="cm-f-b-c">
        <div>
          <Button type="primary" ghost @click="openAdd">新增参数</Button>
        </div>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table
      :columns="columns"
      :data="datalist"
      :draggable="true"
      @on-drag-drop="onDragDrop">
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
      title="新增参数"
      :loading="loading"
      @on-ok="ok"
      @on-cancel="cancel">
      <add-param v-if="visible" ref="handlepage" @onClose="onClose" @setLoad="setLoad"></add-param>
    </Modal>
  </div>
</template>
<script>
import CommonTips from '../common/CommonTips'
import AddParam from '../../components/Goods/AddParam'
export default {
  name: 'GoodsParam',
  data () {
    return {
      columns: [{
        title: '序号',
        key: 'id'
      }, {
        title: '参数名称',
        key: 'name'
      }, {
        title: '参数值',
        key: 'value'
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
        title: '操作',
        slot: 'action',
        width: 150
      }],
      datalist: [{
        id: 1,
        name: '型号',
        value: '20',
        sort: 2,
        visible: false
      }, {
        id: 2,
        name: '产地',
        value: '20',
        sort: 1,
        visible: false
      }, {
        id: 3,
        name: '型号',
        value: '20',
        sort: 0,
        visible: false
      }, {
        id: 4,
        name: '产地',
        value: '20',
        sort: 0,
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
    AddParam
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
        content: '确定删除该参数吗？',
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
</style>
