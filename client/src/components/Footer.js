import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img src="/logo.png" alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <nav>
              <ul>
                {/* Add your footer links here */}
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              © 2023 CriticalView360. All rights reserved.
            </Typography>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
