// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Welcome, {username}</h3>
      </div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/roles">Roles</Link></li>
        <li><Link to="/permissions">Permissions</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
