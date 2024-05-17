import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Loginpage.css";
const LoginPage = () => {
  const history = useNavigate();

  // State to store input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are correct
    if (username === 'admin' && password === 'admin123') {
      setLoginMessage('Successfully logged in as Admin');
      window.alert('Successfully logged in as Admin'); // Show alert
    } else if (username === 'doctor' && password === 'doctor123') {
      setLoginMessage('Successfully logged in as Doctor');
      window.alert('Successfully logged in as Doctor'); // Show alert
    } else if (username === 'patient' && password === 'patient123') {
      setLoginMessage('Successfully logged in as Patient');
      window.alert('Successfully logged in as Patient'); // Show alert
    } else {
      setLoginMessage('Invalid credentials');
    }
  };

  // Function to handle registration button click
  const handleRegister = () => {
    history.push('/register'); // Redirect to register page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit">Login</button>
        <button type="button" className="btn btn-secondary" onClick={handleRegister}>Register</button>
        {loginMessage && <div className="alert alert-success mt-3">{loginMessage}</div>}
      </form>
    </div>
  );
};

export default LoginPage;