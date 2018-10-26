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

import ProductionIcon from "./../Icons/ProductionIcon.jsx";

import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

class InfoGraphic2 extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Card className={classes.card} style={{width: "100%", height: "150px", background: "#539127", padding: "2px", marginBottom: "20px"}}>
                    <CardActionArea>
                        <CardContent >
                            <Typography gutterBottom variant="headline" component="h2" className={classes.whitetitle}>
                                <ProductionIcon />
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default withStyles(starRatingStyle)(InfoGraphic2);
