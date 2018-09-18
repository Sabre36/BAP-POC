import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import TrainingGallery from "components/GalleryList/TrainingGallery.jsx";
import StarIcon from "@material-ui/icons/StarRate";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HeaderImage from "assets/img/china-farm.png";

//import FacilitiesMap from "components/Maps/FacilitiesMap.jsx";


import facilitiesStyle from "assets/jss/site-styles/views/landingPageSections/facilitiesStyle.jsx";

class TrainingSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <GridContainer justify="left">
                    <GridItem cs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Interested in training?</h2>
                        <h4 className={classes.description}>
                            <TrainingGallery />

                        </h4>
                    </GridItem>

                    <GridItem cs={12} sm={12} md={6}>
                        <h2 className={classes.title}></h2>
                        <h4 className={classes.description}>

                            New auditor candidates, existing auditors requiring refresher training, and observers — including government officials, producers and other industry stakeholders — are encouraged to attend our regularly held BAP auditor training courses.
                            <br/>
                            <br/>
                            If you are a prospective CB interested in applying for accreditation, please review our <a href="#">criteria, requirements, and application form</a>.
                            <br/>
                            <br/><Button size="small" color="primary">
                                LEARN MORE
                            </Button>

                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(facilitiesStyle)(TrainingSection);
