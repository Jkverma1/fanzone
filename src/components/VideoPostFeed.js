import { post } from "assets/css/post";
import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import kabaddi from "assets/images/post/kabaddi.jpg";
import starsport from "assets/images/post/starsport.jpg";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReactPlayer from "react-player";
import { Card, CardMedia } from "@material-ui/core";
import video from "assets/images/videoplayback.mp4";

const VideoPostFeed = () => {
  const classes = post();
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(true);
  };

  return (
    <Box className={classes.postBox}>
      <Typography variant="body2" color="primary" fontWeight={"bold"}>
        #Player,#Game, #Kabaddiadda
      </Typography>
      <Typography pt={1} variant="h2" fontWeight={"bold"}>
        U.P. Yoddha - Art of making playoffs
      </Typography>
      <Card onClick={togglePlayer} style={{ cursor: "pointer" }}>
        {/* Show thumbnail if showPlayer is false */}
        {!showPlayer && (
          <CardMedia
            className={classes.postVideos}
            component="img"
            alt="Thumbnail"
            image={kabaddi}
          />
        )}
        {/* Show ReactPlayer if showPlayer is true */}
        {showPlayer && (
          <ReactPlayer width="100%" height="100%" url={video} controls />
        )}
      </Card>
      {/*<img className={classes.postImages} src={kabaddi} alt="post" />*/}
      <Box className={classes.postInfo}>
        <Typography pt={1} variant="body2">
          11:57 AM | Dec 12,2021
        </Typography>
        <Typography pt={1} variant="body2">
          2 min Read
        </Typography>
      </Box>
      <Typography variant="body2">
        The Dodgers and Rays took the World Series took 6 games in an awesome
        series! Tampa Bay pulled off a miraculous win in Game 4 to tie the
        series 2-2..
      </Typography>
      <Box className={classes.postInfo} pt={2}>
        <Box display="flex" gap={1}>
          <Avatar alt="My Image" src={starsport} />
          <Typography pt={1} variant="body1" fontWeight={700}>
            Star Sports
          </Typography>
        </Box>
        <Box className={classes.postButtonContainer}>
          <Button className={classes.postButton} color="default">
            <ShareIcon className={classes.postButtonIcon} />
          </Button>
          <Button
            className={classes.postButton}
            onClick={() => setLike((state) => !state)}
            color="default"
          >
            {like ? (
              <FavoriteIcon
                className={classes.postButtonIcon}
                color="primary"
              />
            ) : (
              <FavoriteBorderIcon className={classes.postButtonIcon} />
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPostFeed;
