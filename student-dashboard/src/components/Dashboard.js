import React from 'react';
import "../styles/Dashboard.css";

const Dashboard = () => {
  // Add your onClick handlers or any functionality here
  const handleClick = (action) => {
    console.log(action); // Replace with real functionality
  };

  return (
    <div className="app">
      <div className="app__sidebar">
        <ul>
          {/* Replace anchor tags with buttons for better accessibility */}
          <li><button onClick={() => handleClick('Home')}>Home</button></li>
          <li><button onClick={() => handleClick('Add File')}>Add File</button></li>
          <li><button onClick={() => handleClick('View Files')}>View Files</button></li>
          {/* Add more buttons here as needed */}
        </ul>
      </div>
      <div className="app__content">
        <h1>Welcome to the Dashboard</h1>
        {/* Additional content and admin/user actions can be here */}
      </div>
    </div>
  );
};

export default Dashboard;
