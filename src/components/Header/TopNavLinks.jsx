/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import SearchIcon from '@material-ui/icons/Search';
import SpeechIcon from '@material-ui/icons/ChatBubbleOutline';
import LanguageIcon from '@material-ui/icons/Language';

// @material-ui/icons
import { Apps, CloudDownload, Person } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SearchButton from "components/Input/SearchField.jsx";
import TextField from '@material-ui/core/TextField';
import headerLinksStyle from "assets/jss/site-styles/components/headerLinksStyle.jsx";

function TopNavLinks({ ...props }) {

    const { classes } = props;

    return (
        <div className={classes.topNavContainer}>
            <List className={classes.topNavList}>

                <ListItem className={classes.listItem}>
                    <SearchButton />
                </ListItem>

                <ListItem className={classes.listItem}>
                    <Button
                        href="./login-page"
                        color="transparent"
                        className={classes.navLink}
                        >
                            <Person className={classes.icons}/> Sign In
                        </Button>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <Button
                            href="./"
                            color="transparent"
                            className={classes.navLink}
                            >
                                <SpeechIcon className={classes.icons}/> Blog
                            </Button>
                        </ListItem>

                    <ListItem className={classes.listItem}>
                        <CustomDropdown
                            noLiPadding
                            buttonText="EN"
                            buttonProps={{
                                className: classes.navLink,
                                color: "transparent"
                            }}
                            buttonIcon={LanguageIcon}
                            dropdownList={[
                                <Link to="/" className={classes.dropdownLink}>EN English</Link>,
                                <a href="#" className={classes.dropdownLink}>ES Español</a>,
                                <a href="#" className={classes.dropdownLink}>FR Francais</a>
                            ]}
                        />
                    </ListItem>

                </List>
            </div>
        );
    }

export default withStyles(headerLinksStyle)(TopNavLinks);
