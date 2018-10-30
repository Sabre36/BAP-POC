import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { PieChart, Pie, Sector, Cell, Legend, Label, Text, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


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
    {name: '4 Star', value: 90},
    {name: '3 Star', value: 54},
    {name: '2 Star', value: 55},
    {name: '1 Star', value: 65}
];

const yr2 = [
    {name: '4 Star', value: 70},
    {name: '3 Star', value: 60},
    {name: '2 Star', value: 33},
    {name: '1 Star', value: 101}
];

const COLORS = ['#37611A', '#37611A', '#65B12F', '#B1E18E'];

const RADIAN = Math.PI / 180;



class ProductionChart extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        activeIndex: 0,
    }

    handleClick() {
        alert('click');
    }

    getInitialState() {
        return {
            activeIndex: 0,
        };
    }

    onPieEnter(data, index) {
        // this.setState({
        //     activeIndex: index,
        // });
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
                        <h4 style={styles.title}>Production Comparison</h4>
                    </CardActions>

                    <GridContainer>
                        <GridItem md={5}>
                            <ResponsiveContainer height={275}>
                                <PieChart  onMouseEnter={this.onPieEnter}>
                                    <Pie
                                        data={yr1}
                                        innerRadius={70}
                                        outerRadius={90}
                                        fill="#8884d8"
                                        paddingAngle={2}
                                        >
                                            {
                                                yr1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                            }
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <label style={styles.subtitle}>2016</label>
                            </GridItem>
                            <GridItem md={7}>
                                <ResponsiveContainer height={275}>
                                    <PieChart onMouseEnter={this.onPieEnter}>
                                        <Pie
                                            title="hi"
                                            data={yr2}
                                            innerRadius={70}
                                            outerRadius={90}
                                            fill="#8884d8"
                                            paddingAngle={2}
                                            >
                                                {
                                                    yr2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                                }
                                                <Label
                                                    content={props => {
                                                        const {viewBox: {cx, cy}} = props
                                                        const positioningProps = {
                                                            x: cx,
                                                            y: cy,
                                                            textAnchor: 'middle',
                                                            verticalAnchor: 'middle',
                                                        }
                                                        const presentationProps = {
                                                            fill: '#37611A',
                                                        }

                                                        return (
                                                            <Text {...positioningProps} {...presentationProps}>{"My centred text"}</Text>
                                                        )
                                                    }}
                                                />
                                            </Pie>
                                            <Legend align="right" verticalAlign="middle" layout="vertical"/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <label style={styles.subtitle}>2017</label>
                                </GridItem>
                            </GridContainer>
                        </Card>
                    </div>
                );
            }
        }



        export default withStyles(infoGraphicStyle)(ProductionChart);
