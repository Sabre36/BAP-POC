import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { InfoGraphicIcon3 } from "./../Icons/SVGIcons";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import { Round } from './../../views/PortalPage/Helpers/Utils.js';
import scorecardData from 'assets/data/scorecard.json';

const tooltipTitle = (classes) => {
    return (
        <Typography className={classes.tooltipWrap}>
            The number of facilities for the supply chain.
        </Typography>
    );
};

class InfoGraphic2 extends React.Component {
    state = {
        open: false,
        units: 'MT',
        reportType: '',
        period: '',
        col1: 0,
        col2: 0,
        col3: 0,
        col1Label: '',
        col2Label: '',
        col3Label: ''
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
        let _type, _period, _col1, _col2, _col3, _col1Label, _col2Label, _col3Label;


        scorecardData.forEach(function(section) {

            let info = section.infoGraphics3;
             _type = section.type;

            // Note: to be orthgonal, treating this as though there are multiple rows of data.
            info.forEach(function(el) {
                _period = el.period;

                if (_type === "endorser") {
                    _col1 = el.suppliers;
                    _col1Label = 'Suppliers';
                } else {
                    _col1 = el.endorsers;
                    _col1Label = 'Endorsers';
                }

                _col2 = el.plants;
                _col2Label = "Plants";
                _col3 = el.farms;
                _col3Label = "Farms";

            });
        });

        await this.setState({
            reportType: _type,
            period: _period,
            col1: _col1,
            co12: _col2,
            col3: _col3,
            col1Label: _col1Label,
            col2Label: _col2Label,
            col3Label: _col3Label
        });

        console.log('INFOGRAPHIC3 STATE: ' + JSON.stringify(this.state));
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={[classes.card, classes.infoGraphics3Card]}>
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
                                    <InfoGraphicIcon3 />
                                </GridItem>

                                <GridItem xs={4} sm={4} md={4} className={classes.indicator}>
                                    {this.state.col1}
                                    <label className={classes.legend}>{this.state.col1Label}</label>
                                </GridItem>

                                <GridItem xs={3} sm={3} md={3} className={classes.indicator}>
                                    {this.state.col2}
                                    <label className={classes.legend}>{this.state.col2Label}</label>
                                </GridItem>

                                <GridItem xs={3} sm={3} md={3} className={classes.indicator}>
                                    {this.state.col3}
                                    <label className={classes.legend}>{this.state.col3Label}</label>
                                </GridItem>

                            </GridContainer>
                        </CardContent>
                    </ClickAwayListener>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(InfoGraphic2);
