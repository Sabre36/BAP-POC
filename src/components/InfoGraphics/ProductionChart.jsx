import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { PieChart, Pie, Sector, Cell, Legend, Label, Text, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

//import DonutChart from "./DonutChart.jsx";


import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

const styles = {
    button: {
        color: '000',
        opacity: '.86',
        height: '18px',
        margin: 0
    },
    justify: {
        float: 'left',
        marginBottom: '20px'
    },
    title: {
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '20px'
    },
    subtitle: {
        display: 'block',
        textAlign: 'center',
        fontSize: '16px',
    }
};


const yr1 = [
    {year: 2016, name: '4 Star', value: 90},
    {year: 2016, name: '3 Star', value: 54},
    {year: 2016, name: '2 Star', value: 55},
    {year: 2016, name: '1 Star', value: 6}
];

const yr2 = [
    {year: 2017, name: '4 Star', value: 111.6},
    {year: 2017, name: '3 Star', value: 60},
    {year: 2017, name: '2 Star', value: 33},
    {year: 2017, name: '1 Star', value: 22}
];

const COLORS = ['#37611A', '#37611A', '#65B12F', '#B1E18E'];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        const innerRadiusPadding = 10 ;
        const outerRadiusPadding = 6 ;
        const radiusPadding = 20;

        return (
            <g>
                <text x={cx} y={cy-25} dy={8} textAnchor="middle" >{payload.name}</text>
                <text x={cx} y={cy-5} dy={8} textAnchor="middle" >{`${value} MT`}</text>
                <text x={cx} y={cy+15} dy={8} textAnchor="middle" >{`${(percent * 100).toFixed(1)}%`}</text>

                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={innerRadius - innerRadiusPadding}
                    outerRadius={innerRadius - outerRadiusPadding}
                    fill={fill}
                />

                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={innerRadius}
                    outerRadius={innerRadius + radiusPadding}
                    fill={fill}
                />

                {/* HACK to position the year label under the pie so that it will move with the responsive container */}
                <text x={cx} y={cy+120} dy={8} textAnchor="middle">{payload.year}</text>
            </g>
        );
    };

    class ProductionChart extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeIndex: 0
            };

            this.onPieEnter = this.onPieEnter.bind(this);
        }

        getInitialState() {
            return {
                activeIndex: 0,
            };
        }

        onPieEnter(data, index) {
            this.setState({
                activeIndex: index,
            });
        }

        handleClick() {
            alert('click');
        }

        render() {
            const { classes, children } = this.props;

            return (
                <div>
                    <Card className={classes.cardLarge}>
                        <CardActions>
                            <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                                <MenuIcon style={styles.button}/>
                            </IconButton>
                            <h4 style={styles.title}>Production Composition</h4>
                        </CardActions>

                        <GridContainer>
                            <GridItem md={6}>
                                <ResponsiveContainer height={275} width="100%">
                                    <PieChart >
                                        <Pie
                                            activeIndex={this.state.activeIndex}
                                            activeShape={renderActiveShape}
                                            data={yr1}
                                            innerRadius={75}
                                            outerRadius={95}
                                            onMouseEnter={this.onPieEnter}
                                            paddingAngle={2}
                                            >
                                                {
                                                    yr1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                                }
                                            </Pie>
                                        </PieChart>

                                    </ResponsiveContainer>
                                </GridItem>
                                <GridItem md={6}>
                                    <ResponsiveContainer height={275} width="100%">
                                        <PieChart>
                                            <Pie
                                                activeIndex={this.state.activeIndex}
                                                activeShape={renderActiveShape}
                                                data={yr2}
                                                innerRadius={75}
                                                outerRadius={95}
                                                onMouseEnter={this.onPieEnter}
                                                paddingAngle={2}
                                                >
                                                    {
                                                        yr2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                                    }
                                                </Pie>
                                            </PieChart>
                                        </ResponsiveContainer>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </div>
                );
            }
        }



        export default withStyles(infoGraphicStyle)(ProductionChart);
