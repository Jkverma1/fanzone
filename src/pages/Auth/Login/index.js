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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { PostLogin } from "store/slices/authorizationSlice";
import appLogo from "assets/images/logo.png";
import Styled from "../Styled";
import SocialButton from "components/SocialButton";

const Login = ({ accessToken }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(accessToken);
      const response = await dispatch(PostLogin(formData, accessToken));
      if (response.payload && response.payload.status_code === 200) {
        localStorage.setItem("userToken", response.payload.result.guid);
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error("Error during login");
    }
  };

  return (
    <div style={Styled.backgroundStyle}>
      <Container component="main" maxWidth="md">
        <Box pt={3} textAlign="center">
          <img src={appLogo} alt="Logo" style={Styled.logo} />
          <Typography style={Styled.typography}>
            Join the fan community...
          </Typography>
        </Box>
        <form onSubmit={handleLogin}>
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
          <Box mt={1} display={"block"} textAlign={"right"}>
            <Link
              component={RouterLink}
              color={"#E6C909"}
              to="/forget-password"
              variant="body2"
            >
              {"Forget Password?"}
            </Link>
          </Box>
          <Box mt={3} textAlign="center">
            <Button
              type="submit"
              fullWidth
              textAlign="center"
              color="secondary"
              sx={Styled.button}
              variant="contained"
            >
              Login
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
        <Box style={Styled.linkBox}>
          Don’t have an Account?
          <Link component={RouterLink} to="/sign-up">
            Create New Account
          </Link>
        </Box>
        <Box mt={2} pb={4} textAlign={"center"}>
          <Link
            component={RouterLink}
            color={"#E6C909"}
            to="/dashboard"
            variant="body2"
          >
            {"Skip"}
          </Link>
        </Box>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
