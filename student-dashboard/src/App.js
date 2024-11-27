import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPage from './components/AdminPage';
import UserPage from './components/UserPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(''); // Track if user is admin or user

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login page */}
          <Route
            path="/"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUserRole={setUserRole}
              />
            }
          />

          {/* Dashboard page */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard userRole={userRole} /> : <Navigate to="/" />
            }
          />

          {/* Admin Page */}
          <Route
            path="/admin"
            element={
              isAuthenticated && userRole === 'admin' ? <AdminPage /> : <Navigate to="/" />
            }
          />

          {/* User Page */}
          <Route
            path="/user"
            element={
              isAuthenticated && userRole === 'user' ? <UserPage /> : <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
