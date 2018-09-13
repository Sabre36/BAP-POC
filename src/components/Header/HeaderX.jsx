import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

import logoImage from "assets/img/favicon.png";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/site-styles/components/headerStyle.jsx";


import Slider from "react-slick";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import image1 from "assets/img/slide1.png";
import image2 from "assets/img/slide2a.png";
import image3 from "assets/img/slide3a.png";
import image4 from "assets/img/slide4a.png";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }

  state = {
    activeSlide: 0,
    activeSlide2: 0
  };

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {


      var settings = {
          dots: true,
          infinite: true,
          speed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          autoplay: true,
          pauseHover: true,
          fade: true,
          focusOnSelect: true,
          beforeChange: (current, next) => this.setState({ activeSlide: next }),
          afterChange: current => this.setState({ activeSlide2: current })
      };

    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = <span><img src={logoImage} height={28} width={28} /><Button className={classes.title}>{brand}</Button></span>;
    return (
        <div>

          <Slider {...settings} >
              <AppBar className={appBarClasses}>
                  <Toolbar className={classes.container}>
                    {leftLinks !== undefined ? brandComponent : null}
                    <div className={classes.flex}>
                      {leftLinks !== undefined ? (
                        <Hidden smDown implementation="css">
                          {leftLinks}
                        </Hidden>
                      ) : (
                        brandComponent
                      )}
                    </div>
                    <Hidden smDown implementation="css">
                      {rightLinks}
                    </Hidden>
                    <Hidden mdUp>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerToggle}
                      >
                        <Menu />
                      </IconButton>
                    </Hidden>
                  </Toolbar>
                  <Hidden mdUp implementation="css">
                    <Drawer
                      variant="temporary"
                      anchor={"right"}
                      open={this.state.mobileOpen}
                      classes={{
                        paper: classes.drawerPaper
                      }}
                      onClose={this.handleDrawerToggle}
                    >
                      <div className={classes.appResponsive}>
                        {leftLinks}
                        {rightLinks}
                      </div>
                    </Drawer>
                  </Hidden>
                </AppBar>

              <div>

                  <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                  />
                  <div className="slick-caption">
                      <GridContainer>
                          <GridItem xs={12} sm={12} md={6}>
                              <h1 className={classes.title}>Who we are</h1>
                              <p className={classes.blurb}>
                                  BAP is the world’s most trusted, comprehensive and proven third-party aquaculture certification program. We’ve been improving the environmental, social and economic performance of the aquaculture supply chain and growing the global supply of responsibly farmed seafood since 2002.
                              </p>
                              <br />
                              <Button
                                  color="success"
                                  size="lg"
                                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  >
                                      <i className="fas fa-play" />Watch video
                                  </Button>
                              </GridItem>
                          </GridContainer>
                      </div>
                  </div>

                  <div>
                      <img
                          src={image2}
                          alt="Second slide"
                          className="slick-image"
                      />
                      <div className="slick-caption">
                          <GridContainer>
                              <GridItem xs={12} sm={12} md={6}>
                                  <h1 className={classes.title}>In the marketplace</h1>
                                  <p className={classes.blurb}>
                                      More than 150 retail and foodservice brands worldwide are publicly committed to sourcing seafood responsibly from BAP-certified aquaculture processing plants, farms, hatcheries and feed mills.
                                  </p>
                                  <br />
                                  <Button
                                      color="primary"
                                      size="lg"
                                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      >
                                          Learn more
                                      </Button>
                                  </GridItem>
                              </GridContainer>
                          </div>
                      </div>

                      <div>
                          <img
                              src={image3}
                              alt="Third slide"
                              className="slick-image"
                          />
                          <div className="slick-caption">
                              <GridContainer>
                                  <GridItem xs={12} sm={12} md={6}>
                                      <h1 className={classes.title}>Certification</h1>
                                      <p className={classes.blurb}>
                                          The BAP program recognizes product from associated or integrated facilities along the aquaculture production chain with a star-based ranking system.
                                      </p>
                                      <br />
                                      <Button
                                          color="primary"
                                          size="lg"
                                          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          >
                                              Learn more
                                          </Button>

                                          &nbsp;

                                          <Button
                                              color="success"
                                              size="lg"
                                              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              >
                                                  Apply now
                                              </Button>
                                          </GridItem>
                                      </GridContainer>
                                  </div>
                              </div>
                              <div>
                                  <img
                                      src={image4}
                                      alt="Fourth slide"
                                      className="slick-image"
                                  />
                                  <div className="slick-caption">
                                      <GridContainer>
                                          <GridItem xs={12} sm={12} md={6}>
                                              <h1 className={classes.title}>Program standards</h1>
                                              <p className={classes.blurb}>
                                                   Our program ensures the highest level of integrity, with a team of staff members dedicated to ensuring that independent, third-party certification bodies (CBs) and auditors as well as BAP-certified aquaculture facilities are in compliance with program requirements.
                                              </p>
                                              <br />
                                              <Button
                                                  color="primary"
                                                  size="lg"
                                                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  >
                                                      Learn more
                                                  </Button>

                                              </GridItem>
                                          </GridContainer>
                                  </div>
                              </div>




  </Slider>
  </div>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);
