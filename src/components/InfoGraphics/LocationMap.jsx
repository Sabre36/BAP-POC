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

import MenuIcon from '@material-ui/icons/Menu';
import InfoIcon from '@material-ui/icons/Info';

import Plantmap from './../Maps/Plantmap.jsx';
import { ResponsiveContainer } from 'recharts';

import inputData from "assets/data/Kroger/kroger_data.json";
import geoData from "assets/data/all_geo.json";
import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

function  getFillColor(view) {
    var color = null;
    switch (view) {
        case "shipments": color = "#02419A"; break;
        case "demand": color = "#8AA2C8"; break;
        case "production": color = "#4C8623"; break;
        default: color = "02419A";
    }
    return color;
}

class LocationMap extends React.Component {
    constructor(props) {
        super(props);

        let shipmentData = [];
        let projectedData = [];
        let productionData = [];

        this.state = {
            view: "shipments",
            color: "#02419A"
        }
    }

    handleClick() {
        alert('click');
    }

    handleViewShips() {
        // Recomputte the radius
        this.shipmentData.forEach(function(element) {
            let vol = element.TotalProduction;
            let newradius = 5;

            if (vol > 2000)
                newradius = 15;
            else if (vol >= 1000 && vol < 2000)
                newradius = 10;
            else if (vol >= 500 && vol < 1000)
                newradius = 7.5;
            else if (vol >= 250 && vol < 500)
                newradius = 5;
            else
                newradius = 2.5;

            element.radius = newradius;
            //console.log(element);
        });


        this.setState({ view: 'shipments', color: getFillColor('shipments')} );
    }

    handleViewProjected() {

        if (!this.projectedData) {
            this.projectedData = this.shipmentData;

            this.projectedData.forEach(function(element) {
                let vol = element.Projected2017;
                let newradius = 5;

                if (vol > 2000)
                    newradius = 15;
                else if (vol >= 1000 && vol < 2000)
                    newradius = 10;
                else if (vol >= 500 && vol < 1000)
                    newradius = 7.5;
                else if (vol >= 250 && vol < 500)
                    newradius = 5;
                else
                    newradius = 2.5;

                element.radius = newradius;
                //console.log(element);
            });
        }
        this.setState({ view: 'demand', color: getFillColor('demand')} );
    }

    handleViewProduction() {

        if (!this.productionData) {
            this.productionData = this.shipmentData;

            this.productionData.forEach(function(element) {
                let vol = element.TotalProduction;
                let newradius = 5;

                if (vol > 2000)
                    newradius = 15;
                else if (vol >= 1000 && vol < 2000)
                    newradius = 10;
                else if (vol >= 500 && vol < 1000)
                    newradius = 7.5;
                else if (vol >= 250 && vol < 500)
                    newradius = 5;
                else
                    newradius = 2.5;

                element.radius = newradius;
            });
        }

        this.setState({ view: 'production', color: getFillColor('production')} );
    }

    render() {

        const { classes, children } = this.props;

        const mergeArray = (source, merge, by) => source.map(item => ({
            ...item,
            ...(merge.find(i => i[by] === item[by]) || {}),
        }));

        this.shipmentData = mergeArray(inputData, geoData, 'BAPID');

        // Put volume data into radius buckets -- TODO needs a better, statistically-based methodology
        this.shipmentData.forEach(function(element) {
            let vol = element.MostRecentShipped;
            let newradius = 5;

            if (vol > 2000)
                newradius = 15;
            else if (vol >= 1000 && vol < 2000)
                newradius = 10;
            else if (vol >= 500 && vol < 1000)
                newradius = 7.5;
            else if (vol >= 250 && vol < 500)
                newradius = 5;
            else
                newradius = 2.5;

            element.radius = newradius;
            //console.log(element);
        });


        const styles = {
            button: {
                color: '000',
                opacity: '.86',
                height: '18px',
                margin: 0
            },
            title: {
                textAlign: 'center',
                fontWeight: 400,
                fontSize: '20px',
                display: 'block'
            },
            viewContainer: {
                marginBottom: '10px',
                marginTop: '-15px',
            },
            anchor: {
                fontSize: '12px',
                paddingRight: '20px',
                cursor: 'hand!important'
            }
        };

        return (
            <div>
                <Card style={{height: '375px', overflow: 'sroll'}}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon style={styles.button}/>
                        </IconButton>
                        <h4 style={styles.title}>Worldwide {this.state.view} by plant</h4>
                    </CardActions>

                    <div style={styles.viewContainer}>
                        <a aria-label='Shipments' style={styles.anchor} onClick={this.handleViewShips.bind(this)}> Shipments </a>
                        <a aria-label='Demand' style={styles.anchor} onClick={this.handleViewProjected.bind(this)}> Demand </a>
                        <a aria-label='Production' style={styles.anchor} onClick={this.handleViewProduction.bind(this)}> Production </a>
                    </div>

                        { this.state.view === "shipments" &&
                            <Plantmap data={this.shipmentData} color={this.state.color} />
                        }

                        { this.state.view === "demand" &&
                            <Plantmap data={this.projectedData} color={this.state.color} />
                        }

                        { this.state.view === "production" &&
                            <Plantmap data={this.productionData} color={this.state.color} />
                        }

                </Card>
            </div>
        );
    }
}

export default withStyles(starRatingStyle)(LocationMap);
