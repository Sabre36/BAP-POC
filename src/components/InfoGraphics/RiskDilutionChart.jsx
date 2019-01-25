import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import MUITooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";
import riskData from './../../assets/data/risk_scores.json';
import sortBy from './../../views/PortalPage/Helpers/sortBy.jsx';
import round from "./../../views/PortalPage/Helpers/round.jsx";
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';
import Typography from '@material-ui/core/Typography';

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
                    <text><b>Farms (#):</b> {props.payload[0].payload.Farms}</text><br/>
                    <text><b>Dilution (Ratio):</b> {round(props.payload[0].payload.DilutionRatio,1)}</text><br/>
                    <text><b>Dilution (Score):</b> {props.payload[0].payload.DilutionScore}</text><br/>
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
                <strong>Dilution risk</strong> is defined as supplier relying on farms which support multiple supplers.
                <br/>
            { rejects > 0 &&
                <div>
                    Note: {rejects} suppliers were missing data and are omitted from this chart.
                </div>
            }
        </Typography>
    );
};


class RiskDilutionChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let dilutionData = [];
        let rejects = 0;
        const TOTAL = 5;

        riskData.forEach(function(el) {

            let score = 1;

            if (isNaN(el.DilutionRatio) || el.DilutionRatio === 0 || el.DilutionRatio === null ) {
                score = -1;
                rejects+=1;
            }
            else if (el.DilutionRatio < 2.0) {
                score = 1;
            }
            else if (el.DilutionRatio < 4.0) {
                score = 2;
            }
            else if (el.DilutionRatio < 6.0) {
                score = 3;
            }
            else if (el.DilutionRatio < 8.0) {
                score = 4;
            }
            else {
                score = 5;
            }

            if (score !== -1) {
                el.DilutionScore = score;
                el.Remaining = TOTAL - el.DilutionScore;
                el.name = el.Supplier;

                dilutionData.push(el);
                //console.log(el);
            }
        });

        dilutionData.sortBy(el => el.DilutionScore, false);


        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Risk - Supply chain dilution
                            <MUITooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle({rejects})}>
                                <span className={classes.tooltipIcon}>
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
                                data={dilutionData}
                                layout="vertical"
                                >

                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="Supplier" width={225} />

                                <Bar dataKey="DilutionScore" stackId="b">
                                    {dilutionData.map((entry, index) => (
                                        <Cell
                                            key={guidGenerator()} fill={
                                            entry.DilutionScore === 1 ? 'rgba(55,97,26,.9)' :
                                            entry.DilutionScore === 2 ? 'rgba(255,204,3,.9)' :
                                            entry.DilutionScore === 3 ? 'rgba(248,156,5,.9)' :
                                            entry.DilutionScore === 4 ? 'rgba(171,5,32,.9)' :
                                            'rgba(171,5,32,.9)' }/>
                                        ))}
                                    </Bar>
                                    <Bar dataKey="Remaining" stackId="b" fill="rgba(0,0,0,.1)" />
                                    <Tooltip content={<CustomTooltip/>} cursor={false}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            );
        }
    }



    export default withStyles(infoGraphicStyle)(RiskDilutionChart);
