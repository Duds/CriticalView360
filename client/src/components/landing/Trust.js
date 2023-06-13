// ./client/src/components/landing/Trust.js

import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Trust = () => {
  const theme = useTheme();
  
  return (
    <section id="trust-section">
    <Box py={3}>
    <Container maxWidth="lg">
      <Box mb={3}>
        <Typography variant="h3" color="textPrimary" sx={theme.headingStyles.h3}>
          Trusted By Many
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="body1" color="textSecondary">
              Our Risk Management SaaS solution is trusted by a variety of companies, from startups to Fortune 500 corporations. We're proud to have been part of their journey towards effective risk management.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
    </section>
  );
};

export default Trust;
