import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#A60057",
    },
    secondary: {
      main: "#31BBD0",
    },
    appBg: {
      main: "#F0F6FF",
    },
    default: {
      main: "#000",
    },
    success: {
      main: "#5ED390",
    },
    info: {
      main: "#62BDFF",
    },
    warning: {
      main: "#FFB45F",
    },
    error: {
      main: "#FE7171",
    },
    primaryButton: {
      main: "#FBAE18",
    },
    star: { main: "#FBAE18" },
  },
  typography: {
    fontFamily: '"Mulish", "Helvetica", "Arial", sans-serif',
    color: "#333C43",
    h1: {
      fontSize: "32px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
});
