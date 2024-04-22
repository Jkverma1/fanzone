import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import triviaBackground from "assets/images/triviaBackground.png";
import predictGameBackground from "assets/images/PredictGameBackground.png";
import { fanzone } from "assets/css/fanzone";

// StyledCard component

const StatusChip = styled(Chip)(({ theme }) => ({
  color: "white",
  backgroundClip: "border-box",
  borderRadius: "5px",
  backdropFilter: "blur(12px)",
}));

const GameCard = ({ data = {}, CardType }) => {
  const classes = fanzone();
  const StyledCard = styled(Card)({
    marginTop: 20,
    backgroundImage: `url(${
      CardType === "trivia" ? triviaBackground : predictGameBackground
    })`,
    backgroundSize: "100% 100%",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    MaxHeight: 263,
    mb: 2,
    borderRadius: "16px",
  });
  const {
    meta = { no_of_questions: [{}, {}] },
    title = "",
    participants = [],
    schedule_time = "",
    participant_images = [],
  } = data;

  return (
    <Box>
      <StyledCard>
        <CardContent>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box className={classes.activePlayers}>
              <Typography
                variant="h1"
                fontWeight="400"
                fontFamily="League Gothic"
                fontStyle="italic"
                color="#fff"
                pr={1}
                noWrap
              >
                {CardType === "trivia" ? "THE ANSWER IS" : ""}
                {CardType === "predictGame" ? "PREDICT YOUR GAME" : ""}
              </Typography>
            </Box>
            {meta?.no_of_questions > 0 ? (
              <StatusChip
                variant="filled"
                size="small"
                label={meta.answered_status === 1 ? "Questions Locked" : "Live"}
              />
            ) : (
              []
            )}
          </Box>
          <Box mt={8}>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              sx={{ color: "white" }}
              fontWeight="bold"
            >
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              sx={{ color: "white" }}
            >
              {meta?.no_of_questions > 0
                ? meta.answered_status === 1
                  ? "Contest is closed. Please check the leaderboard."
                  : "Game is live now. Put your predictions in!"
                : ""}
            </Typography>
          </Box>
          <Box className={classes.activePlayers}>
            <AvatarGroup style={{ flexDirection: "row" }} max={3}>
              {participant_images.slice(0, 3).map((avatar, index) => (
                <Avatar
                  style={{
                    width: 20,
                    height: 20,
                  }}
                  key={index}
                  alt={`Participant ${index + 1}`}
                  src={avatar}
                />
              ))}
              {participants.length > 3 && <Box>`${participants - 3}`</Box>}
            </AvatarGroup>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              {schedule_time}
            </Typography>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default GameCard;
