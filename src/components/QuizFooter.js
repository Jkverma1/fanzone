import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { HeaderBannerStyles } from "assets/css/questionStyles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const theme = createTheme({
  palette: {
    primaryButton: {
      main: "#FBAE18",
    },
  },
});

const QuizFooter = ({ totalQuestions, CurrentIndex = totalQuestions + 1 }) => {
  const circles = [];
  const classes = HeaderBannerStyles();
  for (let i = 0; i <= totalQuestions; i++) {
    if (CurrentIndex > i)
      circles.push(
        <CircleIcon style={{ fontSize: 10 }} color="primaryButton" />
      );
    else circles.push(<CircleIcon style={{ fontSize: 10 }} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.pagination}>
        <Box style={{ display: "flex", alignItems: "center", columnGap: 10 }}>
          <KeyboardBackspaceIcon />
          <Typography fontSize={18}>Previous page</Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: 10,
            marginTop: "5px",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontSize={18}
              gutterBottom
              style={{ color: "#FBAE18", fontWeight: 700 }}
            >
              {CurrentIndex ? CurrentIndex : totalQuestions + 1} of{" "}
              {totalQuestions + 1}
            </Typography>
          </Box>
          <Box marginBottom={0.5}>{circles}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default QuizFooter;
