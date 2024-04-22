import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GameCard from "components/GameCard";
import SwipeGameCard from "components/SwipeGameCard";
import PickGameCard from "components/PickGameCard";
import { Link } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fanzoneApi } from "store/slices/gamificationSlice";
import { fanzone } from "assets/css/fanzone";
import userIcon from "assets/images/icons/trigon-user.png";

const FanZone = ({ accessToken }) => {
  const classes = fanzone();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [fanzoneData, setFanzoneData] = useState([]);

  useEffect(() => {
    const fetchDataAndToken = async () => {
      try {
        setIsLoading(true);
        if (accessToken !== null) {
          const response = await dispatch(
            fanzoneApi({
              userId: "12eaafb36c9148cfba48bac988ee18ed",
              accessToken: accessToken,
            })
          );
          setFanzoneData(response.payload.result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataAndToken();
  }, [dispatch, accessToken]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box pt={3} pb={12} margin="0 16px">
      <Typography variant="h1" textAlign={"left"}>
        Games for You
      </Typography>
      <Typography variant="body1" pt={2} mb="29px">
        Participate in our games to exercise your brain's frontal cortex
      </Typography>
      <Box className={classes.leaderboardStatus}>
        <Typography
          variant="h1"
          fontWeight="400"
          fontFamily="League Gothic"
          noWrap
        >
          Leaderboard
        </Typography>
        <Box className={classes.activePlayers}>
          <img height={24} src={userIcon} alt="" />
          <Typography variant="body1" noWrap>
            0 Playing
          </Typography>
        </Box>
      </Box>
      {fanzoneData ? (
        <>
          <Link
            to={{
              pathname:
                fanzoneData?.trivia?.meta?.list_questions.length > 0
                  ? "/instruction/trivia"
                  : "",
              state: fanzoneData,
            }}
            style={{ textDecoration: "none" }}
          >
            <GameCard data={fanzoneData.trivia} CardType="trivia" />
          </Link>
          <Link
            to={{
              pathname:
                fanzoneData?.predict_game?.meta?.list_questions.length > 0
                  ? "/instruction/predict_game"
                  : "",
              state: fanzoneData,
            }}
            style={{ textDecoration: "none" }}
          >
            <GameCard data={fanzoneData?.predict_game} CardType="predictGame" />
          </Link>
          <Link
            to={{
              pathname:
                // fanzoneData?.swipe_em?.meta?.list_questions.length > 0?
                "/instruction/swipe_em",
              //   : "",
              state: fanzoneData,
            }}
            style={{ textDecoration: "none" }}
          >
            <SwipeGameCard data={fanzoneData?.swipe_em} />
          </Link>
          <Link
            to={{
              pathname:
                // fanzoneData?.pick_em?.meta?.list_questions.length > 0 :
                "/instruction/pick_em",
              // : "",
              state: fanzoneData,
            }}
            style={{ textDecoration: "none" }}
          >
            <PickGameCard data={fanzoneData?.pick_em} />
          </Link>
        </>
      ) : null}
    </Box>
  );
};

export default FanZone;
