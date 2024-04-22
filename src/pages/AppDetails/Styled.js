import LoginBackground from "assets/images/loginBackground.png";
const backgroundStyle = {
  maxHeight: "100vh",
  overflow: "hidden",
  backgroundImage: `url('${LoginBackground}')`,
  backgroundSize: "100% 100%",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
};

const InfoStepsBackground = {
  background: "#A60057",
};

const StepButton = {
  width: "137px",
  heigth: "65px",
  fontSize: "16px",
  background: "#E6C909",
  boxShadow: "none",
};

export default { backgroundStyle, InfoStepsBackground, StepButton };
