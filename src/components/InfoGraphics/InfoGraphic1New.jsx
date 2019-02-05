import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { InfoGraphicIcon1 } from "./../Icons/SVGIcons";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import { Round } from './../../views/PortalPage/Helpers/Utils.js';
import scorecardData from 'assets/data/scorecard.json';

const tooltipTitle = (classes) => {
    return (
        <Typography className={classes.tooltipWrap}>
            A year over year comparison, when available, of shipments.
        </Typography>
    );
};

class InfoGraphic1 extends React.Component {
    state = {
        open: false,
        units: 'MT',
        pctDiff: 0,
        col1: 0,
        col2: 0,
        col1Label: '',
        col2Label: ''
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    componentDidMount(){
        this.processData();
    }

    async processData() {
        let i = 0, _col1, _col1Label, _col2, _col2Label, _pctDiff;


        scorecardData.forEach(function(section) {
            let info = section.infoGraphics1;

            info.forEach(function(el) {
                if (i == 0) {
                    _col1 = el.shipped;
                    _col1Label = el.period;
                }
                else if (i == 1) {
                    _col2 = el.shipped;
                    _col2Label = el.period;
                }
                i++;
            });
        });

        _pctDiff = 100 * (_col2 - _col1) / ((_col2 + _col1) / 2);

        await this.setState({
            pctDiff: Round(_pctDiff, 1),
            col1: _col1,
            col2: _col2,
            col1Label: _col1Label,
            col2Label: _col2Label,
        });

        console.log('INFOGRAPHIC1 STATE: ' + JSON.stringify(this.state));
    }

    render() {
        const { classes } = this.props;


        return (
            <div>
                <Card className={[classes.card, classes.infoGraphics1Card]}>
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <div className={classes.heading} onClick={this.handleTooltipOpen}>
                            Supply chain
                            <Tooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={this.handleTooltipClose}
                                open={this.state.open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title={tooltipTitle(classes)}>
                                <span className={classes.tooltipIconLight} >
                                    <i className={"fa fa-sm fa-info-circle"} />
                                </span>
                            </Tooltip>
                        </div>

                        <CardContent >
                            <GridContainer className={classes.infoGraphicContainer}>
                                <GridItem xs={2} xs={2} md={2} className={classes.icon}>
                                    <InfoGraphicIcon1 />
                                </GridItem>

                                <GridItem xs={5} sm={5} md={5} className={classes.indicator}>
                                    {this.state.col1}
                                    <label className={classes.legend}>{this.state.col1Label}</label>
                                </GridItem>

                                <GridItem xs={5} sm={5} md={5} className={classes.indicator}>
                                    {this.state.col2}

                                    <label className={classes.delta}>{this.state.pctDiff}%
                                        <span className={classes.arrows}>
                                            { this.state.pctDiff < 0 && <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>}
                                            { this.state.pctDiff > 0 && <i className={"fa fa-md fa-arrow-up"} title="Increase"/>}
                                        </span>
                                    </label>

                                    <label className={classes.legend}>{this.state.col2Label}</label>
                                </GridItem>
                            </GridContainer>
                        </CardContent>
                </ClickAwayListener>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(InfoGraphic1);
