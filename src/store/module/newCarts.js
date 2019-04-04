import shops from '../../api/newShop';
import createPersistedState from 'vuex-persistedstate';
const state = {
  item: []
};

// getters相当于store的一个计算属性， 可以把值缓存起来
const getters = {
  cartProduct(state, getters, rootState) {
    return state.item.map((item) => {
      const currentItem = rootState.newShops.all.find((product) => product.id === item.id);

      return {
        productName: currentItem.productName,
        price: currentItem.price,
        quantity: item.quantity
      };
    });
  },

  cartTotalPrice(state, getters, rootState) {
    console.log(getters, 'getters');
    return getters.cartProduct.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const actions = {

  checkout({state, commit}) {
    commit('setEmptyItem', {item: []});
  },
  addToCart({
    state,
    commit
  }, products) {
    // console.log(products, '');
    console.log(state);
    if (products['int'] > 0) {
      // 如果找到没有找到该商品ID 则push到state中 否则进入计算过程
      const itemFilter = state.item.find((current) => current.id === products.id);
      console.log(itemFilter, 'find函数 返回的类型');
      if (!itemFilter) {
        commit('pushAddCart', {
          id: products.id
        });
      } else {
        commit('computedAddCart', itemFilter);
      }

      // 根据int  限制按钮点击次数
      console.log(this)
      commit('newShops/intMuationDepend', {id: products.id}, { root: true });
    }
  }
};

const mutations = {
  // 把新加的添加到state.item中 添加到购物车的操作
  pushAddCart(state, {
    id
  }) {
    state.item.push({
      id,
      quantity: 1
    });
  },
  // 坑货用了解构， 才看出来 //  解析了数量
  computedAddCart(state, {id}) {
    const itemFilter = state.item.find((current) => current.id === id);
    itemFilter.quantity++;
  },
  // 清空购物车
  setEmptyItem(state, {item}) {
    state.item = item;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
};
