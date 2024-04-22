import React from "react";
import { Box, Typography } from "@mui/material";
import VideoPostFeed from "components/VideoPostFeed";

const Video = () => {
  return (
    <Box pt={3} pb={12} margin="0 16px">
      <Typography variant="h1" textAlign={"left"}>
        Latest Happening videos Curated for you
      </Typography>
      <Typography variant="body1" pt={2} marginBottom="34px">
        Check out the live matches today
      </Typography>
      <VideoPostFeed />
    </Box>
  );
};

export default Video;
