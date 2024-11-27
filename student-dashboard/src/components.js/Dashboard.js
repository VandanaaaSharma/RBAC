import React from "react";
import Sidebar from "./Sidebar";
import'../styles/Dashboard.css'

const Dashboard = () => {
  const username = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  return (
    <div className="dashboard-container">
      <Sidebar onLogout={handleLogout} />
      <div className="dashboard-content">
        <nav className="navbar">
          <h1>Welcome, {username}!</h1>
        </nav>
        <div className="content">
          <h2>Dashboard</h2>
          <button className="view-button">View</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
