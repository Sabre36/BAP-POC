/* Counter.js */
import React from "react";
import StockButton from '@material-ui/core/Button';
import { connect } from "redux-zero/react";
import TextField from '@material-ui/core/TextField';
import actions from "./actions";
import store from "./../store";

const mapToProps = ({ isAuthenticated, user, password }) => ({ isAuthenticated, user, password});

export default connect(
  mapToProps,
  actions
)(({ isAuthenticated, user, password, signin, signout }) => (
  <div>
    <h1>{user} - {isAuthenticated.toString()} </h1>
    <div>
        <TextField
            id="bap-user"
            label="Username"
            type="email"
            //value={store.user}
            //onChange={e => store.setState({ user: e.target.value })}
            margin="normal"
            fullWidth={true}
        />
        <TextField
            id="bap-password"
            label="Password"
            type="password"
            //value={store.password}
            //onChange={e => store.setState({ password: e.target.value })}
            margin="normal"
            fullWidth={true}
        />
        <br/>

        <StockButton variant="outlined" color="primary" onClick={signout} >
            Cancel
        </StockButton>
        &nbsp;&nbsp;&nbsp;

        <StockButton variant="contained" color="primary" onClick={signin} >
            Sign in
        </StockButton>
    </div>
  </div>
));
