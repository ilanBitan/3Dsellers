<template>
  <div id="app">
    <!-- Product Manager will always be visible on all pages -->
    <product-manager></product-manager>  
    <!-- Router View will render components based on the route -->
    <router-view></router-view>  
  </div>
</template>

<script>
import ProductManager from './components/ProductManager.vue';

export default {
  name: 'App',
  components: {
    ProductManager
  }
}
</script>

<style>
/* Your styles here */
</style>
