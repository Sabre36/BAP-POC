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
import PropTypes from "prop-types";

import starRatingStyle from "assets/jss/site-styles/views/landingPageSections/starRatingStyle.jsx";

class CardContainer extends React.Component {
    render() {
        const { classes, children } = this.props;

        return (
            <div>
                <Card className={classes.card} >
                    <CardActionArea>
                        <CardContent >
                            {this.props.children}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}



export default withStyles(starRatingStyle)(CardContainer);
