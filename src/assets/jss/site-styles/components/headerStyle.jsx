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
        zIndex: "unset"
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
        minHeight: "50px",
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
        borderRadius: "3px",
        textTransform: "none",
        color: "inherit",
        whiteSpace: "nowrap",
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
        paddingTop: "25px",
        color: "#FFFFFF"
    },
    dark: {
        color: "#FFFFFF",
        backgroundColor: "#212121 !important",
        boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
    },
    white: {
        border: "0",
        padding: "0.625rem 0",
        marginBottom: "20px",
        color: "#555",
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


    list: {
        ...defaultFont,
        fontSize: "15px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        marginTop: "0",
        color: "inherit",
    },
    listItem: {
        float: "left",
        fontSize: "15px",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                display: "block",
                height: "1px",
                marginLeft: "15px",
                backgroundColor: "#e5e5e5"
            }
        }
    },
    listItemText: {
        padding: "0 !important"
    },

    navLink: {
        color: "inherit",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "500",
        fontSize: "15px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
            color: "inherit",
            background: "rgba(200, 200, 200, 0.2)"
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        }
    },
    navLinkActive: {
        color: "inherit",
        fontSize: "15px",
        fontWeight: "500",
        backgroundColor: "rgba(255, 255, 255, 0.2)"
    },

});

export default headerStyle;
