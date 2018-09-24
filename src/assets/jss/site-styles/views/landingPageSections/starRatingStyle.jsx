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
        color: "#fff",
        fontSize: "36px",
    },
    typography: {
        fontSize: "20px",
        fontWeight: "300",
        color: "#212529",
    },
    whitetext: {
        fontSize: "18px",
        fontWeight: "300",
        color: "#fff",
    },
    icon: {
        height: "72px",
        width: "72px",
        color: "#147BDC"
    },
    whiteicon: {
        height: "72px",
        width: "72px",
        color: "#fff"
    },
    ratingText: {
        minHeight: "72px",
        color: "#147BDC",
        fontWeight: "500",
        paddingTop: "30px"
    },
    whiteRatingText: {
        minHeight: "72px",
        color: "#fff",
        fontWeight: "500",
        paddingTop: "30px"
    }


};

export default starRatingStyle;
