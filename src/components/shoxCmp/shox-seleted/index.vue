<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>{{$route.meta.name}}</h6>
    </div>
    <seleted
      seleted-fun="seletedFun"
      seleted="seleted"
      :itemlist="itemlist"
      @showCityName="updateCity"
    ></seleted>

    <!-- <div class="router-inner">
      <button
        class="btn btn-block btn-info"
        @click="jumpRouterInner"
      >
        跳转子路由
      </button>
    </div> -->
  </div>
</template>

<script>
import seleted from "./seleted-plugins/index";
export default {
  name: "Seleted",
  data() {
    return {
      seleted: "",
      itemlist: []
      // closeMain: ''
    };
  },
  beforeMount() {
    this.itemlist = [
      {
        name: "鸣人",
        id: "as"
      },
      {
        name: "小英",
        id: "yx"
      }
    ];
  },
  methods: {
    updateCity: datas => {
      console.log(datas, "从父组件过来的");
    },
    jumpRouterInner: () => {

    }
  },
  components: {
    seleted
  }
};
</script>

<style lang="less" scoped>
.cmp-title {
  background: aqua;
  h6 {
    padding: 10px;
  }
}
</style>

