import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./slices/authorizationSlice";
import fanzoneReducer from "./slices/fanzoneSlice";
import quizReducer from "./slices/quizSlice";
import gamificationSlice from "./slices/gamificationSlice";

const store = configureStore({
  reducer: {
    authorization: authorizationReducer,
    fanzone: fanzoneReducer,
    quiz: quizReducer,
    gamification: gamificationSlice,
  },
});

export default store;
