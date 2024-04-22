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

const PostFeed = () => {
  const classes = post();
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <Box className={classes.postBox}>
      <Typography variant="body2" color="primary" fontWeight={"bold"}>
        #Kabadi
      </Typography>
      <Typography pt={1} variant="h2" fontWeight={"bold"}>
        Who will be battling it out to win the 8th season of the Pro Kabaddi
        League.
      </Typography>
      <img className={classes.postImages} src={kabaddi} alt="post" />
      <Box className={classes.postInfo}>
        <Typography pt={1} variant="body2">
          11:57 AM |Dec 12,2021
        </Typography>
        <Typography pt={1} variant="body2">
          2 min Read
        </Typography>
      </Box>
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
          <Button
            className={classes.postButton}
            onClick={() => setSave((state) => !state)}
            color="default"
          >
            {save ? (
              <BookmarkIcon
                className={classes.postButtonIcon}
                color="primary"
              />
            ) : (
              <BookmarkBorderIcon className={classes.postButtonIcon} />
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PostFeed;
