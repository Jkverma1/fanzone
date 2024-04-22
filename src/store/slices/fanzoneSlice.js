import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  reviewResponseData: [],
  error: null,
  participatedContests: [],
  leaderboardData: null,
};

export const fetchFanzoneData = createAsyncThunk(
  "fanzone/fetchFanzoneData",
  async ({ userId, accessToken }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_API_URL}/gamification/v3/user/${userId}`,
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
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

export const reviewResponse = createAsyncThunk(
  "fanzone/reviewResponse",
  async ({ gameId, userId, contestType, accessToken }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_API_URL}/gamification/v1/game/${gameId}/user/${userId}/${contestType}`,
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
      console.error("Error fetching review response data:", error);
      throw error;
    }
  }
);

export const participatedContests = createAsyncThunk(
  "fanzone/participatedContests",
  async ({ userId, contestType, accessToken }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_API_URL}/user_played_game_info/v3/user/${userId}/${contestType}`,
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
      console.error("Error fetching participated contests data:", error);
      throw error;
    }
  }
);

export const leaderboardApi = createAsyncThunk(
  "gamification/leaderboardApi",
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

const fanzoneSlice = createSlice({
  name: "fanzone",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cases for fetchData
      .addCase(fetchFanzoneData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFanzoneData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFanzoneData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Cases for reviewResponse
      .addCase(reviewResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reviewResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.reviewResponseData = action.payload;
      })
      .addCase(reviewResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Cases for participatedContests
      .addCase(participatedContests.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(participatedContests.fulfilled, (state, action) => {
        state.loading = false;
        state.participatedContests = action.payload;
      })
      .addCase(participatedContests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(leaderboardApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(leaderboardApi.fulfilled, (state, action) => {
        state.loading = false;
        state.leaderboardData = action.payload;
      })
      .addCase(leaderboardApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = fanzoneSlice;
export default fanzoneSlice.reducer;
