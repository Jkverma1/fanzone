import React, { useState } from "react";
import SwipeCard from "components/SwipeCard";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom/dist";

const quizData = [
  {
    question: "What is 2 + 2?",
    userAnswer: "4",
    correctAnswer: "4",
    answers: ["4", "5"],
  },
  {
    question: "Which is the largest ocean on Earth?",
    userAnswer: "Pacific Ocean",
    correctAnswer: "Pacific Ocean",
    answers: ["Atlantic Ocean", "Pacific Ocean"],
  },
  {
    question: "What is the chemical symbol for gold?",
    userAnswer: "Au",
    correctAnswer: "Au",
    answers: ["Au", "Ag"],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    userAnswer: "William Shakespeare",
    correctAnswer: "William Shakespeare",
    answers: ["William Shakespeare", "Jane Austen"],
  },
];

const SwipeQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const handleSwipe = () => {
    if (currentQuestionIndex <= quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const calculateResults = () => {
    const results = quizData.map((question, index) => {
      const userAnswer = question.userAnswer;
      console.log(userAnswer);
      const isCorrect = userAnswer && question.correctAnswer === userAnswer;
      return {
        question: question.question,
        userAnswer: userAnswer ? userAnswer : "No answer provided",
        correctAnswer: question.correctAnswer,
        isCorrect,
      };
    });

    const correctAnswers = results.filter((result) => result.isCorrect).length;
    return { results, correctAnswers };
  };

  return (
    <Box padding="0 20px">
      <Box style={{ position: "relative", width: "100%", height: "50px" }}>
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
            onClick={() => navigate("/instruction/swipe_em")}
            aria-label="Go back"
          >
            <ArrowBackIcon />
          </Button>
          <Typography variant="h4">Swipe'em</Typography>
        </Box>
      </Box>
      {currentQuestionIndex < quizData.length ? (
        <SwipeCard
          question={quizData[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          onSwipe={handleSwipe}
        />
      ) : (
        <Box>
          <Typography variant="h3" className="text-lg font-semibold">
            Quiz Completed
          </Typography>
          <Box>
            <Typography>{`You answered ${
              calculateResults().correctAnswers
            } out of ${quizData.length} questions correctly.`}</Typography>
            {calculateResults().results.map((result, index) => (
              <Box key={index} className="text-left">
                <Typography>
                  <strong>Q{index + 1}:</strong> {result.question}
                </Typography>
                <Typography>
                  <strong>Your answer:</strong> {result.userAnswer}
                </Typography>
                <Typography
                  className={`${
                    result.isCorrect ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <strong>
                    {result.isCorrect
                      ? "Correct"
                      : `Correct answer: ${result.correctAnswer}`}
                  </strong>
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SwipeQuiz;
