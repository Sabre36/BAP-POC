import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StarIcon from "@material-ui/icons/StarRate";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HeaderImage from "assets/img/china-farm.png";
import WatermarkImage from "assets/img/china-farm.png";
import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";
//import FacilitiesMap from "components/Maps/FacilitiesMap.jsx";


import facilitiesStyle from "assets/jss/site-styles/views/landingPageSections/facilitiesStyle.jsx";

class FacilitiesSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <GridContainer justify="left">
                    <GridItem cs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Our certification program</h2>
                        <h4 className={classes.description}>
                            <FacilitiesChart />
                        </h4>
                    </GridItem>

                    <GridItem cs={12} sm={12} md={6}>
                        <h2 className={classes.title}></h2>
                        <h4 className={classes.description}>

                            BAP certifies farms, hatcheries, feed mills, processing plants and repacking plants in over nn countries. The BAP program recognizes product from associated or integrated facilities along the aquaculture production chain with a star-based ranking system
                            <br/><br/>
                            BAP certification is administered by the Global Aquaculture Alliance (GAA), a nonprofit organization dedicated to advocacy, education and leadership in responsible aquaculture.
                            <br/>
                            <br/>
                            <Button size="small" color="primary">
                                LEARN MORE
                            </Button>

                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(facilitiesStyle)(FacilitiesSection);
