import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Carousel from "react-slick";

import teamStyle from "assets/jss/site-styles/views/landingPageSections/teamStyle.jsx";

import person1 from "assets/img/faces/avery.png";
import person2 from "assets/img/faces/chrisweeks.png";
import person3 from "assets/img/faces/davidyunker.png";
import person4 from "assets/img/faces/gregbrown.png";
import person5 from "assets/img/faces/jeffpeterson.png";
import person6 from "assets/img/faces/ken.png";

class TeamSection extends React.Component {
    render() {
        const { classes } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            autoplay: true,
            fade: false,
            responsive: [
                {
                    breakpoint: 2400,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 1680,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
            appendDots: dots => (
                <div>
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        width: "35px",
                        color: "#157bdc",
                        fontFamily: "Roboto"
                    }}
                    >
                        {i + 1}
                    </div>
                )
            };
            return (
                <div className={classes.section}>
                    <h2 className={classes.title}>Our team</h2>
                    <div style={{border: '1px solid rgba(0,0,0,.075)', borderRadius: '4px'}}>
                        <Carousel {...settings}>
                            <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={person1} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.title}>
                                    Avery Siciliano
                                    <br />
                                    <small className={classes.smallTitle}>BAP Program Integrity Specialist</small>
                                </h4>
                                <CardBody>
                                    <p className={classes.description}>
                                        You can write here details about one of your team members.
                                        You can give more details about what they do. Feel free to
                                        add some <a href="#pablo">links</a> for people to be able to
                                        follow them outside the site.
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyCenter}>
                                    <Button
                                        justIcon
                                        color="transparent"
                                        className={classes.margin5}
                                        >
                                            <i className={classes.socials + " fab fa-twitter"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            color="transparent"
                                            className={classes.margin5}
                                            >
                                                <i className={classes.socials + " fab fa-instagram"} />
                                            </Button>
                                            <Button
                                                justIcon
                                                color="transparent"
                                                className={classes.margin5}
                                                >
                                                    <i className={classes.socials + " fab fa-facebook"} />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    color="transparent"
                                                    className={classes.margin5}
                                                    >
                                                        <i className={classes.socials + " fab fa-facebook"} />
                                                    </Button>
                                                </CardFooter>
                                            </Card>

                                            <Card plain>
                                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                    <img src={person2} alt="..." className={imageClasses} />
                                                </GridItem>
                                                <h4 className={classes.cardTitle}>
                                                    Chris Weeks
                                                    <br />
                                                    <small className={classes.smallTitle}>BAP Program Integrity Technical Specialist</small>
                                                </h4>
                                                <CardBody>
                                                    <p className={classes.description}>
                                                        You can write here details about one of your team members.
                                                        You can give more details about what they do. Feel free to
                                                        add some <a href="#pablo">links</a> for people to be able to
                                                        follow them outside the site.
                                                    </p>
                                                </CardBody>
                                                <CardFooter className={classes.justifyCenter}>
                                                    <Button
                                                        justIcon
                                                        color="transparent"
                                                        className={classes.margin5}
                                                        >
                                                            <i className={classes.socials + " fab fa-twitter"} />
                                                        </Button>
                                                        <Button
                                                            justIcon
                                                            color="transparent"
                                                            className={classes.margin5}
                                                            >
                                                                <i className={classes.socials + " fab fa-linkedin"} />
                                                            </Button>
                                                        </CardFooter>
                                                    </Card>

                                                    <Card plain>
                                                        <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                            <img src={person3} alt="..." className={imageClasses} />
                                                        </GridItem>
                                                        <h4 className={classes.cardTitle}>
                                                            David Yunker
                                                            <br />
                                                            <small className={classes.smallTitle}>BAP Program Integrity Specialist & Training Coordinator</small>
                                                        </h4>
                                                        <CardBody>
                                                            <p className={classes.description}>
                                                                You can write here details about one of your team members.
                                                                You can give more details about what they do. Feel free to
                                                                add some <a href="#pablo">links</a> for people to be able to
                                                                follow them outside the site.
                                                            </p>
                                                        </CardBody>
                                                        <CardFooter className={classes.justifyCenter}>
                                                            <Button
                                                                justIcon
                                                                color="transparent"
                                                                className={classes.margin5}
                                                                >
                                                                    <i className={classes.socials + " fab fa-twitter"} />
                                                                </Button>
                                                                <Button
                                                                    justIcon
                                                                    color="transparent"
                                                                    className={classes.margin5}
                                                                    >
                                                                        <i className={classes.socials + " fab fa-instagram"} />
                                                                    </Button>
                                                                    <Button
                                                                        justIcon
                                                                        color="transparent"
                                                                        className={classes.margin5}
                                                                        >
                                                                            <i className={classes.socials + " fab fa-facebook"} />
                                                                        </Button>
                                                                    </CardFooter>
                                                                </Card>

                                                                <Card plain>
                                                                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                                        <img src={person4} alt="..." className={imageClasses} />
                                                                    </GridItem>
                                                                    <h4 className={classes.cardTitle}>
                                                                        Greg Brown
                                                                        <br />
                                                                        <small className={classes.smallTitle}>Program Integrity &amp; Training Manager</small>
                                                                    </h4>
                                                                    <CardBody>
                                                                        <p className={classes.description}>
                                                                            You can write here details about one of your team members.
                                                                            You can give more details about what they do. Feel free to
                                                                            add some <a href="#pablo">links</a> for people to be able to
                                                                            follow them outside the site.
                                                                        </p>
                                                                    </CardBody>
                                                                    <CardFooter className={classes.justifyCenter}>
                                                                        <Button
                                                                            justIcon
                                                                            color="transparent"
                                                                            className={classes.margin5}
                                                                            >
                                                                                <i className={classes.socials + " fab fa-twitter"} />
                                                                            </Button>
                                                                            <Button
                                                                                justIcon
                                                                                color="transparent"
                                                                                className={classes.margin5}
                                                                                >
                                                                                    <i className={classes.socials + " fab fa-instagram"} />
                                                                                </Button>
                                                                                <Button
                                                                                    justIcon
                                                                                    color="transparent"
                                                                                    className={classes.margin5}
                                                                                    >
                                                                                        <i className={classes.socials + " fab fa-facebook"} />
                                                                                    </Button>
                                                                                </CardFooter>
                                                                            </Card>

                                                                            <Card plain>
                                                                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                                                    <img src={person5} alt="..." className={imageClasses} />
                                                                                </GridItem>
                                                                                <h4 className={classes.cardTitle}>
                                                                                    Jeff Peterson
                                                                                    <br />
                                                                                    <small className={classes.smallTitle}>Program Integrity Advisor</small>
                                                                                </h4>
                                                                                <CardBody>
                                                                                    <p className={classes.description}>
                                                                                        You can write here details about one of your team members.
                                                                                        You can give more details about what they do. Feel free to
                                                                                        add some <a href="#pablo">links</a> for people to be able to
                                                                                        follow them outside the site.
                                                                                    </p>
                                                                                </CardBody>
                                                                                <CardFooter className={classes.justifyCenter}>
                                                                                    <Button
                                                                                        justIcon
                                                                                        color="transparent"
                                                                                        className={classes.margin5}
                                                                                        >
                                                                                            <i className={classes.socials + " fab fa-twitter"} />
                                                                                        </Button>
                                                                                        <Button
                                                                                            justIcon
                                                                                            color="transparent"
                                                                                            className={classes.margin5}
                                                                                            >
                                                                                                <i className={classes.socials + " fab fa-instagram"} />
                                                                                            </Button>
                                                                                            <Button
                                                                                                justIcon
                                                                                                color="transparent"
                                                                                                className={classes.margin5}
                                                                                                >
                                                                                                    <i className={classes.socials + " fab fa-facebook"} />
                                                                                                </Button>
                                                                                            </CardFooter>
                                                                                        </Card>

                                                                                        <Card plain>
                                                                                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                                                                                <img src={person6} alt="..." className={imageClasses} />
                                                                                            </GridItem>
                                                                                            <h4 className={classes.cardTitle}>
                                                                                                Ken Corpron
                                                                                                <br />
                                                                                                <small className={classes.smallTitle}>Program Integrity Analyst</small>
                                                                                            </h4>
                                                                                            <CardBody>
                                                                                                <p className={classes.description}>
                                                                                                    You can write here details about one of your team members.
                                                                                                    You can give more details about what they do. Feel free to
                                                                                                    add some <a href="#pablo">links</a> for people to be able to
                                                                                                    follow them outside the site.
                                                                                                </p>
                                                                                            </CardBody>
                                                                                            <CardFooter className={classes.justifyCenter}>
                                                                                                <Button
                                                                                                    justIcon
                                                                                                    color="transparent"
                                                                                                    className={classes.margin5}
                                                                                                    >
                                                                                                        <i className={classes.socials + " fab fa-twitter"} />
                                                                                                    </Button>
                                                                                                    <Button
                                                                                                        justIcon
                                                                                                        color="transparent"
                                                                                                        className={classes.margin5}
                                                                                                        >
                                                                                                            <i className={classes.socials + " fab fa-instagram"} />
                                                                                                        </Button>
                                                                                                        <Button
                                                                                                            justIcon
                                                                                                            color="transparent"
                                                                                                            className={classes.margin5}
                                                                                                            >
                                                                                                                <i className={classes.socials + " fab fa-facebook"} />
                                                                                                            </Button>
                                                                                                        </CardFooter>
                                                                                                    </Card>



                                                                                                </Carousel>

                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                }
                                                                            }

                                                                            export default withStyles(teamStyle)(TeamSection);
