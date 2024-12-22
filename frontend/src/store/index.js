// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    deletedProducts: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
    deleteProduct(state, id) {
      const index = state.products.findIndex(p => p.id === id);
      if (index !== -1) {
        state.deletedProducts.push(state.products[index]);
        state.products.splice(index, 1);
      }
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('http://localhost:3000/products');
      commit('setProducts', response.data);
    },
    async addProduct({ commit }, product) {
      const response = await axios.post('http://localhost:3000/products', product);
      commit('addProduct', response.data);
    },
    async deleteProduct({ commit }, id) {
      await axios.delete(`http://localhost:3000/products/${id}`);
      commit('deleteProduct', id);
    },
    async generateAIProduct({ commit }) {
      const response = await axios.get('http://localhost:3000/products/generate-ai');
      commit('addProduct', response.data);
    }
  }
});
