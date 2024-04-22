import React, { useState } from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  Link,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import appLogo from "assets/images/logo.png";
import Styled from "../Styled";

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleForgetPassword = (e) => {
    e.preventDefault();
    // Add your forget password logic here
  };

  return (
    <div style={Styled.backgroundStyle}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh" // Adjust this value as needed
      >
        <Container component="main" maxWidth="md">
          <Box mt={3} textAlign={"center"}>
            <img
              src={appLogo}
              alt="Logo"
              style={{ width: "100%", height: "auto", maxWidth: "180px" }}
            />
            <Typography component="h1" variant="h4" color="#fff" mb={3}>
              Forgot Password
            </Typography>
          </Box>
          <form onSubmit={handleForgetPassword}>
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
            <Box mt={3} textAlign="center">
              <Button
                type="submit"
                fullWidth
                textAlign="center"
                color="secondary"
                style={{
                  maxWidth: "80%",
                  height: "60px",
                  color: "#fff",
                  textTransform: "capitalize",
                }}
                variant="contained"
              >
                Send Reset Link
              </Button>
            </Box>
          </form>
          <Box mt={2} textAlign={"center"} color={"white"}>
            Remember your password?
            <Link
              component={RouterLink}
              pl={1}
              color={"#E6C909"}
              to="/login"
              variant="body2"
            >
              {"Sign In"}
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ForgetPassword;
