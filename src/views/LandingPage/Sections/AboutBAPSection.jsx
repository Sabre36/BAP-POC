import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import GalleryList from "components/GalleryList/GalleryList.jsx";

class AboutBAPSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer justify="left">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>What we offer</h2>
                        <h4 className={classes.description}>

                        <b style={{fontSize: '36px'}}>S</b>tand apart from the competition and access new markets, while providing your business with a quantitative tool to measure compliance, improvement and efficiencies over time.

                        <br/><br/>
                        We’re your seafood supply chain solution – a “one-stop shop” for certification. Producers appreciate the time saved from having to patch together various certification programs to cover only a portion of what our BAP standards cover.

                        <br/><br/>
                        And we are market-driven. Our market development team actively promotes the advantages of BAP certification to an influential network of retailers and foodservice operators on behalf of all BAP-certified facilities.

                        </h4>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.gallery}>
                            <GalleryList/>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(AboutBAPSection);
