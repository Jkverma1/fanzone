import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: null,
  authToken: null,
};

export const FetchAuthToken = createAsyncThunk(
  "authorization/fetchAuthToken",
  async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/auth`,
        {
          api_key: process.env.REACT_APP_DEV_API_KEY,
          secret_key: process.env.REACT_APP_DEV_SECRET_KEY,
        }
      );
      return response.data.access_token;
    } catch (error) {
      throw error;
    }
  }
);

export const PostLogin = createAsyncThunk(
  "authorization/login",
  async ({ formData, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        console.error("Response error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  }
);

export const PostSignUp = createAsyncThunk(
  "authorization/signUp",
  async ({ formData, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response error status:", error.response.status);
        console.error("Response error headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  }
);
const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAuthToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchAuthToken.fulfilled, (state, action) => {
        state.loading = false;
        state.authToken = action.payload;
      })
      .addCase(FetchAuthToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(PostLogin.pending, PostSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(PostLogin.fulfilled, PostSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(PostLogin.rejected, PostSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authorizationSlice.reducer;
