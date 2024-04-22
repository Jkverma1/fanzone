import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  TextField,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SocialButton from "components/SocialButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { FetchAuthToken, PostSignUp } from "store/slices/authorizationSlice";
import { ToastContainer, toast } from "react-toastify";
import appLogo from "assets/images/logo.png";
import "react-toastify/dist/ReactToastify.css";
import Styled from "../Styled";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(FetchAuthToken());
      const accessToken = unwrapResult(resultAction);
      const response = dispatch(PostSignUp({ formData, accessToken }));

      if (response.ok) {
        // Handle successful registration
        console.log("Registration successful");
        toast.success("Registration successful");
      } else {
        // Handle registration error
        console.error("Registration failed");
        toast.error("Registration failed");
      }
    } catch (error) {
      // Handle any errors during the registration process
      console.error("Error during registration:", error);
      toast.error("Error during registration");
    }
  };
  return (
    <div style={Styled.backgroundStyle}>
      <Container maxWidth="md">
        <Box pt={3} textAlign={"center"}>
          <img
            src={appLogo}
            alt="Logo"
            style={{ width: "100%", height: "auto", maxWidth: "180px" }}
          />
          <Typography component="p" variant="p" color={"white"}>
            Join the fan community and be a part of the Jamaica Tallawahs fan
            club, participate in games, show up on the leaderboard, and earn
            loyalty rewards.
          </Typography>
        </Box>
        <form onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="first_name"
            onChange={handleInputChange}
            autoComplete="name"
            autoFocus
            InputProps={{
              style: {
                color: "#fff",
                borderBottom: "1px solid #fff",
              },
              placeholder: "First Name",
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="last_name"
            onChange={handleInputChange}
            autoComplete="name"
            autoFocus
            InputProps={{
              style: {
                color: "#fff",
                borderBottom: "1px solid #fff",
              },
              placeholder: "Last Name",
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleInputChange}
            InputProps={{
              style: {
                color: "#fff",
                borderBottom: "1px solid #fff",
              },
              placeholder: "Email Address",
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            onChange={handleInputChange}
            InputProps={{
              style: {
                color: "#fff",
                borderBottom: "1px solid #fff",
              },
              placeholder: "Password",
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            onChange={handleInputChange}
            InputProps={{
              style: {
                color: "#fff",
                borderBottom: "1px solid #fff",
              },
              placeholder: "Confirm Password",
            }}
            InputLabelProps={{
              style: {
                color: "#fff",
              },
            }}
          />
          <Box mt={3} textAlign="center">
            <Button
              type="submit"
              fullWidth
              color="secondary"
              style={{
                maxWidth: "80%",
                height: "60px",
                color: "#fff",
                textTransform: "capitalize",
              }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
          <Typography
            component="p"
            variant="p"
            color={"white"}
            textAlign={"center"}
            mt={3}
          >
            Or
          </Typography>
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs="auto">
              <Box mt={3} width="fit-content">
                <SocialButton>
                  <GoogleIcon />
                </SocialButton>
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Box mt={3} width="fit-content">
                <SocialButton>
                  <FacebookIcon />
                </SocialButton>
              </Box>
            </Grid>
            <Grid item xs="auto">
              <Box mt={3} width="fit-content">
                <SocialButton>
                  <AppleIcon />
                </SocialButton>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Box mt={2} pb={4} textAlign={"center"} color={"white"}>
          Already have an account?
          <Link
            component={RouterLink}
            color={"#E6C909"}
            pl={1}
            to="/login"
            variant="body2"
          >
            {"Sign In"}
          </Link>
        </Box>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default SignUp;
