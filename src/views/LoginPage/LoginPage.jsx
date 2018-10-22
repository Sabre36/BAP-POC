import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import StockButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SimpleStorage, { clearStorage, resetParentState } from "react-simple-storage";//=
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import loginPageStyle from "assets/jss/site-styles/views/loginPage.jsx";
import userData from 'assets/data/userData.json';
//import uniqueObjects from "unique-objects";
import { Provider } from 'redux-zero/react';
import store from '../../store/store';

var image = process.env.PUBLIC_URL + '/bap/header-portal.png';

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
            defaultRole: null,
            affiliationList: [],
            affiliationNames: [],
            defaultAffiliation: null,
            entitlementList: [],
            defaultEntitlement: "Scorecard",
            countries: [],
            species: [],
            filterList: [],
            alertList: []
        };

        this.initialState = this.state;  // sets react-simple-storage
        this.keysToIgnore = ['userName'];

        this.handleSigninClick = this.handleSigninClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    async handleSigninClick() {

        let _affiliationList = [];
        let _affiliationNames = [];
        let _defaultAffiliation = null;
        let _entitlementNames = [];
        let _defaultEntitlement = null;
        let _filterList = [];
        let _species = [];
        let _countries = [];
        let _defaultRole = null;
        let _alertList = [];


        for (let i=0; i<userData.length; i++){
            if (userData[i].userName === this.state.userName) {
                _affiliationList = userData[i].affiliations;
                //console.log("a:" + JSON.stringify(_affiliationList));
                for (let j=0; j<_affiliationList.length; j++) {
                    // for this user, create a simple list of just affiliation names
                    _affiliationNames.push(_affiliationList[j].affiliation);

                    // and get the first affiliation name to work with
                    _defaultAffiliation = _affiliationNames[0];

                    // now, create an alert array of ALL messages (including duplicates).  Not sure if this makes sense?
                    // let msg = _affiliationList[j].alerts;
                    // for (let m=0; m<msg.length; m++) {
                    //     _msgList.push(msg[m]);
                    // }
                }
                break;
            }
        }

        // now let's get the all the entitlements for the FIRST affiliation
        for (let en=0; en<_affiliationList[0].entitlements.length; en++) {
            let name = _affiliationList[0].entitlements[en].entitlement;
            _entitlementNames.push(name);
        }

        for (let al=0; al<_affiliationList[0].alerts.length; al++) {
            _alertList.push(_affiliationList[0].alerts[al]);
        }


        //_entitlementList = _affiliationList[0].entitlements[0];
        _defaultEntitlement = _affiliationList[0].entitlements[0].entitlement;
        _filterList = _affiliationList[0].entitlements[0].filters;
        _defaultRole = _affiliationList[0].role;

        // Gets a unique list of message
        //_msgList = uniqueObjects(_msgList, ['message']);

        console.log("\n%cUSER: " + this.state.userName + " (role: " + _defaultRole + ")", "color:green");
        console.log("%cAFFILIATIONS: " + JSON.stringify(_affiliationNames) + " (default: " + _defaultAffiliation + ")", "color:green");
        console.log("%cENTITLEMENTS: " + JSON.stringify(_entitlementNames) + " (default:" + _defaultEntitlement + ")",  "color:green");
        //console.log("%cFILTER LIST: " + JSON.stringify(_filterList));
        // console.log("%cSPECIES: " + JSON.stringify(_species),  "color:green");
        // console.log("%cCOUNTRIES: " + JSON.stringify(_countries),  "color:green");
        //console.log("%cALERT LIST: " + JSON.stringify(_alertList), "color: green");
        //console.log("%cMESSAGE SUBSET: " + JSON.stringify(_msgList), "color: green");

         await this.setState({
            authenticated: true,
            defaultRole: _defaultRole,
            affiliationList: _affiliationList,
            affiliationNames: _affiliationNames,
            defaultAffiliation: _defaultAffiliation,
            entitlementNames: _entitlementNames,
            defaultEntitlement: _defaultEntitlement,
            filterList: _filterList,
            species: _species,
            countries: _countries,
            alertList: _alertList,
        });

        //alert(JSON.stringify(this.state.alertList));

        await this.props.handleLogin( this.state );
    };

    handleCancelClick() {
        resetParentState(this, this.initialState, this.keysToIgnore);
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
