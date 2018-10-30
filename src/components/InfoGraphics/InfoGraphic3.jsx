import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TrendIcon from "./../Icons/TrendIcon.jsx";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

const styles = theme => ({
    card: {
        width: '100%',
        background: "#7E46B7",
        height: "140px",
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



class InfoGraphic3 extends React.Component {



    render() {


        const { classes } = this.props;

        const yr1 = {suppliers: 3, plants: 5, farms: 11};
        const yr2 = {suppliers: 3, plants: 4, farms: 18};

        let delta1 = round( ((yr2.suppliers - yr1.suppliers) / yr1.suppliers * 100), 1);
        delta1 = (delta1 < 0 || delta1 > 0 ? delta1 : null);



        let delta2 = round( ((yr2.plants - yr1.plants) / yr1.plants * 100), 1);
        let delta3 = round( ((yr2.farms - yr1.farms) / yr1.farms * 100), 1);

        return (
            <div>
                <Card className={classes.card} >

                    <div className={classes.heading}>
                        Supply Chain (YoY) &nbsp;
                         <Tooltip classes={{ tooltip: classes.lightTooltip }}
                             title="Growth or decline of number of facilities in this supply chain from the previous calendar year.">
                             <span className={classes.tooltipCursor}>
                                 <i className={"fa fa-sm fa-info-circle"}/>
                            </span>
                        </Tooltip>
                    </div>

                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                <GridContainer>
                                    <GridItem md={3} className={classes.icon}>
                                        <TrendIcon />
                                    </GridItem>
                                    <GridItem md={3} className={classes.title}>
                                        {yr2.suppliers}

                                        <label className={classes.delta}>{delta1}
                                            <span className={classes.arrows}>
                                                { delta1 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                                { delta1 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                            </span>
                                        </label>

                                        <label className={classes.legend}>Suppliers</label>
                                    </GridItem>
                                    <GridItem md={3} className={classes.title}>
                                        {yr2.plants}

                                        <label className={classes.delta}>{delta2}
                                            <span className={classes.arrows}>
                                                { delta2 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                                { delta2 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                            </span>
                                        </label>

                                        <label className={classes.legend}>Plants</label>
                                    </GridItem>
                                    <GridItem md={3} className={classes.title}>
                                        {yr2.farms}

                                        <label className={classes.delta}>{delta3}
                                            <span className={classes.arrows}>
                                                { delta3 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                                { delta3 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                            </span>
                                        </label>

                                        <label className={classes.legend}>Farms</label>
                                    </GridItem>
                                </GridContainer>

                            </Typography>
                        </CardContent>

                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(InfoGraphic3);
