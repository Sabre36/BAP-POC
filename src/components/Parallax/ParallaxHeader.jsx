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
import ShowMore from "react-show-more";
import parallaxHeaderStyle from "assets/jss/site-styles/components/parallaxHeaderStyle.jsx";
import ReactPlayer from "react-player";


var img_certification = process.env.PUBLIC_URL + '/bap/slide-cert.png';
var img_facilities = process.env.PUBLIC_URL + '/bap/slide-facilities.png';
var img_marketplace = process.env.PUBLIC_URL + '/bap/slide-marketplace.png';
var img_consumers = process.env.PUBLIC_URL + '/bap/slide-consumers.png';
var img_portal = process.env.PUBLIC_URL + '/bap/slide-portal.png';
//var img_portal = process.env.PUBLIC_URL + '/bap/sea-coast-water-nature-ocean-shore-1409613-pxhere.com.jpg';

var video_fish = process.env.PUBLIC_URL + '/bap/940120480-640_adpp.mp4';
//var video_fish = process.env.PUBLIC_URL + '/bap/878718598-640_adpp.mp4';

// core components
class ParallaxHeader extends React.Component {

    constructor(props) {
        super(props);
        var windowScrollTop = window.pageYOffset / 3;
        this.state = {
            transform: "translate3d(0," + windowScrollTop + "px,0)",
            activeSlide: 0,
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
            speed: 2000,
            //speed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            pauseHover: true,
            fade: true,
            focusOnSelect: true,
            adaptiveHeight: false,
            afterChange: current => {
                this.setState({ activeSlide: current });
                console.log('Current: ' + current);
                this.props.action(current);
            }
        };

        const {
            classes,
            filter,
            className,
            children,
            style,
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
                    {/* WHO WE ARE */}
                    <div>
                        <div alt="Who we are" className="slick-video-container">
                            <div className="slick-video-overlay"></div>
                            <ReactPlayer url={video_fish} loop playing playbackRate={.33} className="slick-video" />
                        </div>

                        <div className="slick-video-caption" >
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={8} lg={7}>
                                    <div className={classes.container}>
                                        <h1 className={classes.heading}>Who we are</h1>
                                        <p className={classes.blurb}>
                                            <ShowMore lines={4} anchorClass={classes.moreLessLightText}>
                                                BAP is the world’s most trusted, comprehensive and proven third-party aquaculture certification program. We’ve been improving the environmental, social and economic performance of the aquaculture supply chain and growing the global supply of responsibly farmed seafood since 2002.
                                            </ShowMore>
                                        </p>
                                    <br />
                                    <Button
                                        color="success"
                                        size="lg"
                                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >
                                            Watch video &nbsp;<i className="fa fa-play" />
                                        </Button>
                                    </div>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </div>

                        {/* CERTIFICATION */}
                        <div>
                            <img
                                src={img_certification}
                                alt="Getting certified"
                                className="slick-image"
                            />
                            <div className="slick-caption">
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={8} lg={7}>
                                        <div className={classes.container}>
                                        <h1 className={classes.heading}>Certification &amp; program integrity</h1>
                                        <p className={classes.blurb}>
                                            <ShowMore lines={4} anchorClass={classes.moreLessLightText}>
                                                Our program ensures the highest level of integrity, with a team of staff members dedicated to ensuring that independent, third-party certification bodies (CBs) and auditors as well as BAP-certified aquaculture facilities are in compliance with program requirements.
                                            </ShowMore>
                                        </p>
                                        <br />
                                        <Button
                                            color="primary"
                                            size="lg"
                                            href="/facilities"
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
                                            </div>
                                            </GridItem>
                                        </GridContainer>
                                    </div>
                                </div>

                                {/* FACILITIES */}
                                <div>
                                    <img
                                        src={img_facilities}
                                        alt="Facilities"
                                        className="slick-image"
                                    />
                                    <div className="slick-caption">
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={8} lg={7}>
                                                <div className={classes.container}>
                                                <h1 className={classes.heading}>What is a certified facility?</h1>
                                                <p className={classes.blurb}>
                                                    <ShowMore lines={4} anchorClass={classes.moreLessLightText}>
                                                        Our program ensures the highest level of integrity, with a team of staff members dedicated to ensuring that independent, third-party certification bodies (CBs) and auditors as well as BAP-certified aquaculture facilities are in compliance with program requirements.
                                                    </ShowMore>
                                                </p>
                                                <br />
                                                <Button
                                                    color="success"
                                                    size="lg"
                                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    >
                                                        Learn more
                                                    </Button>
                                                </div>
                                                </GridItem>
                                            </GridContainer>
                                        </div>
                                    </div>

                                    {/* MARKETPLACE */}
                                    <div>
                                        <img
                                            src={img_marketplace}
                                            alt="Marketplace"
                                            className="slick-image"
                                        />
                                        <div className="slick-caption">
                                            <GridContainer>
                                                <GridItem xs={12} sm={12} md={8} lg={7}>
                                                    <div className={classes.container}>
                                                    <h1 className={classes.heading}>BAP in the marketplace</h1>
                                                    <p className={classes.blurb}>

                                                        <ShowMore lines={4} anchorClass={classes.moreLessLightText}>
                                                            More than 150 retail and foodservice brands worldwide are publicly committed to sourcing seafood responsibly from BAP-certified aquaculture processing plants, farms, hatcheries and feed mills.
                                                        </ShowMore>
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
                                                    </div>
                                                    </GridItem>
                                                </GridContainer>
                                            </div>
                                        </div>

                                        {/* CONSUMERS */}
                                        <div>
                                            <img
                                                src={img_consumers}
                                                alt="Consumers"
                                                className="slick-image"
                                            />
                                            <div className="slick-caption">
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} md={8} lg={7}>
                                                        <div className={classes.container}>
                                                        <h1 className={classes.heading}>How do we benefit consumers?</h1>
                                                        <p className={classes.blurb}>
                                                            Our BAP label signals that before the seafood that you purchased arrived at your supermarket or restaurant, it originated from BAP-certified processing plants and/or farms.                                                        </p>
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
                                                            </div>
                                                            </GridItem>
                                                        </GridContainer>
                                                    </div>
                                                </div>

                                                {/* PORTAL */}
                                                <div>
                                                    <img
                                                        src={img_portal}
                                                        alt="Portal"
                                                        className="slick-image"
                                                    />
                                                    <div className="slick-caption">
                                                        <GridContainer>
                                                            <GridItem xs={12} sm={12} md={8} lg={7}>
                                                                <div className={classes.container}>
                                                                <h1 className={classes.heading}>What can I do in the portal?</h1>
                                                                <p className={classes.blurb}>
                                                                    The portal allows you to view your lab reports, view your data, and much more. NOTE: you must be signed in to view the portal.
                                                                </p>
                                                                    <br />
                                                                    <Button
                                                                        color="warning"
                                                                        size="lg"
                                                                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        >
                                                                            Sign in
                                                                        </Button>
                                                                    </div>
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
                                    image: PropTypes.string,
                                };

                                export default withStyles(parallaxHeaderStyle)(ParallaxHeader);
