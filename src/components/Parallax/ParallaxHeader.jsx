import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import Slider from "react-slick";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import image1 from "assets/img/slide1.png";
import image2 from "assets/img/slide2a.png";
import image3 from "assets/img/slide3a.png";
import image4 from "assets/img/slide4a.png";



// core components
import parallaxHeaderStyle from "assets/jss/site-styles/components/parallaxHeaderStyle.jsx";

class ParallaxHeader extends React.Component {
    constructor(props) {
        super(props);
        var windowScrollTop = window.pageYOffset / 3;
        this.state = {
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        };
        this.resetTransform = this.resetTransform.bind(this);
    }
    componentDidMount() {
        var windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
        window.addEventListener("scroll", this.resetTransform);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.resetTransform);
    }
    resetTransform() {
        var windowScrollTop = window.pageYOffset / 3;
        this.setState({
            transform: "translate3d(0," + windowScrollTop + "px,0)"
        });
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
        };

        const {
            classes,
            filter,
            className,
            children,
            style,
            image,
            small
        } = this.props;

        const parallaxClasses = classNames({
            [classes.parallax]: true,
            [classes.filter]: filter,
            [classes.small]: small,
            [className]: className !== undefined
        });
        return (
            <div>
                <Slider {...settings} >
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
                                    <h4 className={classes.description}>
                                        BAP is the world’s most trusted, comprehensive and proven third-party aquaculture certification program. We’ve been improving the environmental, social and economic performance of the aquaculture supply chain and growing the global supply of responsibly farmed seafood since 2002.
                                    </h4>
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
                                        <h4>
                                            More than 150 retail and foodservice brands worldwide are publicly committed to sourcing seafood responsibly from BAP-certified aquaculture processing plants, farms, hatcheries and feed mills.
                                        </h4>
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
                                            <h4>
                                                The BAP program recognizes product from associated or integrated facilities along the aquaculture production chain with a star-based ranking system, which can be found by rolling over a plant’s row in the table. “Facilities in process” refers to a certified facility that is past its expiration date but actively engaged in the re-certification process, while “fallow” refers to a site not currently in production or in the early stages of production that will complete re-certification at a later date.
                                            </h4>
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
                                                    <h4>
                                                         our program to ensure the highest level of integrity, with a team of staff members dedicated to ensuring that independent, third-party certification bodies (CBs) and auditors as well as BAP-certified aquaculture facilities are in compliance with program requirements.
                                                    </h4>
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
                                <div
                                    className={parallaxClasses}
                                    style={{
                                        ...style,
                                        //backgroundImage: "url(" + image + ")",
                                        ...this.state
                                    }}
                                    ref="parallax"
                                    >

                                        {children}
                                    </div>
                                </div>
                            );
                        }
                    }

                    ParallaxHeader.propTypes = {
                        classes: PropTypes.object.isRequired,
                        className: PropTypes.string,
                        filter: PropTypes.bool,
                        children: PropTypes.node,
                        style: PropTypes.string,
                        image: PropTypes.string
                    };

                    export default withStyles(parallaxHeaderStyle)(ParallaxHeader);
