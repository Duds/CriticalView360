import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../firebase';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    const success = await login({ email, password });
    setMessage(
      success ? 'Login successful!' : 'Login failed. Please try again.'
    );

    if (success) {
      navigate('/dashboard');
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
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              fullWidth
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            {message && <Typography>{message}</Typography>}
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Additional content for the right side, if needed */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
