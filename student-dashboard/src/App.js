import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct imports
import ErrorBoundary from "../components/ErrorBoundary"; // Adjusted path for ErrorBoundary
import Sidebar from "../components/Sidebar"; // Add Sidebar if missing
import Login from "../components/Login"; // Add Login if missing
import Dashboard from "../components/Dashboard"; // Add Dashboard if missing
import Users from "./components/Users"; // Adjust path
import Roles from "./components/Roles"; // Adjust path
import Permissions from "./components/Permissions"; // Adjust path

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
