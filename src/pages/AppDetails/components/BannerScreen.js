import React from "react";
import { Box } from "@mui/material";
import Styled from "../Styled";
import appLogo from "assets/images/logo.png";
import faniskoLogo from "assets/images/faniskoLogo.png";
import { banner } from "assets/css/banner";

const BannerScreen = () => {
  const classes = banner();
  return (
    <Box className={classes.bannerBox} style={Styled.backgroundStyle}>
      <img
        className={classes.BannerLogo}
        src={appLogo}
        alt="Logo"
        style={{ width: "100%", height: "auto", maxWidth: "240px" }}
      />
      <Box flex={1} />
      <img
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "120px",
          marginBottom: "50px",
        }}
        src={faniskoLogo}
        alt="Logo"
      />
    </Box>
  );
};

export default BannerScreen;
