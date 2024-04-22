import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HowToPlay = () => {
  const { contestType } = useParams();
  const navigate = useNavigate();
  const data = {
    leaderboard:
      "https://webview.fanisko.com/yuva/leaderboard_v1.php?webview=true&team=Yuva_Kabaddi",
    leaderboard_old:
      "https://webview.fanisko.com/leaderboard.php?webview=true&team=Yuva_Kabaddi",
    pickem:
      "https://webview.fanisko.com/how-to-play/pickem.php?webview=true&team=Yuva_Kabaddi",
    predict_game:
      "https://webview.fanisko.com/how-to-play/predict_app.php?webview=true&team=Yuva_Kabaddi",
    referral_leaderboard:
      "https://webview.fanisko.com/coming_soon.php?webview=true",
    swipem:
      "https://webview.fanisko.com/how-to-play/swipeem.php?webview=true&team=Yuva_Kabaddi",
    trivia:
      "https://webview.fanisko.com/how-to-play/trivia_app.php?webview=true&team=Yuva_Kabaddi",
  };

  const urlToShow = data[contestType];

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "relative",
          left: 0,
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "10px 15px",
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Button
          style={{ color: "black", border: "1px solid black", marginRight: 10 }}
          onClick={() => navigate(`/instruction/${contestType}`)}
        >
          <ArrowBackIcon />
        </Button>
        <Typography>How to Play</Typography>
      </Box>
      <iframe
        src={urlToShow}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="How to Play"
        loading={"lazy"}
      ></iframe>
    </Box>
  );
};

export default HowToPlay;
