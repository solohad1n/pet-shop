export default {
  state: {
    product: {},
  },
  getters: {
    products(state) {
      return state.product
    }
  },
  mutations: {
    SET_STORE(state, product) {
      state.product = product
    }
  },
  actions: {
    async initStore({ commit }) {
      const res = await fetch("http://localhost:3000/products");
      const product = await res.json();
      commit('SET_STORE', product)
    }
  },
  modules: {
  }
}