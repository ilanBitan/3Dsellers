<template>
    <div>
      <h1>Product Manager</h1>
      <button @click="generateAIProduct">Generate Product with AI</button>
      <ul v-if="products.length > 0">
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.description }}
        </li>
      </ul>
      <p v-else>No products found</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: []
      };
    },
    methods: {
      async generateAIProduct() {
        try {
          const response = await axios.get('http://localhost:3000/products/generate-ai');
          this.products = response.data;
        } catch (error) {
          console.error('There was an error generating the AI product:', error);
          this.products = [];
        }
      }
    }
  }
  </script>
  