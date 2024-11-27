import React from "react";
import ErrorBoundary from './components/ErrorBoundary';  // Correct path
import Users from './components/Users';  // Adjust the path according to your folder structure
import Roles from './components/Roles';  // Adjust the path accordingly
import Permissions from './components/Permissions';  // Adjust the path accordingly
import { Route } from 'react-router-dom';  // Import Route from 'react-router-dom' for routing


const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/roles" element={<Roles />} />
              <Route path="/permissions" element={<Permissions />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
