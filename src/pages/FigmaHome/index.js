import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HeaderBannerStyles } from "../../assets/css/questionStyles";
import FaniskoHeader from "../../components/FaniskoHeader";

const FigmaHome = () => {
  const classes = HeaderBannerStyles();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FaniskoHeader />
      <Box className={classes.banner}>
        <Container className={classes.bannerContainer}>
          <Typography
            variant="h3"
            fontSize={32}
            gutterBottom
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            fontSize={14}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Typography>
          <Box className={classes.bannerButtons}>
            <Button variant="contained" color="primaryButton">
              Lorem ipsum
            </Button>
            <Button variant="outlined" color="primaryButton">
              Lorem ipsum
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FigmaHome;
