<template>
  <div class="router-rsb top-fixed">
    <div class='title'>
      右侧有导航箭头
    </div>
    <div class="tab-container">
      <div
        v-for="item in itemList"
        :key="item.id"
        class="tab-item"
        @click="toJupmDetail(item)"
      >
        <span>{{item.name}}</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        {
          name: "路由一",
          id: "contrller1"
        },
        {
          name: "路由二",
          id: "controller2"
        },
        {
          name: "路由三",
          id: "controller3"
        }
      ]
    };
  },
  methods: {
    toJupmDetail: function(data) {
      this.$router.push({
        //核心语句 如果选取params传参 则为name 跳转
        name: "routerRsbInfo", //跳转的路径
        params: {
          id: data.id
        }
      });
    }
  },
   beforeRouteEnter(to, from, next) {
    console.log(this, 'beforeRouteEnter'); // undefined
    console.log(to, '组件独享守卫beforeRouteEnter第一个参数');
    console.log(from, '组件独享守卫beforeRouteEnter第二个参数');
    console.log(next, '组件独享守卫beforeRouteEnter第三个参数');
    next(vm => {
      //因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.log(vm);//当前组件的实例
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    next(vm => {
      console.log(vm);
    });
    // react to route changes...
    // don't forget to call next()
  }
};
</script>
<style lang="less" scoped>
.router-rsb {
  height: 100%;
  background: #efeff4;
  .title {
    margin: 20px 15px 7px;
    color: #6d6d72;
    font-size: 15px;
    text-align: left;
  }
  .tab-container {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
    text-align: left;
    &:before {
      position: absolute;
      right: 0;
      left: 0;
      height: 1px;
      content: "";
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
      background-color: #c8c7cc;
      top: -1px;
    }
    .tab-item {
      position: relative;
      overflow: hidden;
      padding: 11px 15px;
      &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 15px;
        height: 1px;
        content: "";
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        background-color: #c8c7cc;
      }
      span {
        flex: 1;
      }
    }
  }
}
</style>

