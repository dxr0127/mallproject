<template>
  <div class="cm-cont-box">
    <div class="cont cm-padded-15 cm-margin-t-10 bg-white">
      <div class="continfo cm-padded-10 cm-padded-l-20 cm-bg-grey" v-text="tabname">基础信息</div>
      <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="组织类型" prop="classify">
          <RadioGroup v-model="formValidate.classify" @on-change="onChange">
            <Radio label="1">网上商城</Radio>
            <Radio label="2">线下门店</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="店铺名称" prop="name">
          <Input v-model="formValidate.name" maxlength="60" show-word-limit placeholder="请输入店铺名称" style="width: 400px" />
        </FormItem>
        <FormItem label="店铺编号" prop="code">
          <Input v-model="formValidate.code" maxlength="20" show-word-limit placeholder="请输入店铺编号" style="width: 400px" />
        </FormItem>
        <FormItem label="经营模式" prop="mode">
          <Select v-model="formValidate.mode" style="width: 400px">
            <Option v-for="item in modelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="店铺logo" prop="img">
          <add-files :size="3"></add-files>
          <div class="cm-font-size-12 cm-color-grey">建议尺寸750x750px（正方形图片）以上，大小2M以下</div>
        </FormItem>
        <FormItem label="营业时间" prop="time" v-if="formValidate.classify === '2'">
          <RadioGroup v-model="formValidate.time" @on-change="onChange">
            <Radio label="1">全天</Radio>
            <Radio label="2">自定义</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="营业时间表" prop="table" v-if="formValidate.classify === '2'">
          <div class="timebox">
            <Table :columns="columns" :data="timeData">
              <template slot-scope="{ row, index }" slot="action">
                <a href="javascript:void(0)" @click="edit(row, index)">更改时间段</a>
              </template>
            </Table>
          </div>
        </FormItem>
        <FormItem label="商家地址" prop="addr">
          <Cascader :data="data" v-model="formValidate.addr" style="width: 400px"></Cascader>
          <div class="cm-f cm-margin-t-10">
            <Input v-model="formValidate.addrdetail" placeholder="请填写具体位置" style="width: 300px" />
            <Button class="cm-margin-l-10">搜索地图</Button>
          </div>
          <amap></amap>
        </FormItem>
        <FormItem label="店铺状态" prop="status">
          <RadioGroup v-model="formValidate.status" @on-change="onChange">
            <Radio label="1">启用</Radio>
            <Radio label="2">停用</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="管理员姓名" prop="accountname">
          <Input v-model="formValidate.name" placeholder="请输入管理员姓名" style="width: 400px" />
        </FormItem>
        <FormItem label="联系电话" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入联系电话" style="width: 400px" />
        </FormItem>
        <FormItem label="管理员账号" prop="account">
          <Input v-model="formValidate.account" placeholder="请输入管理员账号" style="width: 400px" />
        </FormItem>
        <FormItem label="门店标签" prop="tags">
          <Input v-model="formValidate.tags" placeholder="请输入门店标签" style="width: 400px" />
        </FormItem>
        <FormItem label="商家资质" prop="tags">
          <div class="bg-light-grey" style="width: 600px;">
            <div class="cm-f-b-c bg-grey cm-padded-10">
              <Input v-model="formValidate.account" placeholder="请输入资质证书名称" style="width: 400px" />
              <div class="cm-color-blue cm-margin-l-10">删除资质</div>
            </div>
            <div class="cm-padded-10">
              <add-files :size="3"></add-files>
            </div>
          </div>
          <Button type="primary" ghost size="small" class="cm-margin-t-10">添加资质</Button>
        </FormItem>
      </Form>
    </div>
    <Modal
      v-model="visible"
      title="营业时间段"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <FormItem label="开始时间" prop="classify">
          <TimePicker format="HH:mm" placeholder="选择开始时间" style="width: 112px"></TimePicker>
        </FormItem>
        <FormItem label="结束时间" prop="classify">
          <TimePicker format="HH:mm" placeholder="选择结束时间" style="width: 112px"></TimePicker>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import AddFiles from '../../components/AddFiles'
import Uploads from '../../components/Uploads'
import Amap from '../../components/Amap'
import {area} from '../../utils/areadata.js'
export default {
  name: 'AddShop',
  data () {
    return {
      tabind: 1,
      tabname: '基础信息',
      data: area,
      visible: false,
      modelist: [{
        label: '直营',
        value: 1
      }],
      formValidate: {
        classify: '1',
        name: '',
        code: '',
        mode: '',
        img: '',
        addr: [],
        addrdetail: '',
        status: '',
        accountname: '',
        account: '',
        phone: '',
        tags: ''
      },
      ruleValidate: {
        classify: [
          { required: true, message: '请选择组织类型', trigger: 'change' }
        ],
        name: [
          { required: true, message: '店铺名称不能为空', trigger: 'blur' }
        ],
        code: [
          { required: false, message: '店铺编码不能为空', trigger: 'blur' }
        ],
        mode: [
          { required: true, message: '请选择经营模式', trigger: 'change' }
        ],
        addr: [
          { required: true, message: '请选择商家地址', trigger: 'change' }
        ],
        addrdetail: [
          { required: false, message: '请填写具体位置', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择店铺状态', trigger: 'change' }
        ],
        img: [
          { required: true, message: '请上传店铺logo', trigger: 'change' }
        ],
        accountname: [
          { required: true, message: '请填写管理员姓名', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请填写管理员账号', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请填写联系电话', trigger: 'blur' }
        ],
        tags: [
          { required: false, message: '请填写门店标签', trigger: 'blur' }
        ]
      },
      columns: [{
        type: 'selection',
        width: 60,
        align: 'center'
      }, {
        title: '工作日',
        key: 'weekday'
      }, {
        title: '营业时间段',
        key: 'time'
      }, {
        title: '操作',
        slot: 'action',
        align: 'center'
      }],
      timeData: [{
        weekday: '周一',
        time: '09:00-18:00'
      }, {
        weekday: '周二',
        time: '09:00-18:00'
      }, {
        weekday: '周三',
        time: '09:00-18:00'
      }, {
        weekday: '周四',
        time: '09:00-18:00'
      }]
    }
  },
  created () {
    // console.log(area)
  },
  components: {
    AddFiles,
    Uploads,
    Amap
  },
  methods: {
    onChange () {},
    edit () {
      this.visible = true
    },
    ok () {
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.visible = false
      this.$Message.info('Clicked cancel')
    }
  }
}
</script>
<style scoped>
  @import url(../../assets/css/form.css);
  .cont {
    overflow: auto;
  }
  .timebox {
    width: 600px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
  }
</style>
