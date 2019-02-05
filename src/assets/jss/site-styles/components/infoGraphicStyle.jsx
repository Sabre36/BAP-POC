

const infoGraphicStyle = theme => ({
    card: {
        height: "140px",
        marginBottom: '15px'
    },
    cardLarge: {
        width: '100%',
        height: "375px",
        marginBottom: '20px'
    },
    infoGraphicContainer: {
        position: 'absolute',
        left: 0,
        padding: 0,
        margin: 0,
        width: '97%',
        //backgroundColor: 'cyan'
    },
    infoGraphics1Card: {
        backgroundColor: '#02419A'
    },
    infoGraphics2Card: {
        backgroundColor: '#539127'
    },
    infoGraphics3Card: {
        backgroundColor: '#7E46B7'
    },
    heading: {
        textAlign: 'right',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '400',
        marginRight: '15px',
        marginTop: '15px',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
            //color: 'orange'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
            //color: 'yellow'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "18px",
            //color: 'purple'
        },
    },
    indicator: {
        color: '#fff',
        fontSize: '42px',
        textAlign:  'center',
        margin: 0,
        display: 'block',
        paddingTop: '6px',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        //backgroundColor: 'orange',
        [theme.breakpoints.down("lg")]: {
            fontSize: "32px",
            //color: 'red'
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "22px",
            //color: 'orange'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "32px",
            //color: 'yellow'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "32px",
            //color: 'purple'
        },
    },
    legend: {
        fontSize: '14px',
        color: '#fff',
        margin: 0,
        marginTop: '12px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        [theme.breakpoints.down("md")]: {
            fontSize: "13px"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            //color: 'yellow'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
            //color: 'purple'
        },
    },
    icon: {
        paddingLeft: '12px',
        display: 'inherit',

        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
        [theme.breakpoints.down("sm")]: {
            display: 'inherit'
        },
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        },
    },
    delta: {
        fontSize: '13px',
        color: '#fff',
        marginLeft: '4px',
        verticalAlign: 'middle',
    },
    arrows: {
        marginLeft: '4px'
    },

    tooltipIcon: {
        color: 'rgba(0,0,0,.84)',
        paddingLeft: '4px',
        fontSize: '18px !important',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
    },
    tooltipIconLight: {
        color: '#fff',
        paddingLeft: '4px',
        fontSize: '18px !important',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
    },
    tooltipCursor: {
        cursor: 'pointer'
    },
    tooltipWrap: {
        fontSize: '16px',
        whiteSpace: 'normal'
    },
    lightTooltip: {
        padding: '15px',
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        opacity: '1.0!important',
        boxShadow: theme.shadows[1],
        border: '1px solid rgba(0,0,0,.1)',
        textAlign: 'left',
        fontSize: '16px',
    },
    infoButtonTip: {
        padding: '10px',
        minWidth: '425px',
        lineHeight: '24px',
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        opacity: '1.0!important',
        boxShadow: theme.shadows[1],
        border: '1px solid rgba(0,0,0,.1)',
        textAlign: 'left',
        fontSize: '16px',
    },
    darkTooltip: {
        fontSize: 15,
        padding: '10px'
    },
    nonConfTable: {
        margin: 0,
        padding: 0,
        marginTop: '-10px!important',
        overflowX: 'hidden'
    },
    tr: {
        maxHeight: '20px',
        padding: 0,
        margin: 0,
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.075) !important',
        },
    },
    td: {
        fontSize: '15px',
        fontWeight: 300,
        whiteSpace: 'nowrap',
        '&:first-child': {
            maxWidth: '125px',
            whiteSpace: 'nowrap',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            paddingLeft: '10px',
        }
    },
    tdtotal: {
        fontSize: '15px',
        fontWeight: 300,
        whiteSpace: 'nowrap',
        fontWeight: 400,
        backgroundColor: 'rgba(0,0,0,.05)'
    },

    th: {
        fontSize: '15px',
        fontWeight: 400,
        whiteSpace: 'nowrap',
        backgroundColor: 'rgba(0,0,0,.05)'
    },
    redCircle: {
        color: '#ab0520',
        marginLeft: '6px',
        fontSize: '14px'
    },
    orangeCircle: {
        color: '#F89C05',
        marginLeft: '6px',
        fontSize: '14px'
    },
    yellowCircle: {
        color: '#FFCC03',
        marginLeft: '6px',
        fontSize: '14px'
    },
    greenArrow: {
        color: '#37611A'
    },
    redArrow: {
        color: '#ab0520',
    },
    nonconformitiesTable: {
        paddingRight: '40px!important',
        paddingLeft: '40px!important',
        fontSize: '20px!important',
    },
    iconButtonStyle: {
        color: '000',
        opacity: '.86',
        height: '18px',
        margin: 0
    },
    infoGraphicTitle: {
        fontWeight: 400,
        fontSize: '20px'
    },
    riskBarsContainer: {
        maxHeight: '250px',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: 'calc(100% - 55px)',
        position: 'absolute',
        top: '95px',
    },
    riskLabelLowest: {
        position: 'absolute',
        left: '215px',
        top: '80px',
        fontSize: '12px',
        textTransform: 'uppercase'
    },
    riskLabelHighest: {
        position: 'absolute',
        right: '55px',
        top: '80px',
        fontSize: '12px',
        textTransform: 'uppercase'
    },
    toggleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleButton: {
        color: '#157bdc',
        textTransform: 'capitalize'
    },
    toggleButtonSelected: {
        color: '#43A546',
        textTransform: 'capitalize'
    }
});

export default infoGraphicStyle;
