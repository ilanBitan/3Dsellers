import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export default {
  async fetchProducts() {
    const response = await axios.get(API_URL);
    return response.data;
  },
  async createProduct(product) {
    const response = await axios.post(API_URL, product);
    return response.data;
  },
  async generateAIOrder() {
    const response = await axios.get(`${API_URL}/generate-ai`);
    return response.data;
  }
}
