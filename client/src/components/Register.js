import React, { useState } from 'react';
import { register } from '../firebase';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Avatar,
  CssBaseline,
} from '@mui/material';
import { AppRegistration } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';

const defaultTheme = createTheme();

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await register({ username, email, password })) {
      setMessage('Registration successful!');
      window.location.href = '/dashboard'; // Redirect to /dashboard
    } else {
      setMessage('Registration failed. Please try again.');
    }
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  name="username"
                  placeholder="Enter your display name here..."
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
                  <Button type="submit" variant="contained" fullWidth>
                    Register
                  </Button>
                </Grid>
              </Grid>
                {message && (
                  <Grid item xs={12}>
                    <Typography
                      color={message.includes('successful') ? green[500] : red[500]}
                      variant="body2"
                    >
                      {message}
                    </Typography>
                  </Grid>
                )}
            </Grid>
          </Box>
          <Grid item xs={12} md={6}>
            {/* Additional content for the right side, if needed */}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
