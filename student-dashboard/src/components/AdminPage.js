import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Admin.css";

const AdminPage = ({ userRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "Admin") {
      navigate('/login'); // Redirect to login if not Admin
    }
  }, [userRole, navigate]);

  return (
    <div className="admin-page">
      <div className="logout-btn-box">
        <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
      </div>
      <div className="action-boxes">
        <div className="action-box" onClick={() => console.log('View')}>View</div>
        <div className="action-box" onClick={() => console.log('Add')}>Add</div>
        <div className="action-box" onClick={() => console.log('Delete')}>Delete</div>
        <div className="action-box" onClick={() => console.log('Edit')}>Edit</div>
      </div>
    </div>
  );
};

export default AdminPage;
