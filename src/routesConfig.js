import Dashboard from "pages/Dashboard";
import AppDetails from "pages/AppDetails";
import Login from "pages/Auth/Login";
import SignUp from "pages/Auth/SignUp";
import ForgetPassword from "pages/Auth/ForgetPassword";
import Quiz from "pages/Quiz";
import Instruction from "pages/Instruction";
import Leaderboard from "pages/Instruction/Leaderboard";
import ReviewResponses from "pages/Instruction/ReviewResponses";
import ParticipatedContests from "pages/ParticipatedContests";
import HowToPlay from "pages/HowToPlay";
import FigmaHome from "pages/FigmaHome";
import SwipeQuiz from "pages/Dashboard/FanZone/SwipeQuiz";
import PickCards from "./pages/Dashboard/FanZone/PickCards";

const routesConfig = [
  {
    path: "/",
    component: AppDetails,
    private: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    private: true,
  },
  {
    path: "/login",
    component: Login,
    private: false,
  },
  {
    path: "/sign-up",
    component: SignUp,
    private: false,
  },
  {
    path: "/forget-password",
    component: ForgetPassword,
    private: false,
  },
  {
    path: "/instruction/:id",
    component: Instruction,
    private: true,
  },
  { path: "/swipeCards", component: SwipeQuiz, private: true },
  { path: "/pickCards", component: PickCards, private: true },
  {
    path: "/quiz/:id",
    component: Quiz,
    private: true,
  },
  {
    path: "/leaderboard/:id",
    component: Leaderboard,
    private: true,
  },
  {
    path: "/reviewResponses/:userId/:gameId/:contestType",
    component: ReviewResponses,
    private: true,
  },
  {
    path: "/participatedContests/:userId/:contestType",
    component: ParticipatedContests,
    private: true,
  },
  {
    path: "/guide/:contestType",
    component: HowToPlay,
    private: true,
  },
  {
    path: "/figma",
    component: FigmaHome,
    private: true,
  },
];

export default routesConfig;
