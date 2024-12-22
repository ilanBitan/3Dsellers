# 3Dsellers

## Author:
Ilan Bitan

## Overview
The 3Dsellers platform is a comprehensive e-commerce solution designed to streamline the management of product listings and orders. Utilizing modern web technologies, the platform offers an intuitive user interface for seamless management of product operations.

![image](https://github.com/user-attachments/assets/d0bb444e-f864-4fca-be12-cb5ed8e35406)

## Technologies Used
- **Frontend**:
  - **Vue 3**: Used for building a progressive and responsive user interface.
  - **Vuex**: Manages state within the application.

- **Backend**:
  - **Node.js**: JavaScript runtime for building scalable network applications.
  - **NestJS**: A framework for building efficient and scalable server-side applications.
  - **Prisma**: ORM tool to handle database operations.
    
## Project Structure
### Frontend Components
- **`App.vue`**: The main component that serves as the entry point for the Vue application. It integrates the main layout and routing.
- **`Home.vue`**: Serves as the dashboard for product and order management.
- **`ProductForm.vue`**: A form component for adding new products. Validates and submits product data.
- **`ProductTable.vue`**: Displays products in a detailed table, allowing for operations like search, edit, and delete directly from the table.
- **`NotFound.vue`**: A utility component that displays a user-friendly message for unmatched routes (404 errors).
- **`AIOrdersGenerator.vue`**: Simulates the generation of orders using predefined algorithms or connected AI services.

### Backend Architecture
- **`server.js`**: Sets up the Node.js server with Express, integrating middleware and API routing.
- **Files for handling data and business logic**:
  - **`prisma.service.ts`**
  - **`products.controller.ts`**
  - **`products.module.ts`**
  - **`products.service.ts`**
  - **`create-product.dto.ts`**
  - **`app.controller.ts`**
  - **`app.module.ts`**
  - **`app.service.ts`**
  - **`main.ts`**
    
## Start the development server for both frontend and backend:

# Frontend
npm run dev

# Backend
node server.js

Navigate to http://localhost:3000 to view and interact with the application.

## Setup and Installation
Clone the repository and follow these steps:

```bash
git clone https://github.com/ilanBitan/3Dsellers.git
cd 3Dsellers
npm install

