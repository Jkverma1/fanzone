import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import euronicsLogo from "assets/figma/euronics.png";
import sharafLogo from "assets/figma/sharaf.png";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HeaderBannerStyles } from "assets/css/questionStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B4949",
    },
    primaryButton: {
      main: "#FBAE18",
    },
    star: { main: "#FBAE18" },
  },
});

const FaniskoHeader = () => {
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
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        className={scrolled ? classes.headerScrolled : classes.header}
      >
        <Toolbar className={classes.Navbar}>
          <Box>
            <img className={classes.sharafLogo} src={sharafLogo} alt="Logo 2" />
            <img
              className={classes.euronicsLogo}
              src={euronicsLogo}
              alt="Logo 1"
            />
          </Box>
          <Box className={classes.buttons}>
            <Button color="primary">Leaderboard</Button>
            <Button color="primary">Loyalty Points</Button>
            <Button color="primary">
              0 <StarIcon color="star" />{" "}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default FaniskoHeader;
