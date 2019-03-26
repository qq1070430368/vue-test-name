<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>{{$route.meta.name}}</h6>
    </div>
    <seleted
      ref="newSeleted"
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
    </div>-->

    <div class="cmp-title">
      <h6>$refs</h6>
      <p>ref属性, 使用在DOM元素中获取的是该DOM元素</p>
      <p>使用在子组件中获取的是该指令的实例</p>
      <button ref="button" class="col-6" @click="btnDom">点击获取该元素DOM</button>
      <p>{{refDom}}</p>
      <button class="col-6" @click="seletedDom">点击获取seleted实例</button>
      <p>{{!refSeletedDom? '您还没有选择呢，哥哥': refSeletedDom}}</p>
    </div>
  </div>
</template>

<script>
import seleted from './seleted-plugins/index';
export default {
  name: 'Seleted',
  data() {
    return {
      seleted: '',
      itemlist: [],
      closeMains: '1',
      refDom: '',
      refSeletedDom: ''
    };
  },
  beforeMount() {
    this.itemlist = [
      {
        name: '鸣人',
        id: 'as'
      },
      {
        name: '小英',
        id: 'yx'
      }
    ];
  },
  mounted() {
    // this.$nextTick(function () {
    console.log(this.$refs.newSeleted);
    // });
  },
  methods: {
    updateCity: datas => {
      console.log(datas, '从父组件过来的');
    },
    jumpRouterInner: () => {},
    btnDom() {
      this.$nextTick(function () {
        this.refDom = this.$refs.button;
      });
    },
    seletedDom() {
      this.$nextTick(function () {
        this.refSeletedDom = this.$refs.newSeleted.seleteds;
      });
    }
  },
  components: {
    seleted
  }
};
</script>


