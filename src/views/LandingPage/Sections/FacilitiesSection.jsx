import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from '@material-ui/core/Button';
import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";

import facilitiesStyle from "assets/jss/site-styles/views/landingPageSections/facilitiesStyle.jsx";

class FacilitiesSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <GridContainer>
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
                            <Button variant="outlined" color="primary">
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
