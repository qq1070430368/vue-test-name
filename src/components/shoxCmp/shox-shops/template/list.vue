<template>
  <div class="tabs-shops">
    <div
      v-for="(item, $index) in products"
      :key="$index"
      class="tab-item"
      
    >
      <span>{{item.productName}}</span>
      {{item.int}}
      <button @click="addToCart(item)" :disabled="!item.int">加入待办事项</button>
    </div>
    <div class="goShoping">
      <button class="btn" @click="gotoCart">进入我的待办事项</button>
    </div>

    <!-- 1111 -->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
var apps = {
  data() {
    return {};
  },
  computed: mapState({
    products: state => {
      return state.newShops.all;
    }
  }),
  created() {
    this.$store.dispatch("newShops/getAllProducts");
  },
  methods: {
    gotoCart() {
      this.$router.push({
        name: "cart"
      });
    },
    ...mapActions("newCarts", ["addToCart"])
  }
};

export default apps;
</script>
<style lang="less" scoped>
.tab-container {
  position: relative;
  margin-top: 0;
  text-align: left;
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
    text-align: left;
    padding: 11px 15px;
    display: flex;
    align-items: center;
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
    button {
      background: red;
      color: #fff;
      padding: 3px 10px;
      outline: none;
    }
  }
  .goShoping {
    position: fixed;
    width: 100%;
    bottom: 0;
    button {
      width: 100%;
      background: darkturquoise;
      padding: 5px 0;
      color: #fff;
    }
  }
}
</style>
