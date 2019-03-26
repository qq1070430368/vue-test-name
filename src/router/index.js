/* eslint-disable fun-call-spacing */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/index';
import homePage from '@/components/homePage/index';
import seleted from '@/components/shoxCmp/shox-seleted/index';
import routerRsb from '@/components/shoxCmp/shox-routerRsb/index';
import routerRsbInfo from '@/components/shoxCmp/shox-routerRsb/shox-routerInfo/index';
import flex from '@/components/shoxCmp/shox-flex/index';
import slot from '@/components/shoxCmp/shox-slot/index';
import tabs from '@/components/shoxCmp/shox-tab/index';
import keepAlive from '@/components/shoxCmp/shox-keepAlive/index';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: '登录',
    title: 'login',
    component: Login,
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
    component: homePage,
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
    component: (resolve) => resolve(seleted),
    meta: {
      header: true,
      footer: false,
      name: '下拉框组件'
    }
  },
  {
    path: '/routerRsb',
    name: 'routerRsb',
    component: routerRsb,
    meta: {
      header: true,
      footer: false,
      name: '响应式路由'
    }
    // children: [
    //   {
    //     name: 'routerRsbInfo',
    //     path: 'profile',
    //     component: homePage,
    //     meta: {
    //       header: true,
    //       footer: false,
    //       name: '这啥玩意'
    //     }
    //   }
    // ]
  },
  {
    path: '/foo/:id',
    name: 'routerRsbInfo',
    component: (resolve) => resolve(routerRsbInfo),
    meta: {
      header: true,
      footer: false,
      name: 'ID识别服'
    }
  },
  {
    path: '/flexIndex',
    name: 'flexTest',
    component: (resolve) => resolve(flex),
    meta: {
      header: true,
      footer: false,
      name: '弹性布局'
    }
  },
  {
    path: '/slot',
    name: 'slot',
    component: (resolve) => resolve(slot),
    meta: {
      header: true,
      footer: false,
      name: '具名插槽'
    }
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: (resolve) => resolve(tabs),
    meta: {
      header: true,
      footer: false,
      name: '动态组件解析'
    }
  },
  {
    path: '/keepAlive',
    name: 'keepAlive',
    component: (resolve) => resolve(keepAlive),
    meta: {
      header: true,
      footer: false,
      name: '动态组件解析'
    }
  }
  ]
});

export default router;


// export default router;
