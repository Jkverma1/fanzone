import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  fanzoneData: null,
  gamificationData: null,
  miniGamesData: null,
  reviewResponseData: null,
  surveyData: null,
  pollData: null,
  contextualData: null,
  preGameData: null,
  pickData: null,
  swipeData: null,
  triviaData: null,
  participatedContestsData: null,
  leaderboardData: null,
  homeScreenData: null,
  howToPlayData: null,
  loading: false,
  error: null,
};

export const fanzoneApi = createAsyncThunk(
  "gamification/fanzoneApi",
  async ({ userId, accessToken }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_API_URL}/fan-zone/user/${userId}`,
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

export const gamificationApi = createAsyncThunk(
  "gamification/gamificationApi",
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

export const miniGamesApi = createAsyncThunk(
  "gamification/miniGamesApi",
  async ({ userId, accessToken }) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_API_URL}/mini-games/${userId}`,
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

export const reviewResponseApi = createAsyncThunk(
  "gamification/reviewResponse",
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

export const surveyApi = createAsyncThunk(
  "gamification/surveyApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/survey/${userId}/${gameId}`,
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

export const pollApi = createAsyncThunk(
  "gamification/pollApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/poll/${userId}/${gameId}`,
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

export const contextualApi = createAsyncThunk(
  "gamification/contextualApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/contextual/${userId}/${gameId}`,
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

export const preGameApi = createAsyncThunk(
  "gamification/preGameApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/pre_game/${userId}/${gameId}`,
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

export const pickApi = createAsyncThunk(
  "gamification/pickApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/pick/${userId}/${gameId}`,
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

export const swipeApi = createAsyncThunk(
  "gamification/swipeApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/swipe/${userId}/${gameId}`,
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

export const triviaApi = createAsyncThunk(
  "gamification/triviaApi",
  async ({ gameId, userId, accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v1/trivia/${userId}/${gameId}`,
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

export const participatedContestsApi = createAsyncThunk(
  "gamification/participatedContestsApi",
  async ({ contestType, userId, accessToken }) => {
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
      console.error("Error fetching review response data:", error);
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

export const homeScreenApi = createAsyncThunk(
  "gamification/homeScreenApi",
  async ({ accessToken }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_DEV_API_URL}/v2/dynamic/content`,
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

export const howToPlayApi = createAsyncThunk(
  "gamification/howToPlayApi",
  async ({ accessToken, contestType }) => {
    try {
      const response = await axios.post(
        contestType === "cricket"
          ? `${process.env.REACT_APP_DEV_API_URL}/v3/dynamic/content`
          : `${process.env.REACT_APP_DEV_API_URL}/v2/dynamic/content`,
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

const gamificationSlice = createSlice({
  name: "gamification",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    const apis = [
      { action: fanzoneApi, key: "fanzoneData" },
      { action: gamificationApi, key: "gamificationData" },
      { action: miniGamesApi, key: "miniGamesData" },
      { action: reviewResponseApi, key: "reviewResponseData" },
      { action: surveyApi, key: "surveyData" },
      { action: pollApi, key: "pollData" },
      { action: contextualApi, key: "contextualData" },
      { action: preGameApi, key: "preGameData" },
      { action: pickApi, key: "pickData" },
      { action: swipeApi, key: "swipeData" },
      { action: triviaApi, key: "triviaData" },
      { action: participatedContestsApi, key: "participatedContestsData" },
      { action: leaderboardApi, key: "leaderboardData" },
      { action: homeScreenApi, key: "homeScreenData" },
      { action: howToPlayApi, key: "howToPlayData" },
    ];
    apis.forEach(({ action, key }) => {
      builder
        .addCase(action.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(action.fulfilled, (state, action) => {
          state.loading = false;
          state[key] = action.payload;
          state.error = null;
        })
        .addCase(action.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "An error occurred.";
        });
    });
  },
});

export const { resetState } = gamificationSlice.actions;
export default gamificationSlice.reducer;
