import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes"; 
import "App.css";
import axios from "axios";
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import { useDispatch } from "react-redux";
import { FetchAuthToken } from "store/slices/authorizationSlice"; 
import { unwrapResult } from "@reduxjs/toolkit";
import GoogleFontLoader from "react-google-font-loader";
import { theme } from "theme"; 

const App = () => {
  const [tokenVerified, setTokenVerified] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [isFetchingAccessToken, setIsFetchingAccessToken] = useState(true); 
  const dispatch = useDispatch();
  useEffect(() => {
    const verifyLoginToken = async () => {
      const storedToken = localStorage.getItem("loginToken");
      if (storedToken) {
        try {
          await axios.post(`${process.env.REACT_APP_DEV_API_URL}/verifyToken`, {
            token: storedToken,
          });
        } catch (error) {
          localStorage.removeItem("loginToken");
        }
      }
      setTokenVerified(true);
    };

    verifyLoginToken();
  }, []);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const resultAction = await dispatch(FetchAuthToken());
        const newAccessToken = unwrapResult(resultAction);
        setAccessToken(newAccessToken);
      } catch (error) {
        console.error("Failed to fetch access token:", error);
      } finally {
        setIsFetchingAccessToken(false);
      }
    };

    fetchAccessToken();
  }, [dispatch]);

  if (!tokenVerified || isFetchingAccessToken) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GoogleFontLoader
        fonts={[
          { font: "Mulish", weights: [400, 500, 600, 700] },
          { font: "League Gothic", weights: [400, 500, 600, 700] },
          { font: "Montserrat", weights: [400, 500, 600, 700] },
        ]}
      />
      <Router>
        <div className="App">
          <AppRoutes accessToken={accessToken} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
