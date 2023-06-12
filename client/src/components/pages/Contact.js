// ./client/src/components/pages/Contact.js

import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

const ContactForm = () => {
  return (
    <section id="contact-form-section">
    <Box py={3}>
    <Container maxWidth="lg">
      <Box mb={3}>
        <Typography variant="h3" color="textPrimary">
          Get In Touch
        </Typography>
      </Box>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Your Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
    </Box>
    </section>
  );
};

export default ContactForm;
