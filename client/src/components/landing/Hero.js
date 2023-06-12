// ./client/src/components/landing/Hero.js

import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

const Hero = () => {
  return (
    <section id="hero-section">
    <Box py={3}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box mb={2}> {/* this adds a margin-bottom */}
              <Typography variant="h2" color="textPrimary">
                Revolutionize Your Risk Management
              </Typography>
            </Box>
            <Box mb={2}> {/* this adds a margin-bottom */}
              <Typography variant="body1" color="textSecondary">
                With With CriticalView360, we provide a comprehensive solution for critical control planning in high-risk industries. Experience a new era of risk management today.
              </Typography>
            </Box>
            <Box mt={2}> {/* this adds a margin-top */}
              <Button variant="contained" color="primary">
                Start Your Free Trial
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="hero_image_placeholder.jpg" alt="Hero" />
          </Grid>
        </Grid>
      </Container>
      </Box>
    </section>
  );
};

export default Hero;
