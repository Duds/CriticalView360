import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../firebase';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Avatar,
  Link,
  Snackbar,
} from '@mui/material';
import { Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme();

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      setMessage('Please enter your email and password.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      const success = await login({ email, password });
      if (success) {
        setMessage('Login successful!');
        setMessageType('success');
        navigate('/dashboard'); // Replace with the desired page
      } else {
        setMessage('Login failed. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      setMessageType('error');
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setMessage('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Button type="submit" variant="contained" fullWidth disabled={loading}>
                    {loading ? 'Loading...' : 'Sign In'}
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Snackbar open={Boolean(message)} autoHideDuration={5000} onClose={handleCloseSnackbar}>
                  <Alert onClose={handleCloseSnackbar} severity={messageType}>
                    {message}
                  </Alert>
                </Snackbar>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Grid container spacing={1}>
                  <Grid item xs>
                    <Link href="/reset-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
