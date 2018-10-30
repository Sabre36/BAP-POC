import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StarIcon from "@material-ui/icons/StarRate";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FishIcon from "./../Icons/FishIcon.jsx";
import Tooltip from '@material-ui/core/Tooltip';

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

const styles = theme => ({
    card: {
        width: '100%',
        background: "#02419A",
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

class InfoGraphic1 extends React.Component {
    render() {
        const { classes } = this.props;
        const shipped = {volume: 28.9, label: 2016};
        const demand = {volume: 24.9, label: 2017};
        let delta = round( ((shipped.volume - demand.volume) / shipped.volume * 100), 1);

        //delta = round(delta, 1);

        return (
            <div>
                <Card className={classes.card} >
                    <div className={classes.heading}>
                        Demand vs. Shipped &nbsp;
                        <Tooltip classes={{ tooltip: classes.lightTooltip }}
                            title="The audited production volume from 2017.">
                            <span className={classes.tooltip}>
                                <i className={"fa fa-sm fa-info-circle"}/>
                           </span>
                       </Tooltip>
                    </div>
                    <CardContent >
                        <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                            <GridContainer>
                                <GridItem md={3} className={classes.icon}>
                                    <FishIcon />
                                </GridItem>
                                <GridItem md={4} className={classes.title}>
                                    {demand.volume}
                                    <label className={classes.legend}>Demand ({demand.label})</label>
                                </GridItem>
                                <GridItem md={4} className={classes.title}>
                                    {shipped.volume}
                                    <label className={classes.delta}>{delta}
                                        <span className={classes.arrows}>
                                            { delta < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { delta > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>

                                    <label className={classes.legend}>Shipped ({shipped.label})</label>
                                </GridItem>
                            </GridContainer>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(InfoGraphic1);
