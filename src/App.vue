<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div
      class="home-page-header"
      v-if="$route.meta.header"
    >
      <mt-header :title="$route.meta.name">
        <router-link
          to=""
          slot="left"
        >
          <mt-button
            icon="back"
            @click.native="$router.back(-1)"
          >返回</mt-button>
        </router-link>
        <mt-button
          icon="more"
          slot="right"
        ></mt-button>
      </mt-header>
    </div>
    <transition name="slide-fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <div
      class="show-17-tab"
      v-if="$route.meta.footer"
    >
      <!-- <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">

        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">

        </mt-tab-container-item>
      </mt-tab-container> -->

      <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          <img slot="icon">

          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <img slot="icon">
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // appTitle: '主页'
      selected: ""
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 689px; */
}
.home-page-header h1,
.home-page-header label {
  margin-bottom: 0 !important;
}
.home-page-header .mint-header {
  position: fixed;
  width: 100%;
  z-index: 9999;
}
.show-17-tab {
  .mint-tabbar {
    position: fixed;
    bottom: 0;
  }
}
</style>
