import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to navigate to Admin page
  const goToAdmin = () => {
    navigate('/admin'); // Adjust to your desired path
  };

  // Function to navigate to User page
  const goToUser = () => {
    navigate('/user'); // Adjust to your desired path
  };

  return (
    <div className="dashboard">
      <div className="welcome-box">
        <h1>Welcome to the Dashboard</h1>
        <button onClick={goToAdmin} className="button">Admin</button>
        <button onClick={goToUser} className="button">User</button>
      </div>
    </div>
  );
};

export default Dashboard;
