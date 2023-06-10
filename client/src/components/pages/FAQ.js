import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Answer to question 1...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Answer to question 2...
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Add more FAQ items as needed */}
    </Container>
  );
};

export default FAQ;
