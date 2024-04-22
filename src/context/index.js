import React, { createContext } from "react";
import { AnswersProvider } from "./data/swipeContext";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      <AnswersProvider>{children}</AnswersProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
