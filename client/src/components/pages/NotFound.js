import React from 'react';
import { Typography, Container } from '@mui/material';
import Header from '../common/Header';
import Footer from '../common/Footer';

const NotFound = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          404 - Not Found
        </Typography>
        <Typography variant="body1" align="center">
          The page you're looking for does not exist.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFound;
