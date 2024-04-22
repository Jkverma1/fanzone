import { Box, Typography } from "@mui/material";

const OptionButton = ({ label, checked, onToggle }) => {
  const handleToggle = () => {
    onToggle(label);
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
        padding: "12px 13px",
        backgroundColor: "#fff",
        marginTop: "13px",
      }}
      onClick={handleToggle}
    >
      <Box
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          border: "1px solid #ccc",
          marginRight: "10px",
          borderRadius: "50%",
          textAlign: "center",
          paddingTop: "2px",
          boxSizing: "border-box",
          backgroundColor: checked ? "#007bff" : "#fff",
        }}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", width: "16px", height: "16px" }}
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </Box>
      <Typography variant="h2" textAlign={"left"}>
        {label}
      </Typography>
    </Box>
  );
};

export default OptionButton;
