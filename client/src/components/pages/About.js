import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" component="p" align="justify">
        Add your about content here...
      </Typography>
    </Container>
  );
};

export default About;
