import Vue from 'vue'
import Router from 'vue-router'
// 概况
const Home = () => import('@/views/home/Home')
// 店铺
const Shops = () => import('@/views/shop/Shops')
const ShopsList = () => import('@/views/shop/ShopsList')
const AddShop = () => import('@/views/shop/AddShop')
// 商品
const Goods = () => import('@/views/goods/Goods')
const AddGoods = () => import('@/views/goods/AddGoods')
const GoodsList = () => import('@/views/goods/GoodsList')
const GoodsClassify = () => import('@/views/goods/GoodsClassify')
const GoodsParam = () => import('@/views/goods/GoodsParam')
const GoodsUnit = () => import('@/views/goods/GoodsUnit')
const GoodsBrand = () => import('@/views/goods/GoodsBrand')
// 订单
const Order = () => import('@/views/order/Order')
const OrderList = () => import('@/views/order/OrderList')
const OrderDetail = () => import('@/views/order/OrderDetail')
const OrderDeliver = () => import('@/views/order/OrderDeliver')
const OrderServe = () => import('@/views/order/OrderServe')
const OrderRights = () => import('@/views/order/OrderRights')
const OrderTable = () => import('@/views/order/OrderTable')
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
      path: '/shops',
      name: 'shops',
      component: Shops,
      children: [{
        path: 'list',
        name: 'shopslist',
        component: ShopsList,
        meta: {
          ind: '3',
          urlkey: '3-1-1',
          bread: ['店铺管理', '商城店铺']
        }
      }, {
        path: 'addshop',
        name: 'addshop',
        component: AddShop,
        meta: {
          ind: '3',
          urlkey: '3-1-1',
          bread: ['店铺管理', '店铺列表', '新建店铺']
        }
      }]
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
        path: 'addgoods',
        name: 'addgoods',
        component: AddGoods,
        meta: {
          ind: '1',
          urlkey: '1-1-1',
          bread: ['商品管理', '全部商品', '新增商品']
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
      }, {
        path: 'param',
        name: 'param',
        component: GoodsParam,
        meta: {
          ind: '1',
          urlkey: '1-1-3',
          bread: ['商品管理', '商品参数']
        }
      }, {
        path: 'unit',
        name: 'unit',
        component: GoodsUnit,
        meta: {
          ind: '1',
          urlkey: '1-1-4',
          bread: ['商品管理', '商品属性']
        }
      }, {
        path: 'brand',
        name: 'brand',
        component: GoodsBrand,
        meta: {
          ind: '1',
          urlkey: '1-1-5',
          bread: ['商品管理', '品牌管理']
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
          urlkey: '2-1-1',
          bread: ['订单管理', '商品订单']
        }
      }, {
        path: 'detail',
        name: 'detail',
        component: OrderDetail,
        meta: {
          ind: '2',
          urlkey: '2-1-1',
          bread: ['订单管理', '商品订单', '订单详情']
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
      }, {
        path: 'table',
        name: 'table',
        component: OrderTable,
        meta: {
          ind: '2',
          urlkey: '2-3-1'
        }
      }]
    }
  ]
})
