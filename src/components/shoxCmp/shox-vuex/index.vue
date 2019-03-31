<template>
  <div class="top-fixed">
    <div class="cmp-title">
      <h6>状态管理 key : vuex属性</h6>
    </div>
    <div class="contont-wrap">
      <h6>1 Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</h6>
      <h6>2 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。</h6>
    </div>
    <div class="cmp-title">
      <h6>状态管理 : vuex购物车例子</h6>
    </div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <div class="cmp-title">
      <h6>购物车</h6>
    </div>
    <shopping-cart />
  </div>
</template>
<script>
import productList from "./template/product";
import shoppingCart from "./template/cart";
export default {
  data() {
    return {};
  },
  components: {
    productList: productList,
    shoppingCart
  }
};
</script>
<style lang="less" scoped>
.contont-wrap {
  padding: 12px;
  text-align: left;
  h6 {
    font-weight: bolder;
    line-height: 35px;
    &:nth-child(1) {
      color: darkgoldenrod;
    }
    &:nth-child(2) {
      color: plum;
    }
  }
}
</style>
