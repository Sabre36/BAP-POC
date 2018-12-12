import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ChartIcon from "@material-ui/icons/ShowChart";
import NonConformIcon from "@material-ui/icons/ViewQuilt";
import SupplyChainAnalysisIcon from '@material-ui/icons/LinkOff';
import SettingsIcon from '@material-ui/icons/Settings';
import TimeIcon from '@material-ui/icons/AccessTime';
import LabSVG from "components/Icons/LabIcon.jsx";
import LinkIcon from '@material-ui/icons/Link';
import NotificationIcon from '@material-ui/icons/Notifications';
import guidGenerator from './guidGenerator.jsx';

class Entitlements extends React.Component {
    render() {
        const styles = {
            li: {
                minHeight: "65px",
            },
            icon: {
                height: "28px",
                width: "28px",
                marginLeft: "10px"
            },
        };
        return <ListItem style={styles.li}
            button
            key={guidGenerator()}
            onClick={this.props.handler}
            selected={this.props.selected === this.props.text }
            >
                { this.props.text === 'Scorecard' && <ChartIcon style={styles.icon} color="secondary"/> }
                { this.props.text === 'Yearly recap' && <TimeIcon style={styles.icon} color="secondary"/> }
                { this.props.text === 'Supply chain analysis' && <SupplyChainAnalysisIcon style={styles.icon} color="secondary" /> }
                { this.props.text === 'Non-conformities' && <NonConformIcon style={styles.icon} color="secondary"/> }
                { this.props.text === 'Supply chain' && <LinkIcon style={styles.icon} color="secondary"/> }
                { this.props.text === 'Settings' && <SettingsIcon style={styles.icon} color="secondary"/> }
                { this.props.text === 'Labs' && <LabSVG fill="secondary"/> }
                { this.props.text === 'Notifications' && <NotificationIcon style={styles.icon} color="secondary"/> }
                <ListItemText primary={this.props.text} />
            </ListItem>;
        }
    }

export default Entitlements;
