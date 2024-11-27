export const users = [
    {id:1, name:"Admn User", role: "Admin", status: "Active"},
    { id: 2, name: "Dept User", role: "Department", status: "Active" },
  { id: 3, name: "Student User", role: "Student", status: "Active" },
];
export const roles = [
    { name: "Admin", permissions: ["Add Users", "Edit Users", "View Roles"] },
    { name: "Department", permissions: ["View Roles"] },
    { name: "Student", permissions: ["View Roles"] },
  ];
  
  export const permissions = ["Add Users", "Edit Users", "View Roles"];