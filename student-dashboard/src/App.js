import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdminPage from './components/AdminPage'; // Add this component
import UserPage from './components/UserPage'; // Add this component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login page */}
          <Route
            path="/"
            element={
              isCreatingAccount ? (
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  setIsCreatingAccount={setIsCreatingAccount}
                  isCreatingAccount={isCreatingAccount}
                />
              ) : (
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  setIsCreatingAccount={setIsCreatingAccount}
                  isCreatingAccount={isCreatingAccount}
                />
              )
            }
          />

          {/* Dashboard page */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />

          {/* Admin Page */}
          <Route path="/admin" element={<AdminPage />} />

          {/* User Page */}
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
