// src/pages/Contact.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(''); // Clear error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('All fields are required!');
            return;
        }

        // Handle form submission logic (e.g., API call)
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar /> {/* Include Navbar */}
            <div className="flex-grow flex justify-center items-center bg-gray-100 p-28">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl mx-auto w-full flex flex-col md:flex-row">
                    {/* Left Side: Text Section */}
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6 flex flex-col justify-center items-start">
                        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h1>
                        <p className="text-lg mb-4 text-gray-700">We’d love to hear from you! Please fill out the form below.</p>
                        <p className="text-gray-600">
                            If you have any questions or feedback, feel free to reach out to us.
                            Our team is here to assist you with any inquiries you may have.
                        </p>
                    </div>
                    {/* Right Side: Form Section */}
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    rows="5"
                                ></textarea>
                            </div>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            {submitted && <p className="text-green-500 mb-4">Your message has been sent successfully!</p>}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer /> {/* Include Footer */}
        </div>
    );
};

export default Contact;
