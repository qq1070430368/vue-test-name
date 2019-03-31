import shop from '../../api/shop';
console.log(shop)
// initial state
const state = {
  all: []
};

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    console.log(commit, 'commit')
    shop.getProducts(products => {
      commit('setProducts', products);
    });
  }
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
