import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLeaderboardData } from "store/slices/leaderboardSlice";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Alert,
  IconButton,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { unwrapResult } from "@reduxjs/toolkit";
import { FetchAuthToken } from "store/slices/authorizationSlice";

const Leaderboard = () => {
  const [announcementOpen, setAnnouncementOpen] = useState(true);
  const dispatch = useDispatch();
  const leaderboardData = useSelector(
    (state) =>
      state.leaderboard?.data || [
        { name: "Alice", score: 90 },
        { name: "Bob", score: 85 },
        { name: "Charlie", score: 80 },
      ]
  );

  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        const resultAction = await dispatch(FetchAuthToken());
        const accessToken = unwrapResult(resultAction);
        if (accessToken) {
          dispatch(fetchLeaderboardData({ accessToken }));
        } else {
          console.error("No access token received");
        }
      } catch (err) {
        console.error("Failed to fetch access token:", err);
      }
    };
    fetchTokenAndData();
  }, [dispatch]);

  const handleCloseAnnouncement = () => {
    setAnnouncementOpen(false);
  };

  const styles = {
    listItem: {
      borderBottom: "1px solid #ccc",
      "&:last-child": {
        borderBottom: "none",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    avatar: {
      backgroundColor: "#f50057",
      marginRight: "8px",
    },
    primaryText: {
      fontWeight: "bold",
    },
    secondaryText: {
      color: "gray",
    },
    alert: {
      marginBottom: "20px",
    },
    paper: {
      padding: "20px",
      boxShadow: "none",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    list: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      overflow: "hidden",
    },
  };

  return (
    <Box sx={styles.paper}>
      {announcementOpen && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleCloseAnnouncement}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={styles.alert}
        >
          Important announcement regarding the leaderboard!
        </Alert>
      )}

      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <Paper elevation={0} sx={styles.list}>
        <List>
          {leaderboardData &&
            leaderboardData.map((participant, index) => (
              <ListItem key={index} sx={styles.listItem}>
                <ListItemAvatar>
                  <Avatar sx={styles.avatar}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={styles.primaryText}>{`${index + 1}. ${
                        participant.name
                      }`}</span>
                      <span
                        style={styles.secondaryText}
                      >{`Score: ${participant.score}`}</span>
                    </div>
                  }
                />
              </ListItem>
            ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Leaderboard;
