// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>

                {/* Service-related details */}
                <div className="mt-4">
                    <p className="text-sm text-gray-600"><strong>Duration:</strong> {service.duration} hours</p>
                    <p className="text-sm text-gray-600"><strong>Price:</strong> ${service.price}</p>
                    <p className="text-sm text-gray-600"><strong>Availability:</strong> {service.availability ? 'Available' : 'Not Available'}</p>
                </div>

                {/* Action buttons */}
                <div className="flex mt-6 space-x-4">
                    <Link to={`/services/${service._id}`}>
                        <button className="flex-1 px-4 py-2 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition-colors duration-300">
                            Learn More
                        </button>
                    </Link>
                    <button className="flex-1 px-4 py-2 bg-green-500 text-white text-center rounded hover:bg-green-600 transition-colors duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
