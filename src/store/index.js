import axios from 'axios'
import { createStore } from 'vuex'


export default createStore({
  state: {
    products: [],
    productsInBag:[],
    loadCategories:[]
   
  },
  getters: {
  },
  mutations: {
    loadProducts (state, products) {
      state.products = products;
    },
    loadCategories(state, categories) {
      state.categories = categories;
    },
    addtoBag(state, product){
      state.productsInBag.push(product);
    },
    loadProductsCategory(state, category){
      const products = state.products.filter(p => p.category === category)
      state.productsCategory = products;
      console.log(products);
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
    loadCategories({ commit }){
      axios
      .get('https://fakestoreapi.com/products/categories')
      .then(response => {
        commit('loadCategories', response.data);
      })
    },

    addtoBag({ commit }, product){
      commit('addtoBag', product);
    },

    removeFromBag({ commit }, productId){
      commit('removeFromBag', productId)
    },
    filteredItems({ commit }, category){
      console.log(category);
      commit('loadProductsCategory', category)
   }
  },
  modules: {
  }
})
