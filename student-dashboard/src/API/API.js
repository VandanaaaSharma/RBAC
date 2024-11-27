export const users = [
  { id: 1, name: "John Doe", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Department", status: "Inactive" },
  { id: 3, name: "Alice Johnson", role: "Student", status: "Active" },
  { id: 4, name: "Mark Spencer", role: "Admin", status: "Active" },
  { id: 5, name: "Emily Davis", role: "Student", status: "Inactive" },
  { id: 6, name: "Sophia Brown", role: "Department", status: "Active" },
  { id: 7, name: "Michael Wilson", role: "Student", status: "Active" },
  { id: 8, name: "Sarah Thompson", role: "Department", status: "Inactive" },
  { id: 9, name: "Chris Evans", role: "Admin", status: "Active" },
];

export const roles = [
  { name: "Admin", permissions: ["Add Users", "Edit Users", "View Roles"] },
  { name: "Department", permissions: ["View Roles"] },
  { name: "Student", permissions: ["View Roles"] },
];

export const permissions = ["Add Users", "Edit Users", "View Roles"];
