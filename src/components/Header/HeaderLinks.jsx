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

      <ListItem className={classes.listItem}>
        <Tooltip
          id="search-site"
          title="Search this site"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            color="transparent"
            className={classes.navLink}
          >
          <SearchIcon/>
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItemActive} href="./landing-page">
          <Button
              color="transparent"
              className={classes.navLink}
              > Who we are
          </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Marketplace"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>Marketplace</Link>,
            <a href="#" className={classes.dropdownLink}>Consumers</a>
          ]}
        />
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
            noLiPadding
            buttonText="Certification"
            buttonProps={{
                className: classes.navLink,
                color: "transparent"
            }}
            dropdownList={[
                <Link to="/" className={classes.dropdownLink}>Certification</Link>,
                <a href="./facilities" className={classes.dropdownLink}>Facilities</a>
            ]}
        />
    </ListItem>



        <ListItem className={classes.listItem}>
            <Button
                href="./ProgramIntegrity"
                color="transparent"
                className={classes.navLink}
            > Program Integrity
            </Button>
        </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          className={classes.navLink}
        > Blog
        </Button>
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
        <CustomDropdown
          noLiPadding
          buttonText="EN"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={SpeechIcon}

          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>EN English</Link>,
            <a href="#" className={classes.dropdownLink}>ES Español</a>,
            <a href="#" className={classes.dropdownLink}>FR Francais</a>
          ]}
        />
      </ListItem>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
