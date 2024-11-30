// App.js
import React from 'react';
import { UserProvider } from './context/UserContext';
import { ServiceProvider } from './context/ServiceContext';
import UserDashboard from './components/UserDashboard';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <UserProvider>
      <ServiceProvider>
        <div className="App">
          <AppRouter />
        </div>
      </ServiceProvider>
    </UserProvider>
  );
}

export default App;
