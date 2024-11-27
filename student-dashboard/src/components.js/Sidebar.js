import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

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
            <li>Dashboard</li>
            <li>Users</li>
            <li>Roles</li>
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
