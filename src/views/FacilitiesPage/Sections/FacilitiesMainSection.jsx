import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import FacilitiesMap from "components/Maps/FacilitiesMap.jsx";
import FacilitiesGrid from "components/Tables/FacilitiesGrid.jsx";

import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import InfoIcon from "@material-ui/icons/Info";
import LocationIcon from "@material-ui/icons/LocationOn";
import ListIcon from "@material-ui/icons/ListAlt";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


class FacilitiesMainSection extends React.Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        const { value } = this.state;

        const usage = {
            fontSize: "14px",
            fontWweight: "300"
        }

        return (
            <div className={classes.section}>
                <GridContainer justify="left">
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Facilities</h2>
                        <h4 className={classes.description}>
                            The following is a list of all BAP-certified farms, hatcheries, feed mills, processing plants and repacking plants. The BAP program recognizes product from associated or integrated facilities along the aquaculture production chain with a star-based ranking system.
                            <br/><br/>
                            To find facilities, filter the list using the dropdown menus to sort by facility type, species or country, or use the search field. The list can be copied, saved as a PDF or Excel file (.csv), or printed.
                        </h4>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}></h2>
                        <Card className={classes.card} style={{backgroundColor: "#fcfcfc" }}>
                            <CardActionArea>
                                <CardContent >
                                    <Typography gutterBottom variant="headline" component="h3" className={classes.title}>
                                        <InfoIcon style={{height: "20px", marginTop: "3px"}}/>&nbsp;Usage notes
                                    </Typography>
                                    <h4 className={classes.description}>
                                        <ul style={usage}>
                                            <li>You must be signed in to see <strong>all</strong> table columns.</li>
                                            <li><i>Facilities in process</i> refers to a certified facility that is past its expiration date but actively engaged in the re-certification process.</li>
                                            <li><i>fallow</i> refers to a site not currently in production or in the early stages of production that will complete re-certification at a later date.</li>
                                        </ul>
                                    </h4>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </GridItem>

                <br/>
                <br/>
                <GridItem xs={12} sm={12} md={12}>
                    <Tabs value={value} onChange={this.handleChange} style={{color: "#000"}}>
                        <Tab label="Locations" icon={<LocationIcon/>} />
                        <Tab label="Data Table" icon={<ListIcon/>} />
                      </Tabs>
                </GridItem>
            </GridContainer>

            {value === 0 && <TabContainer >
                <FacilitiesMap/>
            </TabContainer>}

            {value === 1 && <TabContainer>
                <FacilitiesGrid/>
            </TabContainer>}

        </div>
    );
}
}

export default withStyles(aboutBAPStyle)(FacilitiesMainSection);
