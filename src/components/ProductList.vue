<template>
  <div>
    <h1>Product List</h1>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import store from "@/store/index";

export default {
  data() {
    return {
      loading: false
    };
  },
  computed: {
    products() {
      return store.getters.availableProducts;
    }
  },

  created() {
    this.loading = true;
    store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style scoped>
</style>
