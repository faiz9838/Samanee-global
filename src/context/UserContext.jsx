// context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
// import api from '../utils/api'; // Uncomment when backend is available

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Dummy user data
    const dummyUser = {
        id: 1,
        name: "Faiz Ahmad",
        email: "afaiz123@gmail.com",
        address: "123 Main St, Anytown, USA",
        phone: "9838709482",
        orders: [
            { id: 1, item: "Aluminum Scrap", quantity: 5, date: "2024-01-12" },
            { id: 2, item: "Steel Scrap", quantity: 10, date: "2024-02-10" },
        ],
        services: [
            { id: 1, name: "Metal Scrap Collection", date: "2024-03-05" },
            { id: 2, name: "Electronic Waste Disposal", date: "2024-03-18" }
        ]
    };

    useEffect(() => {
        // Use dummy data for now
        setUser(dummyUser);

        // Uncomment and use this when backend is ready:
        /*
        const fetchUserData = async () => {
            try {
                const response = await api.get('/user');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
        */
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};
