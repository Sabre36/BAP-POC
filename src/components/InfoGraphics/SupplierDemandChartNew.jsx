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
                <strong>Demand risk</strong> is defined as demand exceeding shipments.
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


class SupplierDemandChart extends React.Component {

    state = {
        units: 'MT'
    }

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let data = [];
        let rejects = 0;
        let units = this.state.units;

        //console.log("SCORECARD:" + JSON.stringify(scorecardData));

        scorecardData.forEach(function(section) {
            let r = section.riskData;

            r.forEach(function(el) {
                let percent = 100 * (el.shipped - el.demand) / ((el.shipped + el.demand) / 2);

                el.demand_kg = el.demand * 1000;
                el.demand_lbs = el.demand * 2204.62;

                el.shipped_kg = el.shipped * 1000;
                el.shipped_lbs = el.shipped * 2204.62;

                el.curUnits = units;

                // drop missing records
                if (isNaN(percent)) {
                    percent = 0;
                    rejects+=1;
                } else if (isNaN(el.shipped) || el.shipped === 0 || el.shipped === null ) {
                    percent = 0;
                    rejects+=1;
                }
                else {
                    el.percent = percent;
                    el.label = el.name;

                    data.push(el);
                }
            });
        });

        data.SortBy(el => el.percent, true);
        //console.log("DEMAND RISK: " + JSON.stringify(data));

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Risk - Supplier shipments meeting demand
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

                        {data.map((item) =>
                            <ProgressBar key={GuidGenerator()} label={item.label} percent={item.percent} tooltipData={item} />
                        )}
                        </div>
                    </Card>
                </div>
            );
        }
    }

export default withStyles(infoGraphicStyle)(SupplierDemandChart);
