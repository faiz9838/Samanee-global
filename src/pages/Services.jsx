// src/pages/Services.js
import React, { useContext } from 'react';
import { ServiceContext } from '../context/ServiceContext';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
    const { services } = useContext(ServiceContext);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="services-container container mx-auto p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
                <div className="service-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.length > 0 ? (
                        services.map(service => (
                            <ServiceCard key={service._id} service={service} />
                        ))
                    ) : (
                        <p className="text-center">No services available</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
