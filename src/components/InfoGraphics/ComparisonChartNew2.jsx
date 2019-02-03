import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip as TT, ResponsiveContainer, LabelList} from 'recharts';
import { GetVolumeByUnits } from './../../views/PortalPage/Helpers/Utils.js';
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

const dataTooltip = (units) => {
     //const { active } = this.props;
    //const {volume} = this.props;

  return (
      <div className="custom-tooltip">
        <p className="label">{units}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
  );
};

class CustomTooltip extends React.Component {
    render() {
        const { active } = this.props;
        const { payload, label } = this.props;

        return (
            <div className="custom-tooltip">
              <p className="label">{`${label} : ${payload[0].value}`}</p>
              <p className="desc">Anything you want can be displayed here.</p>
            </div>
         );
    }
}

CustomTooltip.propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
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
            cd.forEach(function(el) {
                // NOTE: 'Volume' and Name -- with uppercase are both intention and used in chart
                el.Volume = GetVolumeByUnits(el.volume, units);
                el.Name = `${el.name} (${el.year})`;
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

                    <br/>
                    <br/>


                    <ResponsiveContainer  height="60%">
                        <BarChart width={400} height={200} data={this.state.data} layout="vertical" margin={{left: 50, right: 120}}>
                           <XAxis type="number" axisLine={false} axisLine={false} tickLine={false}  padding={{ left: 40 }} />
                           <YAxis dataKey="Name" type="category" axisLine={false} tickLine={false} tick={true} />
                           <TT cursor={false} contentStyle={{ fontSize: '14px', textAlign: 'left' }}
                               formatter={(Volume) => new Intl.NumberFormat('en').format(Volume)}/>
                           <Bar dataKey="Volume" barSize={50} unit={this.state.units}>
                               {
                                    this.state.data.map((entry, index) => {
                                        return <Cell fill={COLORS[index % COLORS.length]} />;
                                    })
                                }
                                <LabelList dataKey="Volume" position="right" offset={50}  />
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
