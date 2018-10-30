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
    tooltipCursor: {
        cursor: 'pointer'
    },
    lightTooltip: {
        background: theme.palette.common.white,
        color: theme.palette.text.primary,
        boxShadow: theme.shadows[1],
        fontSize: 13,
    },
});

export default infoGraphicStyle;
