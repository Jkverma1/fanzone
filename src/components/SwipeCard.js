import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const SwipeCard = ({ question, questionIndex, onSwipe }) => {
  const dispatch = useDispatch();

  const [{ x, scale, rotate }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    rotate: 0,
    config: { friction: 50, tension: 200 },
  }));

  const handleSwipe = (direction) => {
    const answer =
      direction === "right" ? question.answers[1] : question.answers[0];
    console.log(answer);
    onSwipe();
    setTimeout(() => {
      api.start({ x: 0, scale: 1, rotate: 0 });
    }, 300);
  };

  const simulateSwipe = (direction) => {
    handleSwipe(direction);
  };

  const bind = useDrag(
    ({ down, movement: [mx], velocity, direction: [xDir] }) => {
      if (down) {
        const rotation = mx / 10;
        api.start({ x: mx, scale: 1.1, rotate: rotation });
      } else {
        const swipe = velocity > 0.2 || Math.abs(mx) > window.innerWidth * 0.3;
        if (swipe) {
          if (xDir > 0) {
            handleSwipe("left");
          } else {
            handleSwipe("right");
          }
        } else {
          api.start({ x: 0, scale: 1, rotate: 0 });
        }
      }
    },
    { axis: "x" }
  );

  const bgColor = x.to({
    range: [-300, 0, 300],
    output: [
      "rgba(239, 68, 68, 1)",
      "rgba(255, 255, 255, 0)",
      "rgba(34, 197, 94, 1)",
    ],
    extrapolate: "clamp",
  });

  return (
    <>
      <animated.div
        {...bind()}
        style={{
          x,
          scale,
          transform: rotate.to((r) => `rotate(${r}deg)`),
          backgroundColor: bgColor,
          touchAction: "none",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          cursor: "grab",
          position: "relative",
          minHeight: "60vh",
          maxWidth: "60vh",
          margin: "20px auto 40px",
        }}
      >
        <Card variant="outlined" className="max-w-md mx-auto">
          <CardContent style={{ minHeight: "60vh" }}>
            <Typography variant="h6">{question.question}</Typography>
            <Typography variant="body1" color="textSecondary">
              Swipe right for {question.answers[1]}, left for{" "}
              {question.answers[0]}.
            </Typography>
          </CardContent>
        </Card>
      </animated.div>
      <Box display="flex" justifyContent="center" mt={2} mb={2}>
        <Button
          onClick={() => simulateSwipe("right")}
          variant="contained"
          color="error"
          style={{ minWidth: "120px", marginRight: "8px" }}
        >
          {question.answers[1]}
        </Button>
        <Button
          onClick={() => simulateSwipe("left")}
          variant="contained"
          color="success"
          style={{ minWidth: "120px" }}
        >
          {question.answers[0]}
        </Button>
      </Box>
    </>
  );
};

export default SwipeCard;
