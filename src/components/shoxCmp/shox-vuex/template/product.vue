<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCarts(product)"
      >
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";
var apps =  {
  computed: mapState({
    products: state => {
      console.log(state, 'asdad')
      return state.products.all
    }
  }),
  methods: mapActions("cart", ["addProductToCarts"]),
  created() {
    console.log(this.$store)
    this.$store.dispatch("products/getAllProducts");
  }
};
console.log(apps)
export default  apps;
</script>
