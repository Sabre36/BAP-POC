/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";

import footerStyle from "assets/jss/site-styles/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.center}>
          <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <p>Connect with us</p>
              </ListItem>

              <ListItem className={classes.inlineBlock}>
                <Tooltip
                  id="instagram-twitter"
                  title="Follow us on twitter"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    href="https://twitter.com/CreativeTim"
                    target="_blank"
                    color="transparent"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-twitter"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <Tooltip
                  id="instagram-facebook"
                  title="Follow us on facebook"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-facebook"} />
                  </Button>
                </Tooltip>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <Tooltip
                  id="instagram-tooltip"
                  title="Follow us on instagram"
                  placement={window.innerWidth > 959 ? "top" : "left"}
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    color="transparent"
                    href="https://www.instagram.com/CreativeTimOfficial"
                    target="_blank"
                    className={classes.navLink}
                  >
                    <i className={classes.socialIcons + " fab fa-instagram"} />
                  </Button>
                </Tooltip>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <a
                href="https://bapcertification.org/blog/"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.center}>
          <span className={classes.copyright}>
              &copy; {1900 + new Date().getYear()} Global Aquaculture Alliance. All rights reserved.{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
