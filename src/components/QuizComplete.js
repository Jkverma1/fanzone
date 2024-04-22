import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import facebook from "assets/figma/socials/facebook.png";
import instagram from "assets/figma/socials/instagram.png";
import alpha from "assets/figma/socials/alpha.png";
import whatsapp from "assets/figma/socials/whatsapp.png";
import gmail from "assets/figma/socials/gmail.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HeaderBannerStyles } from "assets/css/questionStyles";
import { useNavigate, useParams } from "react-router-dom";
import FaniskoHeader from "./FaniskoHeader";
import QuizFooter from "./QuizFooter";

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

const QuizComplete = ({ correctAnswersCount, totalQuestions }) => {
  const { id } = useParams();
  const userId = "03dadab61f5b42be883027a8f86409dc",
    gameId = "65b1fd65bdf0d8efcc75a67b";
  const navigate = useNavigate();
  const handleLeaderboardClick = () => {
    navigate(`/leaderboard/${id}`);
  };

  const handleReviewResponsesClick = () => {
    navigate(`/reviewResponses/${userId}/${gameId}/${id}`);
  };

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
      <FaniskoHeader />
      <Box className={classes.QuizbannerContainer}>
        <Container className={classes.bannerContainer}>
          <Typography
            className={classes.QuizTitle}
            variant="h3"
            gutterBottom
            textAlign={"center"}
          >
            10 Out of 10
          </Typography>
          <Typography
            variant="h3"
            className={classes.QuizSubTitle}
            gutterBottom
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Typography>
          <Box className={classes.bannerButtons}>
            <Button
              variant="contained"
              color="primaryButton"
              onClick={handleLeaderboardClick}
            >
              Leaderboard
            </Button>

            <Button
              variant="contained"
              color="primaryButton"
              onClick={handleReviewResponsesClick}
            >
              Review Responses
            </Button>
          </Box>
        </Container>
        <Box className={classes.quizSocials}>
          <Typography
            variant="h3"
            fontSize={27}
            gutterBottom
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do eiusmod
          </Typography>
          <Typography
            variant="p"
            fontSize={18}
            gutterBottom
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Typography>
          <Typography
            variant="h6"
            fontSize={20}
            marginTop={2.5}
            gutterBottom
            style={{ color: "#FBAE18", fontWeight: 700 }}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet,
          </Typography>
          <Box style={{ alignItems: "center" }}>
            <img
              className={classes.socialIcons}
              src={facebook}
              alt="facebook"
            />
            <img
              className={classes.socialIcons}
              src={instagram}
              alt="instagram"
            />
            <img className={classes.socialIcons} src={alpha} alt="alpha" />
            <img
              className={classes.socialIcons}
              src={whatsapp}
              alt="whatsapp"
            />
            <img className={classes.socialIcons} src={gmail} alt="gmail" />
          </Box>
        </Box>
        <QuizFooter totalQuestions={totalQuestions} />
      </Box>
    </ThemeProvider>
  );
};

export default QuizComplete;
