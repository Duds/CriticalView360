// ./client/src/components/pages/Contact.js

import React from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

const ContactForm = () => {
  return (
    <section id="contact-form-section">
      <Typography variant="h3" color="textPrimary">
        Get In Touch
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Your Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
};

export default ContactForm;
