import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import FacilitiesChart from "components/Charts/FacilitiesChart.jsx";

class Scorecard extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <div style={{width: "100%", height: "175px", background: "lightgray", padding: "2px", marginBottom: "20px"}}></div>
                    </GridItem>

                    <GridItem xs={12} sm={6} md={4}>
                        <div style={{width: "100%", height: "175px", background: "lightgray", padding: "2px", marginBottom: "20px"}}></div>
                    </GridItem>


                    <GridItem xs={12} sm={6} md={4}>
                        <div style={{width: "100%", height: "175px", background: "lightgray", padding: "2px", marginBottom: "20px"}}></div>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <FacilitiesChart/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <FacilitiesChart/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <FacilitiesChart/>
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
