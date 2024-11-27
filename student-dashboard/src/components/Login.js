import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setIsAuthenticated, setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isCreatingAccount) {
      // Create account logic (just simulate here)
      setIsCreatingAccount(false);
      alert('Account created successfully!');
      // Optionally, you could navigate to login after account creation
    } else {
      if (email === 'admin@example.com' && password === 'admin123') {
        setIsAuthenticated(true);
        setUserRole('admin');
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else if (email === 'user@example.com' && password === 'user123') {
        setIsAuthenticated(true);
        setUserRole('user');
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        alert('Invalid login credentials');
      }
    }
  };

  return (
    <div className="login-page">
      <h2>{isCreatingAccount ? 'Create Account' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
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
