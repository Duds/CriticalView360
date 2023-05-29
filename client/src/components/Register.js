// Register.js

import { register } from '../firebase';
import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register({ username, email, password });
    if (success) {
      setMessage('Registration successful!');
    } else {
      setMessage('Registration failed. Please try again.');
    }
  };  

  return (
    <div className="register-container">
      <div className="left">
        <div className="header">
          <img className="logo" src="./logo.png" alt="Logo" />
        </div>
        <div className="form">
          <h3>Name</h3>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username" // Add the name attribute
            placeholder="Enter your display name here..."
            required
          />


          <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email here..."
              required
            />
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password here..."
              required
            />
            <button type="submit">Register</button>
            {message && <p className="message">{message}</p>}
          </form>
        </div>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2023 CriticaView360. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Register;
