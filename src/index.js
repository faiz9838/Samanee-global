// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import your global CSS
import { AuthProvider } from './context/AuthContext';
import { ServiceProvider } from './context/ServiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ServiceProvider>
        <App />
      </ServiceProvider>
    </AuthProvider>
  </React.StrictMode>
);
