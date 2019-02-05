import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoGraphicIcon2 from "./../Icons/InfoGraphicIcon2.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

class InfoGraphic2 extends React.Component {
    render() {
        const { classes } = this.props;

        const production1 = {volume: 28.9, label: 2017};
        const production2 = {volume: 24.9, label: 2018};
        let delta = Math.round(((production2.volume - production1.volume) / production2.volume * 100));

        return (
            <div>
                <Card className={classes.card} style={{backgroundColor: '#539127'}}>
                    <div className={classes.heading}>
                        Production (YoY) &nbsp;

                        <Tooltip classes={{ tooltip: classes.lightTooltip }}
                            title="The audited production volume between 2016 and 2017.">
                            <span className={classes.tooltip}>
                                <i className={"fa fa-sm fa-info-circle"}/>
                            </span>
                        </Tooltip>
                    </div>
                    <CardContent >
                        <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                            <GridContainer>
                                <GridItem md={3} className={classes.icon}>
                                    <InfoGraphicIcon2 />
                                </GridItem>
                                <GridItem md={4} className={classes.title}>
                                    {production1.volume}
                                    <label className={classes.legend}>{production1.label}</label>
                                </GridItem>
                                <GridItem md={4} className={classes.title}>
                                    {production2.volume}

                                    <label className={classes.delta}>{delta}%
                                        <span className={classes.arrows}>
                                            { delta < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { delta > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>

                                    <label className={classes.legend}>{production2.label}</label>
                                </GridItem>
                            </GridContainer>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(InfoGraphic2);
