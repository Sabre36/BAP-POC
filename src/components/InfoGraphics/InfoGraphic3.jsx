import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TrendIcon from "./../Icons/TrendIcon.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";


class InfoGraphic3 extends React.Component {

    render() {

        const { classes } = this.props;
        const yr1 = {suppliers: 3, plants: 5, farms: 11};
        const yr2 = {suppliers: 3, plants: 4, farms: 18};

        let delta1 = Math.round( ((yr2.suppliers - yr1.suppliers) / yr1.suppliers * 100));
        //delta1 = (delta1 < 0 || delta1 > 0 ? delta1 : 0);

        let delta2 = Math.round( ((yr2.plants - yr1.plants) / yr1.plants * 100));
        //delta2 = (delta2 < 0 || delta2 > 0 ? delta2 : null);

        let delta3 = Math.round( ((yr2.farms - yr1.farms) / yr1.farms * 100));
        //delta3 = (delta3 < 0 || delta3 > 0 ? delta3 : null);

        return (
            <div>
                <Card className={classes.card} style={{backgroundColor: '#7E46B7'}}>
                    <div className={classes.heading}>
                        Supply Chain &nbsp;
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
                                    {/*
                                    <label className={classes.delta}>{delta1}%
                                        <span className={classes.arrows}>
                                            { delta1 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { delta1 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>
                                    */}

                                    <label className={classes.legend}>Suppliers</label>
                                </GridItem>
                                <GridItem md={3} className={classes.title}>
                                    {yr2.plants}
                                    {/*

                                    <label className={classes.delta}>{delta2}%
                                        <span className={classes.arrows}>
                                            { delta2 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { delta2 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>
                                    */}

                                    <label className={classes.legend}>Plants</label>
                                </GridItem>
                                <GridItem md={3} className={classes.title}>
                                    {yr2.farms}

                                    {/*
                                    <label className={classes.delta}>{delta3}%
                                        <span className={classes.arrows}>
                                            { delta3 < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { delta3 > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>
                                    */}

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

export default withStyles(infoGraphicStyle)(InfoGraphic3);
