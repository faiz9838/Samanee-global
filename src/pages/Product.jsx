// pages/Products.js
import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../context/ServiceContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const { products, addProduct } = useContext(ServiceContext);

    // Example product data
    const newProduct = {
        name: "New Product",
        price: 19.99,
        description: "This is a new product.",
        // Add other fields as needed
    };

    const handleAddProduct = () => {
        addProduct(newProduct);
    };

    return (
        <div>
            <h1>Our Products</h1>
            <button onClick={handleAddProduct}>Add Product</button>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
