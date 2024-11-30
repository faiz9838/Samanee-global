import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ServiceContext } from '../context/ServiceContext';


const Dashboard = () => {
    const { user, login } = useContext(AuthContext);
    const { services } = useContext(ServiceContext);



    return (
        <div>
            <h1>Welcome, {user ? user.name : 'Guest'}</h1>
            <h2>Available Services:</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>{service.name}</li>
                ))}
            </ul>


        </div>
    );
};

export default Dashboard; 