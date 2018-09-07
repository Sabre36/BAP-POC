const parallaxHeaderStyle = {
    parallax: {
        height: "40vh",
        maxHeight: "70vh",
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
            background: "#157bdc"
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
    blurb: {
        textAlign: "left",
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "27px",
        textShadow: "1px 1px rgba(0,0,0,.1)"
    },
    small: {
        height: "380px"
    },
};

export default parallaxHeaderStyle;
