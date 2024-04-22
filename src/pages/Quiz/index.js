import React, { useState, useEffect } from "react";
import Question from "components/Question";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "store/slices/quizSlice";
import { Navigate, useParams } from "react-router-dom";
import QuizComplete from "components/QuizComplete";
import { Box } from "@mui/material";
import QuizFooter from "components/QuizFooter";

const fanzoneData = [
  {
    question: "What is the capital of France?",
    options: [
      { option_value: "A", text: "Paris", correct_answer: true },
      { option_value: "B", text: "London", correct_answer: false },
      { option_value: "C", text: "Berlin", correct_answer: false },
      { option_value: "D", text: "Madrid", correct_answer: false },
    ],
    original_image: "paris.jpg",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      { option_value: "A", text: "Harper Lee", correct_answer: true },
      { option_value: "B", text: "J.K. Rowling", correct_answer: false },
      { option_value: "C", text: "Stephen King", correct_answer: false },
      { option_value: "D", text: "Ernest Hemingway", correct_answer: false },
    ],
  },
];

const Quiz = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const fanzoneData = useSelector(
  //   (state) => state.gamification?.fanzoneData?.result[id].meta || []
  // );
  const list_questions = fanzoneData,
    no_of_questions = 2,
    answered_status = 0;
  // const {
  //   list_questions = [],
  //   no_of_questions = 0,
  //   answered_status = [],
  // } = fanzoneData;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    dispatch(resetQuiz());
  }, [dispatch]);

  const handleTimeUp = () => {
    if (currentQuestionIndex < no_of_questions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleAnswerSelected = () => {
    handleTimeUp();
  };

  if (isQuizComplete) {
    return <QuizComplete totalQuestions={list_questions.length} />;
  }
  if (list_questions.length === 0 || answered_status === 1) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Box>
      <Box
        style={{
          width: "100%",
          paddingTop: 145,
          alignItems: "center",
        }}
      >
        <Box style={{ position: "absolute", bottom: 20, width: "100%" }}>
          {list_questions.length > 0 && (
            <>
              <Box
                style={{
                  display: "grid",
                  justifyContent: "center",
                }}
              >
                <Question
                  key={currentQuestionIndex}
                  questionData={list_questions[currentQuestionIndex]}
                  onTimeUp={handleTimeUp}
                  onAnswerSelected={handleAnswerSelected}
                />
              </Box>
              <Box marginTop={7.5}>
                <QuizFooter
                  totalQuestions={list_questions.length}
                  CurrentIndex={currentQuestionIndex + 1}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Quiz;
