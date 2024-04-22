import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    correctAnswersCount: 0,
  },
  reducers: {
    incrementCorrectAnswers: (state) => {
      state.correctAnswersCount += 1;
    },
    resetQuiz: (state) => {
      state.correctAnswersCount = 0;
    },
  },
});

export const { incrementCorrectAnswers, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
