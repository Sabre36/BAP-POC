import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoGraphicIcon1 from "./../Icons/InfoGraphicIcon1.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";


class InfoGraphic1 extends React.Component {
    render() {
        const { classes } = this.props;
        const shipped = {volume: 28.9, label: 2018};
        const demand = {volume: 24.9, label: 2017};
        let delta = Math.round( ((shipped.volume - demand.volume) / shipped.volume * 100));


        return (
            <div>
                <Card className={classes.card} style={{backgroundColor: '#02419A'}} >
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
                                <GridItem xs={2} sm={2} md={2} lg={2} className={classes.icon}>
                                    <InfoGraphicIcon1 />
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} lg={4} className={classes.title}>
                                    {demand.volume}
                                    <label className={classes.legend}>Demand ({demand.label})</label>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={2} lg={2} className={classes.title}>
                                    {shipped.volume}
                                    <label className={classes.delta}>{delta}%
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

export default withStyles(infoGraphicStyle)(InfoGraphic1);
