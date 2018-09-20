import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import parallaxHeaderStyle from "assets/jss/site-styles/components/parallaxHeaderStyle.jsx";
import ShowMore from "react-show-more";
import QAImage from "assets/img/BAP_quality_assurance.jpg";

class ProgramIntegritySection extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer justify="left">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Program integrity</h2>
                        <h4 className={classes.description}>
                            <ShowMore lines={11} anchorClass={classes.moreLessLightText}>
                                We’ve structured our program to ensure the highest level of integrity, with a team of staff members dedicated to ensuring that independent, third-party certification bodies (CBs) and auditors as well as BAP-certified aquaculture facilities are in compliance with program requirements.
                                <br/><br/>
                                To be recognized by BAP, CBs must be accredited under ISO/IEC Guide 17065 by an International Accreditation Forum-member accreditation body and a Multilateral Recognition Arrangements signatory to another internationally recognized scheme.
                                <br/><br/>
                                Auditors must be trained and accredited by the BAP program integrity team in order to audit a facility against the BAP standards. CBs, auditors and facilities are subject to announced and unannounced onsite audits as well as desktop audits, and all are subject to suspension for non-compliance.
                                <br/><br/>
                                We maintain a logo-approval and logo-policing process, to ensure that the BAP logo is being used appropriately. Complaints, appeals and disputes regarding certification brought to the attention of BAP are handled by BAP or referred to the CB involved, depending on the nature of the complaint. If you require a facility’s summary audit report, please contact the certification body directly or program integrity for referral.

                                <br/><br/>
                                <Button color="primary" >Contact us</Button>
                                <br/><br/>

                            </ShowMore>
                        </h4>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <div style={{paddingTop: "100px", float: "right"}}>
                            <img src={QAImage} height={400} />
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(ProgramIntegritySection);
