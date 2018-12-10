import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import facilitiesStyle from "assets/jss/site-styles/views/landingPageSections/facilitiesStyle.jsx";
import ReactPlayer from "react-player";

var salmon = process.env.PUBLIC_URL + '/bap/prepared_salmon.jpg';

var video1 = 'https://www.bapcertification.org/video/BAP_NEW_UK_LASS_ROUGH_SOUNDFX_001.mp4';


class ConsumersSection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={{marginTop: '30px', backgroundImage: `url(${salmon}`, backgroundRepeat: 'no-repeat', backgroundColor: '#EEEEEE', borderRadius: '8px'}}>
                <GridContainer >
                    <GridItem cs={12} sm={12} md={6} style={{padding: '60px'}}>
                        <h2 className={classes.title}>How we benefit consumers</h2>
                        <h4 className={classes.description}>

                            Seafood farming production must increase to meet the world’s seafood needs. This type of farming, also known as aquaculture, currently provides half of all fish for human consumption, while at the same time lessening the heavy burden on wild-caught stocks and natural resources
                        </h4>

                        <div style={{paddingTop: '75px', paddingRight: '40px'}}>
                            <h2 className={classes.title}>It's easy...</h2>
                            <h4 className={classes.description}>
                                <ReactPlayer url={video1} controls={true} className="slick-video" />
                                <br/>
                                To get on board with aquaculture, but it’s important to educate yourself so that the right farmed product lands on your plate.
                            </h4>
                        </div>
                    </GridItem>

                    <GridItem cs={12} sm={12} md={6}>
                        <div style={{paddingTop: '475px', paddingRight: '60px'}} >
                            <h2 className={classes.title}>The new <emphasis>farm-to-table</emphasis> story</h2>
                            <h4 className={classes.description}>

                                Our Best Aquaculture Practices (BAP) label signals that before the seafood that you purchased arrived at your supermarket or restaurant, it originated from BAP-certified processing plants and/or farms.
                                <br/>
                                <br/>
                                The BAP label assures you, the consumer, that seafood was produced in a way that is....
                                <ul>
                                    <li>Considerate of the health of the animal and consumer (animal welfare and food safety)</li>
                                    <li>Socially responsible toward the people and communities farming and processing the seafood</li>
                                    <li>Respective and protective of the surrounding environment</li>
                                </ul>
                            </h4>
                            <Button variant="outlined" color="primary">
                                LEARN MORE
                            </Button>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(facilitiesStyle)(ConsumersSection);
