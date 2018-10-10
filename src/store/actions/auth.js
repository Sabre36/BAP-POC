import React from "react";
import StockButton from '@material-ui/core/Button';
import { connect } from "redux-zero/react";

import actions from "./actions";

const mapToProps = ({ isAuthenticated, user }) => ({ isAuthenticated, user });

export default connect(
  mapToProps,
  actions
)(({ isAuthenticated, user }) => (
  <div>
    <h1>{user} - {isAuthenticated.toString()} </h1>
  </div>
));
