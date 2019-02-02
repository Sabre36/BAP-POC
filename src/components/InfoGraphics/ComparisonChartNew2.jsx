import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import MUITooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend,Cell, CartesianGrid, ResponsiveContainer, LabelList} from 'recharts';
import {GuidGenerator, ToCommas} from './../../views/PortalPage/Helpers/Utils.js';
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

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;


  return (
    <g>
      <text x={x+width} y={y+width} fill="#000">
        {value}
      </text>
    </g>
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
                            Projected vs. shipped/production volumes
                            <MUITooltip
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
                            </MUITooltip>
                        </h4>
                    </CardActions>

                    <br/>
                    <br/>


                    <ResponsiveContainer  height="60%">
                        <BarChart width={400} height={200} data={this.state.data} layout="vertical" margin={{left: 50, right: 100}}>
                           <XAxis type="number" axisLine={false} axisLine={false} tickLine={false}  padding={{ left: 40 }}/>
                           <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={true} />
                           <Bar dataKey="volume" barSize={50}>
                               {
                                    this.state.data.map((entry, index) => {
                                        return <Cell fill={COLORS[index % COLORS.length]} />;
                                    })
                                }
                                <LabelList dataKey="volume" position="right" offset={40}  />
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
