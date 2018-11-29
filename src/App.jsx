import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
//import indexRoutes from "routes/index.jsx";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import CertificationPage from "views/CertificationPage/CertificationPage.jsx";
import FacilitiesPage from "views/FacilitiesPage/FacilitiesPage.jsx";
import PortalPage from "views/PortalPage/PortalPage.jsx";
import { Helmet } from "react-helmet";

import "assets/scss/site-styles.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#157bdc',

        },
        secondary: {
            main: '#7bd34b',
        },
    },
});

var hist = createBrowserHistory();

hist.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`);
})

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            authenticated: false,
            userName: '',
            password: '',
            defaultRole: null,
            affiliationNames: [],
            defaultAffiliation: null,
            entitlementNames: [],
            defaultEntitlement: null,
            countries: [],
            species: [],
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillReceiveProps() {
        window.previousLocation = this.props.location;
    }

     handleLogin(childState){
         this.setState({
            authenticated: childState.authenticated,
            userName: childState.userName,
            defaultRole: childState.defaultRole,
            affiliationNames:  childState.affiliationNames,
            affiliationList: childState.affiliationList,
            defaultAffiliation: childState.defaultAffiliation,
            entitlementNames: childState.entitlementNames,
            defaultEntitlement: childState.defaultEntitlement,
            alertList: childState.alertList,
            countries:  childState.countries,
            species: childState.species,
        });

        //console.log('%cCurrent login: ' + JSON.stringify(this.state), "color: magenta");
        hist.push('/portal');
    }

    render() {
        var	handleLogin = this.handleLogin;

        return (
            <div>
                <Helmet>
                    <meta name="description" content="Best Aquaculture Practices Certification" />
                    <meta name="application-name" content="Best Aquaculture Practices Certification" />\

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Best Aquaculture Practices Certification" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Best Aquaculture Practices - Best Aquaculture Practices Certification" />
                    <meta property="og:url" content="https://www.bapcertification.org/" />
                    <meta property="og:site_name" content="Best Aquaculture Practices Certification" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:title" content="Best Aquaculture Practices - Best Aquaculture Practices Certification" />
                    <meta name="keywords" content="aquaculture,best practices,seafood,certification,shrimp,salmon,tilapia,certified facilities" />
                    <meta name="robots" content="index,follow"/>
                    <link rel="canonical" href="http://www.bestaquaculturepractices.org" />
                    <title>Best Aquaculture Practices</title>
                </Helmet>

                <MuiThemeProvider theme={theme}>
                    <Router history={hist}>
                        <Switch>
                            <Route exact path="/login" render={(props) =>
                                <LoginPage {...props}
                                    userName={this.state.userName}
                                    authenticated={this.state.authenticated}
                                    handleLogin = {handleLogin.bind(this)}
                                    history={hist}
                                />}
                            />
                            <Route exact path="/" component={LandingPage}  />

                            <Route exact path="/portal" render={() => (
                                !this.state.authenticated ? (
                                    <Redirect to="/login"/>
                                ) : (
                                    <PortalPage
                                        userName={this.state.userName}
                                        authenticated={true}
                                        defaultRole={this.state.defaultRole}
                                        affiliationNames={this.state.affiliationNames}
                                        affiliationList={this.state.affiliationList}
                                        defaultAffiliation={this.state.defaultAffiliation}
                                        entitlementNames={this.state.entitlementNames}
                                        defaultEntitlement={this.state.defaultEntitlement}
                                        alertList={this.state.alertList}
                                        countries={this.state.countries}
                                        species={this.state.species}
                                    />
                                )
                            )}/>

                            <Route exact path="/certification" render={() => (
                                <CertificationPage authenticated={this.state.authenticated} />
                            )}/>

                            <Route exact path="/facilities" render={() => (
                                <FacilitiesPage authenticated={this.state.authenticated} />
                            )}/>

                            <Route exact path="/landing-page" render={() => (
                                <LandingPage authenticated={this.state.authenticated} />
                            )}/>

                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}



export default App;
