import shops from '../../api/newShop';

const state = {
  all: []
};

const getters = {};

const actions = {
  getAllProducts({commit}) {
    shops.getAllProducts()
      .then((response) => {
        commit('setProducts', response);
      });
  }
};

const mutations = {
  setProducts(state, response) {
    state.all = response;
  },
  intMuationDepend(state, {id}) {
    const itemInt = state.all.find((item) => item.id === id);
    itemInt['int']--;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
