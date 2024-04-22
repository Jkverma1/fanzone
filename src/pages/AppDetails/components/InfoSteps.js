import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import step1 from "assets/images/instructions/instruction1.png";
import step2 from "assets/images/instructions/instruction2.png";
import step3 from "assets/images/instructions/instruction3.png";
import Styled from "../Styled";
import { Link } from "react-router-dom";

const InfoSteps = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        style={{
          width: i === activeIndex ? "34px" : "10px",
          height: "10px",
          borderRadius: "5px",
          background: i === activeIndex ? "#31BBD0" : "#FFFFFF",
          marginRight: "7px",
          transition: "background 0.3s",
        }}
      />
    ),
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      sliderRef.current.slickGoTo(nextIndex);
      return nextIndex;
    });
  };

  return (
    <Box
      maxHeight="100vh"
      minHeight="100vh"
      className="infoStepContainer"
      style={Styled.InfoStepsBackground}
    >
      <Slider ref={sliderRef} {...settings}>
        <Box
          style={{
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <img
            src={step1}
            alt="Step 1"
            style={{ width: "100%", height: "50vh" }}
          />
          <Box style={{ padding: "11px 32px 108px" }}>
            <Typography variant="h1" color="#fff" mb="24px" gutterBottom>
              Your City, <br /> Your Kabaddi !
            </Typography>
            <Typography variant="body1" color="#fff" gutterBottom>
              Get updates about your team and your stars curated for you!
            </Typography>
          </Box>
        </Box>
        <Box style={{ width: "100%", minHeight: "100vh" }}>
          <img
            src={step2}
            alt="Step 2"
            style={{ width: "100%", height: "50vh" }}
          />
          <Box style={{ padding: "11px 32px 108px" }}>
            <Typography variant="h1" color="#fff" mb="24px" gutterBottom>
              Be a <br /> Champion Fan
            </Typography>
            <Typography variant="body1" color="#fff" gutterBottom>
              Show your fandom by participating in the games in the Fan Zone and
              earn rewards by topping the leaderboard!
            </Typography>
          </Box>
        </Box>
        <Box style={{ width: "100%", minHeight: "100vh" }}>
          <img
            src={step3}
            alt="Step 3"
            style={{ width: "100%", height: "50vh" }}
          />
          <Box style={{ padding: "11px 32px 108px" }}>
            <Typography variant="h1" color="#fff" mb="24px" gutterBottom>
              And everything <br /> in between
            </Typography>
            <Typography variant="body1" color="#fff" gutterBottom>
              Stay in and enjoy! You don’t have to go anywhere else. We got you
              covered!
            </Typography>
          </Box>
        </Box>
      </Slider>
      <Box
        position="absolute"
        bottom="38px"
        right="20px"
        display="flex"
        alignItems="center"
      >
        {activeIndex !== 2 && (
          <Button
            style={{ color: "#fff", fontSize: 16, padding: 12, minWidth: 137 }}
            variant="contained"
            color="secondary"
            onClick={nextSlide}
            disabled={activeIndex === 2}
          >
            Next
          </Button>
        )}
        {activeIndex === 2 && (
          <Link color="secondary" to="/login">
            <Button
              style={{
                color: "#fff",
                fontSize: 16,
                padding: 12,
                minWidth: 137,
              }}
              variant="contained"
              color="secondary"
              onClick={nextSlide}
              disabled={activeIndex !== 2}
            >
              Get Started
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default InfoSteps;
