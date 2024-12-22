<template>
  <div class="container mt-4">
    <h2 class="mb-3">Add New Product</h2>
    <form @submit.prevent="submitForm" class="mb-5">
      <div class="mb-3">
        <label for="productImage" class="form-label">Product Image URL</label>
        <input type="text" class="form-control" id="productImage" v-model="product.image" required>
      </div>
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input type="text" class="form-control" id="productName" v-model="product.name" required>
      </div>
      <div class="mb-3">
        <label for="productSKU" class="form-label">SKU</label>
        <input type="text" class="form-control" id="productSKU" v-model="product.sku" required>
      </div>
      <div class="mb-3">
        <label for="quantity" class="form-label">Quantity</label>
        <input type="number" class="form-control" id="quantity" v-model.number="product.quantity" required>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" v-model.number="product.price" required>
      </div>
      <div class="mb-3">
        <label for="supplierPrice" class="form-label">Supplier Price</label>
        <input type="number" class="form-control" id="supplierPrice" v-model.number="product.supplierPrice" required>
      </div>
      <div class="mb-3">
        <label for="notes" class="form-label">Notes</label>
        <textarea class="form-control" id="notes" v-model="product.notes"></textarea>
      </div>
      <div class="mb-3">
        <label for="brand" class="form-label">Brand</label>
        <input type="text" class="form-control" id="brand" v-model="product.brand" required>
      </div>
      <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default {
  data() {
    return {
      product: {
        image: '',
        name: '',
        sku: '',
        quantity: 0,
        price: 0,
        supplierPrice: 0,
        notes: '',
        brand: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const newProduct = await ProductService.createProduct(this.product);
        this.$emit('product-added', newProduct); // Emit an event to the parent
        this.resetForm(); // Reset form fields after submission
      } catch (error) {
        console.error('Failed to add product:', error);
      }
    },
    resetForm() {
      this.product = {
        image: '',
        name: '',
        sku: '',
        quantity: 0,
        price: 0,
        supplierPrice: 0,
        notes: '',
        brand: ''
      };
    }
  }
};
</script>

<style>
/* Additional styles can go here */
</style>
