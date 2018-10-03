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
import TopNavLinks from "components/Header/TopNavLinks.jsx";
import Parallax from "components/Parallax/ParallaxHeader.jsx";

import landingPageStyle from "assets/jss/site-styles/views/landingPage.jsx";

// Sections for this page
import AboutBAPSection from "./Sections/AboutBAPSection.jsx";
import FacilitiesSection from "./Sections/FacilitiesSection.jsx";
import StarRatingSection from "./Sections/StarRatingSection.jsx";

import TeamSection from "./Sections/TeamSection.jsx";
import StayConnectedSection from "./Sections/StayConnectedSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";

import pillars from "assets/img/4-pillars.png";

const dashboardRoutes = [];


class LandingPage extends React.Component {

    constructor(){
        super();
        this.state= {
            activeSlide : 0,
        }

        this.childHandler = this.childHandler.bind(this);
    }

    childHandler(dataFromChild) {
        // log our state before and after we updated it
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            activeSlide: dataFromChild
        },() => console.log('Updated Parent State:', this.state));
    }

    render() {
        const { classes, ...rest } = this.props;

        return (
            <div>
                <Header
                    color="semiTransparent"
                    routes={dashboardRoutes}
                    brand="Best Aquaculture Practices"
                    rightLinks={<HeaderLinks itemIndex={this.state.activeSlide} />}
                    topLinks={<TopNavLinks />}
                    fixed
                    itemIndex={this.state.activeSlide}
                    changeColorOnScroll={{
                        height: 275,
                        color: "primary"
                    }}
                    {...rest}
                />
                <Parallax filter action={this.childHandler}>
                    <div className={classes.container}>
                        <h3> {this.state.data}</h3>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6} >
                                <h2 className={classes.title}>Why BAP certification?</h2>
                                <h4 className={classes.subtitle}>
                                    The Best Aquaculture Practices is the only third-party aquaculture certification program to be compliant with the Global Food Safety Initiative (GFSI), Global Social Compliance Programme (GSCP) and Global Sustainable Seafood Initiative (GSSI).
                                </h4>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={pillars} height={275} alt="Pillars" />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <AboutBAPSection />
                        <FacilitiesSection />
                        <StarRatingSection/>
                        <TeamSection />
                        <StayConnectedSection />
                        <ContactSection />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(LandingPage);
