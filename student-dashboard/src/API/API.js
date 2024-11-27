export const roles = [
  { 
    id: 1, 
    name: "Admin", 
    description: "Full access to manage users and roles", 
    permissions: [
      { name: "Add Users", level: "Write" },
      { name: "Edit Users", level: "Write" },
      { name: "View Roles", level: "Read" }
    ] 
  },
  { 
    id: 2, 
    name: "Department", 
    description: "Can only view roles", 
    permissions: [
      { name: "View Roles", level: "Read" }
    ] 
  },
  { 
    id: 3, 
    name: "Student", 
    description: "Can only view roles", 
    permissions: [
      { name: "View Roles", level: "Read" }
    ] 
  },
];

export const permissions = [
  { name: "Add Users", description: "Allows adding new users" },
  { name: "Edit Users", description: "Allows editing existing users" },
  { name: "View Roles", description: "Allows viewing roles" },
];
