import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Corrected import: Import the named export (users) instead of default API
import { users } from "../API/API";

const Users = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    if (!userRole) {
      navigate("/login"); // Redirect if no userRole
      return;
    }

    // Simulate a delay if data was being fetched (even if it's static in this case)
    setTimeout(() => {
      setUserList(users || []); // Set userList with the imported users data
      setLoading(false); // Set loading to false after data is set
    }, 1000); // Simulate delay
  }, [userRole, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message if data is still being fetched
  }

  return (
    <div className="users">
      <h2>User List</h2>
      {userList.length > 0 ? (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p> // Handle empty list
      )}
    </div>
  );
};

export default Users;
