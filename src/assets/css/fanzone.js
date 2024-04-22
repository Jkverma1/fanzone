import { makeStyles } from "@mui/styles";
import weeklyBoardBackground from "assets/images/weeklyBoardBackground.png";

export const fanzone = makeStyles((theme) => ({
  leaderboardStatus: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    borderRadius: "13px",
    padding: "33px 16px",
    alignItems: "center",
    backgroundSize: "100% 100%",
    backgroundImage: `url(${weeklyBoardBackground})`, // Updated line
  },
  activePlayers: {
    display: "flex",
    columnGap: "4px",
    borderRadius: "10px",
    background:
      "-webkit-linear-gradient(0deg,rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.25))",
    backgroundClip: "text",
    backdropFilter: "blur(12px)",
    padding: "8px",
  },
}));
