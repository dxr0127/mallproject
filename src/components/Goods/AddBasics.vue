<template>
  <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
    <FormItem label="商品名称" prop="name">
      <i-input v-model="formValidate.name" placeholder="请输入商品名称" maxlength="60" style="width: 450px;"></i-input>
    </FormItem>
    <FormItem label="商品编码" prop="code">
      <i-input v-model="formValidate.code" placeholder="如无编码系统将自动生成" style="width: 450px;"></i-input>
    </FormItem>
    <FormItem label="商品描述" prop="desc">
      <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" maxlength="60" placeholder="请输入商品描述" style="width: 450px;"></i-input>
    </FormItem>
    <FormItem label="商品分类" prop="classify">
      <div class="cm-f-s-c">
        <Select v-model="formValidate.city" placeholder="请选择商品分类" style="width: 450px;">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
        <div class="itembtn cm-margin-l-15">
          <a href="javascript:void(0)" @click="addClassify">新建分类</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="refresh">刷新</a>
        </div>
      </div>
    </FormItem>
    <FormItem label="品牌" prop="brand">
      <div class="cm-f-s-c">
        <Select v-model="formValidate.brand" placeholder="请选择商品品牌" style="width: 450px;">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
        <div class="itembtn cm-margin-l-15">
          <a href="javascript:void(0)" @click="addClassify">新建品牌</a>
          <Divider type="vertical" />
          <a href="javascript:void(0)" @click="refresh">刷新</a>
        </div>
      </div>
    </FormItem>
    <FormItem label="库存单位" prop="unit">
      <div class="cm-f-s-c">
        <Select v-model="formValidate.unit" placeholder="请选择库存单位" style="width: 450px;">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </div>
    </FormItem>
    <FormItem label="商品图片" prop="img">
      <add-files :size="3"></add-files>
      <div class="cm-font-size-12 cm-color-grey">建议尺寸750x750px（正方形图片）以上，大小3M以下，最多10张（拖拽图片调整顺序）</div>
    </FormItem>
    <FormItem label="商品视频" prop="video">
      <add-video :size="10"></add-video>
      <div class="cm-font-size-12 cm-color-grey">建议时长9-30秒,视频宽高比16:9,大小不超过10M</div>
    </FormItem>
  </Form>
</template>
<script>
import AddFiles from '../../components/AddFiles'
import AddVideo from '../../components/AddVideo'
export default {
  name: 'AddBasics',
  data () {
    return {
    }
  },
  props: ['formValidate', 'ruleValidate'],
  created () {
  },
  components: {
    AddFiles,
    AddVideo
  },
  methods: {
    addClassify () {},
    refresh () {}
  }
}
</script>
<style scoped>
  .tab {
    width: 25%;
    text-align: center;
    cursor: pointer;
  }
  .continfo {
    position: relative;
  }
  .continfo::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    width: 3px;
    height: 15px;
    background-color: rgba(64, 158, 255, 1);
  }
  .formbox {
    width: 800px;
    padding: 30px 40px;
  }
</style>
