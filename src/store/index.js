import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

new Vuex.Store({
  state: {
    // data
    products: []
  },

  getters: {
    // computed properties
    productsCount() {
      //...
    }
  },

  actions: {
    fetchProducts() {
      //make the async api call
    }
  },

  mutations: {
    setProducts() {
      //update products
    }
  }
});
