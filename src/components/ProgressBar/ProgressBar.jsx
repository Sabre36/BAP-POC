import React from 'react';
import './ProgressBar.css';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import withStyles from "@material-ui/core/styles/withStyles";
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

import {Round, GuidGenerator} from './../../views/PortalPage/Helpers/Utils.js';


class Filler extends React.Component {
    render() {

        let pct = this.props.percentage;
        let color;
        let adjPercent;
        let tt;


        if (pct >= 20.0) {
            adjPercent = 20;
            color = 'rgba(55,97,26,.9)';
        } else if (pct >= 0.0 && pct < 20.0) {
            adjPercent = 40;
            color = '#65B12F';
        } else if (pct >= -10.0 && pct < 0 ) {
            adjPercent = 60;
            color = 'rgba(255,204,3,.9)';
        }
        else if (pct >= -20.0 && pct < -10.0) {
            adjPercent = 80;
            color = 'rgba(248,156,5,.9)';
        }
        else {
            adjPercent = 100;
            color = 'rgba(171,5,32,.9)';
        }


        return (
            <div className="progress-filler" style={{ width: `${adjPercent}%`, backgroundColor: `${color}` }} />
        );
    }
}

class ProgressBar extends React.Component {
    state = {
        arrowRef: null,
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };



    render() {

        const { label } = this.props;
        const { classes } = this.props;
        const { percent } = this.props;

        let units = this.props.tooltipData.curUnits;
        let demand = 0;
        let shipped = 0;

        demand = units === "MT" ? this.props.tooltipData.demand : units === "kg" ? this.props.tooltipData.demand_kg : this.props.tooltipData.demand_lbs;
        shipped = units === "MT" ? this.props.tooltipData.shipped : units === "kg" ? this.props.tooltipData.shipped_kg : this.props.tooltipData.shipped_lbs;

        let delta = shipped - demand;
        let posSign = delta > 0 ? '+' : delta < 0 ? '-' : '';

        delta = Math.abs(delta);

        return (
            <div className="progress-container" >
                <label>{label}</label>
                <Tooltip
                    classes={{ tooltip: classes.lightTooltip }}
                    title={
                        <React.Fragment>
                            <Typography color="inherit">
                                <h5> <strong>{label}</strong></h5>
                                <Divider/>
                                <ul className="progress-tooltip-list">
                                    <li>
                                        <span className="progress-tooltip-label">Demand:</span>
                                        <span className="progress-tooltip-value">{Round(demand, 1)} {units}</span>
                                    </li>

                                    <li>
                                        <span className="progress-tooltip-label">Shipped:</span>
                                        <span className="progress-tooltip-value">{Round(shipped, 1)} {units}</span>
                                    </li>

                                    <li>
                                        <span className="progress-tooltip-label">Difference:</span>
                                        <span className="progress-tooltip-value">{posSign}{Round(delta, 1)}</span>
                                    </li>

                                    <li>
                                        <span className="progress-tooltip-label">Percent Difference:</span>
                                        <span className="progress-tooltip-value">{Round(percent, 1)}%</span>
                                    </li>
                                </ul>
                            </Typography>
                            <span className={classes.arrow} ref={this.handleArrowRef} />
                        </React.Fragment>
                    }
                    >
                    <div className="progress-bar">
                        <Filler percentage={percent}/>
                    </div>
                </Tooltip>
            </div>
        );
    }
}
export default withStyles(infoGraphicStyle)(ProgressBar);
