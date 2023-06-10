// ./client/src/components/landing/Features.js

import React from 'react';
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Features = () => {
  return (
    <section id="features-section">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" color="textPrimary">
            Powerful Features at Your Fingertips
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Identify and categorize risks effectively with our intuitive platform." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Develop and assign mitigation steps to address identified risks." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Monitor the implementation of risk mitigation measures with progress tracking capabilities." />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Ensure compliance with industry standards and regulations for risk management." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Get robust reporting functionalities to demonstrate compliance and track risk management performance." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Facilitate collaboration among team members for comprehensive risk management." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </section>
  );
};

export default Features;
