// ./client/src/components/landing/Hero.js

import React from 'react';
import { Typography, Button, Grid } from '@mui/material';

const Hero = () => {
  return (
    <section id="hero-section">
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" color="textPrimary">
            Revolutionize Your Risk Management
          </Typography>
          <Typography variant="body1" color="textSecondary">
            With our Critical Controls theory SaaS application, we provide a comprehensive solution for critical control planning in high-risk industries. Experience a new era of risk management today.
          </Typography>
          <Button variant="contained" color="primary">
            Start Your Free Trial
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="hero_image_placeholder.jpg" alt="Hero" />
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
