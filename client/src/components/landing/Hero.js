import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";


const Hero = ({ theme }) => {
  const headerRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const headerHeight = headerRef.current
      ? headerRef.current.getBoundingClientRect().height
      : 0;
    const viewportHeight = window.innerHeight;
    const heroHeightAdjusted = viewportHeight - headerHeight;
    setHeroHeight(heroHeightAdjusted + "px");
  }, []);

  return (
    <section
      id="hero-section"
      style={{ height: heroHeight, display: "flex", alignItems: "center" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box mb={2}>
              {/* this adds a margin-bottom */}
              <Typography variant="h2" color="textPrimary">
                Revolutionize Your Risk Management
              </Typography>
            </Box>
            <Box mb={2}>
              {/* this adds a margin-bottom */}
              <Typography variant="body1" color="textSecondary">
                With CriticalView360, we provide a comprehensive solution for
                critical control planning in high-risk industries. Experience a
                new era of risk management today.
              </Typography>
            </Box>
            <Box mt={2}>
              {/* this adds a margin-top */}
              <Button variant="contained" color="primary" size="large">
                Register
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ marginLeft: "10px" }}
              >
                Learn more
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="hero_image_placeholder.jpg" alt="Hero" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
