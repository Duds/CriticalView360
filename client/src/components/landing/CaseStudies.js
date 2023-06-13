import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from "@mui/material";

const CaseStudies = ({ theme }) => {
  return (
    <section className="case-studies">
      <Box py={3}>
        <Container maxWidth="lg">
          <Box mb={3}>
            <Typography variant="h3" color="textPrimary">
              Success Stories
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Case Study 1"
                  height="140"
                  image="case_study1_image_placeholder.jpg"
                />
                <CardContent>
                  <Box mb={2}>
                    <Typography variant="h5" color="textPrimary">
                      Case Study 1
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" color="textSecondary">
                      Discover how our Critical Controls theory SaaS application
                      helped Company A revolutionize their risk management
                      process.
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
                <CardMedia
                  component="img"
                  alt="Case Study 2"
                  height="140"
                  image="case_study2_image_placeholder.jpg"
                />
                <CardContent>
                  <Box mb={2}>
                    <Typography variant="h5" color="textPrimary">
                      Case Study 2
                    </Typography>
                  </Box>
                  <Box mb={2}>
                    <Typography variant="body1" color="textSecondary">
                      Learn how Company B transformed their approach to risk
                      management using our application, achieving substantial
                      reductions in incidents.
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

export default CaseStudies;
