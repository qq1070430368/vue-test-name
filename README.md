# vue-dev

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── components                              // 公共组件   
│   ├── API                                     // http    
│   ├── common                                  // 公用CSS和全局公用方法
│   ├── page
│   │   ├── collocationManage                   // 配置管理
│   │   ├── dataConverge                        // 数据汇聚管理
│   │   ├── directoryCheck                      // 监管事项审核
│   │   ├── directoryManage                     // 监管事项维护
│   │   ├── directorySupervis                   // 监管事项管理
│   │   ├── home                                // 主页
│   │   ├── initData                            // 初始化数据管理
│   │   ├── itemsFind                           // 事项查询
│   │   ├── itemsTatistics                      // 事项查询
│   │   ├── knowledge                           // 知识库管理
│   │   ├── layout                              // 当前位置 layout布局
│   │   ├── roleManage                          // 角色管理
│   │   ├── userManage                          // 用户管理
│   │   ├── workManage                          // 监管行为实施清单管理
│   │   ├── search
│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── store                                   // vuex的状态管理
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
.
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
