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

import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

class StarRatingSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card} style={{backgroundColor: "rgba(21,123,220,.15)" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            className={classes.media}
                            height="140"
                            image={HeaderImage}
                            title="BAP facililty"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
                                BAP star rating system
                            </Typography>
                            <Typography component="p"  className={classes.typography}>
                                <GridContainer justify="left">
                                    <GridItem xs={12} sm={12} md={6}>

                                        The BAP program employs a star system to signify the integration levels of BAP certification along the aquaculture production chain. These stars are displayed on the BAP logo and appear on packaging for a variety of farmed seafood products worldwide.

                                        <br/><br/>
                                        Download the <a href="#">BAP Logo Use Guide</a> to ensure that you’re using the BAP logo appropriately and that any claims associated with GAA or BAP are portrayed in an accurate manner.
                                        Read about the <a href="#">BAP Logo Policing Program</a>to learn how BAP polices logo use at the retail level, with the help of Field Agent, a mobile market research and auditing firm.
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant, BAP-certified farm(s) only, BAP-certified hatchery only and BAP-certified feed mill only.
                                        <br/>
                                        <br/>
                                        <StarIcon/><StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant, BAP-certified farm(s) only and BAP-certified hatchery and/or feed mill only.
                                        <br/>
                                        <br/>
                                        <StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant and BAP-certified farm(s) only.
                                        <br/>
                                        <br/>
                                        <StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant.
                                    </GridItem>
                                </GridContainer>


                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            LEARN MORE
                        </Button>
                        <Button size="small" color="primary">
                            SHARE
                        </Button>
                    </CardActions>
                </Card>
                <br/>

                <Card className={classes.card} style={{backgroundColor: "rgb(0,128,0,1)" }}>
                    <CardActionArea>
                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                BAP star rating system
                            </Typography>
                            <Typography component="p"  className={classes.whitetext}>
                                <GridContainer justify="left">
                                    <GridItem xs={12} sm={12} md={6}>

                                        The BAP program employs a star system to signify the integration levels of BAP certification along the aquaculture production chain. These stars are displayed on the BAP logo and appear on packaging for a variety of farmed seafood products worldwide.

                                        <br/><br/>
                                        Download the <a href="#">BAP Logo Use Guide</a> to ensure that you’re using the BAP logo appropriately and that any claims associated with GAA or BAP are portrayed in an accurate manner.
                                        Read about the <a href="#">BAP Logo Policing Program</a>to learn how BAP polices logo use at the retail level, with the help of Field Agent, a mobile market research and auditing firm.
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                        <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant, BAP-certified farm(s) only, BAP-certified hatchery only and BAP-certified feed mill only.
                                        <br/>
                                        <br/>
                                        <StarIcon/><StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant, BAP-certified farm(s) only and BAP-certified hatchery and/or feed mill only.
                                        <br/>
                                        <br/>
                                        <StarIcon/><StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant and BAP-certified farm(s) only.
                                        <br/>
                                        <br/>
                                        <StarIcon/>
                                        <br/>
                                        Product produced by a BAP-certified processing plant.
                                    </GridItem>
                                </GridContainer>


                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            LEARN MORE
                        </Button>
                        <Button size="small" color="primary">
                            SHARE
                        </Button>
                    </CardActions>
                </Card>


                {/* <br/>
                <div className={classes.section} style={{backgroundColor: '#65B12F', borderRadius: '4px', padding: '20px'}}>

                    <GridContainer justify="left">
                        <GridItem xs={12} sm={12} md={6}>
                            <h2 className={classes.whitetitle} >Star rating system</h2>
                            <h4 className={classes.description}>


                                    The BAP program employs a star system to signify the integration levels of BAP certification along the aquaculture production chain. These stars are displayed on the BAP logo and appear on packaging for a variety of farmed seafood products worldwide.

                                    <br/><br/>
                                    Download the <a href="#">BAP Logo Use Guide</a> to ensure that you’re using the BAP logo appropriately and that any claims associated with GAA or BAP are portrayed in an accurate manner.

                                    <br/><br/>
                                    Read about the <a href="#">BAP Logo Policing Program</a>to learn how BAP polices logo use at the retail level, with the help of Field Agent, a mobile market research and auditing firm.

                            </h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>

                                <br/>
                                <br/>
                                <br/>
                                <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                                <br/>
                                Product produced by a BAP-certified processing plant, BAP-certified farm(s) only, BAP-certified hatchery only and BAP-certified feed mill only.
                                <br/>
                                <br/>
                                <StarIcon/><StarIcon/><StarIcon/>
                                <br/>
                                Product produced by a BAP-certified processing plant, BAP-certified farm(s) only and BAP-certified hatchery and/or feed mill only.
                                <br/>
                                <br/>
                                <StarIcon/><StarIcon/>
                                <br/>
                                Product produced by a BAP-certified processing plant and BAP-certified farm(s) only.
                                <br/>
                                <br/>
                                <StarIcon/>
                                <br/>
                                Product produced by a BAP-certified processing plant.


                        </GridItem>
                    </GridContainer>
                </div> */}
            </div>
        );
    }
}

export default withStyles(starRatingStyle)(StarRatingSection);
