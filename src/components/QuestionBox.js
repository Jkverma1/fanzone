import React, { useState } from "react";
import { question } from "assets/css/question";
import { Box, Typography } from "@mui/material";
import OptionButton from "./optionButton";

const QuestionBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleToggle = (label) => {
    setSelectedOption(label === selectedOption ? null : label);
  };
  const classes = question();
  return (
    <Box className={classes.questionBox}>
      <Typography variant="h2" textAlign={"left"}>
        Who is best Raider in Pro Kabaddi?
      </Typography>
      <Box className={classes.optionsContainer}>
        <OptionButton
          label={"Maninder Singh"}
          checked={selectedOption === "Maninder Singh"}
          onToggle={handleToggle}
        />
        <OptionButton
          label={"Pawan Sehrawat"}
          checked={selectedOption === "Pawan Sehrawat"}
          onToggle={handleToggle}
        />
        <OptionButton
          label={"Arjun Deshwal"}
          checked={selectedOption === "Arjun Deshwal"}
          onToggle={handleToggle}
        />
      </Box>
      <Typography pt={1} variant="body2" textAlign={"right"}>
        2 Hours Left
      </Typography>
    </Box>
  );
};

export default QuestionBox;
