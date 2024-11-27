import React from "react";
import { permissions } from "../mock/mockApi";

const Permissions = () => {
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
