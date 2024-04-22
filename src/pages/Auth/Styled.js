import LoginBackground from "assets/images/loginBackground.png";

const Styled = {
  backgroundStyle: {
    minHeight: "100vh",
    backgroundImage: `url('${LoginBackground}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  logo: {
    width: "100%",
    height: "auto",
    maxWidth: "180px",
  },
  typography: {
    color: "white",
  },
  linkBox: {
    marginTop: 12,
    paddingBottom: 4,
    textAlign: "center",
    color: "white",
  },
  button: {
    maxWidth: "80%",
    height: "60px",
    color: "#fff",
    textTransform: "capitalize",
  },
  textField: {
    color: "#fff",
    borderBottom: "1px solid #fff",
  },
  inputLabel: {
    color: "#fff",
  },
};

export default Styled;
