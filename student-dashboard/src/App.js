import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPage from './components/AdminPage'; // Admin page
import UserPage from './components/UserPage'; // User page

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [userRole, setUserRole] = useState(''); // Assuming role is set after login

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
                setIsCreatingAccount={setIsCreatingAccount}
                isCreatingAccount={isCreatingAccount}
                setUserRole={setUserRole} // Set role after successful login
              />
            }
          />

          {/* Dashboard page */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />

          {/* Admin Page, only accessible by admins */}
          <Route
            path="/admin"
            element={isAuthenticated && userRole === 'admin' ? <AdminPage /> : <Navigate to="/" />}
          />

          {/* User Page, only accessible by normal users */}
          <Route
            path="/user"
            element={isAuthenticated && userRole === 'user' ? <UserPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
