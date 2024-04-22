import React from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  answerButton: {
    display: "block",
    width: "100%",
    background: "rgba(251, 174, 24, 0.60)",
    fontSize: "24px",
    borderRadius: "20px",
    fontWeight: 600,
    color: "#122853",
    textTransform: "capitalize",
    textAlign: "center",
  },
  correct: {
    backgroundColor: "#90ee90 !important",
    color: "#fff !important",
  },
  incorrect: {
    backgroundColor: "red",
    color: "#fff",
  },
  selectedOption: { backgroundColor: "grey", color: "#fff" },
});

const AnswerButton = ({
  option,
  isSelected,
  selectedOption,
  isCorrect,
  showCorrect,
  onAnswerClick,
}) => {
  const { id } = useParams();
  const classes = useStyles();

  const getButtonStyle = () => {
    if (isSelected && id !== "predict_game") {
      if (isCorrect) {
        return classes.correct;
      } else if (!isCorrect && selectedOption === option.option_value)
        return classes.incorrect;
      else return;
    } else if (id === "predict_game" && isSelected)
      if (selectedOption === option.option_value) return classes.selectedOption;
      else if (showCorrect && isCorrect && id !== "predict_game") {
        return classes.correct;
      }
  };

  return (
    <Button
      className={`${classes.answerButton} ${getButtonStyle()}`}
      onClick={() => onAnswerClick(option)}
      disabled={isSelected}
    >
      {option.option_value}
    </Button>
  );
};

export default AnswerButton;
