import QuestionBox from "components/QuestionBox";
import React from "react";
import PostFeed from "components/PostFeed";
import { Box, Typography } from "@mui/material";
import PostSlider from "components/PostSlider";
import ActiceContest from "components/ActiceContest";

const Home = () => {
  const name = "Pawan";
  return (
    <Box pt={3} pb={12} margin="0 16px">
      <Typography variant="h1" textAlign={"left"}>
        Good Morning {name} !
      </Typography>
      <Typography variant="body1" pt={2}>
        Check out the live matches today
      </Typography>
      <Box marginTop="34px" marginBottom="34px">
        <ActiceContest />
      </Box>
      <QuestionBox />
      <PostFeed />
      <PostSlider />
    </Box>
  );
};

export default Home;
