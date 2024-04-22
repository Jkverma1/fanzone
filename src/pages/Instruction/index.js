import React, { useEffect } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams, useNavigate } from "react-router-dom";
import localImage from "assets/images/triviaBackground.jpg";
import { useSelector } from "react-redux";
import RestoreIcon from "@mui/icons-material/Restore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "50vh",
  marginBottom: "20px",
  overflow: "hidden",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  display: "block",
});

const buttonStyle = {
  margin: "10px 0",
  display: "block",
  width: "100%",
};

const linkStyle = {
  margin: "10px 0",
  display: "block",
  cursor: "pointer",
};

const Instruction = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const fanzoneData = useSelector(
    (state) => state?.gamification.gamificationData?.result[id] || []
  );
  console.log(fanzoneData);
  const { answered_status: AnsweredStatus, list_questions = [] } =
    fanzoneData?.meta || {};
  const userId =
    localStorage.getItem("userId") || "2d9f733ca50e40cd837c64d61c95de0e";

  useEffect(() => {
    if (AnsweredStatus === null) {
      Navigate("/dashboard", { replace: true });
    }
  }, [AnsweredStatus, Navigate]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Invite to Participate",
          text: "Join me in this exciting contest!",
          url: process.env.REACT_APP_DEV_API_URL || "http://defaulturl.com",
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };

  const playNowMessage =
    fanzoneData?.meta?.app_messages?.PLAY_NOW || "Play now";

  return (
    <Box>
      <ImageContainer>
        <Box style={{ position: "relative", width: "100%" }}>
          <Box
            style={{
              position: "absolute",
              top: 10,
              left: 0,
              color: "white",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              style={{ color: "white" }}
              onClick={() => Navigate("/dashboard")}
              aria-label="Go back"
            >
              <ArrowBackIcon />
            </Button>
            <Typography>{id}</Typography>
          </Box>
          <Button
            style={{ position: "absolute", top: 10, right: 0, color: "white" }}
            onClick={() => Navigate(`/participatedContests/${userId}/${id}`)}
            aria-label="View participated contests"
          >
            <RestoreIcon />
          </Button>
        </Box>
        <StyledImage
          src={localImage}
          alt={`Trivia Background for Quiz: ${id}`}
        />
      </ImageContainer>
      <Box style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h4">{id}</Typography>
        <Typography variant="body1" style={{ marginY: "20px" }}>
          {playNowMessage}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          style={buttonStyle}
          onClick={handleShare}
          aria-label="Invite friends"
        >
          Invite Friends
        </Button>
        {/* {AnsweredStatus === 1 || list_questions.length === 0 ? (
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            onClick={() => Navigate(`/leaderboard/${id}`)}
            aria-label="Leaderboard"
          >
            Leaderboard
          </Button>
        ) : ( */}
        <>
          {(id === "trivia" || id === "predict_game") && (
            <Button
              variant="contained"
              color="primary"
              style={buttonStyle}
              onClick={() => Navigate(`/quiz/${id}`)}
              aria-label="Play now"
            >
              Play Now
            </Button>
          )}
          {(id === "swipe_em" || id === "pick_em") && (
            <Button
              variant="contained"
              color="primary"
              style={buttonStyle}
              onClick={() =>
                Navigate(id === "swipe_em" ? "/swipeCards" : "/pickCards")
              }
              aria-label="Play now"
            >
              Play Now
            </Button>
          )}
        </>
        {/* )} */}

        <Link
          underline="hover"
          style={linkStyle}
          onClick={() => Navigate(`/guide/${id}`)}
          aria-label="How to play"
        >
          How to Play
        </Link>
      </Box>
    </Box>
  );
};

export default Instruction;
