import { makeStyles } from "@mui/styles";

export const question = makeStyles((theme) => ({
  questionBox: {
    background: "#E9F8FA",
    padding: "20px",
    marginBottom: "27px",
    borderRadius: "13px",
  },
  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "100%",
    justifyContent: "left",
  },
}));
