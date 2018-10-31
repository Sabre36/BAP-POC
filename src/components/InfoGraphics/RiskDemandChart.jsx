import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text, Cell, ResponsiveContainer } from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import riskData from './../../assets/data/Kroger/risk_scores.json';
import sortBy from './../../views/PortalPage/Helpers/sortBy.jsx';

const CustomTooltip = props => {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {

    const newPayload = [
      {
        value:
        <div style={{padding: '5px'}}>
            <text><b>Shipped:</b> {props.payload[0].payload.Shipped}</text><br/>
            <text><b>Demand:</b> {props.payload[0].payload.Demand}</text><br/>
            <text><b>Difference (#):</b> {props.payload[0].payload.Delta}</text><br/>
            <text><b>Difference (%):</b> {props.payload[0].payload.PctDiff}</text><br/>
            <text><b>Risk score:</b> {props.payload[0].payload.DemandScore}</text>
        </div>,
      },
      // ...props.payload,
    ];
    // we render the default, but with our overridden payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
  }

  // we just render the default
  return <DefaultTooltipContent {...props} />;
};


class RiskDemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        riskData.forEach(function(element) {
            let pct = element.PctDiff;
            let newscore = -1;

            if (pct >= 0 && pct < 5)
                newscore = 1;
            else if (pct >= 5 && pct < 10)
                newscore = 2;
            else if (pct >= 10 && pct < 25)
                newscore = 3;
            else if (pct >= 25 && pct < 50)
                newscore = 4;
            else {
                newscore = 5;
            }
            element.DemandScore = newscore;
            element.Remainder = 5 - element.DemandScore;
            element.name = element.Supplier;
            console.log(element);
        });

        riskData.sortBy(el => el.DemandScore, false);


        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>Risk - Supplier shipments meeting demand </h4>
                    </CardActions>

                    <span>
                        <label className={classes.riskLabelLowest}>Lowest Risk</label>
                        <label className={classes.riskLabelHighest}>Highest</label>
                    </span>

                    <div className={classes.riskBarsContainer} >
                        <ResponsiveContainer width="130%" height={750}>
                            <BarChart
                                data={riskData}
                                layout="vertical"
                                margin={{top: 20, right: 30, left: 20, bottom: 5}}>

                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="Supplier" width={200} />

                                <Bar dataKey="DemandScore" stackId="a" fill="#ab0520">
                                    {riskData.map((entry, index) => (
                                        <Cell fill={entry.DemandScore < 2 ? '#37611A' : entry.DemandScore < 3 ? '#FFCC03' : entry.DemandScore < 4 ? '#F89C05' : '#ab0520' }/>
                                    ))}
                                </Bar>
                                <Bar dataKey="Remainder" stackId="a" fill="rgba(0,0,0,.1)" />
                                {/* <Bar dataKey="PctDiff" stackId="a" hide /> */}
                                <Tooltip content={<CustomTooltip/>}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
    );
}
}



export default withStyles(infoGraphicStyle)(RiskDemandChart);
