import { useNavigate } from 'react-router-dom';
import { login } from '../firebase';
import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // Call useNavigate here

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const success = await login({ email, password });
    setMessage(success ? 'Login successful!' : 'Login failed. Please try again.');
  
    if (success) {
      navigate('/dashboard'); // Use navigate here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Login;
