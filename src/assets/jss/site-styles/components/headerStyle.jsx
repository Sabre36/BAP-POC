import {
    container,
    defaultFont,
    transition,
    boxShadow,
    drawerWidth
} from "assets/jss/global-styles.jsx";

const headerStyle = theme => ({
    appBar: {
        display: "flex",
        border: "0",
        borderRadius: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "fff",
        width: "100%",
        backgroundColor: "rgba(0,84,164,.9)" /*"#0054a4" */,
        boxShadow:
        "0 4px 18px 0px rgba(0, 84, 164, 0.12), 0 7px 10px -5px rgba(0, 84, 164, 0.15)",
        transition: "all 150ms ease 0s",
        alignItems: "center",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        position: "relative",
        zIndex: "unset",
        maxHeight: "120px"
    },
    absolute: {
        position: "absolute",
        zIndex: "1100"
    },
    fixed: {
        position: "fixed",
        zIndex: "1100"
    },
    container: {
        ...container,
        minHeight: "40px",
        flex: "1",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap",
    },
    flex: {
        flex: 1
    },
    title: {
        ...defaultFont,
        lineHeight: "30px",
        fontSize: "24px",
        fontWeight: "500",
        textTransform: "none",
        color: "inherit",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("md")]: {
            fontSize: "18px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "24px"
        },
        "&:hover,&:focus": {
            color: "inherit",
            background: "transparent"
        }
    },
    brand: {
        lineHeight: "30px",
        whiteSpace: "nowrap",
    },
    appResponsive: {
        margin: "20px 10px"
    },
    transparent: {
        backgroundColor: "transparent !important",
        boxShadow: "none",
        color: "#FFFFFF"
    },
    semiTransparent: {
        backgroundColor: "rgba(0,0,0,.2) !important",
        boxShadow: "none",
        color: "#FFFFFF",
        maxHeight: "120px"
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121 !important",
        maxHeight: "120px",
        boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
        maxHeight: "120px",
        backgroundColor: "#fff !important",
        boxShadow:
        "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        width: drawerWidth,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        maxHeight: "1200px",
        right: "0",
        left: "auto",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        ...transition
    },
});

export default headerStyle;
