/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import SearchIcon from '@material-ui/icons/Search';
import SpeechIcon from '@material-ui/icons/ChatBubbleOutline';

// @material-ui/icons
import { Apps, CloudDownload, Person } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";


import headerLinksStyle from "assets/jss/site-styles/components/headerLinksStyle.jsx";
import store from '../../store/store';
import { connect } from "redux-zero/react";

const mapToProps = ({ isAuthenticated, user }) => ({ isAuthenticated, user });


function HeaderLinks({ ...props }) {
    const { classes } = props;

    return (
        <List className={classes.list}>

            <ListItem className={classes.listItem} >
                <Link to={'/'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        //href="/"
                        color="transparent"
                        className={ props.itemIndex == 0 ? classes.navLinkActive : classes.navLink }
                        > Who we are {store.user}
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Link to={'/certification'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        //href="/certification"
                        color="transparent"
                        className={ props.itemIndex == 1 ? classes.navLinkActive : classes.navLink }
                        > What we do
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Link to={'/facilities'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        color="transparent"
                        className={ props.itemIndex == 2 ? classes.navLinkActive : classes.navLink }
                        > Our facilities
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Link to={'/'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        //href="/marketplace"
                        color="transparent"
                        className={ props.itemIndex == 3 ? classes.navLinkActive : classes.navLink }
                        > Marketplace
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={'/'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        //href="./consumers"
                        color="transparent"
                        className={ props.itemIndex == 4 ? classes.navLinkActive : classes.navLink }
                        > Consumers
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={'/portal'} style={{background: "transparent",color: "#fff"}}>
                    <Button
                        //href="./portal"
                        color="transparent"
                        className={ props.itemIndex == 5 ? classes.navLinkActive : classes.navLink }
                        > My portal
                    </Button>
                </Link>
            </ListItem>
        </List>
    );
}

HeaderLinks.propTypes = {
    itemIndex: PropTypes.number,
};



export default withStyles(headerLinksStyle)(HeaderLinks);
