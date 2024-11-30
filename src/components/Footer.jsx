import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">SAMANEE GLOBAL</h3>
                        <p className="text-gray-400">
                            Leading the way in industry excellence, we provide top-notch services and products to enhance your business.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-blue-500">Services</a></li>
                            <li><a href="/products" className="text-gray-400 hover:text-blue-500">Products</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="/privacy" className="text-gray-400 hover:text-blue-500">Privacy Policy</a></li>
                            <li><a href="/terms" className="text-gray-400 hover:text-blue-500">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500">&copy; 2024 SAMANEE GLOBAL. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="/privacy" className="text-gray-400 hover:text-blue-500">Privacy Policy</a>
                            <a href="/terms" className="text-gray-400 hover:text-blue-500">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
