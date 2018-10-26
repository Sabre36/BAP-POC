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

import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";

import Datamap from 'react-datamaps';
import { ResponsiveContainer } from 'recharts';

//import data1 from "assets/data/mapData.json";

import inputData from "assets/data/Kroger/kroger_data.json";
import geoData from "assets/data/all_geo.json";

import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

function  getFillColor(view) {
    var color = null;

    switch (view) {
        case "shipments": color = "#02419A"; break;
        case "projected": color = "#8AA2C8"; break;
        case "production": color = "#4C8623"; break;
        default: color = "02419A";
    }
    return color;
}

class LocationMap extends React.Component {
    constructor(props) {
        super(props);

        let mapData = [];

        this.state = {
            view: "shipments",
            color: "#02419A"
        }

        //this.handleViewClick = this.handleViewClick.bind(this);
        //this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
    }

    handleClick() {
        alert('click');
    }

    handleViewShips() {
        this.mapData.forEach(function(element) {
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
        this.mapData.forEach(function(element) {
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
      this.setState({ view: 'projected', color: getFillColor('projected')} );
    }

    handleViewProduction() {
        this.mapData.forEach(function(element) {
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

                newradius= 2.5;

            element.radius = newradius;
        });

        this.setState({ view: 'production', color: getFillColor('production')} );
    }

    render() {

        const { classes, children } = this.props;

        const mergeArray = (source, merge, by) => source.map(item => ({
            ...item,
            ...(merge.find(i => i[by] === item[by]) || {}),
        }));

        this.mapData = mergeArray(inputData, geoData, 'BAPID');

        // Put volume data into radius buckets -- TODO needs a better, statistical methodology
        this.mapData.forEach(function(element) {
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

          console.log(element);
        });


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
                <Card >
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon style={styles.button}/>
                        </IconButton>
                        <h4 style={styles.title}>Worldwide {this.state.view} by plant</h4>
                    </CardActions>

                    <div style={styles.viewContainer}>
                        <a aria-label='Shipments' style={styles.anchor} onClick={this.handleViewShips.bind(this)}> Shipments </a>
                        <a aria-label='Projected' style={styles.anchor} onClick={this.handleViewProjected.bind(this)}> Projected </a>
                        <a aria-label='Production' style={styles.anchor} onClick={this.handleViewProduction.bind(this)}> Production </a>
                    </div>

                    <div style={{height: '235px'}}>
                        <Datamap
                            geographyConfig={{
                                popupOnHover: false,
                                highlightOnHover: true,
                                highlightFillColor: 'rgba(0,0,0,.4)',
                                highlightBorderColor: 'rgba(0, 0, 0, 0.2)',
                                highlightBorderWidth: 1,
                            }}
                            fills={{
                                defaultFill: '#ccc',
                                bubbleFill: this.state.color
                            }}
                            bubbles={this.mapData}
                            bubbleOptions={{
                                borderWidth: 1,
                                borderColor: 'rgba(0,0,0,.2)',
                                popupOnHover: true,

                                popupTemplate: (geography, data) =>
                                `<div class='hoverinfo'>
                                    <label><strong>Company:</strong> ${data.Company}</label><br/>
                                    <label><strong>Country:</strong> ${data.Country}</label><br/>
                                    <label><strong>Shipments:</strong> ${data.MostRecentShipped}</label> <br/>
                                    <label><strong>Projected:</strong> ${data.Projected2017}</label> <br/>
                                    <label><strong>Production:</strong> ${data.TotalProduction}</label> <br/>
                                </div>`,

                                highlightOnHover: true,
                                highlightFillColor: '#02419A',
                                highlightBorderColor: 'rgba(0, 0, 0, 0.2)',
                                highlightBorderWidth: 2,
                                highlightBorderOpacity: 1,
                                highlightFillOpacity: 0.85,
                            }}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

LocationMap.propTypes = {
    additionalClasses: PropTypes.string,
    mapStyle: PropTypes.object,
    data: PropTypes.array,
};

export default withStyles(starRatingStyle)(LocationMap);
