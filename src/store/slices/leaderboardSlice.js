import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchLeaderboardData = createAsyncThunk(
  "leaderboard/fetchLeaderboardData",
  async ({ accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/dynamic/content`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
);

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeaderboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLeaderboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { actions } = leaderboardSlice;
export default leaderboardSlice.reducer;
