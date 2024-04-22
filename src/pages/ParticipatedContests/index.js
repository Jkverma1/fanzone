import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { participatedContests } from "store/slices/fanzoneSlice";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ParticipatedContests = () => {
  const { userId, contestType } = useParams();
  const accessToken = useSelector((state) => state.authorization.authToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const participatedContestsData = useSelector(
    (state) => state.fanzone.participatedContests || []
  );

  useEffect(() => {
    const fetchTokenAndData = async () => {
      try {
        setIsLoading(true);
        if (accessToken !== null)
          await dispatch(
            participatedContests({ userId, contestType, accessToken })
          );
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchTokenAndData();
  }, [dispatch, contestType, userId, accessToken]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
          onClick={() => navigate("/instruction/predict_game")}
        >
          <ArrowBackIcon />
        </Button>
        <Typography>Participated Contests</Typography>
      </Box>
      {participatedContestsData.total_game_played > 0 ? (
        participatedContestsData.total_played_game_details?.map(
          (contest, index) => (
            <Button
              key={index}
              style={{
                width: "100%",
                justifyContent: "flex-start",
                backgroundColor: "white",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <Box>
                <Typography variant="body2" color="textSecondary">
                  {contest.start_datetime}
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={"left"}
                  color="textPrimary"
                >
                  {contest.title}
                </Typography>
              </Box>
            </Button>
          )
        )
      ) : (
        <Box>
          <Typography variant="body1" textAlign={"left"} color="textPrimary">
            {participatedContestsData.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ParticipatedContests;
