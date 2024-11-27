import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <div className="welcome-box">
        <h1>Welcome to the Dashboard</h1>
        <button onClick={() => navigate('/admin')} className="button">Admin</button>
        <button onClick={() => navigate('/user')} className="button">User</button>
      </div>
    </div>
  );
};

export default Dashboard;
