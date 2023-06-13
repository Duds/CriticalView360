// ./client/src/components/landing/Benefits.js

import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Benefits = () => {
  const theme = useTheme();
  
  return (
    <section id="benefits-section">
    <Box py={3}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box mb={2}>
              <Typography variant="h3" color="textPrimary" sx={theme.headingStyles.h3}>
                Transform the Way You Manage Risk
              </Typography>
            </Box>
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
                <Box mb={1}>
                  <Typography variant="h5" color="textPrimary" sx={theme.headingStyles.h5}>
                    Simplify Risk Management
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="body1" color="textSecondary">
                    Our user-friendly interface lets you identify and categorize risks effortlessly, making safety more attainable than ever.
                  </Typography>
                </Box>
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
                <Box mb={1}>
                  <Typography variant="h5" color="textPrimary" sx={theme.headingStyles.h5}>
                    Enhance Compliance
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="body1" color="textSecondary">
                    With our robust reporting functionalities, you can easily track your risk management performance and demonstrate compliance.
                  </Typography>
                </Box>
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
                <Box mb={1}>
                  <Typography variant="h5" color="textPrimary" sx={theme.headingStyles.h}>
                    Improve Collaboration
                  </Typography>
                </Box>
                <Box mb={2}>
                  <Typography variant="body1" color="textSecondary">
                    Our application promotes team collaboration, enabling you to work together effectively for comprehensive risk management.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      </Box>
    </section>
  );
};

export default Benefits;
