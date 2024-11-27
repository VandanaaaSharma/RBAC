import React, { useState } from "react";
import { roles, permissions } from "../API/API";

const Roles = () => {
  const [roleList, setRoleList] = useState(roles);

  const handlePermissionToggle = (roleName, permission) => {
    setRoleList(
      roleList.map((role) =>
        role.name === roleName
          ? {
              ...role,
              permissions: role.permissions.includes(permission)
                ? role.permissions.filter((perm) => perm !== permission)
                : [...role.permissions, permission],
            }
          : role
      )
    );
  };

  return (
    <div className="roles">
      <h1>Manage Roles</h1>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roleList.map((role) => (
            <tr key={role.name}>
              <td>{role.name}</td>
              <td>
                {permissions.map((perm) => (
                  <label key={perm}>
                    <input
                      type="checkbox"
                      checked={role.permissions.includes(perm)}
                      onChange={() => handlePermissionToggle(role.name, perm)}
                    />
                    {perm}
                  </label>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
