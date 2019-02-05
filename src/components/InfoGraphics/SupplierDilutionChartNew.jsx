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
                <strong>Risk</strong> is defined when projected volume, utilizing a dilution algorithm, exceeds production volume.
                <br/>
                <br/>
                <table>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(55,97,26)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Diluted production 10% or greater than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: '#65B12F', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Diluted roduction 0 to 10% greater than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(228,136,0)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Diluted production 0 to-10% or less than projected volume</td>
                    </tr>
                    <tr style={{verticalAlign: 'top'}}>
                        <td><div style={{backgroundColor: 'rgb(171,5,32)', width: '15px', height: '15px', marginRight: '4px'}}/></td> <td>Diluted production -10% or less than projected volume</td>
                    </tr>
                </table>


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
        units: 'MT',
        open: false
    }

    handleClick() {
        alert('click');
    }

    handleTooltipClose = () => {
        this.setState({ open: false });
    };

    handleTooltipOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const { classes } = this.props;

        let dilutedData = [];
        let rejects = 0;
        let units = this.state.units;

        scorecardData.forEach(function(section) {
            let r = section.riskData;

            r.forEach(function(el) {

                // compute the dilution based on the ratio
                el.dilutedProduction = el.production * el.dilutionRatio;
                //el.ratio = el.dilutionRatio;

                // recalc the percent
                let percent = 100 * (el.dilutedProduction - el.projected) / ((el.dilutedProduction + el.projected) / 2);

                // convert MT to kg/lbs
                el.projected_kg = el.projected * 1000;
                el.projected_lbs = el.projected * 2204.62;
                el.production_kg = el.dilutedProduction * 1000;
                el.production_lbs = el.dilutedProduction * 2204.62;
                el.dilutedProduction_kg = el.dilutedProduction * 1000;
                el.dilutedProduction_lbs = el.dilutedProduction * 2204.62;

                el.curUnits = units;

                // drop missing records
                if (isNaN(percent)) {
                    percent = 0;
                    rejects+=1;
                } else if (isNaN(el.dilutedProduction) || el.dilutedProduction === 0 || el.dilutedProduction === null ) {
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
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <CardActions>
                            <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                                <MenuIcon className={classes.iconButtonStyle}/>
                            </IconButton>

                            <h4 className={classes.infoGraphicTitle}>
                                Production (diluted) meeting projected volume

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

                            {dilutedData.map((dilutedItem) =>
                                <ProgressBar key={GuidGenerator()} label={dilutedItem.label} percent={dilutedItem.percent} tooltipData={dilutedItem} />
                            )}
                            </div>
                        </ClickAwayListener>
                    </Card>
                </div>
            );
        }
    }



export default withStyles(infoGraphicStyle)(SupplierDilutionChart);
