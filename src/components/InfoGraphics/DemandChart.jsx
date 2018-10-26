import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StarIcon from "@material-ui/icons/StarRate";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';

import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";

import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";




class DemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes, children } = this.props;

        const data = [
            {name: '2016', shipped: 28872.39, projected: null, production: null},
            {name: '2017', shipped: 30010.33, projected: 24907.73, production: 96104.01},
            {name: '2018', shipped: null, projected: null, production: 90207},
        ];

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
            }
        };


        return (
            <div>
                <Card >
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon style={styles.button}/>
                        </IconButton>
                        <h4 style={styles.title}>Demand versus capacity</h4>
                    </CardActions>

                        <BarChart width={600} height={250} data={data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>

                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend align="right" verticalAlign="middle" layout="vertical"/>
                            <Bar dataKey="projected" name="Demand" fill="#8AA2C8" />
                            <Bar dataKey="shipped" name="Shipped" fill="#02419A" />
                            <Bar dataKey="production" name="Production" fill="#4C8623" />
                        </BarChart>

                </Card>
        </div>
    );
}
}



export default withStyles(starRatingStyle)(DemandChart);
