// src/pages/Register.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Import your AuthContext
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const Register = () => {
    const { register } = useContext(AuthContext);
    const [userData, setUserData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(userData); // Call register function from context
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar /> {/* Include Navbar */}
            <div className="flex-grow flex justify-center items-center bg-gray-100 p-32">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full transition-transform transform hover:scale-105">
                    <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Register</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={userData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={userData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md transform hover:scale-105"
                        >
                            Register
                        </button>
                    </form>
                    <div className="flex justify-between items-center mt-4">
                        <a href="/login" className="text-sm text-blue-500 hover:underline">
                            Login instead
                        </a>
                    </div>
                    <div className="my-4 flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition duration-300 shadow-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 48 48"
                            fill="currentColor"
                        >
                            <path d="M24 9c-8.28 0-15 6.72-15 15s6.72 15 15 15c3.9 0 7.49-1.5 10.18-3.96l-3.83-3.11c-1.63 1.03-3.58 1.6-5.35 1.6-4.88 0-8.75-3.97-8.75-8.85 0-4.45 3.25-8.16 7.52-8.65C32.93 10.06 29.83 9 26 9H24zm-2 16.36c0 .36.01.73.02 1.09-1.53-.09-3.07-.38-4.57-.86-1.9-2.55-2.95-5.95-2.95-9.56 0-3.38 1.08-6.54 2.95-9.07 1.5-.48 3.04-.77 4.57-.86 1.09 1.73 1.76 3.86 1.76 6.16 0 4.88-3.93 8.85-8.75 8.85-2.83 0-5.19-1.31-6.88-3.36-.05-.07-.09-.15-.14-.22 2.15.66 4.5 1.05 6.88 1.05 1.54 0 3.03-.18 4.47-.51-.1.68-.16 1.35-.16 2.03z" />
                        </svg>
                        Register with Google
                    </button>
                </div>
            </div>
            <Footer /> {/* Include Footer */}
        </div>
    );
};

export default Register;
