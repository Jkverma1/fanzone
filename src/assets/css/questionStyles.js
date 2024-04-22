import { makeStyles } from "@mui/styles";
import bannerBackground from "../../assets/figma/background.png";
import CompleteQuizBackground from "../../assets/figma/completeQuizBackground.png";

export const questionStyles = makeStyles((theme) => ({
  questionContainer: {
    maxWidth: 710,
    textAlign: "center",
  },
  questionTitle: {
    fontSize: 32,
    fontWeight: 700,
  },
  timer: {
    borderRadius: "50%",
    display: "inline-block",
    background: "rgba(251, 174, 24, 0.60)",
    width: "30px",
    height: "30px",
    padding: "5px 4px 1px",
  },
  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 310px)",
    justifyContent: "center",
    columnGap: "30px",
    rowGap: "30px",
    marginTop: 48,
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  vsContainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  vsText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  pickImageButton: {
    width: "100%",
    borderRadius: "10px",
    "& img": {
      width: "100%",
      borderRadius: "10px",
    },
  },
  "@media (max-width: 768px)": {
    questionTitle: {
      fontSize: 24,
    },
    optionsContainer: {
      gridTemplateColumns: "repeat(1, 310px)",
    },
  },
  "@media (max-width: 480px)": {
    questionTitle: {
      fontSize: 20,
    },
  },
}));

export const HeaderBannerStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backgroundColor: "transparent",
    transition: "background-color 0.3s ease",
  },
  QuizSubTitle: {
    fontSize: 32,
  },
  headerScrolled: {
    boxShadow: "none",
    backgroundColor: "white",
  },
  sharafLogo: {
    width: "265px",
    borderRight: "3px solid #FBAE18",
  },
  euronicsLogo: {
    width: "182px",
    padding: "0 0 0 15px",
  },
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  banner: {
    background: `URL(${bannerBackground})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    paddingTop: 145,
    alignItems: "center",
  },
  QuizbannerContainer: {
    background: `URL(${CompleteQuizBackground})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "bottom",
    width: "100%",
    paddingTop: 145,
    alignItems: "center",
  },
  quizSocials: {
    position: "relative",
    margin: "54px auto",
    padding: "58px 30px",
    maxWidth: 800,
    borderRadius: 64,
    background: "rgba(217, 217, 217, 0.5)",
    textAlign: "center",
  },
  bannerContainer: { maxWidth: 680 },
  bannerButtons: {
    marginTop: 46,
    display: "flex",
    columnGap: 25,
    justifyContent: "center",
    color: "white",
  },
  QuizTitle: {
    color: "#FBAE18",
    textAlign: "center",
    fontSize: 55,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  socialIcons: {
    height: 53.368,
  },
  pagination: {
    padding: "0 47px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "@media (max-width: 768px)": {
    banner: {
      height: "80vh",
    },
    QuizSubTitle: {
      fontSize: 25,
    },
    sharafLogo: {
      width: "220px",
      borderRight: "3px solid #FBAE18",
    },
    euronicsLogo: {
      width: "142px",
      padding: "0 0 0 10px",
    },
    QuizTitle: {
      fontSize: 44,
    },
    bannerButtons: {
      marginTop: 37,
      columnGap: 20,
    },
    quizSocials: {
      margin: "42px 20px",
      padding: "45px 20px",
      borderRadius: 50,
    },
    pagination: {
      padding: "0 30px 30px",
    },
  },
  "@media (max-width: 480px)": {
    banner: {
      height: "60vh",
    },

    sharafLogo: {
      width: "170px",
      borderRight: "3px solid #FBAE18",
    },
    euronicsLogo: {
      width: "104px",
      padding: "0 0 0 5px",
    },
    QuizTitle: {
      fontSize: 35,
    },
    QuizSubTitle: {
      fontSize: 20,
    },
    bannerButtons: {
      marginTop: 30,
      columnGap: 15,
    },
    quizSocials: {
      margin: "33px 20px",
      padding: "36px 16px",
      borderRadius: 40,
    },
    pagination: {
      padding: "0 15px 30px",
    },
  },
}));