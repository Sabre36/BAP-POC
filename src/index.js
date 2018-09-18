import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import "assets/scss/site-styles.css?v=1.2.0";

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

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router history={hist}>
            <Switch>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} key={key} component={prop.component} />;
                })}
            </Switch>
        </Router>
    </MuiThemeProvider>,
    document.getElementById("root")
);
