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
import portalPageStyle from "assets/jss/site-styles/views/portalPage.jsx";
import PortalNav from "components/Drawers/PortalNav.jsx";
import { Helmet } from "react-helmet";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import PrintIcon from '@material-ui/icons/Print';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const dashboardRoutes = [];

var img_portal = process.env.PUBLIC_URL + '/bap/header-portal.jpg';

class PortalPage extends React.Component {

    render() {
        const { classes, ...rest } = this.props;

        this.state= {
            activeSlide : 5,
            userName: this.props.userName,
            userAffiliation: this.props.userAffiliation
        }

        const styles = {
            root: {
                flexGrow: 1,
            },
            grow: {
                flexGrow: 1,
            },
            rightToolbar: {
                marginLeft: 'auto',
                marginRight: -12,
            },
            menuButton: {
                marginRight: 16,
                marginLeft: -12,
            },
            appbar: {
                backgroundColor: "rgba(0,0,0.3)"
            }
        };

        return (
            <div>
                <Helmet>
                    <meta name="description" content="BAP - Portal" />
                    <meta property="og:url" content="https://www.bapcertification.org/" />
                    <meta property="og:site_name" content="Best Aquaculture Practices Certification - Portal" />
                    <meta name="twitter:card" content="portal" />
                    <meta name="twitter:title" content="Best Aquaculture Practices Certification - Portal" />
                    <link rel="canonical" href="http://www.bestaquaculturepractices.org" />
                    <title>BAP - Portal</title>
                </Helmet>

                <div style={{width: "100%", height: "120px", overflow: "hidden"}}>
                    <img src={img_portal} style={{width: "100%", zIndex: "1"}}/>
                </div>

                <Header
                    color="semiTransparent"
                    routes={dashboardRoutes}
                    brand="Best Aquaculture Practices"
                    rightLinks={<HeaderLinks itemIndex={this.state.activeSlide}/>}
                    topLinks={<TopNavLinks />}
                    top
                    fixed
                    changeColorOnScroll={{
                        height: 2,
                    }}
                    {...rest}
                />

                <AppBar position="sticky" style={{backgroundColor: "#1463AC", position: "fixed", top: "110px"}}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} aria-label="Menu" color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">Welcome Sally Reynolds (Kroger)</Typography>

                        <section className={classes.rightToolbar}>
                            <IconButton color="inherit" aria-label="Print">
                                <PrintIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Save">
                                <SaveAltIcon />
                            </IconButton>
                            <IconButton color="inherit" aria-label="More Options">
                                <MoreVertIcon />
                            </IconButton>
                        </section>
                    </Toolbar>
                </AppBar>

                <div style={{zIndex: "4", margin: "50px", color: "#000"}}>
                    <PortalNav />
                </div>

                <Footer />
            </div>
        );
    }
}

export default withStyles(portalPageStyle)(PortalPage);
