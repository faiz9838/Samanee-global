import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const dummyUserData = [
    { id: 1, name: 'Faiz Ahmad', email: 'afaiz123@gmail.com', password: 'faiz' },
    // Add more dummy users as needed
];

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        // Trim and make email comparison case-insensitive
        const foundUser = dummyUserData.find(user =>
            user.email.toLowerCase() === email.trim().toLowerCase() &&
            user.password === password.trim()
        );
        if (foundUser) {
            setUser(foundUser);
            console.log("Login successful, user set:", foundUser);
            return true; // Login successful
        }
        console.log("Login failed");
        return false; // Login failed
    };

    const register = (newUser) => {
        // Check if user already exists based on case-insensitive email comparison
        const exists = dummyUserData.some(user => user.email.toLowerCase() === newUser.email.trim().toLowerCase());
        if (!exists) {
            const registeredUser = { ...newUser, id: dummyUserData.length + 1 };
            dummyUserData.push(registeredUser);
            setUser(registeredUser);
            console.log("Registration successful, user set:", registeredUser);
            return true; // Registration successful
        }
        console.log("Registration failed, user already exists");
        return false; // Registration failed
    };

    const logout = () => {
        setUser(null);
        console.log("User logged out");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
