// ./client/src/components/landing/CaseStudies.js

import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const CaseStudies = ({ caseStudies }) => {
  return (
    <section className="case-studies">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            Success Stories
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Case Study 1"
              height="140"
              image="case_study1_image_placeholder.jpg"
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                Case Study 1
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Discover how our Critical Controls theory SaaS application helped Company A revolutionize their risk management process.
              </Typography>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              alt="Case Study 2"
              height="140"
              image="case_study2_image_placeholder.jpg"
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                Case Study 2
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Learn how Company B transformed their approach to risk management using our application, achieving substantial reductions in incidents.
              </Typography>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default CaseStudies;
