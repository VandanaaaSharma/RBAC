import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && (
        <>
          <ul>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/users")}>Users</li>
            <li onClick={() => navigate("/roles")}>Roles</li>
            <li onClick={() => navigate("/permissions")}>Permissions</li>
          </ul>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
