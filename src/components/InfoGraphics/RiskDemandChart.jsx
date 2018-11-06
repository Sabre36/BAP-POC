import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text, Cell, ResponsiveContainer } from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import MUITooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import riskData from './../../assets/data/Kroger/risk_scores.json';
import sortBy from './../../views/PortalPage/Helpers/sortBy.jsx';
import round from "./../../views/PortalPage/Helpers/round.jsx";

const CustomTooltip = props => {
    // payload[0] doesn't exist when tooltip isn't visible
    if (props.payload[0] != null) {

        const newPayload = [
            {
                value:
                <div style={{padding: '5px', fontSize: '15px'}}>
                    <text><i>{props.payload[0].payload.Supplier}</i></text><hr/>
                    <text><b>Shipped:</b> {round(props.payload[0].payload.Shipped,1)}</text><br/>
                    <text><b>Demand:</b> {round(props.payload[0].payload.Demand,1)}</text><br/>
                    <text><b>Difference (#):</b> {round(props.payload[0].payload.Delta,1)}</text><br/>
                    <text><b>Difference (%):</b> {round(props.payload[0].payload.PctDiff,1)}</text><br/>
                    <text><b>Risk score:</b> {props.payload[0].payload.DemandScore}</text>
                </div>,
            },
        ];
        return <DefaultTooltipContent payload={newPayload} />;
    }

    // we just render the default
    return <DefaultTooltipContent {...props} />;
};

const tooltipTitle = ({rejects}) => {
    return (
        <div style={{fontSize: '15px', padding: '10px'}}>
            <p>
                <strong>Demand</strong> risk is defined as demand exceeding or meeting shipments by +- 10% or greater.
            </p>
            { rejects > 0 &&
                <p>
                    Note: {rejects} suppliers were missing data and are omitted from this chart.
                </p>
            }
        </div>
    );
};


class RiskDemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let data = [];
        let rejects = 0;

        riskData.forEach(function(el) {

            let score = 1;
            let remainder = 0;
            let pct = (el.Shipped - el.Demand) / el.Shipped * 100;

            if (isNaN(pct)) {
                score = -1;
                rejects+=1;
            }
            else if (isNaN(el.Shipped) || el.Shipped === 0 || el.Shipped === null ) {
                score = -1;
                rejects+=1;
            }
            else if (isNaN(el.Demand) || el.Demand === 0 || el.Demand === null ) {
                score = -1;
                rejects+=1;
            }
            else if (el.Shipped === el.Demand) {
                score = -1;
                rejects+=1;
            }
            else if (el.Shipped > el.Demands) {
                score = 1;
            }
            else if (el.Demand > el.Shipped) {
                let p = Math.abs(pct);
                if (p > 0 && p < 10 )
                score = 2;
                else if (p >= 10 && p < 20)
                score = 3;
                else if (p >= 20 && p < 50)
                score = 4;
                else {
                    score = 5;
                }
            }

            if (score !== -1) {
                el.DemandScore = score;
                el.Delta = el.Shipped - el.Demand;
                el.Remainder = 5 - score;
                el.PctDiff = pct;
                el.name = el.Supplier;

                data.push(el);
                //console.log(el);
            }
        });

        data.sortBy(el => el.DemandScore, false);


        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Risk - Supplier meeting demand &nbsp;
                            <MUITooltip
                                title={tooltipTitle({rejects})}>
                                <span className={classes.tooltip}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </MUITooltip>
                        </h4>
                    </CardActions>

                    <span>
                        <label className={classes.riskLabelLowest}>Lowest Risk</label>
                        <label className={classes.riskLabelHighest}>Highest</label>
                    </span>

                    <div className={classes.riskBarsContainer} >
                        <ResponsiveContainer width="130%" height={750}>
                            <BarChart
                                data={data}
                                layout="vertical"
                                margin={{top: 20, right: 30, left: 20, bottom: 5}}>

                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="Supplier" width={225} />

                                <Bar dataKey="DemandScore" stackId="a">
                                    {data.map((entry, index) => (
                                        <Cell fill={
                                            entry.DemandScore === 1 ? 'rgba(55,97,26,.9)' :
                                            entry.DemandScore === 2 ? 'rgba(255,204,3,.9)' :
                                            entry.DemandScore === 3 ? 'rgba(248,156,5,.9)' :
                                            'rgba(171,5,32,.9)' }/>
                                        ))}
                                    </Bar>
                                    <Bar dataKey="Remainder" stackId="a" fill="rgba(0,0,0,.1)" />
                                    <Tooltip content={<CustomTooltip/>} cursor={false}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            );
        }
    }



    export default withStyles(infoGraphicStyle)(RiskDemandChart);