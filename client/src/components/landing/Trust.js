// ./client/src/components/landing/Trust.js

import React from 'react';
import { Typography, Grid } from '@mui/material';

const Trust = () => {
  return (
    <section id="trust-section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            Trusted By Many
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary">
            Our Risk Management SaaS solution is trusted by a variety of companies, from startups to Fortune 500 corporations. We're proud to have been part of their journey towards effective risk management.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Trust;
