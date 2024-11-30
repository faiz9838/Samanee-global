import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>

                {/* Scrap-related details */}
                <div className="mt-4 space-y-1">
                    <p className="text-sm text-gray-600"><strong>Category:</strong> {product.category}</p>
                    <p className="text-sm text-gray-600"><strong>Weight:</strong> {product.weight} kg</p>
                    <p className="text-sm text-gray-600"><strong>Price:</strong> ${product.price} per kg</p>
                    <p className="text-sm text-gray-600"><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</p>
                </div>

                {/* Action buttons */}
                <div className="flex mt-6 space-x-4">
                    <button className="flex-1 px-4 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg">
                        Add to Cart
                    </button>
                    <button className="flex-1 px-4 py-2 bg-green-500 text-white text-center rounded hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
