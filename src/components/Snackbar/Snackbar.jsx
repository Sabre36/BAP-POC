import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Snack from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import snackbarStyle from "assets/jss/site-styles/components/snackbarStyle.jsx";


function Snackbar({ ...props }) {
    const { classes, message, color, close, icon, open } = props;
    const messageClasses = classNames({
        [classes.iconMessage]: icon !== undefined
    });

    return (
    <Snack
        autoHideDuration={6000}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        message={
            <div>
            {icon !== undefined ? <props.icon className={classes.icon} /> : null}
            <span className={messageClasses}>{message}</span>
            </div>
        }
        ContentProps={{
            classes: {
                root: classes.root + " " + classes[color],
                message: classes.message
            }
        }}

        action={[
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={props.handleClose}>
                <Close className="material-icons" style={{fontSize: '16px'}}  />
            </IconButton>,
        ]}

        />
    );
}

Snackbar.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
    close: PropTypes.bool,
    icon: PropTypes.func,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
};

export default withStyles(snackbarStyle)(Snackbar);
