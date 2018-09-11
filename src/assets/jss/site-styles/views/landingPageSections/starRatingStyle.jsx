import { title } from "assets/jss/global-styles.jsx";

const starRatingStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        fontSize: "36px",
        fontWeight: "700"
    },
    whitetitle: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none",
        color: "#fff"
    },
    typography: {
        fontSize: "17px",
        fontWeight: "300",
        color: "#4a4a4a",
    },
    whitetext: {
        fontSize: "17px",
        fontWeight: "300",
        color: "#fff",
    }
};

export default starRatingStyle;
