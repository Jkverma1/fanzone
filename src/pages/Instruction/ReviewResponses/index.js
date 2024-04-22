import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reviewResponse } from "store/slices/fanzoneSlice";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

const ReviewResponses = () => {
  const { userId, gameId, contestType } = useParams();
  const accessToken = useSelector((state) => state.authorization.authToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        if (userId && gameId && contestType && accessToken != null) {
          dispatch(
            reviewResponse({ userId, gameId, contestType, accessToken })
          );
        } else {
          console.error("No access token received");
        }
      } catch (err) {
        console.error("Failed to fetch access token:", err);
      }
    };
    fetchTokenAndData();
  }, [userId, gameId, contestType, dispatch, accessToken]);

  const reviewData = useSelector(
    (state) => state.fanzone.reviewResponseData?.result | []
  );
  const message = useSelector(
    (state) => state.fanzone.reviewResponseData.message
  );
  const renderQuestion = (question, index) => {
    return (
      <Paper
        elevation={3}
        key={index}
        style={{ margin: "20px", padding: "20px" }}
      >
        <Typography variant="h6">{question.question}</Typography>
        <Divider style={{ margin: "10px 0" }} />
        <List>
          {question.options.map((option, index) => (
            <ListItem key={index} style={{ margin: "5px 0" }}>
              {option.selected_option === 1 ? (
                <ListItemText
                  style={{
                    background: option.correct_answer ? "#90ee90" : "red",
                  }}
                  primary={option.option_value}
                />
              ) : (
                <ListItemText primary={option.option_value} />
              )}
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          {question.options.map((option, index) => (
            <ListItem key={index} style={{ margin: "5px 0" }}>
              {option.correct_answer && (
                <Box>
                  Correct Answer:
                  <strong>{option.option_value}</strong>
                </Box>
              )}
            </ListItem>
          ))}
        </Typography>
      </Paper>
    );
  };

  return (
    <Box style={{ padding: "20px" }}>
      <Box
        style={{
          position: "relative",
          left: 0,
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "10px 15px",
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Button
          style={{ color: "black", border: "1px solid black", marginRight: 10 }}
          onClick={() => navigate("/dashboard")}
        >
          <ArrowBackIcon />
        </Button>
        <Typography>Review Responses</Typography>
      </Box>
      <Box>
        {reviewData?.meta ? (
          reviewData.meta.list_questions.map((question, index) =>
            renderQuestion(question, index)
          )
        ) : (
          <Typography>{message}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ReviewResponses;
