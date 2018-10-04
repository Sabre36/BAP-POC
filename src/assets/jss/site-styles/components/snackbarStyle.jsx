import {
  defaultFont,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow
} from "assets/jss/global-styles.jsx";

const snackbarStyle = {
  root: {
    ...defaultFont,
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "3px",
    maxWidth: "100%",
    minWidth: "640px",
    boxShadow:
      "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  },
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: {
    backgroundColor: "#02dcf5",
    color: "#ffffff",
    ...infoBoxShadow
  },
  success: {
    backgroundColor: "#43A546",
    color: "#ffffff",
    ...successBoxShadow
  },
  warning: {
    backgroundColor: "#F5A623",
    color: "#ffffff",
    ...warningBoxShadow
  },
  danger: {
    backgroundColor: "#ab0520",
    color: "#ffffff",
    ...dangerBoxShadow
  },
  primary: {
    backgroundColor: "#157bdc",
    color: "#ffffff",
    ...primaryBoxShadow
  },
  rose: {
    backgroundColor: "#eb3573",
    color: "#ffffff",
    ...roseBoxShadow
  },
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  infoIcon: {
    color: "#00d3ee"
  },
  successIcon: {
    color: "#43A546"
  },
  warningIcon: {
    color: "#ffa21a"
  },
  dangerIcon: {
    color: "#f55a4e"
  },
  primaryIcon: {
    color: "#157bdc"
  },
  roseIcon: {
    color: "#eb3573"
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  }
};

export default snackbarStyle;
