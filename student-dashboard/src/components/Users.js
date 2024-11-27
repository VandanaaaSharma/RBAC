import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Corrected import: Import the named export (users) instead of default API
import { users } from "../API/API";

const Users = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (!userRole) {
      navigate("/login"); // Redirect if no userRole
      return;
    }

    // Set userList with the imported users data
    setUserList(users); // Assuming 'users' is the array you want to display
  }, [userRole, navigate]);

  return (
    <div className="users">
      <h2>User List</h2>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
