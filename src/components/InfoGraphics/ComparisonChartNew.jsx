import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, Tooltip,Cell, ResponsiveContainer } from 'recharts';
import { GuidGenerator, ToCommas } from './../../views/PortalPage/Helpers/Utils.js';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import scorecardData from './../../assets/data/scorecard.json';

const COLORS = ['#02419A', '#8AA2C8', '#4C8623'];

const tooltipTitle = () => {
    return (
        <Typography>
            <strong>Projected</strong> volume is compared to <strong>same year</strong> shipments and <strong>production</strong> (from audit data).
        </Typography>
    );
};

class ComparisonChart extends React.Component {
    state = {
        open: false,
        data: [],
        units: 'MT'
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

    componentDidMount(){
        this.processData();
    }

    async processData() {
        let transform = [];
        let units = this.state.units;

        scorecardData.forEach(function(section) {
            let cd = section.comparisonData;
            console.log("COMPARISON CHART 1" + JSON.stringify(cd) );

            cd.forEach(function(el) {
                el.volume_kg = el.volume * 1000;
                el.volume_lbs = el.volume * 2204.62;
                el.units = units;

                transform.push(el);
            });
        });


        await this.setState({
            data: transform
        });

        console.log("COMPARISON CHART 2" + JSON.stringify(this.state.data) );
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.cardLarge}>
                <ClickAwayListener onClickAway={this.handleTooltipClose}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Demand versus capacity
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
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon} onClick={this.handleTooltipOpen}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </Tooltip>
                        </h4>
                    </CardActions>


                    <ResponsiveContainer width="90%" height={300}>

                        <BarChart data={this.state.data}
                            margin={{top: 5, right: 30, left: 100, bottom: 5}}>
                               <XAxis dataKey="name" />
                               <YAxis allowDataOverflow={true} padding={{left: 30, right: 30}}/>
                               <Tooltip/>
                               <Bar dataKey="volume" fill="#8884d8" padding={{left: 30, right: 30}}>
                                {
                                    this.state.data.map((entry, index) => {
                                        return
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
                                            <Cell fill={COLORS[index % COLORS.length]} />
                                        </Tooltip>;

                                    })
                                }
                               </Bar>
                          </BarChart>
                    </ResponsiveContainer>
                </ClickAwayListener>
            </Card>
        </div>
    );
}
}



export default withStyles(infoGraphicStyle)(ComparisonChart);
