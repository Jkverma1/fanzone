import { Hidden } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const post = makeStyles((theme) => ({
  postBox: {
    background: "#E9F8FA",
    padding: "20px",
    marginBottom: "27px",
    borderRadius: "13px",
  },
  postImages: {
    width: "100%",
    marginTop: "13px",
    maxWidth: "720px",
  },
  postVideos: {
    width: "100%",
  },
  postInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postButtonContainer: {
    display: "flex",
    columnGap: 9,
  },
  postButtonIcon: {
    padding: 0,
    textAlign: "right",
  },
  postButton: {
    padding: 5,
    minWidth: 0,
  },
}));
