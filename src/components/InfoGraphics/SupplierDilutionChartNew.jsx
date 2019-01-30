import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import Typography from '@material-ui/core/Typography';

import scorecardData from './../../assets/data/scorecard.json';

import SortBy from './../../views/PortalPage/Helpers/Utils.js';
import {GuidGenerator} from './../../views/PortalPage/Helpers/Utils.js';

import ProgressBar from './../ProgressBar/ProgressBar.jsx';

const tooltipTitle = ({rejects}) => {
    return (
        <Typography>
                <strong>Dilution risk</strong> is defined as shipments being diluted because of farms serving multiple supply chains <strong>-and-</strong>demand exceeding the dilulted shipments.
                <br/>
                <br/>
            { rejects > 0 &&
                <div>
                    Note: {rejects} supplier(s) were missing data and were omitted from this chart.
                </div>
            }
        </Typography>
    );
};


class SupplierDilutionChart extends React.Component {

    state = {
        units: 'MT'
    }

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let dilutedData = [];
        let rejects = 0;
        let units = this.state.units;

        scorecardData.forEach(function(section) {
            let r = section.riskData;

            r.forEach(function(el) {

                // compute the dilution based on the ratio
                let dilutedShipped = el.shipped * el.dilutionRatio;
                el.dilutedShipped = dilutedShipped;
                el.ratio = el.dilutionRatio;

                // recalc the percent
                let percent = 100 * (el.dilutedShipped - el.demand) / ((el.dilutedShipped + el.demand) / 2);

                // convert MT to kg/lbs
                el.demand_kg = el.demand * 1000;
                el.demand_lbs = el.demand * 2204.62;

                el.shipped_kg = el.dilutedShipped * 1000;
                el.shipped_lbs = el.dilutedShipped * 2204.62;

                el.dilutedShipped_kg = el.dilutedShipped * 1000;
                el.dilutedShipped_lbs = el.dilutedShipped * 2204.62;

                el.curUnits = units;

                // drop missing records
                if (isNaN(percent)) {
                    percent = 0;
                    rejects+=1;
                } else if (isNaN(el.dilutedShipped) || el.dilutedShipped === 0 || el.dilutedShipped === null ) {
                    percent = 0;
                    rejects+=1;
                }
                else {
                    el.percent = percent;
                    el.label = el.name;
                    dilutedData.push(el);
                }
            });
        });

        dilutedData.SortBy(el => el.percent, true);
        //console.log("DILUTED RISK: " + JSON.stringify(dilutedData));

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Risk - Supplier diluted shipments meeting demand
                            <Tooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle({rejects})}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </Tooltip>
                        </h4>
                    </CardActions>

                    <span>
                        <label className={classes.riskLabelLowest}>Lowest Risk</label>
                        <label className={classes.riskLabelHighest}>Highest</label>
                    </span>

                    <div className={classes.riskBarsContainer} >

                        {dilutedData.map((dilutedItem) =>
                            <ProgressBar key={GuidGenerator()} label={dilutedItem.label} percent={dilutedItem.percent} tooltipData={dilutedItem} />
                        )}
                        </div>
                    </Card>
                </div>
            );
        }
    }



export default withStyles(infoGraphicStyle)(SupplierDilutionChart);
