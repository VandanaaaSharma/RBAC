import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/UserPage.css";

const UserPage = ({ userRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole !== "Student") {
      navigate('/login'); // Redirect to login if not Student
    }
  }, [userRole, navigate]);

  return (
    <div className="user-page">
      <div className="logout-btn-box">
        <button className="logout-btn" onClick={() => navigate('/login')}>Logout</button>
      </div>
      <div className="action-boxes">
        <div className="action-box" onClick={() => console.log('View')}>View</div>
        <div className="action-box" onClick={() => console.log('Add')}>Add</div>
        <div className="action-box" onClick={() => console.log('Delete')}>Delete</div>
      </div>
    </div>
  );
};

export default UserPage;
