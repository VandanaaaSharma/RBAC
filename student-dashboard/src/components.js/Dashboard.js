import React from "react";
import { users, roles } from "../mock/mockApi";

const Dashboard = () => {
  const userRole = localStorage.getItem("userRole");
  const currentUserRole = roles.find((role) => role.name === userRole);

  return (
    <div className="dashboard">
      <h1>
        Welcome, {localStorage.getItem("username")} ({userRole})
      </h1>
      <p>Your Permissions: {currentUserRole.permissions.join(", ")}</p>
      <button onClick={() => alert("Viewing content!")}>View</button>
    </div>
  );
};

export default Dashboard;
