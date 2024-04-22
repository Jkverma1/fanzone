import { makeStyles } from "@mui/styles";

export const trophy = makeStyles((theme) => ({
  tabContainer: {
    marginTop: "15px",
    "& .MuiTab-root:hover": {
      border: "3px solid #A60057",
      padding: "5px 17px",
      color: "#31BBD0",
    },
    "& .MuiTab-root.Mui-selected": {
      background: "#A60057",
      color: "#31BBD0",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
  DateTap: {
    margin: "0 5px",
    background: "#d5f1f6",
    padding: "8px 20px",
    minWidth: "20px",
    borderRadius: "10px",
    textTransform: "capitalize",
    border: "none",
  },
  ballStatus: {
    background: "#5ED390",
    borderRadius: "50%",
    color: "#fff",
    width: 10,
    height: 10,
    fontSize: 6,
    textAlign: "center",
    padding: 0.5,
    boxSizing: "border-box",
  },
}));
