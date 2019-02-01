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

        if (pct < -10.0 ) {
            adjPercent = 100;
            color = 'rgba(171,5,32,.9)';
        } else if (pct < 0 && pct > -10.0) {
            adjPercent = 75;
            color = 'rgba(228,136,0,.9)';
        } else if (pct >= 0 && pct < 10.0) {
            adjPercent = 50;
            color = '#65B12F';
        } else {
            adjPercent = 25;
            color = 'rgba(55,97,26,.9)';
        }

        // if (pct < 0) {
        //     adjPercent = 100;
        //     color = 'rgba(171,5,32,.9)'
        // } else if (pct >= 0 && pct < 5.0) {
        //     adjPercent = 80;
        //     color = 'rgba(228,136,0,.9)';
        // } else if (pct >= 5.0 && pct < 10.0 ) {
        //     adjPercent = 60;
        //     color = 'rgba(255,204,3,.9)';
        // } else if (pct >= 10.0 && pct < 20.0) {
        //     adjPercent = 40;
        //     color = 'rgba(#65B12F, .9)';
        // } else {
        //     adjPercent = 20;
        //     color = 'rgba(55,97,26,.9)';
        // }

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
        let projected = 0;
        let production = 0;
        let dilutedProduction = 0;

        projected = units === "MT" ? this.props.tooltipData.projected : units === "kg" ? this.props.tooltipData.projected_kg : this.props.tooltipData.projected_lbs;
        production = units === "MT" ? this.props.tooltipData.production : units === "kg" ? this.props.tooltipData.production_kg : this.props.tooltipData.production_lbs;
        dilutedProduction = units === "MT" ? this.props.tooltipData.dilutedProduction : units === "kg" ? this.props.tooltipData.dilutedProduction_kg : this.props.tooltipData.dilutedProduction_lbs;

        let delta = production - projected;
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
                                        <span className="progress-tooltip-label">Projected:</span>
                                        <span className="progress-tooltip-value">{Round(projected, 1)} {units}</span>
                                    </li>

                                    <li>
                                        <span className="progress-tooltip-label">Production:</span>
                                        <span className="progress-tooltip-value">{Round(production, 1)} {units}</span>
                                    </li>

                                    <li>
                                        <span className="progress-tooltip-label">Production (diluted):</span>
                                        <span className="progress-tooltip-value">{Round(dilutedProduction, 1)} {units}</span>
                                    </li>
                                    <li>
                                        <span className="progress-tooltip-label">Dilution ratio:</span>
                                        <span className="progress-tooltip-value">{Round(this.props.tooltipData.dilutionRatio, 2)}</span>
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
