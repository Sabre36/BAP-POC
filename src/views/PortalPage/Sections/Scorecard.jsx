import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";

import InfoGraphic1 from "components/InfoGraphics/InfoGraphic1.jsx";
import InfoGraphic2 from "components/InfoGraphics/InfoGraphic2.jsx";
import InfoGraphic3 from "components/InfoGraphics/InfoGraphic3.jsx";
import DemandChart from "components/InfoGraphics/DemandChart.jsx";
import VolumeByPlantMap from "components/InfoGraphics/VolumeByPlantMap.jsx";
import ProductionChart from "components/InfoGraphics/ProductionChartNew.jsx";
import Nonconformities from "components/InfoGraphics/NonconformitiesNew.jsx";
import SupplierDilutionChart from "components/InfoGraphics/SupplierDilutionChartNew.jsx";
import SupplierDemandChart from "components/InfoGraphics/SupplierDemandChartNew.jsx";

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
                        <VolumeByPlantMap/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <ProductionChart/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Nonconformities/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <SupplierDemandChart/>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <SupplierDilutionChart/>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(Scorecard);
