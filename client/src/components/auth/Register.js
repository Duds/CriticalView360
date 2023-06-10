import React, { useState } from 'react';
import { register } from '../../firebase';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Avatar,
  CssBaseline,
  Snackbar,
  Link,
} from '@mui/material';
import { Alert } from '@mui/material';
import { AppRegistration } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage('Please fill in all fields.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      const success = await register({ name, email, password });

      if (success) {
        setMessage('Registration successful!');
        setMessageType('success');
        // Redirect or perform any necessary action
      } else {
        setMessage('Registration failed. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      setMessageType('error');
    }

    setLoading(false);
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
            <AppRegistration />
          </Avatar>
          <Typography variant="h5" component="h1" align="center">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  placeholder="Enter your name here..."
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email here..."
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password here..."
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Button type="submit" variant="contained" fullWidth disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
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
                <Grid container justifyContent="center">
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
