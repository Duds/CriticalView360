import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Import the hero images
import hero0 from "../../assets/hero0.png";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";
import hero5 from "../../assets/hero5.png";
import hero6 from "../../assets/hero6.png";
import hero7 from "../../assets/hero7.png";
import hero8 from "../../assets/hero8.png";
import hero9 from "../../assets/hero9.png";
import hero10 from "../../assets/hero10.png";
import hero11 from "../../assets/hero11.png";
import hero12 from "../../assets/hero12.png";
import hero13 from "../../assets/hero13.png";
import hero14 from "../../assets/hero14.png";
import hero15 from "../../assets/hero15.png";
import hero16 from "../../assets/hero16.png";
import hero17 from "../../assets/hero17.png";
import hero18 from "../../assets/hero18.png";
import hero19 from "../../assets/hero19.png";
import hero20 from "../../assets/hero20.png";
import hero21 from "../../assets/hero21.png";

const Hero = () => {
  const headerRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const [randomImage, setRandomImage] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const headerHeight = headerRef.current
      ? headerRef.current.getBoundingClientRect().height
      : 0;
    const viewportHeight = window.innerHeight;
    const heroHeightAdjusted = viewportHeight - headerHeight;
    setHeroHeight(heroHeightAdjusted + "px");

    // Load a random hero image
    const images = [
      hero0,
      hero1,
      hero2,
      hero3,
      hero4,
      hero5,
      hero6,
      hero7,
      hero8,
      hero9,
      hero10,
      hero11,
      hero12,
      hero13,
      hero14,
      hero15,
      hero16,
      hero17,
      hero18,
      hero19,
      hero20,
      hero21,
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setRandomImage(randomImage);
  }, []);

  return (
    <section
      id="hero-section"
      style={{ height: heroHeight, display: "flex", alignItems: "center" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Box mb={2}>
              <Typography
                variant="h2"
                color="textPrimary"
                component="h1"
                sx={{
                  ...theme.typography.clampText,
                  maxWidth: "100%",
                }}
              >
                Unleash{" "}
                <span className="hilight-wrapper">
                  <span className="hilight-text">CriticalView360</span>
                </span>{" "}
                for AI Risk Management
              </Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="body1" color="textSecondary">
                With CriticalView360, we provide a comprehensive solution for
                critical control planning in high-risk industries. Experience a
                new era of risk management today.
              </Typography>
            </Box>
            <Box mt={2}>
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
          <Grid item xs={12} md={7}>
            {randomImage && (
              <img
                src={randomImage}
                alt="Hero"
                className="hero-image"
                style={{ maxWidth: "100%" }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
