// ./client/src/components/landing/Benefits.js

import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Benefits = () => {
  return (
    <section id="benefits-section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            Transform the Way You Manage Risk
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Simplify Risk Management"
              height="140"
              image="benefit1_image_placeholder.jpg"
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                Simplify Risk Management
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our user-friendly interface lets you identify and categorize risks effortlessly, making safety more attainable than ever.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Enhance Compliance"
              height="140"
              image="benefit2_image_placeholder.jpg"
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                Enhance Compliance
              </Typography>
              <Typography variant="body1" color="textSecondary">
                With our robust reporting functionalities, you can easily track your risk management performance and demonstrate compliance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              alt="Improve Collaboration"
              height="140"
              image="benefit3_image_placeholder.jpg"
            />
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                Improve Collaboration
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our application promotes team collaboration, enabling you to work together effectively for comprehensive risk management.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
