<template>
    <div>
      <product-form @product-added="handleNewProduct"></product-form>
      <product-table :products="products"></product-table>
    </div>
  </template>
  
  <script>
  import ProductForm from '@/components/ProductForm.vue';
  import ProductTable from '@/components/ProductTable.vue';
  import ProductService from '@/services/ProductService';
  
  export default {
    components: {
      ProductForm,
      ProductTable
    },
    data() {
      return {
        products: []
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        this.products = await ProductService.fetchProducts();
      },
      handleNewProduct(newProduct) {
        this.products.push(newProduct); // Add the new product to the existing list
      }
    }
  };
  </script>
  