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

// var loginInfo = {
//     authenticated : false,
//     userName: 'Jeff Rask',
//     userAffiliation: 'Global Aquaculture Alliance',
//     userRole: 'admin',
// };

var hist = createBrowserHistory();

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            authenticated: false,
            userName: '',
            password: '',
            userRoles: [],
            entitlements: [],
            userAffiliations: [],
            selectedAffiliation: '',
            selectedView: '',
            userAlerts: []
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
            userAffiliations: childState.userAffiliations,
            selectedAffiliation: childState.selectedAffiliation,
            userRoles: childState.userRoles,
            entitlements: childState.entitlements,
            selectedView: childState.selectedView,
            userAlerts: childState.userAlerts
        });
        hist.push('/portal');

        console.log('%cCurrent login: ' + JSON.stringify(this.state), "color: green");
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
                                    selectedAffiliation={this.state.selectedAffiliation}
                                    selectedView={this.state.selectedView}
                                    authenticated={this.state.authenticated}
                                    userAlerts={this.state.userAlerts}
                                    handleLogin = {handleLogin.bind(this)}
                                />}
                            />
                            <Route exact path="/" component={LandingPage}  />

                            <Route exact path="/portal" render={() => (
                                !this.state.authenticated ? (
                                    <Redirect to="/login"/>
                                ) : (
                                    <PortalPage
                                        userName={this.state.userName}
                                        //password={this.state.password}
                                        userAffiliations={this.state.userAffiliations}
                                        userRoles={this.state.userRoles}
                                        entitlements={this.state.entitlements}
                                        selectedAffiliation={this.state.selectedAffiliation}
                                        selectedView={this.state.selectedView}
                                        userAlerts={this.state.userAlerts}
                                        authenticated={true}
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
                            {/* <Route path="*" component={LandingPage} /> */}
                            {/* <Route exact path="/login" component={LoginPage} /> */}
                            {/* {indexRoutes.map((prop, key) => {
                                return <Route path={prop.path} key={key} component={prop.component} onEnter={requireAuth} />;
                            })} */}
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
