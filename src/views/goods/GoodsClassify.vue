<template>
  <div class="cm-cont-inner">
    <div class="cm-top">
      <div class="cm-f-b-c">
        <div>
          <Button type="primary" ghost @click="openAdd('1')">新增一级分类</Button>
        </div>
      </div>
    </div>
    <div class="cm-content cm-margin-t-10">
      <Table :columns="columns10" :data="datalist">
        <template slot-scope="{ row, index }" slot="action">
          分类显示
          <i-switch size="small" v-model="row.status" @on-change="change(index)" class="cm-margin-r-10"></i-switch>
          <template v-if="row.type !== '1'">
            <a href="javascript:void(0)" @click="openAdd('2')">新增二级分类</a>
            <Divider type="vertical" />
            <a href="javascript:void(0)" @click="edit(raow, index)">编辑</a>
            <Divider type="vertical" />
            <a href="javascript:void(0)" @click="remove(row, index)">删除</a>
          </template>
        </template>
      </Table>
    </div>
    <Modal
      v-model="visible"
      title="新增分类"
      :loading="loading"
      @on-ok="ok"
      @on-cancel="cancel">
      <add-classify v-if="visible" ref="handlepage" :leveltype="level" @onClose="onClose" @setLoad="setLoad"></add-classify>
    </Modal>
  </div>
</template>
<script>
import SystemClassify from '../../components/Goods/SystemClassify'
import GoodsClassify from '../../components/Goods/GoodsClassify'
import AddClassify from '../../components/Goods/AddClassify'
export default {
  name: 'GoodsClassify',
  data () {
    return {
      columns10: [{
        type: 'expand',
        width: 50,
        render: (h, params) => {
          // console.log(JSON.stringify(params))
          if (params.row.type === '1') {
            return h(SystemClassify, {
              props: {
                row: params.row
              }
            })
          } else {
            return h(GoodsClassify, {
              props: {
                row: params.row
              },
              on: {
                openAdd: (level) => {
                  this.openAdd(level)
                },
                edit: (data) => {
                  this.edit()
                },
                remove: (data) => {
                  this.remove()
                }
              }
            })
          }
        }
      }, {
        title: '商品分类',
        key: 'name'
      }, {
        title: '操作',
        width: 330,
        slot: 'action'
      }],
      datalist: [{
        name: '系统分组',
        status: true,
        type: '1'
      }, {
        name: '营养保健',
        status: true,
        type: '2'
      }],
      loading: true,
      visible: false,
      level: ''
    }
  },
  created () {
  },
  components: {
    SystemClassify,
    GoodsClassify,
    AddClassify
  },
  methods: {
    openAdd (level) {
      this.level = level
      this.visible = true
    },
    onClose (vname) {
      this[vname] = false
    },
    setLoad () {
      this.loading = false
      setTimeout(() => {
        this.loading = true
      })
    },
    change (key) {
      this.datalist[key].status = !this.datalist[key].status
    },
    ok () {
      // this.$Message.info('Clicked ok')
      this.$refs.handlepage.handleSubmit()
    },
    cancel () {
      // this.$Message.info('Clicked cancel')
    },
    edit () {
    },
    remove () {
      this.$Modal.confirm({
        title: '提示',
        content: '确定删除该分类吗？',
        loading: true,
        onOk: () => {
          // console.log('aa')
          this.$Modal.remove()
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
