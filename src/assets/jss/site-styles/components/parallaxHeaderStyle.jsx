const parallaxHeaderStyle = {
    parallax: {
        height: "40vh",

        //maxHeight: "70vh",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
    },
    filter: {
        "&:before": {
            background: "#157bdc" /* first level section */
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    container: {
        //backgroundColor: "rgba(0,0,0,.15)",
        border: "1px solid rgba(0,0,0,.05)",
        padding: "15px",
        borderTopRightRadius: "20px",
        position: "absolute",
        bottom: "0",
        textAlign: "left"
    },
    heading: {
        fontSize: "40px",
        fontWeight: "400"
    },
    blurb: {
        textAlign: "left",
        fontSize: "20px",
        fontWeight: "400",
        lineHeight: "27px",
        textShadow: "1px 1px rgba(0,0,0,.05)",
    },
    moreLessLightText: {
        color: "#157bdc",
        fontWeight: "400",
        textTransform: "lowercase",
        fontSize: "13px"
    },
    small: {
        height: "380px"
    },
};

export default parallaxHeaderStyle;
