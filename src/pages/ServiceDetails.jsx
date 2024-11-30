// src/pages/ServiceDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';

const ServiceDetails = () => {
    const { id } = useParams(); // Get service ID from URL
    const { services } = useContext(ServiceContext);
    const service = services.find(s => s._id === id); // Find the service by ID

    if (!service) {
        return <p>Service not found.</p>;
    }

    return (
        <div className="service-details-container">
            <h1 className="text-3xl font-bold">{service.name}</h1>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-sm text-gray-600"><strong>Duration:</strong> {service.duration} hours</p>
            <p className="text-sm text-gray-600"><strong>Price:</strong> ${service.price}</p>
            <p className="text-sm text-gray-600"><strong>Availability:</strong> {service.availability ? 'Available' : 'Not Available'}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Book Now
            </button>
        </div>
    );
};

export default ServiceDetails;
