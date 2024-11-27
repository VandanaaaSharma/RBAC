import React, { useState } from "react";
import'../styles/Sidebar.css';

const Sidebar = ({ onLogout }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Sidebar" : "Show Sidebar"}
      </button>
      {isVisible && (
        <div className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Roles</li>
            <li>Settings</li>
            <li onClick={onLogout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
