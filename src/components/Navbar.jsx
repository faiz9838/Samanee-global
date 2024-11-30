import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';
const Navbar = ({ isLoggedIn, user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { setUser } = useContext(UserContext); // Get setUser from context
    const navigate = useNavigate(); // Initialize navigate

    const handleLogout = () => {
        isLoggedIn = false



        navigate('/')


    }
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-700 shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className='font-extrabold text-2xl text-white'>SAMANEE GLOBAL</h1>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-white hover:text-slate-100 font-medium">Home</Link>
                        <Link to="/about-us" className="text-white hover:text-slate-100 font-medium">About Us</Link>
                        <Link to="/products" className="text-white hover:text-slate-100 font-medium">Products</Link>
                        <Link to="/services" className="text-white hover:text-slate-100 font-medium">Services</Link>
                        <Link to="/contact" className="text-white hover:text-slate-100 font-medium">Contact</Link>
                        <Link to="/feedback" className="text-white hover:text-slate-100 font-medium">Feedback</Link>

                        {isLoggedIn ? (
                            // User Profile Icon with Dropdown
                            <div className="relative">
                                <button onClick={toggleDropdown} className="text-white flex items-center">
                                    <span className="material-icons"><AccountCircleIcon /></span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                                        <div className="py-2">

                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="text-white hover:text-slate-100 font-medium">Login</Link>
                                <Link to="/register" className="text-white hover:text-slate-100 font-medium">Register</Link>
                            </>
                        )}
                    </div>

                    {/* Hamburger Button */}
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-white hover:text-slate-100 focus:outline-none focus:text-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden p-4">
                    <div className="pt-1 pb-3 space-y-3 sm:px-10">
                        <Link to="/" className="block text-white hover:text-gray-200 font-medium">Home</Link>
                        <Link to="/about-us" className="block text-white hover:text-gray-200 font-medium">About Us</Link>
                        <Link to="/products" className="block text-white hover:text-gray-200 font-medium">Products</Link>
                        <Link to="/services" className="block text-white hover:text-gray-200 font-medium">Services</Link>
                        <Link to="/contact" className="block text-white hover:text-gray-200 font-medium">Contact</Link>
                        <Link to="/feedback" className="block text-white hover:text-gray-200 font-medium">Feedback</Link>

                        {isLoggedIn ? (
                            <div className="relative">
                                <button onClick={toggleDropdown} className="text-white flex items-center">
                                    <span className="material-icons"><AccountCircleIcon /></span>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20">
                                        <div className="py-2">
                                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="block text-white hover:text-gray-200 font-medium">Login</Link>
                                <Link to="/register" className="block text-white hover:text-gray-200 font-medium">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
