import React from "react";
import "../styles/permission.css";

const Permissions = () => {
  // Define the permissions array directly inside the component
  const permissions = ["Read", "Write", "Execute"]; // Example permissions

  return (
    <div className="permissions">
      <h1>Permissions</h1>
      <ul>
        {permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default Permissions;
