// pages/Home.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ScrapImage1 from '../assets/slider-img-1.jpg';
import ScrapImage2 from '../assets/slider-img-2.jpg';
import ScrapImage3 from '../assets/slider-img-3.jpg';

const images = [ScrapImage1, ScrapImage2, ScrapImage3];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <header className="bg-black h-screen flex items-center justify-between p-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white max-w-lg"
                >
                    <h1 className="text-5xl font-bold mb-4">Eco-Friendly Scrap Management</h1>
                    <p className="text-xl mb-6">We recycle and repurpose scrap materials responsibly.</p>
                    <a
                        href="#services"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Learn More
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="hidden lg:block w-1/2"
                >
                    <div className="relative">
                        <img src={images[currentIndex]} alt={`Scrap Management ${currentIndex + 1}`} className="w-full h-72 object-cover rounded-lg" />
                    </div>
                </motion.div>
            </header>

            {/* Services Section */}
            <section id="services" className="py-16 bg-white">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-8">Our Services</h2>
                    <p className="mb-12 text-lg">We provide a wide range of scrap management services to help you recycle and reduce waste.</p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.3,
                                staggerChildren: 0.2,
                            },
                        },
                        hidden: { opacity: 0 }
                    }}
                >
                    {/* Service 1 */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-gray-100 p-6 shadow-lg rounded-lg max-w-xs"
                    >
                        <h3 className="text-2xl font-bold mb-4">Scrap Collection</h3>
                        <p>We collect scrap materials from industrial and residential areas for recycling.</p>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-gray-100 p-6 shadow-lg rounded-lg max-w-xs"
                    >
                        <h3 className="text-2xl font-bold mb-4">Metal Recycling</h3>
                        <p>Expert recycling of metals like copper, aluminum, and steel.</p>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                        className="bg-gray-100 p-6 shadow-lg rounded-lg max-w-xs"
                    >
                        <h3 className="text-2xl font-bold mb-4">E-Waste Disposal</h3>
                        <p>We safely dispose of electronic waste in compliance with environmental regulations.</p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-blue-500 text-white py-16 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="container mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-6">Ready to Recycle?</h2>
                    <p className="text-xl mb-6">Contact us today to learn more about how we can help with your scrap management needs.</p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
