import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/site-styles/components/headerLinksStyle.jsx";

const listStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333333"
};
const listItemsStyle = {
  float: "left"
};
const buttonStyle = {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "16px",
    fontSize: "22px",
    textDecoration: "none"
};




class NavItems extends React.Component {

    //function NavItems({ ...props }) {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {index: 0, name: 'Sign in', url: '/login-page', active: true},
                {index: 1, name: 'Facilities', url: '/facilities', active: false}
            ],
        };
    }

    render() {
        //const { classes } = props;
        return (
            // <ul>
            //   {this.state.data.map(d => <li key={d.name}>{d.name}</li>)}
            // </ul>
            <List style={listStyle}>
                {this.state.data.map(d =>
                <ListItem style={listItemsStyle}>
                    <a
                        href={d.url}
                        color="info"
                        style={buttonStyle}
                        key={d.name}>
                        {d.name}
                    </a>
                </ListItem>)}
            </List>
        );
    }
}

export default withStyles(headerLinksStyle)(NavItems);
