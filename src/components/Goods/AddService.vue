<template>
  <Form class="formbox" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
    <FormItem label="服务保障" prop="ensure">
      <div class="bg-light-grey cm-padded-10">
        <div class="cm-f-s-c">
          <div class="item cm-f-s-c">
            <Select v-model="formValidate.ensure" style="width:400px">
              <Option v-for="item in params" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <div class="cm-color-blue cm-margin-l-10">移除</div>
          </div>
        </div>
        <Button type="primary" ghost size="small" class="cm-margin-t-10">添加保障</Button>
      </div>
    </FormItem>
    <FormItem label="商品类型" prop="types">
      <RadioGroup v-model="formValidate.types">
        <Radio label="1">
          <span>物流配送商品</span>
        </Radio>
        <Radio label="2">
          <span>无需物流配送商品</span>
        </Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="拼单人数" prop="pnum">
      <Input v-model="formValidate.pnum" placeholder="请输入拼单人数" style="width: 400px" />
    </FormItem>
    <FormItem label="配送方式" prop="delivery">
      <CheckboxGroup v-model="formValidate.delivery">
        <Checkbox label="1">
          <span>快递发货</span>
        </Checkbox>
        <Checkbox label="2">
          <span>同城配送</span>
        </Checkbox>
        <Checkbox label="3">
          <span>到店自提</span>
        </Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="快递运费" prop="fare">
      <RadioGroup v-model="formValidate.fare" vertical>
        <div class="cm-f-s-c">
          <Radio label="1">
            <span>运费模板</span>
          </Radio>
          <i-input placeholder="" style="width: 400px" class="cm-margin-l-10" />
          <span class="cm-color-blue cm-margin-l-10">新建模板</span>
          <Divider type="vertical" />
          <span class="cm-color-blue">刷新</span>
        </div>
        <div class="cm-f-s-c cm-margin-t-15">
          <Radio label="2">
            <span>统一运费</span>
          </Radio>
          <i-input style="width: 400px;" class="cm-margin-l-10">
            <span slot="append">元</span>
          </i-input>
        </div>
      </RadioGroup>
    </FormItem>
    <FormItem label="物流重量(Kg)" prop="weight">
      <Input v-model="formValidate.weight" placeholder="请输入商品重量(含包装)" style="width: 400px" />
    </FormItem>
    <FormItem label="物流体积(m³)" prop="volume">
      <Input v-model="formValidate.volume" placeholder="请输入商品体积(含包装)" style="width: 400px" />
    </FormItem>
    <FormItem label="初始销量" prop="salenum">
      <Input v-model="formValidate.salenum" placeholder="请输入初始销量" style="width: 400px" />
      <div class="cm-font-size-12 cm-color-grey">用户看到的销量=初始销量+真实销量</div>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'AddService',
  data () {
    return {
      params: []
    }
  },
  props: ['formValidate', 'ruleValidate'],
  created () {
    // console.log(this.formValidate)
  },
  components: {
  },
  methods: {
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
    padding: 30px 40px;
  }
</style>
