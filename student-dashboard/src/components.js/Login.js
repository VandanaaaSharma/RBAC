import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && role) {
      localStorage.setItem("username", username);
      localStorage.setItem("userRole", role);
      navigate("/dashboard");
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        {/* Add other roles as needed */}
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
