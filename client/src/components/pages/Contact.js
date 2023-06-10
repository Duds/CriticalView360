import React from 'react';
import { Container, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" component="p" align="justify">
        Add your contact information and form here...
      </Typography>
    </Container>
  );
};

export default Contact;
