<template>
  <div class="cart top-fixed">
    <div class="cmp-title">
      <h6>{{$route.meta.name}}</h6>
    </div>
    <!-- <p v-show="!products.length"><i>Please add some products to cart.</i></p> -->

    <div v-for="(product, $index) in products" :key="$index" class="tab-item">
      <span>{{product.productName}}</span>
      <span>{{ product.price | currency }}</span>
      <button>x {{ product.quantity }}</button>
    </div>

    <button></button>

    <div class="goShoping">
      <button class="btn">总价格 {{total | currency}}</button>
       <button class="btn" @click="checkout">清空待办</button>
    </div>

    <!-- <p>Total: {{ total | currency }}</p> -->
    <!-- <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p> -->
    <!-- <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p> -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions} from "vuex";

export default {
  computed: {
    // ...mapState({
    //   checkoutStatus: state => state.cart.checkoutStatus
    // }),
    ...mapGetters("newCarts", {
      products: "cartProduct",
      total: "cartTotalPrice"
    })
  },
  methods: {
    // checkout(products) {
    //   this.$store.dispatch("cart/checkout", products);
    // }
    // 这样的 写法实则 是映射到 this.$store.dispatch('newCarts/checkout');
    ...mapActions("newCarts", ["checkout"])
  }
};
</script>
<style lang="less" scoped>
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
  display: flex;
  button {
    width: 50%;
    background: darkturquoise;
    padding: 5px 0;
    color: #fff;
    border-radius: 0;
    &:nth-child(1) {
        background: red;
    }
  }
}
</style>

