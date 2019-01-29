

const infoGraphicStyle = theme => ({
    card: {
        width: '100%',
        height: "140px",
        marginBottom: '20px'
    },
    cardLarge: {
        width: '100%',
        height: "375px",
        marginBottom: '20px'
    },
    heading: {
        height: '22px',
        textAlign: 'right',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '400',
        marginRight: '15px',
        marginTop: '15px'
    },
    title: {
        color: '#fff',
        fontSize: '42px',
        textAlign:  'center',
        margin: 0,
        display: 'block',
        paddingTop: '6px',

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
    legend: {
        fontSize: '14px',
        color: '#fff',
        margin: 0,
        paddingTop: '6px',
        display: 'block'
    },
    icon: {
        paddingLeft: '12px'
    },
    tooltipIcon: {
        color: 'rgba(0,0,0,.33)',
        paddingLeft: '4px',
        fontSize: '18px !important'
    },
    tooltipCursor: {
        cursor: 'pointer'
    },
    lightTooltip: {
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
        fontSize: '15px',
        padding: '15px'
    },
    darkTooltip: {
        fontSize: 15,
        padding: '10px'
    },
    nonConfTable: {
        margin: 0,
        padding: 0,
        marginTop: '-10px!important'
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
        fontSize: '14px',
        fontWeight: 300,
        whiteSpace: 'nowrap',
        maxWidth: '20%'
    },
    th: {
        fontSize: '14px',
        fontWeight: 400,
        whiteSpace: 'nowrap',
    },
    redCircle: {
        color: '#ab0520',
        paddingRight: '6px'
    },
    orangeCircle: {
        color: '#F89C05',
        paddingRight: '6px'
    },
    yellowCircle: {
        color: '#FFCC03',
        paddingRight: '6px'
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
    }
});

export default infoGraphicStyle;
