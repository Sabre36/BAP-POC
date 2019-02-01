import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
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
                <strong>Risk</strong> is defined when projected volume exceeds production volume.
                <br/>
                <br/>
                <table>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(55,97,26)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Production 10% or greater than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: '#65B12F', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Production 0 to 10% greater than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(228,136,0)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Production 0 to-10% or less than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(171,5,32)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Production -10% or less than projected volume</td>
                    </tr>
                </table>

            { rejects > 0 &&
                <div>
                    <br/>
                    <br/>
                    Note: {rejects} supplier(s) were missing data and were omitted from this chart.
                </div>
            }
        </Typography>
    );
};


class SupplierRiskChart extends React.Component {

    state = {
        units: 'MT',
        open: false
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

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
                let percent = 100 * (el.production - el.projected) / ((el.production + el.projected) / 2);

                el.projected_kg = el.projected * 1000;
                el.projected_lbs = el.projected * 2204.62;

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
        //console.log("projected RISK: " + JSON.stringify(data));

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <CardActions>
                            <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                                <MenuIcon className={classes.iconButtonStyle}/>
                            </IconButton>

                            <h4 className={classes.infoGraphicTitle}>
                                Risk - Production meeting projected volume

                                <Tooltip
                                    classes={{ tooltip: classes.infoButtonTip }}
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={this.handleTooltipClose}
                                    open={this.state.open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={tooltipTitle({rejects})}>
                                    <span className={classes.tooltipIcon} onClick={this.handleTooltipOpen}>
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
                    </ClickAwayListener>
                </Card>
            </div>
        );
    }
}



export default withStyles(infoGraphicStyle)(SupplierRiskChart);
