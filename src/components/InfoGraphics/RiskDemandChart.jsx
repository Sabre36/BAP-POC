import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import MuiTooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import riskData from './../../assets/data/risk_scores.json';
import sortBy from './../../views/PortalPage/Helpers/sortBy.jsx';
import round from "./../../views/PortalPage/Helpers/round.jsx";
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';
import Typography from '@material-ui/core/Typography';

import ProgressBar from './../ProgressBar/ProgressBar.jsx';

const CustomTooltip = props => {
    // payload[0] doesn't exist when tooltip isn't visible
    if (props.payload[0] != null) {

        const newPayload = [
            {
                value:
                <div style={{padding: '5px', fontSize: '14px'}}>
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
        <Typography>
                <strong>Demand risk</strong> is defined as demand exceeding or meeting shipments by +- 10% or greater.
                <br/>
            { rejects > 0 &&
                <div>
                    Note: {rejects} suppliers were missing data and are omitted from this chart.
                </div>
            }
        </Typography>
    );
};


class RiskDemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let tooltipData = [{supplier: 'blah', projected: 11, shipped: 8, production: 3}];

        let data = [];
        let rejects = 0;

        riskData.forEach(function(el) {

            let score = 1;
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
                            Risk - Supply chain meeting demand
                            <MuiTooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle({rejects})}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </MuiTooltip>
                        </h4>
                    </CardActions>

                    <span>
                        <label className={classes.riskLabelLowest}>Lowest Risk</label>
                        <label className={classes.riskLabelHighest}>Highest</label>
                    </span>

                    <div className={classes.riskBarsContainer} >

                        {data.map((item) =>
                            <ProgressBar key={guidGenerator()} label={item.Supplier} percent={item.percent} tooltipData={item} />
                        )}



                        <ProgressBar percent={0} label="Aquastar" tooltipData={tooltipData}/>
                        <ProgressBar percent={10} label="A very long supplier label abc ddd 10" tooltipData={tooltipData}/>
                        <ProgressBar percent={18} label="short 18" tooltipData={tooltipData}/>



                        {/*
                        <ResponsiveContainer width="130%" height={750}>
                            <BarChart
                                data={data}
                                layout="vertical"
                                >

                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="Supplier" width={225}
                                     />

                                <Bar dataKey="DemandScore" stackId="a">
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={guidGenerator()}
                                            fill={
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
                            */}
                        </div>
                    </Card>
                </div>
            );
        }
    }



    export default withStyles(infoGraphicStyle)(RiskDemandChart);
