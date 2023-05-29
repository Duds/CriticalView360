import React, { useState } from 'react';
import { register } from '../firebase';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';

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
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1" align="center">
            Register
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Enter your display name here..."
              required
            />
            <TextField
              type="email"
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email here..."
              required
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password here..."
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
            {message && <Typography className="message">{message}</Typography>}
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Additional content for the right side, if needed */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
