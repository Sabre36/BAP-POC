import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    const styles = {
        outer: {
            padding: "5px",
        },
    };

    return (
        <Typography component='div' style={{padding: "5px"}}>
            {props.children}
        </Typography>
    );
}

export default TabContainer;
