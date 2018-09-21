import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
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
//~~~~

class App extends React.Component {
    constructor(){
        super();
        this.state= {
            isSignedIn : false,
        }

        this.childHandler = this.childHandler.bind(this);
    }

    childHandler(dataFromChild) {
        console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:cyan");
        this.setState({
            isSignedIn: dataFromChild
        },() => console.log('Updated App State:', this.state));
    }

    render() {
        const { classes, ...rest } = this.props;
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
                            {indexRoutes.map((prop, key) => {
                                return <Route path={prop.path} key={key} component={prop.component} />;
                            })}
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
