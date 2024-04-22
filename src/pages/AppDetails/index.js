import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
import BannerScreen from "./components/BannerScreen";
import InfoSteps from "./components/InfoSteps";

const AppDetails = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 0) setStep(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <Card>
      {step === 0 && (
        <div>
          <BannerScreen />
        </div>
      )}

      {step === 1 && (
        <div>
          <InfoSteps />
        </div>
      )}
    </Card>
  );
};

export default AppDetails;
