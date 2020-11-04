<template>
  <div>
    <div class="listbox">
      <div class="list">
        <div class="listheader cm-f-b-c bg-grey">
          <div class="checkbox">
            <div class="list-header-cell check-cell"><check-box :checkflag="checkflag" @changeSelect="changeAllSelect"></check-box></div>
          </div>
          <div class="cm-f-s-c cm-f-1">
            <div class="list-header-cell width20">商品信息</div>
            <div class="list-header-cell width10">单价/数量</div>
            <div class="list-header-cell width15">买家/收货人</div>
            <div class="list-header-cell width15">配送及付款方式</div>
            <div class="list-header-cell width10">支付金额</div>
            <div class="list-header-cell width15">订单状态</div>
            <div class="list-header-cell width15">操作</div>
          </div>
        </div>
      </div>
      <div class="list cm-margin-t-10" v-for="(item, key) in datalist" :key="key">
        <div class="listheader cm-f-b-c bg-grey">
          <div class="checkbox">
            <div class="list-header-cell check-cell"><check-box :checkflag="item.checkflag" @changeSelect="changeSelect(key)"></check-box></div>
          </div>
          <div class="cm-f-s-c cm-f-1 cm-font-size-12 cm-color-grey">
            <span class="cm-margin-r-20">订单号：P190502705813816</span>
            <span class="cm-margin-r-20">下单时间：2020-15-25 16:39:57</span>
            <span class="cm-margin-r-20">订单来源：微信小程序</span><span>订单来源：微信小程序</span>
            <span class="cm-margin-r-20">收货地址：山东省济南市天桥区明湖西路208号巴黎花园</span></div>
        </div>
        <section v-for="(v, k) in item.children" :key="k">
          <div class="listinner cm-f-b" v-if="k === 0">
            <div class="checkbox"></div>
            <div class="cm-f cm-f-1">
              <div class="list-header-cell width20 cm-f">
                <div class="imgbox">
                  <img src="../../../static/images/image/1.png" alt="">
                </div>
                <div class="cm-f-1 cm-margin-l-10 cm-color-blue">
                  <div class="cm-font-size-12 cm-margin-b-5">助邦轮椅折叠轻便小带坐便器多功能便携老…</div>
                  <div class="cm-font-size-12">商品型号</div>
                </div>
              </div>
              <div class="list-header-cell width10">
                <div>
                  <div class="cm-font-size-12 cm-margin-b-5">¥ 159.54</div>
                  <div class="cm-font-size-12">1件</div>
                </div>
              </div>
              <div class="list-header-cell width15">
                <div>
                  <div class="cm-font-size-12 cm-margin-b-5">买家：买家昵称</div>
                  <div class="cm-font-size-12 cm-margin-b-5">收货人：张三</div>
                  <div class="cm-font-size-12">电话：13063333286</div>
                </div>
              </div>
              <div class="list-header-cell width15">
                <div>
                  <div class="cm-font-size-12 cm-margin-b-5">商家配送</div>
                  <div class="cm-font-size-12">线上支付-微信</div>
                </div>
              </div>
              <div class="list-header-cell width10">
                <div>
                  <div class="cm-font-size-12">¥ 359.54</div>
                </div>
              </div>
              <div class="list-header-cell width15">
                <div>
                  <div class="cm-font-size-12">已付款，待发货</div>
                </div>
              </div>
              <div class="list-header-cell width15 cm-f">
                <Button type="primary" ghost size="small" class="cm-margin-r-10 cm-font-size-12">发货</Button>
                <Button size="small" class="cm-font-size-12">查看详情</Button>
              </div>
            </div>
          </div>
          <div class="listinner cm-f-b" v-else>
            <div class="checkbox"></div>
            <div class="cm-f cm-f-1">
              <div class="list-header-cell width20 cm-f">
                <div class="imgbox">
                  <img src="../../../static/images/image/1.png" alt="">
                </div>
                <div class="cm-f-1 cm-margin-l-10 cm-color-blue">
                  <div class="cm-font-size-12 cm-margin-b-5">助邦轮椅折叠轻便小带坐便器多功能便携老…</div>
                  <div class="cm-font-size-12">商品型号</div>
                </div>
              </div>
              <div class="list-header-cell width10">
                <div>
                  <div class="cm-font-size-12 cm-margin-b-5">¥ 159.54</div>
                  <div class="cm-font-size-12">1件</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import CheckBox from '../../components/CheckBox'
export default {
  name: 'OrderTable',
  data () {
    return {
      checkflag: false,
      datalist: [{
        orderno: 'P190502705813816',
        checkflag: false,
        children: [{
        }, {
        }]
      }, {
        orderno: 'P190502705813816',
        checkflag: false,
        children: [{
        }, {
        }]
      }]
    }
  },
  created () {
  },
  components: {
    CheckBox
  },
  methods: {
    changeAllSelect () {
      if (this.checkflag) {
        this.datalist = this.datalist.map(data => {
          let obj = data
          obj.checkflag = false
          return obj
        })
      } else {
        this.datalist = this.datalist.map(data => {
          let obj = data
          obj.checkflag = true
          return obj
        })
      }
      this.checkflag = !this.checkflag
    },
    changeSelect (key) {
      this.datalist[key].checkflag = !this.datalist[key].checkflag
      this.checkflag = this.datalist.every(data => {
        if (data.checkflag) {
          return true
        }
      })
    }
  }
}
</script>
<style scoped>
.list-header-cell {
  padding: 5px;
}
.checkbox {
  width: 40px;
}
.width20 {
  width: 20%;
}
.width15 {
  width: 15%;
}
.width10 {
  width: 10%;
}
.bg-grey {
  background-color: #F9F9F9;
}
.listheader, .listinner {
  padding: 10px;
}
.imgbox {
  width: 60px;
  height: 60px;
  overflow: hidden;
}
</style>
