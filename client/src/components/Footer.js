import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid, Box } from '@mui/material';
import Logo from './Logo';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={4}>
            <nav>
              <ul>
                <li>
                  <Link to="/about" color="inherit">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" color="inherit">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" color="inherit">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="body2">
                  © {new Date().getFullYear()} CriticalView360. All rights reserved.
                </Typography>
              </Grid>
              <Grid item>
                <Link to="/privacy-policy" color="inherit">
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>
                <Link to="/terms-of-service" color="inherit">
                  Terms of Service
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
