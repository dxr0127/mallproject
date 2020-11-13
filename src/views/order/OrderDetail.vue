<template>
  <div class="cm-cont-box">
    <div class="cm-f-s-c cm-f-1 cm-font-size-12 cm-color-grey cm-padded-15 bg-white">
      <span class="cm-margin-r-20">订单编号：P190502705813816</span>
      <span class="cm-margin-r-20">下单时间：2020-15-25 16:39:57</span>
      <span class="cm-margin-r-20">订单类型：普通订单</span>
      <span class="cm-margin-r-20">订单来源：微信小程序</span>
    </div>
    <div class="cm-margin-t-10 cm-f-b-c">
      <div class="leftitem bg-white cm-padded-20 cm-margin-r-10">
        <Steps :current="current">
          <Step title="买家下单" content="2020-10-10 11:18:00"></Step>
          <Step title="买家付款"></Step>
          <Step title="商家发货"></Step>
          <Step title="交易完成"></Step>
          <Step title="完成评论"></Step>
        </Steps>
      </div>
      <div class="rightitem cm-f-1 cm-padded-20 bg-white">
        <div>订单状态：商品已拍下，等待买家付款</div>
        <div class="cm-color-grey cm-font-size-12 cm-margin-t-10">
          订单将在<span class="cm-color-red"> 18时39分钟 </span>后取消，请提醒买家及时付款
        </div>
        <div class="cm-margin-t-10">
          <Button type="primary" ghost class="cm-margin-r-10 cm-font-size-12">修改价格</Button>
          <Button class="cm-font-size-12">取消订单</Button>
        </div>
      </div>
    </div>
    <div class="cm-margin-t-10 cm-padded-20 bg-white">
      <Tabs type="card">
        <TabPane label="快递1">
          <div class="cm-f">
            <div class="deliver cm-font-size-12">
              <div class="cm-margin-b-10">配送方式：快递</div>
              <div class="cm-margin-b-10">发货人：张三</div>
              <div class="cm-margin-b-10">发货时间：2020-10-01 12:00:24</div>
              <div class="cm-margin-b-10">快递公司：顺丰快递</div>
              <div class="cm-margin-b-10">快递公司：73110576208347</div>
              <div class="cm-f cm-f-w">
                <div class="goodslist">
                  <div class="imgbox cm-f-c-c">
                    <img src="../../../static/images/image/1.png" alt="">
                  </div>
                  <div class="cm-ellipsis-1 cm-margin-t-5">助邦轮椅折叠轻便小带坐便器多功能便携老</div>
                </div>
              </div>
            </div>
            <div class="cm-f-1 cm-font-size-12">
              <div class="cm-margin-b-10">物流状态：<span class="cm-color-orange">未签收</span></div>
              <Timeline>
                <TimelineItem>
                  <p class="time">2020-09-01 12:49:48</p>
                  <p class="content">【东营市】 快递小哥：孟鑫庆 13063333286，正在为您派送，感谢您的耐心等待预计送达时间：2020-05-02 23:59:59</p>
                </TimelineItem>
                <TimelineItem>
                  <p class="time">2020-09-01 12:49:48</p>
                  <p class="content">【东营市】 订单已到达东营市B2C仓发出，正在发往东营区派件中心预计到达时间2020-05-02</p>
                </TimelineItem>
                <TimelineItem>
                  <p class="time">2020-09-01 12:49:48</p>
                  <p class="content">【已揽件】顺丰快递 济南电商B2C仓已揽件，【为保护您的隐私信息，配送人员可能会使用95开头或者170开头的虚拟号码和您联系，请注意接听】</p>
                </TimelineItem>
                <TimelineItem>
                  <p class="time">2020-09-01 12:49:48</p>
                  <p class="content">仓库已接单</p>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </TabPane>
        <TabPane label="快递2">标签二的内容</TabPane>
      </Tabs>
    </div>
    <div class="cm-margin-t-10 cm-f-b bg-white cm-padded-20">
      <div class="infoitem cm-padded-r-15">
        <div class="info-item-ttl">
          <span>收货人信息</span>
          <span class="cm-color-blue cm-margin-l-10 cm-font-size-12">修改</span>
          <span class="cm-color-blue cm-margin-l-10 cm-font-size-12">复制</span>
        </div>
        <div class="cm-font-size-12 cm-margin-t-10">收货人：张三</div>
        <div class="cm-font-size-12 cm-margin-t-10">联系电话：13063333286</div>
        <div class="cm-font-size-12 cm-margin-t-10">收货信息：山东省东营市东营区中国石油大学生8区8号楼808</div>
      </div>
      <div class="infoitem cm-padded-r-15">
        <div class="info-item-ttl">
          <span>配送信息</span>
        </div>
        <div class="cm-font-size-12 cm-margin-t-10">配送方式：商家配送</div>
        <div class="cm-font-size-12 cm-margin-t-10">发货时间：2020-10-01 12:00:24</div>
      </div>
      <div class="infoitem">
        <div class="info-item-ttl">
          <span>付款信息</span>
        </div>
        <div class="cm-font-size-12 cm-margin-t-10">实付金额：20.00</div>
        <div class="cm-font-size-12 cm-margin-t-10">支付方式：线上支付</div>
        <div class="cm-font-size-12 cm-margin-t-10">支付流水号：9956682018728</div>
      </div>
      <div class="infoitem">
        <div class="info-item-ttl">
          <span>买家信息</span>
        </div>
        <div class="cm-font-size-12 cm-margin-t-10">买家昵称：<span class="cm-color-blue">葫芦娃救爷爷</span></div>
        <div class="cm-font-size-12 cm-margin-t-10">买家留言：aaaa</div>
      </div>
    </div>
    <div class="cm-margin-t-10 cm-f-b bg-white">
      <Table :columns="columns1" :data="data1" style="width: 100%;">
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
      </Table>
    </div>
    <div class="cm-f-e bg-white cm-padded-20 cm-font-size-12 cm-color-grey">
      <div class="infobox">
        <div class="cm-f-b-c cm-margin-b-10">
          <span>商品总价：</span>
          <span>¥219.08</span>
        </div>
        <div class="cm-f-b-c cm-margin-b-10">
          <span>运费：</span>
          <span>¥0.00</span>
        </div>
        <div class="cm-f-b-c cm-margin-b-10">
          <span>优惠：</span>
          <span>¥0.00</span>
        </div>
        <div class="cm-f-b-c cm-margin-b-10">
          <span>礼品卡/储值卡：</span>
          <span>¥0.00</span>
        </div>
        <div class="cm-f-b-c cm-margin-b-10 cm-font-size-14">
          <span>订单金额：</span>
          <span class="cm-color-orange">¥219.08</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import img from '../../../static/images/image/1.png'
export default {
  name: 'OrderRefundDetail',
  data () {
    return {
      current: 1,
      columns1: [
        {
          title: '商品信息',
          key: 'name',
          slot: 'name',
          width: 200
        },
        {
          title: '单价',
          key: 'price'
        },
        {
          title: '数量',
          key: 'num',
          slot: 'num'
        },
        {
          title: '优惠（元）',
          key: 'discount'
        },
        {
          title: '小计（元）',
          key: 'subtotal'
        },
        {
          title: '维权状态',
          key: 'rights',
          slot: 'rights'
        },
        {
          title: '发货状态',
          key: 'deliver',
          slot: 'deliver'
        }
      ],
      data1: [
        {
          name: '助邦轮椅折叠轻便小带坐便器多功能便携老',
          cover: img,
          model: '商品型号',
          price: 18,
          num: 12,
          discount: 10,
          subtotal: 10,
          rights: 1,
          deliver: 1
        }
      ]
    }
  },
  created () {
  },
  components: {
  }
}
</script>
<style scoped>
.leftitem {
  width: 64%;
}
.leftitem, .rightitem {
  height: 130px;
}
.infoitem {
  width: 25%;
}
.info-item-ttl {
  height: 32px;
}
.infobox {
  width: 300px;
}
.deliver {
  width: 300px;
}
.goodslist {
  width: 60px;
}
.imgbox {
  width: 60px;
  height: 60px;
}
.time, .content{
  font-size: 13px;
}
</style>
