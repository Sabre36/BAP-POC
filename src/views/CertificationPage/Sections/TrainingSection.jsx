import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


import Button from '@material-ui/core/Button';
import Slider from "react-slick";
import certificationPage from "assets/jss/site-styles/views/certificationPage.jsx";

var slide1 = process.env.PUBLIC_URL + '/bap/worker5.jpg';  // AdobeStock_158396929_Preview.jpeg
var slide2 = process.env.PUBLIC_URL + '/bap/worker6.jpg';
var slide3 = process.env.PUBLIC_URL + '/bap/worker7.jpg';
var slide4 = process.env.PUBLIC_URL + '/bap/worker8.jpg';
var slide5 = process.env.PUBLIC_URL + '/bap/worker9.jpg';


class TrainingSection extends React.Component {
    render() {
        const { classes } = this.props;

        var settings = {
            dots: true,
            infinite: true,
            speed: 9000,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            pauseHover: true,
            fade: true,
            focusOnSelect: true,
            adaptiveHeight: false,
        };

        return (
            <div>
                <GridContainer justify="left">
                    <GridItem cs={12} sm={12} md={5}>
                        <h2 className={classes.sectionTitle}>Interested in training?</h2>
                        <h4 className={classes.description}>

                            <div style={{width: "400px", height: "400px", overflow: "hidden"}}>
                                <Slider {...settings} >
                                    <div>
                                        <img
                                            src={slide1}
                                            alt="Who we are"
                                            className="slick-image"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={slide2}
                                            alt="Who we are"
                                            className="slick-image"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={slide3}
                                            alt="Who we are"
                                            className="slick-image"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={slide4}
                                            alt="Who we are"
                                            className="slick-image"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            src={slide5}
                                            alt="Who we are"
                                            className="slick-image"
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </h4>
                    </GridItem>

                    <GridItem cs={12} sm={12} md={7}>
                        <div style={{paddingTop: "120px"}}>
                            <h4 className={classes.description}>

                                New auditor candidates, existing auditors requiring refresher training, and observers — including government officials, producers and other industry stakeholders — are encouraged to attend our regularly held BAP auditor training courses.
                                <br/>
                                <br/>
                                If you are a prospective CB interested in applying for accreditation, please review our <a href="">criteria, requirements, and application form</a>.
                                <br/>
                                <br/><Button variant="outlined" color="primary">
                                    LEARN MORE
                                </Button>
                            </h4>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(certificationPage)(TrainingSection);
