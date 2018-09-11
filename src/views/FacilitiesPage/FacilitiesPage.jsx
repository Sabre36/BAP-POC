import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import FacilitiesMainSection from "./Sections/FacilitiesMainSection.jsx";

import facilitiesPageStyle from "assets/jss/site-styles/views/facilitiesPage.jsx";


const dashboardRoutes = [];

class FacilitiesPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;


    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Best Aquaculture Practices"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            //color: "danger"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/slide3a.png")}>
            <div className={classes.container}>

            <GridContainer>
              <GridItem xs={12} sm={12} md={6} >
                <h2 className={classes.title}>Certified facilities</h2>
                <h4 className={classes.subtitle}>
                    BAP certifies farms, hatcheries, feed mills, processing plants and repacking plants in over nn countries. The BAP program recognizes product from associated or integrated facilities along the aquaculture production chain with a star-based ranking system.
                    <br/>
                </h4>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>

            <FacilitiesMainSection />

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(facilitiesPageStyle)(FacilitiesPage);
