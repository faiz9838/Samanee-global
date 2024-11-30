import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component
import profileImg from "../assets/FAIZ AHMAD1.jpeg"
const UserDashboard = () => {
    const { user } = useContext(UserContext);
    const [showProfile, setShowProfile] = useState(true); // State to manage profile visibility


    if (!user) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <>
            <Navbar isLoggedIn={true} isAdmin={user.isAdmin} /> {/* Pass the login state */}
            <div className="container mx-auto p-24 md:flex md:space-x-10">
                {/* Main Content */}
                <div className="flex-grow p-16 bg-white rounded-lg shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg shadow-md text-white">
                        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
                        <p className="mt-2 text-lg">Here's your dashboard with your latest activity.</p>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
                            <p className="text-gray-700 mb-2"><strong>Address:</strong> {user.address}</p>
                            <p className="text-gray-700 mb-2"><strong>Phone:</strong> {user.phone}</p>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Recent Orders</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            {user.orders.length ? (
                                <ul className="space-y-3">
                                    {user.orders.map(order => (
                                        <li key={order.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                                            <span className="font-semibold text-gray-800">{order.item}</span> - Quantity: {order.quantity} <br />
                                            <span className="text-gray-600 text-sm">Ordered on: {order.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No recent orders</p>
                            )}
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Services Availed</h2>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                            {user.services.length ? (
                                <ul className="space-y-3">
                                    {user.services.map(service => (
                                        <li key={service.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                                            <span className="font-semibold text-gray-800">{service.name}</span> <br />
                                            <span className="text-gray-600 text-sm">Availed on: {service.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-600">No services availed</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Profile Section */}
                <div className={`w-full md:w-1/4 p-6 bg-white rounded-lg shadow-md mt-10 md:mt-0 ${showProfile ? 'block' : 'hidden'}`}>
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-600 shadow-md">
                            <img
                                src={user.profilePicture || profileImg} // Replace with user profile pic if available
                                alt={`${user.name}'s profile`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <button onClick={toggleProfile} className="mt-4 text-indigo-600 hover:underline">
                            {showProfile ? 'Hide Profile' : 'Show Profile'}
                        </button>

                    </div>
                </div>
            </div>

            <Footer /> {/* Add a footer */}
        </>
    );
};

export default UserDashboard;
