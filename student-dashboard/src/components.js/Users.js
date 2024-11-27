import React, { useState } from "react";
import { users, roles } from "../mock/mockApi";

const Users = () => {
  const [userList, setUserList] = useState(users);

  const handleDelete = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const handleRoleChange = (id, newRole) => {
    setUserList(
      userList.map((user) =>
        user.id === id ? { ...user, role: newRole } : user
      )
    );
  };

  return (
    <div className="users">
      <h1>Manage Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            const userRole = roles.find((role) => role.name === user.role);
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    {roles.map((role) => (
                      <option key={role.name} value={role.name}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>{userRole ? userRole.permissions.join(", ") : "None"}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
