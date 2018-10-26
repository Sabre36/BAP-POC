import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";

import InfoGraphic1 from "components/InfoGraphics/InfoGraphic1.jsx";
import InfoGraphic2 from "components/InfoGraphics/InfoGraphic2.jsx";
import InfoGraphic3 from "components/InfoGraphics/InfoGraphic3.jsx";
import CardContainer from "components/InfoGraphics/CardContainer.jsx";
import DemandChart from "components/InfoGraphics/DemandChart.jsx";
import LocationMap from "components/InfoGraphics/LocationMap.jsx";

class Scorecard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={4} md={4}>

                        <InfoGraphic1/>
                    </GridItem>

                    <GridItem xs={12} sm={4} md={4}>
                        <InfoGraphic2/>
                    </GridItem>


                    <GridItem xs={12} sm={4} md={4}>
                        <InfoGraphic3/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <DemandChart/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <LocationMap/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>

                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <FacilitiesChart/>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(Scorecard);
