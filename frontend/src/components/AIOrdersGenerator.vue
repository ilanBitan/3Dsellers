<template>
    <button @click="generateAIProduct">Generate AI Product</button>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async generateAIProduct() {
        try {
          const response = await axios.get('http://localhost:3000/products/generate-ai');
          this.$emit('ai-order-generated', response.data);
        } catch (error) {
          console.error('There was an error generating the AI product:', error);
        }
      }
    }
  };
  </script>
  