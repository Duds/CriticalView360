// ./client/src/components/landing/News.js

import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const News = ({ newsArticles }) => {
  return (
    <section className="news-section">
    <Box py={3}>
    <Container maxWidth="lg">
      <Box mb={3}>
        <Typography variant="h3" color="textPrimary">
          Latest News
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box mb={2}>
                <Typography variant="h5" color="textPrimary">
                  News Article 1
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1" color="textSecondary">
                  Read about our latest product updates and how they're revolutionizing risk management.
                </Typography>
              </Box>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box mb={2}>
                <Typography variant="h5" color="textPrimary">
                  News Article 2
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1" color="textSecondary">
                  See what industry experts are saying about our approach to risk management.
                </Typography>
              </Box>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </Box>
    </section>
  );
};

export default News;
