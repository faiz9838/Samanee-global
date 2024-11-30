import React, { useContext } from 'react';
import { ServiceContext } from '../context/ServiceContext';
import Navbar from '../components/Navbar';  // Import Navbar
import Footer from '../components/Footer';  // Import Footer
import ProductCard from '../components/ProductCard'; // Ensure this path is correct
// Import Feedback component

const Products = () => {
    const { products } = useContext(ServiceContext);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <div className="flex-grow bg-white p-28 md:p-32">
                <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-10 text-gray-800">Our Products</h1>
                <p className="text-lg text-center mb-6 text-gray-600 max-w-2xl mx-auto">
                    Explore our wide range of eco-friendly products designed to meet your scrap management needs.
                </p>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

            {/* Feedback Section */}
            {/* Include Feedback component */}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Products;
