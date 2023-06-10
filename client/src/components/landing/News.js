// ./client/src/components/landing/News.js

import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

const News = ({ newsArticles }) => {
  return (
    <section className="news-section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            Latest News
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                News Article 1
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Read about our latest product updates and how they're revolutionizing risk management.
              </Typography>
              <Button variant="outlined" color="primary">
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="textPrimary">
                News Article 2
              </Typography>
              <Typography variant="body1" color="textSecondary">
                See what industry experts are saying about our approach to risk management.
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

export default News;
