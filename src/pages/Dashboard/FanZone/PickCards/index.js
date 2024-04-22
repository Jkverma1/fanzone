import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import { questionStyles } from "assets/css/questionStyles";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom/dist";

const data = [
  {
    question: "Which animal do you prefer?",
    leftImage:
      "https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_640.jpg",
    rightImage:
      "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?cs=srgb&dl=pexels-pixabay-34098.jpg&fm=jpg",
  },
  {
    question: "Which color do you like?",
    leftImage:
      "https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwY29sb3VyfGVufDB8fDB8fHww",
    rightImage:
      "https://imageonline.co/downloading.php?imagename=D13.png&color=blue",
  },
];

const PickCards = () => {
  const navigate = useNavigate();
  const classes = questionStyles();
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (option, index) => {
    setSelectedOptions({ ...selectedOptions, [index]: option });
  };

  return (
    <Box padding="0 20px">
      <Box
        style={{
          position: "relative",
          width: "100%",
          height: "50px",
          paddingBottom: "20px",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              minWidth: 0,
              padding: 0,
              marginRight: 20,
              border: "1px solid",
            }}
            onClick={() => navigate("/instruction/pick_em")}
            aria-label="Go back"
          >
            <ArrowBackIcon />
          </Button>
          <Typography variant="h4">Pick'em</Typography>
        </Box>
      </Box>
      {data.map((card, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {card.question}
            </Typography>
            <Grid container spacing={3} alignItems="center" justify="center">
              <Grid item xs={5}>
                <Button
                  style={{ width: "150px", height: "150px" }}
                  className={classes.pickImageButton}
                  onClick={() => handleOptionSelect("left", index)}
                >
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={card.leftImage}
                    alt="Left Option"
                  />
                </Button>
              </Grid>
              <Grid item xs={2} className={classes.vsContainer}>
                <Typography
                  variant="h4"
                  component="span"
                  className={classes.vsText}
                >
                  vs
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Button
                  className={classes.pickImageButton}
                  onClick={() => handleOptionSelect("right", index)}
                >
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={card.rightImage}
                    alt="Right Option"
                  />
                </Button>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              You chose:{" "}
              {selectedOptions[index]
                ? selectedOptions[index]
                : "Please select an option"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default PickCards;
