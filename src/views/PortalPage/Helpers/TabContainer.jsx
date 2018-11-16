import React from 'react';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {

    return (
        <Typography component='div' style={{padding: "5px"}}>
            {props.children}
        </Typography>
    );
}

export default TabContainer;
