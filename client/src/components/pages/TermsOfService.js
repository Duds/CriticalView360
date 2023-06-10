import React from 'react';
import { Typography, Container } from '@mui/material';
import Header from '../common/Header';
import Footer from '../common/Footer';

const TermsOfService = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          Terms of Service
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Acceptance of Terms
        </Typography>
        <Typography variant="body1" component="p">
          By accessing or using the app, you agree to comply with and be bound by these terms and conditions.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          User Accounts
        </Typography>
        <Typography variant="body1" component="p">
          You must register an account to access certain features of the app.
          You are responsible for maintaining the confidentiality of your account credentials and for any activities or actions under your account.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Intellectual Property
        </Typography>
        <Typography variant="body1" component="p">
          The app and its content are protected by intellectual property rights.
          You may not copy, modify, distribute, or reproduce any part of the app without prior written permission.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          User Responsibilities
        </Typography>
        <Typography variant="body1" component="p">
          You are solely responsible for the information you enter into the app.
          You agree not to use the app for any unlawful or unauthorized purposes.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Disclaimer of Warranty
        </Typography>
        <Typography variant="body1" component="p">
          The app is provided on an "as is" basis without warranties of any kind, whether express or implied.
          We do not guarantee the accuracy, reliability, or availability of the app or its features.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" component="p">
          To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or relating to the app or these terms.
        </Typography>

        <Typography variant="h3" component="h3" gutterBottom>
          Indemnification
        </Typography>
        <Typography variant="body1" component="p">
          You agree to indemnify and hold us harmless.
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default TermsOfService;
