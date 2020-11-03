import Vue from 'vue'
import Router from 'vue-router'
// 概况
const Home = () => import('@/views/home/Home')
// 商品
const Goods = () => import('@/views/goods/Goods')
const GoodsList = () => import('@/views/goods/GoodsList')
const GoodsClassify = () => import('@/views/goods/GoodsClassify')
// 订单
const Order = () => import('@/views/order/Order')
const OrderList = () => import('@/views/order/OrderList')
const OrderDeliver = () => import('@/views/order/OrderDeliver')
const OrderServe = () => import('@/views/order/OrderServe')
const OrderRights = () => import('@/views/order/OrderRights')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        ind: '0',
        urlkey: '0-1',
        bread: ['概况']
      }
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
      children: [{
        path: 'list',
        name: 'goodslist',
        component: GoodsList,
        meta: {
          ind: '1',
          urlkey: '1-1-1',
          bread: ['商品管理', '全部商品']
        }
      }, {
        path: 'classify',
        name: 'classify',
        component: GoodsClassify,
        meta: {
          ind: '1',
          urlkey: '1-1-2',
          bread: ['商品管理', '商品分类']
        }
      }]
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [{
        path: 'list',
        name: 'orderlist',
        component: OrderList,
        meta: {
          ind: '2',
          urlkey: '2-1-1'
        }
      }, {
        path: 'deliver',
        name: 'deliver',
        component: OrderDeliver,
        meta: {
          ind: '2',
          urlkey: '2-2-1'
        }
      }, {
        path: 'serve',
        name: 'serve',
        component: OrderServe,
        meta: {
          ind: '2',
          urlkey: '2-2-2'
        }
      }, {
        path: 'rights',
        name: 'rights',
        component: OrderRights,
        meta: {
          ind: '2',
          urlkey: '2-3-1'
        }
      }]
    }
  ]
})
