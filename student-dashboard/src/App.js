import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Permissions from "./components/Permissions";
import Sidebar from "./components/Sidebar"; // Import Sidebar

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar /> {/* Sidebar added here */}
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
  );
};

export default App;
