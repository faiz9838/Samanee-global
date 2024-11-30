// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams(); // Get product ID from URL
    // Fetch product details using the ID, maybe from context or an API

    return (
        <div>
            <h1>Product Details for ID: {id}</h1>
            {/* Render product details here */}
        </div>
    );
};

export default ProductDetails;
