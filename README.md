# Quantum Fits E-Commerce Website

## Overview
Quantum Fits is a modern e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). It offers a wide range of expensive stylish outfits, branded clothing, shoes, handbags, belts, and accessories. The platform includes features such as product search, filters, user authentication, and integrated PayPal payments.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features
- User authentication with JWT
- Product management
- Shopping cart functionality
- Order management
- PayPal payment integration
- Product search and filters
- User reviews and ratings
- Responsive design

## Technologies
- **Frontend:** React, Redux, React Router, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Payment Gateway:** PayPal

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/quantum-fits.git
    cd quantum-fits
    ```

2. Backend Setup:
    1. Navigate to the backend directory:
        ```bash
        cd backend
        ```
    2. Install dependencies:
        ```bash
        npm install
        ```
    3. Create a `.env` file in the backend directory with the following environment variables:
        ```env
        NODE_ENV=development
        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        PAYPAL_CLIENT_ID=your_paypal_client_id
        PAYPAL_CLIENT_SECRET=your_paypal_client_secret
        ```

3. Frontend Setup:
    1. Navigate to the frontend directory:
        ```bash
        cd ../frontend
        ```
    2. Install dependencies:
        ```bash
        npm install
        ```

### Running the Application

1. Start the backend server:
    ```bash
    cd backend
    npm run server
    ```

2. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

## Usage

- **Homepage:** Browse the collection of products.
- **Search:** Use the search bar to find specific products.
- **Product Details:** View detailed information and reviews for each product.
- **Cart:** Add products to your cart and proceed to checkout.
- **Checkout:** Complete your purchase using PayPal.

