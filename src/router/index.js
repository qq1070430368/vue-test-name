/* eslint-disable fun-call-spacing */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login/index';
import homePage from '@/components/homePage/index';
import seleted from '@/components/shoxCmp/shox-seleted/index';
import routerRsb from '@/components/shoxCmp/shox-routerRsb/index';
import routerRsbInfo from '@/components/shoxCmp/shox-routerRsb/shox-routerInfo/index';
import flex from '@/components/shoxCmp/shox-flex/index';
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
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
    }
  ]
});

export default router;


// export default router;
