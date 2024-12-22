<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>SKU</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Supplier Price</th>
          <th>Notes</th>
          <th>Brand</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in localProducts" :key="product.id">
          <td><img :src="product.image" alt="product image" style="width: 50px; height: auto;"></td>
          <td>{{ product.name }}</td>
          <td>{{ product.sku }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.supplierPrice }}</td>
          <td>{{ product.notes }}</td>
          <td>{{ product.brand }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default {
  props: {
    products: Array
  },
  data() {
    return {
      localProducts: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        this.localProducts = await ProductService.fetchProducts();
      } catch (error) {
        console.error('There was an error fetching the products:', error);
      }
    }
  },
  watch: {
    products: {
      immediate: true,
      handler(newVal) {
        this.localProducts = newVal;
      }
    }
  },
  created() {
    this.fetchProducts();
  }
}
</script>
