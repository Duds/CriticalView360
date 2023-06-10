import React, { useState } from 'react';
import { resetPassword } from '../../firebase';
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
import LockResetIcon from '@mui/icons-material/LockReset';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme();

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      await resetPassword(email);
      setMessage('Password reset email sent!');
      setMessageType('success');
    } catch (error) {
      setMessage('Failed to send password reset email. Please try again.');
      setMessageType('error');
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
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
            <LockResetIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
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
                  value={email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Button type="submit" variant="contained" fullWidth disabled={loading}>
                    {loading ? 'Loading...' : 'Reset Password'}
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
                    <Link href="/login" variant="body2">
                      Return to Login
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

export default PasswordReset;
