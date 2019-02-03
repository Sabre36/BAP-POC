import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TrendIcon from "./../Icons/TrendIcon.jsx";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import scorecardData from 'assets/data/scorecard.json';


const tooltipTitle = (period) => {

    return (
        <Typography>
            The number of facilities as of {period}.
        </Typography>
    );
};

class InfoGraphic3 extends React.Component {
    state = {
        open: false,
        period: null,
        suppliers: 0,
        plants: 0,
        farms: 0
    }

    componentDidMount(){
        this.processData();
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    async processData() {
        let s =0, p = 0, f = 0, per = 0;

        scorecardData.forEach(function(section) {
            let info = section.infoGraphics3;

            // Note: to be orthgonal, treating this as though there are multiple rows of data.
            info.forEach(function(el) {
                per = el.period;
                s = el.suppliers;
                p = el.plants;
                f = el.farms;
            });
        });

        await this.setState({
            period: per,
            suppliers: s,
            plants: p,
            farms: f
        });

        //console.log('INFOGRAPHIC3 STATE: ' + JSON.stringify(this.state));
    }

    render() {

        const { classes } = this.props;


        return (
            <div>
                <Card className={[classes.card, classes.infoGraphics3Card]}>
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <div className={classes.heading}>
                            Supply Chain
                            <Tooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={this.handleTooltipClose}
                                open={this.state.open}
                                placement="bottom-end"
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={tooltipTitle(this.state.period)}>
                                <span className={classes.tooltipIconLight} onClick={this.handleTooltipOpen}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </Tooltip>
                        </div>

                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                <GridContainer>
                                    <GridItem xs={1} sm={1} md={1} lg={3} className={classes.icon}>
                                        <TrendIcon />
                                    </GridItem>

                                    <GridItem xs={1} sm={1} md={1} lg={3} className={classes.title}>
                                        {this.state.suppliers}
                                        <label className={classes.legend}>Suppliers</label>
                                    </GridItem>

                                    <GridItem xs={1} sm={1} md={1} lg={3} className={classes.title}>
                                        {this.state.plants}
                                        <label className={classes.legend}>Plants</label>
                                    </GridItem>

                                    <GridItem xs={1} sm={1} md={1} lg={3} className={classes.title}>
                                        {this.state.farms}
                                        <label className={classes.legend}>Farms</label>
                                    </GridItem>
                                </GridContainer>
                            </Typography>
                        </CardContent>
                    </ClickAwayListener>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(InfoGraphic3);
