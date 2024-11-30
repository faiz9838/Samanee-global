// src/routes/AppRouter.jsx

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Services from '../pages/Services';
import ServiceDetails from '../pages/ServiceDetails';
import Feedback from '../pages/Feedback';
import WhatWeProvide from '../pages/WhatWeProvide';
import Error404 from '../pages/Error404';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import UserDashboard from '../components/UserDashboard';

const AppRouter = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={user ? <Navigate to="/user-dashboard" /> : <Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetails />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/what-we-provide" element={<WhatWeProvide />} />

                {/* Private route for user dashboard */}
                <Route
                    path="/user-dashboard"
                    element={user ? <UserDashboard /> : <Navigate to="/login" />}
                />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
