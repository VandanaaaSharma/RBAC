import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = ({ setIsAuthenticated, setIsCreatingAccount, isCreatingAccount, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreatingAccount) {
      if (password !== confirmPassword) {
        setMessageType('error');
        setMessage('Passwords do not match');
        return;
      }
      setMessageType('success');
      setMessage('Account successfully created!');
      setIsCreatingAccount(false);
    } else {
      // Simulate login based on user role
      setIsAuthenticated(true);
      setUserRole('Admin'); // or 'Department'/'Student' based on your logic
      navigate('/dashboard');
    }
  };

  return (
    <div className="login">
      <h1>{isCreatingAccount ? 'Create Account' : 'Login'}</h1>
      {message && <p className={messageType}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isCreatingAccount && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <button type="submit">{isCreatingAccount ? 'Create Account' : 'Login'}</button>
      </form>
      {!isCreatingAccount ? (
        <p>
          Don't have an account?{' '}
          <button onClick={() => setIsCreatingAccount(true)}>Create Account</button>
        </p>
      ) : (
        <p>
          <button onClick={() => setIsCreatingAccount(false)}>Back to Login</button>
        </p>
      )}
    </div>
  );
};

export default Login;
