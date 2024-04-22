import React from "react";
import { Box } from "@mui/material";
import FanZone from "pages/Dashboard/FanZone";
import { useSelector } from "react-redux";
import Home from "pages/Dashboard/Home";
import Header from "components/Header";
import Video from "./Video";
import Trophy from "./Trophy";

const Dashboard = () => {
  const activeTab = "fanzone";
  const accessToken = useSelector((state) => state.authorization.authToken);

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Video":
        return <Video />;
      case "Trophy":
        return <Trophy />;
      case "fanzone":
        return <FanZone accessToken={accessToken} />;
      default:
        return <div>Not Found!</div>;
    }
  };
  return (
    <Box>
      <Header />
      <Box width="100%" maxWidth="100%" overflow="hidden" zIndex={10}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;

const Icon = ({ active, activeIcon, inactiveIcon }) => (
  <img src={active ? activeIcon : inactiveIcon} alt="Icon" />
);
