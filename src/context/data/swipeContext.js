import React, { createContext, useContext, useState } from "react";

const SwipeContext = createContext();

export const useList = () => useContext(SwipeContext);

export const AnswersProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const addItem = (item) => {
    setAnswers([...answers, item]);
  };

  const removeItem = (index) => {
    const updatedList = [...answers];
    updatedList.splice(index, 1);
    setAnswers(updatedList);
  };

  const values = {
    answers,
    addItem,
    removeItem,
  };

  return (
    <SwipeContext.Provider value={values}>{children}</SwipeContext.Provider>
  );
};
