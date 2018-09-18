import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StockButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/site-styles/views/loginPage.jsx";

import image from "assets/img/Aquapod_Hawaii.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;

    const styles = theme => ({
      button: {
        margin: theme.spacing.unit,
      }
    });

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Best Aquaculture Practices"

          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>


                    <h3 className={classes.divider}>Please sign in</h3>
                    <CardBody>

                      <CustomInput
                        labelText="Username..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "Username",
                        }}
                      />

                      <CustomInput
                        labelText=""
                        id="pw"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",

                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <StockButton variant="outlined" color="primary" >
                        Sign in
                      </StockButton>

                      <StockButton color="infoColor" >
                        Forgot password?
                      </StockButton>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
