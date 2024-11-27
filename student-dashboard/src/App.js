import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to toggle between login and create account forms

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

          {/* Redirect to dashboard when authenticated */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
