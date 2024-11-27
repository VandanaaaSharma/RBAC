import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated, setIsCreatingAccount, isCreatingAccount }) => {
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
      // Add account creation logic here
      // If successful:
      setMessageType('success');
      setMessage('Account successfully created!');
      // Navigate to login page after account creation
      setIsCreatingAccount(false);
    } else {
      // Login logic here
      // If successful:
      setIsAuthenticated(true);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login">
      <h1>{isCreatingAccount ? 'Create Account' : 'Login'}</h1>
      {message && <p className={`message ${messageType}`}>{message}</p>}
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
