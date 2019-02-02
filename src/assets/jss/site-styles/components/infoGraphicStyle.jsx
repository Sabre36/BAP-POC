

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
        color: 'rgba(0,0,0,.84)',
        paddingLeft: '4px',
        fontSize: '18px !important',
        cursor: 'pointer'
    },
    tooltipCursor: {
        cursor: 'pointer'
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
