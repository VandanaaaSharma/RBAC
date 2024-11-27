import React from "react";
import { useNavigate } from "react-router-dom";
import { roles } from "../API/API"; // Assuming this is where roles are defined
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Retrieve username and userRole from localStorage
  const username = localStorage.getItem("username");
  const userRole = localStorage.getItem("userRole");

  // Check if username or userRole is missing and navigate to login if necessary
  if (!username || !userRole) {
    navigate("/login");
    return null; // Don't render the rest of the component if data is missing
  }

  // Find the current role from the roles list
  const currentUserRole = roles.find((role) => role.name === userRole);

  return (
    <div className="dashboard">
      <h1>Welcome, {username} ({userRole})</h1>
      <p>Your Permissions: {currentUserRole ? currentUserRole.permissions.join(", ") : "No permissions found"}</p>
      <button onClick={() => alert("Viewing content!")}>View</button>
    </div>
  );
};

export default Dashboard;
