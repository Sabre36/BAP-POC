import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";

class Labs extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer style={{minHeight: "100vh"}}>
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Labs</h2>
                        <h4 className={classes.description}>

                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(Labs);
