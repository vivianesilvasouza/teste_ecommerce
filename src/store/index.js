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
    },
    removeFromBag(state, productId){
      let updatedBag = state.productsInBag.filter(item => productId != item.id)
      state.productsInBag = updatedBag;
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
    },

    removeFromBag({ commit }, productId){
      commit('removeFromBag', productId)
    }
  },
  modules: {
  }
})
