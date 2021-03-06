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

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';



import CertImage from "assets/img/BAPcert.png";
import FishImage from "assets/img/fish.png";



import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

class StarRatingSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card} style={{backgroundColor: "#0054A4" }}>
                    <CardActionArea>
                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                BAP star rating system
                            </Typography>
                            <Typography component="p"  className={classes.typography}>
                                <GridContainer>
                                    <GridItem xs={2} sm={2} md={3} lg={3} style={{textAlign: "center", minWidth: "250px"}}>
                                        <img src={CertImage} height={350} alt="Certication"/>
                                    </GridItem>
                                    <GridItem xs={8} sm={8} md={8} className={classes.whitetext}>
                                    The BAP program employs a star system to signify the integration levels of BAP certification along the aquaculture production chain. These stars are displayed on the BAP logo and appear on packaging for a variety of farmed seafood products worldwide.
                                    <br/><br/>
                                    Download the <a href="">BAP Logo Use Guide</a> to ensure that you’re using the BAP logo appropriately and that any claims associated with GAA or BAP are portrayed in an accurate manner.
                                    Read about the <a href="">BAP Logo Policing Program</a>to learn how BAP polices logo use at the retail level, with the help of Field Agent, a mobile market research and auditing firm.
                                    </GridItem>
                                </GridContainer>

                                <div style={{marginTop: "-35px"}}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5} style={{textAlign: "right"}}>
                                            <StarIcon className={classes.whiteicon}/>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={7} className={classes.whiteRatingText}>
                                        Plant
                                        </GridItem>
                                        <Divider />
                                    </GridContainer>

                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5} style={{textAlign: "right"}}>
                                            <StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={7} className={classes.whiteRatingText}>
                                            Plant + Farm
                                        </GridItem>
                                        <Divider />
                                    </GridContainer>

                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5} style={{textAlign: "right"}}>
                                            <StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={7} className={classes.whiteRatingText}>
                                            Plant + Farm + Feed mill
                                        </GridItem>
                                        <Divider />
                                    </GridContainer>

                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={5} style={{textAlign: "right"}}>
                                            <StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/><StarIcon className={classes.whiteicon}/>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={7} >
                                            <div className={classes.whiteRatingText}>
                                            Plant + Farm + Feed mill + Hatchery
                                        </div>
                                        </GridItem>
                                        <Divider />
                                    </GridContainer>
                                    <img src={FishImage} height={96} alt="Fish" style={{ float: "right", marginRight: "15%", marginTop: "-150px" }} />
                                </div>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary" >
                            LEARN MORE
                        </Button>
                        <Button size="small"  color="secondary">
                            SHARE
                        </Button>
                    </CardActions>
                </Card>

            </div>
        );
    }
}

export default withStyles(starRatingStyle)(StarRatingSection);
