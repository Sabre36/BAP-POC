import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import GalleryList from "components/GalleryList/GalleryList.jsx";
import ShowMore from "react-show-more";


class AboutBAPSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer >
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>What we offer</h2>
                        <h4 className={classes.description}>
                            <ShowMore lines={11} anchorClass={classes.moreLessLightText}>
                                <strong style={{fontSize: '36px'}}>W</strong>e’re your seafood supply chain solution – a “one-stop shop” for certification.
                                <br/>
                                <br/>
                                Everyone wins. Producers appreciate the time saved from having to patch together various certification programs to cover only a portion of what our BAP standards cover. Consumers win because before the seafood has arrived at a supermarket or restaurant, it originated from BAP-certified processing plants and/or farms.

                                <br/><br/>
                                And we are market-driven. Our market development team actively promotes the advantages of BAP certification to an influential network of retailers and foodservice operators on behalf of all BAP-certified facilities.
                            </ShowMore>
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
