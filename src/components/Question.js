import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AnswerButton from "./AnswerButton";
import { questionStyles } from "assets/css/questionStyles";

const Question = ({ questionData = {}, onTimeUp, onAnswerSelected }) => {
  const classes = questionStyles();
  const [timer, setTimer] = useState(20);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    } else {
      onTimeUp();
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timer, onTimeUp]);

  const handleAnswerClick = (option) => {
    setAnswerSelected(true);
    if (!answerSelected) {
      setSelectedOption(option.option_value);
      // setTimer(0);
      setTimeout(() => {
        setAnswerSelected(true);
        onAnswerSelected(option.option_value);
      }, 2000);
    }
  };

  return (
    <Box className={classes.questionContainer}>
      <Typography className={classes.questionTitle} variant="h5">
        {questionData?.question}
      </Typography>
      {questionData?.original_image && (
        <img src={questionData.original_image} alt="" />
      )}
      <Typography className={classes.timer}>{`${timer}`}</Typography>
      <Box className={classes.optionsContainer}>
        {questionData?.options?.map((option, index) => (
          <AnswerButton
            key={index}
            option={option}
            selectedOption={selectedOption}
            isSelected={answerSelected}
            isCorrect={option.correct_answer}
            showCorrect={answerSelected}
            onAnswerClick={handleAnswerClick}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Question;
