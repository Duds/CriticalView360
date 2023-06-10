import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero-section">
      <Container maxWidth="sm">
        <Typography variant="h1" component="h1">Welcome to CriticalView360</Typography>
        <Typography variant="body1" component="p">Discover the power of critical reviews and visualizations.</Typography>
        <Button component={Link} to="/register" variant="contained">Register Now</Button>
      </Container>
    </section>
  );
};

export default Hero;
