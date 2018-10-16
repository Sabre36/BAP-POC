import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import TopNavLinks from "components/Header/TopNavLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ProgramIntegritySection from "./Sections/ProgramIntegritySection.jsx";
import TrainingSection from "./Sections/TrainingSection.jsx";
import certificationPageStyle from "assets/jss/site-styles/views/certificationPage.jsx";
import { Helmet } from "react-helmet";
const dashboardRoutes = [];

var img_certification = process.env.PUBLIC_URL + '/bap/slide-cert.png';

class CertificationPage extends React.Component {
    constructor(){
        super();
        this.state= {
            activeSlide : 1,
        }
    }

    render() {
        const { classes, ...rest } = this.props;

        return (
            <div>
                <Helmet>
                    <meta name="description" content="BAP - What we do" />
                    <meta property="og:url" content="https://www.bapcertification.org/" />
                    <meta property="og:site_name" content="Best Aquaculture Practices Certification - What we do" />
                    <meta name="twitter:card" content="facilities" />
                    <meta name="twitter:title" content="Best Aquaculture Practices Certification - What we do" />
                    <link rel="canonical" href="http://www.bestaquaculturepractices.org" />
                    <title>BAP - What we do</title>
                </Helmet>

                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="Best Aquaculture Practices"
                    rightLinks={<HeaderLinks itemIndex={this.state.activeSlide}/>}
                    topLinks={<TopNavLinks />}
                    top
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "primary"
                    }}
                    {...rest}
                />
                <Parallax filter image={img_certification}>
                <div className={classes.container}>

                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6} >
                            <h2 className={classes.title}>What we do</h2>
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

                    <ProgramIntegritySection />
                    <TrainingSection />

                </div>
            </div>
            <Footer />
        </div>
    );
}
}

export default withStyles(certificationPageStyle)(CertificationPage);
