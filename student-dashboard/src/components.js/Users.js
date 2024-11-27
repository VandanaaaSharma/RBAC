import React, { useState } from "react";
import { users } from "../API/API";
import Sidebar from "./Sidebar";
import "./Users.css";

const Users = () => {
  const [userList, setUserList] = useState(users);

  const handleDelete = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <nav className="navbar">
          <h1>Manage Users</h1>
        </nav>
        <div className="users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
