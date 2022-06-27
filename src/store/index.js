import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    products: [],
  },
  getters: {
  },
  mutations: {
    loadProducts (state, products) {
      state.products = products;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data);
      })
    },
  },
  modules: {
  }
})
