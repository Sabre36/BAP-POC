import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactStyle from "assets/jss/site-styles/views/landingPageSections/contactStyle.jsx";

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    const leftJust = {textAlign: 'left'}
    return (
      <div className={classes.section}>
        <GridContainer justify="left">
          <GridItem cs={12} sm={12} md={6}>
            <h2 className={classes.title}>Contact us</h2>
            <h4 className={classes.description} >
                Global Aquaculture Alliance<br/>
                Best Aquaculture Practices<br/>
                2 International Drive, Suite 105<br/>
                Portsmouth, NH 03801 USA<br/>
                1-603-317-5000<br/>
                <a href="www.bapcertification.org">www.bapcertification.org</a>
                <br/>
                <br/>
                <strong>Or...</strong>
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 3
                  }}
                />
                <GridContainer justify="left">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" className={classes.button}>Send message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(contactStyle)(ContactSection);
