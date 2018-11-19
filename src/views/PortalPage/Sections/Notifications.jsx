import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import SankeyContainer from "components/SankeyChart/SankeyContainer.jsx";

class Notifications extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer style={{minHeight: "100vh"}}>

                    <GridItem xs={12} sm={12} md={12}>
                        <SankeyContainer id="sankey" foregroundColor="#164250" title="a title" footer="a footer" value="99%" percent={0.92} />
                    </GridItem>

                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(Notifications);
