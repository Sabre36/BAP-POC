import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StockButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import SimpleStorage, { clearStorage, resetParentState } from "react-simple-storage";//=

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import loginPageStyle from "assets/jss/site-styles/views/loginPage.jsx";
import userFilters from 'assets/data/userFilters.json';
import userData from 'assets/data/userData1.json';
import userInfo from 'assets/data/userInfo.json';

//import unique from "array-unique";
import uniqueObjects from "unique-objects";

//import image from "assets/img/Aquapod_Hawaii.jpg";
//import { render } from 'react-dom';
import { Provider } from 'redux-zero/react';

import store from '../../store/store';
import Authenticated from '../../store/actions/authenticated';

//var image = process.env.PUBLIC_URL + '/bap/kk1_7-1_web_Bryce.jpg';
var image = process.env.PUBLIC_URL + '/bap/header-portal.png';


// function add(set, item) {
//     if (set.indexOf(item) <= -1) {
//         set.push(item);
//     }
// }

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        console.log('%cRendering props: ' + JSON.stringify(this.props), "color:blue");

        this.state = {
            cardAnimation: "cardHidden",
            userName: '',
            password: '',
            authenticated: false,
        };

        this.initialState = this.state;  // sets react-simple-storage
        this.keysToIgnore = ['userName'];

        this.handleSigninClick = this.handleSigninClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

     handleSigninClick() {

        // let curUser = null;
        // let curAffiliations = null;
        //
        // Object.keys(userInfo).forEach(key => {
        //     if (userInfo[key].userName === this.state.userName){
        //         curUser = userInfo[key];
        //     }
        // });
        // console.log('%cuserData: ' + JSON.stringify(curUser), "color:green");
        //
        // Object.keys(curUser).forEach(function(key) {
        //     console.log(key, curUser[key]);
        //     curAffiliations = curUser[key];
        // });
        //
        // for (let i=0; i<curAffiliations.length; i++) {
        //     var affiliation = curAffiliations[i];
        //     console.log('this affiliation:' + JSON.stringify(affiliation));
        // }


        let affiliationList = [];
        let affiliationNames = [];
        let defaultAffiliation = null;
        let entitlementList = [];
        let entitlementNames = [];
        let defaultEntitlement = null;
        let filtersList = [];
        let defaultFilters = [];
        let msgList = [];

        for (let i=0; i<userData.length; i++){
            if (userData[i].userName === this.state.userName) {
                affiliationList = userData[i].affiliations;
                //console.log("a:" + JSON.stringify(affiliationList));
                for (let j=0; j<affiliationList.length; j++) {
                    // for this user, create a simple list of just affiliation names
                    affiliationNames.push(affiliationList[j].affiliation);

                    // and get the first affiliation name to work with
                    defaultAffiliation = affiliationNames[0];

                    // now, create an alert array of ALL messages (even duplicates)
                    let msg = affiliationList[j].alerts;
                    for (let m=0; m<msg.length; m++) {
                        msgList.push(msg[m]);
                    }
                }
                break;
            }
        }

        // now let's get the all the entitlements for the FIRST affiliation
        for (let en=0; en<affiliationList[0].entitlements.length; en++) {
            let name = affiliationList[0].entitlements[en].entitlement;
            let filters = affiliationList[0].entitlements[en].filters;
            entitlementNames.push(name);
        }
        defaultEntitlement = affiliationList[0].entitlements[0].entitlement;
        defaultFilters = affiliationList[0].entitlements[0].filters;

        // finally, let's get all the filters for the default entitlement
        // for (let f=0; f<defaultFilters[0].filters.length; f++) {
        //     let name = affiliationList[0].entitlements[en].entitlement;
        //     entitlementNames.push(name);
        // }


        // Gets a unique list of message
        msgList = uniqueObjects(msgList, ['message']);



       //  this.setState({
       //     authenticated: true,
       //     userAffiliations: affiliations,
       //     selectedAffiliation: selectedAffiliation,
       //     userRoles: roles,
       //     entitlements: entitlements,
       //     selectedView: selectedView,
       //     userAlerts: alerts,
       // });

        console.log("\n\n%cAFFILIATIONS: " + JSON.stringify(affiliationNames) + " (default: " + defaultAffiliation + ")", "color:green");
        console.log("%cENTITLEMENTS: " + JSON.stringify(entitlementNames) + " (default:" + defaultEntitlement + ")",  "color:green");
        console.log("%cFILTERS: " + JSON.stringify(defaultFilters) + " (default: " + defaultEntitlement + ")",  "color:green");
        console.log("%cMESSAGES: " + JSON.stringify(msgList), "color: green");








        for (let i=0; i<userFilters.length; i++){
            if (userFilters[i].userName === this.state.userName) {
                var affiliations = userFilters[i].affiliations;
                var selectedAffiliation = affiliations[0];
                var roles = userFilters[i].roles;
                var entitlements = userFilters[i].entitlements;
                var selectedView = entitlements[0];
                var alerts = userFilters[i].alerts;

                 this.setState({
                    authenticated: true,
                    userAffiliations: affiliations,
                    selectedAffiliation: selectedAffiliation,
                    userRoles: roles,
                    entitlements: entitlements,
                    selectedView: selectedView,
                    userAlerts: alerts,
                });
                //store.setState({isAuthenticated: true, user: this.state.userName});
                //alert(this.state.userName);
                break;
            }
        }
        //await this.props.handleLogin( this.state );
    };

    handleCancelClick() {
        //resetParentState(this, this.initialState, this.keysToIgnore);
        this.props.history.goBack();
    };

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function() {
                this.setState({ cardAnimation: "" });
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
            <Provider store={store}>
            <div>
                <SimpleStorage
                  parent={this}
                  prefix={ 'LoginPage' }
                />


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
                                <GridItem xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <Card className={classes[this.state.cardAnimation]}>
                                        <form className={classes.form}>
                                            <h3 className={classes.divider}>Please sign in</h3>
                                            <CardBody>

                                                <TextField
                                                    id="standard-name"
                                                    label="Username"
                                                    type="email"
                                                    className={classes.textField}
                                                    value={this.state.userName}
                                                    //onChange={this.handleChange('userName')}
                                                    onChange={e => this.setState({ userName: e.target.value })}
                                                    margin="normal"
                                                    fullWidth={true}
                                                />
                                                <br/>
                                                <TextField
                                                    id="standard-password"
                                                    label="Password"
                                                    type="password"
                                                    className={classes.textField}
                                                    value={this.state.password}
                                                    //onChange={this.handleChange('password')}
                                                    onChange={e => this.setState({ password: e.target.value })}
                                                    margin="normal"
                                                    fullWidth={true}
                                                />

                                                <br/>
                                                <div>
                                                    <StockButton color="primary" style={{padding: 0}} onClick={() => clearStorage()} >
                                                        Forgot Password?
                                                    </StockButton>
                                                    <StockButton color="primary" style={{padding: 0, float: "right"}} onClick={() => clearStorage()} >
                                                        Register now
                                                    </StockButton>

                                                </div>
                                                <br/>

                                                {/* <Authenticated/> */}

                                                {/* <Divider light={false}/> */}

                                            </CardBody>
                                            <CardFooter className={classes.cardFooter}>
                                                <StockButton variant="outlined" color="primary" onClick={this.handleCancelClick} >
                                                    Cancel
                                                </StockButton>
                                                &nbsp;&nbsp;

                                                <StockButton variant="raised" color="primary"  onClick={this.handleSigninClick}>
                                                    Sign in
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
                </Provider>
            );
        }
    }

export default withStyles(loginPageStyle)(LoginPage);
