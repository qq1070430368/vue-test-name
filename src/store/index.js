/* eslint-disable fun-call-spacing */
import Vue from 'vue';
import Vuex from 'vuex';
import cart from './module/cart';
import products from './module/product';
import newShops from './module/newProduct';
import newCarts from './module/newCarts';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.Store(
  {
    modules: {
      cart,
      products,
      newShops,
      newCarts
    },
    plugins: [createPersistedState()]
  }
);
