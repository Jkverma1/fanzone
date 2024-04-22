import { makeStyles } from "@mui/styles";

export const banner = makeStyles((theme) => ({
  bannerBox: {
    maxHeight: "100vh",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  BannerLogo: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    animation: "$zoomIn 2s forwards",
  },
  "@keyframes zoomIn": {
    "0%": { transform: "scale(0.1)" },
    "100%": { transform: "scale(1)" },
  },
}));
