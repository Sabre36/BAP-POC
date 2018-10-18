import React from 'react';
import Message from './Message.jsx';
import guidGenerator from './guidGenerator.jsx';

import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';



function RenderAlerts(props){
    let alertList = [];
    //viewconsole.log('%cRendering alerts: ' + JSON.stringify(props), 'color:purple');

    if (props.alerts != null) {
        for (let i=props.alerts.length-1; i>=0; i--) {
            var message = props.alerts[i].message;
            var type = props.alerts[i].type;
            var color = type === 'error' ? 'danger' :  'dark';
            var duration = i;
            const icon = type === 'warning' ? WarningIcon : type === 'danger' ? ErrorIcon : InfoIcon;
            alertList.push(
                <Message key={guidGenerator()} message={message} color={color} open={true} icon={icon} duration={duration}/>
            )
        }
    }
    return alertList;
}

export default RenderAlerts;
