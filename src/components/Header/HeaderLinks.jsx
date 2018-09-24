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

function HeaderLinks({ ...props }) {
    const { classes } = props;

    return (
        <List className={classes.list}>

            <ListItem className={classes.listItem} >
                <Button
                    href="/"
                    color="transparent"
                    className={ props.itemIndex == 0 ? classes.navLinkActive : classes.navLink }
                    > Who we are
                </Button>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Button
                    href="/certification"
                    color="transparent"
                    className={ props.itemIndex == 1 ? classes.navLinkActive : classes.navLink }
                    > What we do
                </Button>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Button
                    href="/facilities"
                    color="transparent"
                    className={ props.itemIndex == 2 ? classes.navLinkActive : classes.navLink }
                    > Our facilities
                </Button>
            </ListItem>

            <ListItem className={classes.listItem} >
                <Button
                    href="/marketplace"
                    color="transparent"
                    className={ props.itemIndex == 3 ? classes.navLinkActive : classes.navLink }
                    > Marketplace
                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                    href="./consumers"
                    color="transparent"
                    className={ props.itemIndex == 4 ? classes.navLinkActive : classes.navLink }
                    > Consumers
                </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Button
                    href="./portal"
                    color="transparent"
                    className={ props.itemIndex == 5 ? classes.navLinkActive : classes.navLink }
                    > Your portal
                </Button>
            </ListItem>
        </List>
    );
}

HeaderLinks.propTypes = {
    itemIndex: PropTypes.number,
};



export default withStyles(headerLinksStyle)(HeaderLinks);
