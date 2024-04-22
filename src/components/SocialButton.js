import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const SocialButton = ({ children, onClick }) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      style={{
        background: "#31BBD0",
        color: "#fff",
        border: "none",
        padding: "15px",
        borderRadius: "12px",
        boxShadow: "inset 0px 0px 4px 3px #97dde7",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

SocialButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default SocialButton;
