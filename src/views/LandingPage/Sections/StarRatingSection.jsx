import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StarIcon from "@material-ui/icons/StarRate";

import productStyle from "assets/jss/site-styles/views/landingPageSections/productStyle.jsx";

class StarRatingSection extends React.Component {
    render() {
        const { classes } = this.props;

        const normalDiv = {
            textAlign: 'left',
            color :'#fff'
        }
        return (
            <div className={classes.section} style={{backgroundColor: '#65B12F', borderRadius: '4px', padding: '10px'}}>
                <GridContainer justify="left">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title} style={{color: '#fff!important'}}>Multi-star integrity</h2>
                        <h4 className={classes.description}>

                            <div style={normalDiv}>
                                This BAP program employs a star system to signify the integration levels of BAP certification along the aquaculture production chain. These stars are displayed on the BAP logo and appear on packaging for a variety of farmed seafood products worldwide.

                                <br/><br/>
                                Download the <a href="#">BAP Logo Use Guide</a> to ensure that you’re using the BAP logo appropriately and that any claims associated with GAA or BAP are portrayed in an accurate manner.

                                <br/><br/>
                                Read about the <a href="#">BAP Logo Policing Program</a>to learn how BAP polices logo use at the retail level, with the help of Field Agent, a mobile market research and auditing firm.
                            </div>
                        </h4>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                            <div style={normalDiv}>
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
                            </div>

                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(productStyle)(StarRatingSection);
