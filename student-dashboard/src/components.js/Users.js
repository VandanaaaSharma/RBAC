import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Users.css';

const Users = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const userRole = localStorage.getItem("userRole");

  if (!userRole) {
    navigate("/login"); // Redirect if no userRole
    return null; // Don't render the component if the role is missing
  }

  // Add logic for managing the user list here

  return (
    <div className="users">
      <h2>User List</h2>
      {/* Render user list here */}
    </div>
  );
};

export default Users;
