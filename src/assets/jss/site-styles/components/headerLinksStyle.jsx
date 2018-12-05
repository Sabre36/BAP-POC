import { defaultFont } from "assets/jss/global-styles.jsx";
import tooltip from "assets/jss/site-styles/tooltipsStyle.jsx";

const headerLinksStyle = theme => ({
    topNavContainer: {
        margin: 0,
        marginTop: "10px",
        padding: 0,
        width: "100%",
        float: "right",
        whiteSpace: "no-wrap",
        overflow: "hidden",
        verticalAlign: "middle"
    },
    topNavList: {
        ...defaultFont,
        float: "right",
        margin: 0,
        padding: 0,
        listStyle: "none",
        color: "inherit",
        whiteSpace: "no-wrap",
    },
    list: {
        ...defaultFont,
        margin: "-10px",
        padding: 0,
        color: "inherit",
        whiteSpace: "no-wrap",
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
        [theme.breakpoints.down("md")]: {
            fontSize: "14px"
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            "&:after": {
                width: "calc(100% - 30px)",
                content: '""',
                fontSize: "14px",
                display: "block",
                height: "1px",
                marginLeft: "15px",
                backgroundColor: "#e5e5e5",
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
            background: "rgba(200, 200, 200, 0.3)"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            paddingRight: "6px",
            paddingLeft: "6px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            fontSize: "14px",
            color: "rgba(0,0,0,.84)",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            },
            "&:hover,&:focus": {
                color: "#fff",
                background: "#157bdc"
            },
        }
    },
    notificationNavLink: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        top: "4px"
    },
    registerNavLink: {
        top: "3px",
        position: "relative",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex"
    },
    navLinkActive: {
        color: "inherit",
        fontSize: "15px",
        fontWeight: "500",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        paddingRight: "14px",
        paddingLeft: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
            paddingRight: "7px",
            paddingLeft: "7px"
        },
    },
    icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
    },
    socialIcons: {
        position: "relative",
        fontSize: "24px !important",
        marginRight: "4px"
    },
    dropdownLink: {
        "&,&:hover,&:focus": {
            color: "inherit",
            textDecoration: "none",
            display: "block",
            padding: "10px 20px"
        }
    },
    ...tooltip
});

export default headerLinksStyle;
