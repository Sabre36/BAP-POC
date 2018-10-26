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
import Divider from '@material-ui/core/Divider';


import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

class InfoGraphic1 extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card} style={{width: "100%", height: "175px", background: "#02419A", padding: "2px", marginBottom: "20px"}}>
                    <CardActionArea>
                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                Info here...
                            </Typography>
                            <Typography component="p"  className={classes.typography}>
                                <GridContainer>
                                    <GridItem xs={2} sm={2} md={3} lg={3} style={{textAlign: "center", minWidth: "250px"}}>
                                        xyz
                                    </GridItem>
                                    <GridItem xs={8} sm={8} md={8} className={classes.whitetext}>
                                        stuff here.
                                    </GridItem>
                                </GridContainer>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default withStyles(starRatingStyle)(InfoGraphic1);
