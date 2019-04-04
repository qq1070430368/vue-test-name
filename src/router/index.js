/* eslint-disable fun-call-spacing */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '登录',
    title: 'login',
    component: resolve => require(['@/components/Login/index'], resolve),
    meta: {
      header: false,
      footer: false,
      name: '登录'
    }
  },
  {
    path: '/home',
    name: '主页',
    title: 'home',
    component: resolve => require(['@/components/homePage/index'], resolve),
    meta: {
      header: true,
      footer: true,
      name: '主页'
    }
  },
  {
    path: '/seletedOptions',
    name: 'seletedOptions',
    title: 'seletedOptions',
    // require['````', reslove]
    component: resolve => require(['@/components/shoxCmp/shox-seleted/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '下拉框组件'
    }
  },
  {
    path: '/routerRsb',
    name: 'routerRsb',
    component: resolve => require(['@/components/shoxCmp/shox-routerRsb/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '响应式路由'
    }
  },
  {
    path: '/routerRsb/:id',
    name: 'routerRsbInfo',
    component: resolve => require(['@/components/shoxCmp/shox-routerRsb/shox-routerInfo/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: 'ID识别服'
    }
  },
  {
    path: '/flexIndex',
    name: 'flexTest',
    component: (resolve) => require(['@/components/shoxCmp/shox-flex/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '弹性布局'
    }
  },
  {
    path: '/slot',
    name: 'slot',
    component: (resolve) => require(['@/components/shoxCmp/shox-slot/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '具名插槽'
    }
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: (resolve) => require(['@/components/shoxCmp/shox-tab/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '动态组件解析'
    }
  },
  {
    path: '/keepAlive',
    name: 'keepAlive',
    component: (resolve) => require(['@/components/shoxCmp/shox-keepAlive/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '动态组件解析'
    }
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: (resolve) => require(['@/components/shoxCmp/shox-vuex/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: 'vuex解析'
    }
  },
  {
    path: '/goShopping',
    name: 'goShopping',
    component: (resolve) => require(['@/components/shoxCmp/shox-shops/index'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '我的待办事项'
    }
  },
  {
    path: '/goShopping/cart',
    name: 'cart',
    component: (resolve) => require(['@/components/shoxCmp/shox-shops/cart'], resolve),
    meta: {
      header: true,
      footer: false,
      name: '待办'
    }
  }
  ]
});

export default router;


// export default router;
