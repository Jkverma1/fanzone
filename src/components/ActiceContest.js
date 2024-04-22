import { activeContest } from "assets/css/activeContest";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import patnaPirates from "assets/images/Teams/logo/Patna Pirates.png";
import puneriPaltan from "assets/images/Teams/logo/Puneri Paltan TT.png";

const ActiceContest = () => {
  const classes = activeContest();
  return (
    <Box className={classes.activeContestBox}>
      <Typography>Live Match</Typography>
      <Typography>Sheraton Grand, Whitefield, Bengalur</Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        height={87}
        alignItems="center"
        pt={1}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Avatar src={patnaPirates} />
          <Typography variant="body2">Patna Pirates</Typography>
        </Box>
        <Box>
          <Typography
            variant="h1"
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <span>30</span>
            <span>-</span>
            <span>46</span>
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
          <Avatar src={puneriPaltan} />
          <Typography variant="body2">Puneri Paltan</Typography>
        </Box>
      </Box>
      <Typography>Match 23</Typography>
    </Box>
  );
};

export default ActiceContest;
