import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    products: [],
    productsInBag:[]
  },
  getters: {
  },
  mutations: {
    loadProducts (state, products) {
      state.products = products;
    },
    addtoBag(state, product){
      state.productsInBag.push(product);
    }

  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data);
      })
    },

    addtoBag({ commit }, product){
        commit('addtoBag', product);
    }
  },
  modules: {
  }
})
