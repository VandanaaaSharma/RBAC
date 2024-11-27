import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css"

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  const handleNavigate = (role) => {
    if (role === 'admin') {
      navigate('/admin'); // Go to Admin Page
    } else if (role === 'user') {
      navigate('/user'); // Go to User Page
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard</p>
      <div className="role-buttons">
        {userRole === 'admin' && (
          <button onClick={() => handleNavigate('admin')}>Go to Admin Page</button>
        )}
        {userRole === 'user' && (
          <button onClick={() => handleNavigate('user')}>Go to User Page</button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
