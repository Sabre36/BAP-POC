import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import MUITooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

const productionRatioData = [
    { name: 'Plant', value: 221.9 },
    { name: 'Farm', value: 333.2 }
];

const COLORS = ['#37611A', '#65B12F'];

function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    const units = payload.units;

    let displayValue = '';

    if (units === "MT") {
        displayValue = `${toCommas(payload.mt)} ${payload.units}`;
    } else if (units === "kg") {
        displayValue = `${toCommas(payload.kg)} ${payload.units}`;
    } else {
        displayValue = `${toCommas(payload.lbs.toFixed(1))} ${payload.units}`;
    }




    return (
        <g>
            <text x={cx} y={cy-12} dy={8} textAnchor="middle" fill={fill} style={{fontSize: '18px', fontWeight: '500'}}>
                {payload.name}
            </text>
            <text x={cx} y={cy+12} dy={8} textAnchor="middle" fill={fill}>

                {`${displayValue}`}
            </text>

            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
                />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 1 : -1) * 25} y={ey+4} textAnchor={textAnchor} fill="#333">{`${(percent * 100).toFixed(1)}%`}</text>

        </g>
    );
};

const tooltipTitle = () => {
    return (
        <Typography>
            A ratio between plant and total farm volume
        </Typography>
    );
};

class ProductionChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            units: 'MT',
            data: productionRatioData
        }
    }

    componentDidMount(){
        this.processData();
    }

    processData() {
        let transform = [];

        productionRatioData.forEach(function(el) {
            el.mt = el.value;
            el.kg = el.mt * 1000;
            el.lbs = el.mt * 2204.62;
            el.units = 'MT';

            transform.push(el);
            console.log("AFTER TRANSFORM=>" + JSON.stringify(el) );
        });
        this.setState({
            data: transform
        });
    }

    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    render () {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit'>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle} >
                            Production ratio by rating
                            <MUITooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </MUITooltip>
                        </h4>
                    </CardActions>

                    <ResponsiveContainer height="85%">
                        <PieChart margin={{right: 40}}>
                            <Pie
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape}
                                data={this.state.data}
                                innerRadius={90}
                                outerRadius={110}
                                paddingAngle={1}
                                units="kg"
                                onMouseEnter={this.onPieEnter.bind(this)}
                                >
                                {
                                    this.state.data.map((entry, index) => <Cell key={guidGenerator()} fill={COLORS[index % COLORS.length]}/>)
                                }
                            </Pie>
                            <Legend align="right" verticalAlign="middle" layout="vertical" iconType="circle"/>
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(ProductionChart);
