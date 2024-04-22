import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostFeed from "./PostFeed";
import { Box, useTheme } from "@mui/material";

const customComponentsData = [
  <Box mx={1}>
    <PostFeed />
  </Box>,
  <Box mx={1}>
    <PostFeed />
  </Box>,
  <Box mx={1}>
    <PostFeed />
  </Box>,
  <Box mx={1}>
    <PostFeed />
  </Box>,
  <Box mx={1}>
    <PostFeed />
  </Box>,
];

function PostSlider() {
  const theme = useTheme();
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <ul>
        {dots.map((dot, index) => (
          <li style={{ padding: "0 5px" }} key={index}>
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: (i) => (
      <Box
        component="span"
        key={i}
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: "50%",
          display: "inline-block",
          cursor: "pointer",
        }}
      />
    ),
    dotsClass: "slick-dots",
    beforeChange: (current, next) => {
      const dots = document.querySelectorAll(".slick-dots li span");
      dots[current].style.backgroundColor = theme.palette.secondary.main;
      dots[next].style.backgroundColor = theme.palette.primary.main;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        {customComponentsData.map((data, index) => (
          <Box key={index}>{data}</Box>
        ))}
      </Slider>
    </Box>
  );
}

export default PostSlider;
