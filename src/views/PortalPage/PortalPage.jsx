import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import TopNavLinks from "components/Header/TopNavLinks.jsx";
import portalPageStyle from "assets/jss/site-styles/views/portalPage.jsx";

import { DropDownList } from '@progress/kendo-react-dropdowns';

import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Snackbar from "components/Snackbar/Snackbar.jsx";
//import Snackbar from "components/Snackbar/SimpleSnackbar.jsx";



import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

import Alerts from "./Sections/Alerts.jsx";
import Compliance from "./Sections/Compliance.jsx";
import FarmDetail from "./Sections/FarmDetail.jsx";
import Labs from "./Sections/Labs.jsx";
import Scorecard from "./Sections/Scorecard.jsx";
import Settings from "./Sections/Settings.jsx";
import SupplyChain from "./Sections/SupplyChain.jsx";
import YearlyRecap from "./Sections/YearlyRecap.jsx";


import MenuIcon from '@material-ui/icons/Menu';
import PrintIcon from '@material-ui/icons/Print';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline';
import GridIcon from '@material-ui/icons/GridOn';
import TimeIcon from '@material-ui/icons/AccessTime';
import NotificationIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LinkIcon from '@material-ui/icons/Link';
import BarchartIcon from '@material-ui/icons/BarChart';
//import ListIcon from '@material-ui/icons/List';
//import LabIcon from '@material-ui/icons/Opacity'; //replace this
import LabIcon from 'assets/img/svg/lab.svg';

import FilterIcon from 'assets/img/svg/filters.svg';
import ViewIcon from 'assets/img/svg/puzzle.svg';

import orgFilters from 'assets/data/orgFilters.json';

const dashboardRoutes = [];


var img_portal = process.env.PUBLIC_URL + '/bap/slide-portal.png';
//var img_portal = process.env.PUBLIC_URL + '/bap/sea-coast-water-nature-ocean-shore-1409613-pxhere.com.jpg';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class Message extends React.Component {
    state = {
        open: this.props.open,
    };

    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        console.log('%cCurrent props: ' + JSON.stringify(this.props), "color: cyan");

        return (
            <Snackbar
                autoHideDuration={6000}
                open={this.state.open}
                message={this.props.message}
                color={this.props.color}
                icon={this.props.icon}
                handleClose={this.handleRequestClose}
            />
        );
    }

}


class ViewItem extends React.Component {
    render() {
        return <ListItem button
            onClick={this.props.handler}
            selected={this.props.selected === this.props.text }
            >
                { this.props.text === "Scorecard" && <BarchartIcon /> }
                { this.props.text === "Yearly recap" && <TimeIcon /> }
                { this.props.text === "Farm & plant detail" && <GridIcon /> }
                { this.props.text === "Compliance" && <CheckCircleIcon /> }
                { this.props.text === "Supply chain" && <LinkIcon /> }
                { this.props.text === "Settings" && <SettingsIcon /> }
                { this.props.text === "Labs" && <img src={LabIcon} height={22} /> }
                { this.props.text === "Notifications" && <NotificationIcon /> }

                <ListItemText primary={this.props.text}  />
            </ListItem>;
        }
    }

    function RenderSpecies(props){
        //console.log('render species size: ' + userFilters.length);
        let checkBoxComponentList = [];

        for (let i=0; i<orgFilters.length; i++){
            if (orgFilters[i].organization === props.userAffiliation) {
                if (orgFilters[i].species !== null) {
                    for (let j=0; j<orgFilters[i].species.length; j++) {
                        checkBoxComponentList.push(<FormControlLabel
                            control={
                                <Checkbox color="primary" checked={true} /*onChange={this.handleChange('gilad')}*/ value={orgFilters[i].species[j]} />
                            }
                            label={orgFilters[i].species[j]}
                        />
                    );
                }
            }
            break;
        }
    }
    return checkBoxComponentList;
}

function RenderCountries(props){
    let checkBoxComponentList = [];

    for (let i=0; i<orgFilters.length; i++){
        if (orgFilters[i].organization === props.userAffiliation) {
            if (orgFilters[i].species !== null) {
                for (let j=0; j<orgFilters[i].countries.length; j++) {
                    checkBoxComponentList.push(<FormControlLabel
                        control={
                            <Checkbox color="primary" checked={true} /*onChange={this.handleChange('gilad')}*/ value={orgFilters[i].countries[j]} />
                        }
                        label={orgFilters[i].countries[j]}
                    />
                );
            }
        }
        break;
    }
}
return checkBoxComponentList;
}

function RenderAlerts(props){
    let alertList = [];
    //console.log('%cRendering props: ' + JSON.stringify(props), "color:purple");

    if (props.alerts != null) {
        for (let i=props.alerts.length-1; i>=0; i--) {
            var message = props.alerts[i].message;
            var type = props.alerts[i].type;
            var color = type === "error" ? "danger" :  "dark";
            var duration = i;
            const icon = type === "warning" ? WarningIcon : type === "danger" ? ErrorIcon : InfoIcon;

            alertList.push(
                <Message message={message} color={color} open={true} icon={icon} duration={duration}/>
            )
        }
    }
    return alertList;
}


class PortalPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
    }

    state = {
        activeSlide : 5,
        value: 0,
        selectedAffiliation: this.props.selectedAffiliation,
        selectedView: this.props.selectedView,
        message: 'a test',
        displayAlert: true
    }


    handleChange = (event, value) => {
        this.setState({ value });

    };

    handleViewClick = async (index) => {
        await this.setState({selectedView: index});

        //alert(this.state.selectedView + " " + index);
    };

    handleAffiliationChange = (event) => {
        this.setState({
            selectedAffiliation: event.target.value
        });
        console.log('%cRendering state: ' + JSON.stringify(this.state), "color:orange");
    }

    valueRender = (element, value) => {
        if (!value) {
            return element;
        }
        const children = [
            <span key={1} style={{color: '#fff', fontSize: '21px', fontWeight: 500}}>
                {value}
            </span>,
        ];

        return React.cloneElement(element, { ...element.props }, children);
    }



    render() {
        const { classes, ...rest } = this.props;
        const { value } = this.state;

        const styles = {
            root: {
                flexGrow: 1,
            },
            grow: {
                flexGrow: 1,
            },
            rightToolbar: {
                marginLeft: 'auto',
                marginRight: -12,
            },
            menuButton: {
                marginRight: 16,
                marginLeft: -12,
            },
            list: {
                padding: 0,
                margin: 0,
            },
            appbar: {
                backgroundColor: "rgba(0,0,0.3)"
            },
        };



        return (
            <div>
                <Helmet>
                    <meta name="description" content="BAP - Portal" />
                    <meta property="og:url" content="https://www.bapcertification.org/" />
                    <meta property="og:site_name" content="Best Aquaculture Practices Certification - Portal" />
                    <meta name="twitter:card" content="portal" />
                    <meta name="twitter:title" content="Best Aquaculture Practices Certification - Portal" />
                    <link rel="canonical" href="http://www.bestaquaculturepractices.org" />
                    <title>BAP - Portal</title>
                </Helmet>

                <div style={{width: "100%", height: "120px", overflow: "hidden"}}>
                    <img src={img_portal} style={{width: "100%", zIndex: "1"}}/>
                </div>

                <Header
                    color="semiTransparent"
                    routes={dashboardRoutes}
                    brand="Best Aquaculture Practices"
                    rightLinks={<HeaderLinks itemIndex={this.state.activeSlide}/>}
                    topLinks={<TopNavLinks authenticated={this.props.authenticated} />}
                    top
                    fixed
                    changeColorOnScroll={{
                        height: 2,
                        color: "primary"
                    }}
                    {...rest}
                />

                <AppBar position="sticky" style={{backgroundColor: "#1463AC", position: "fixed", top: "110px"}}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} aria-label="Menu" color="inherit">
                            <MenuIcon />
                        </IconButton>


                        <Typography variant="title" color="inherit">Welcome {this.props.userName}  (
                            <DropDownList style={{display: "inline-block", width: "auto", color: "#ffffff", borderBottom: 0}}
                                data={this.props.userAffiliations}
                                defaultValue={this.props.userAffiliations[0]}
                                valueRender={this.valueRender}
                                onChange={this.handleAffiliationChange}
                                dataItemKey="selectedAffiliation"

                            />
                        )
                    </Typography>

                    <section style={styles.rightToolbar}>
                        <IconButton color="inherit" aria-label="Print">
                            <PrintIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="Download">
                            <SaveAltIcon />
                        </IconButton>
                        <IconButton color="inherit" aria-label="More Options">
                            <MoreVertIcon />
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>

            <div style={{zIndex: "4", margin: "55px", color: "#000"}}>
                <GridContainer justify="center">

                    <GridItem xs={2} sm={2} md={2} style={{backgroundColor: "rgba(0,0,0,.03)", minHeight: "700px", height: "100%", padding: 0, margin: 0}}>

                        <Tabs value={value} fullWidth={true} onChange={this.handleChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
                            <Tab label="Views" icon={<img src={ViewIcon} height={18} />} style={{minWidth: "110px"}} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}> </Tab>
                            <Tab  label="Filters" icon={<img src={FilterIcon} height={18} />}  style={{minWidth: "120px"}} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
                        </Tabs>

                        {value === 1 && <TabContainer>
                            <div>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Species</FormLabel>
                                    <FormGroup>
                                        <RenderSpecies userAffiliation={this.state.selectedAffiliation}/>
                                    </FormGroup>
                                </FormControl>
                                <br/>
                                <br/>

                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Countries</FormLabel>
                                    <FormGroup>
                                        <RenderCountries userAffiliation={this.state.selectedAffiliation} />
                                    </FormGroup>
                                </FormControl>

                                <br/>
                                <Divider/>
                                <br/>
                                <Button variant="contained" color="primary">Apply</Button>

                                {/* <List component="nav" style={{marginLeft: "-18px", marginRight: "-18px"}}>
                                {this.props.userAffiliations.map((item) =>
                                <ListItem {...item}
                                key={item.id}
                                button
                                selected={this.state.selectedAffiliation === item }
                                onClick={event => this.handleOrganizationClick(event, item )}
                                >
                                <ListItemText primary={item} />
                            </ListItem>
                        )}
                    </List> */}



                    {/* var json = JSON.parse(data); */}
                </div>
            </TabContainer>}

            { value === 0 && <TabContainer>
                <List component="nav" style={{marginLeft: "-18px", marginRight: "-18px"}}>
                    {this.props.entitlements.map((item) =>

                        <ViewItem text={item} selected={this.state.selectedView} handler={() => this.handleViewClick(item)}/>
                    )}
                </List>

            </TabContainer> }
        </GridItem>

        <GridItem xs={10} sm={10} md={10}>

            <div style={{marginTop: "-50px"}}>
                {this.state.selectedView === "Scorecard" && <Scorecard/> }
                {this.state.selectedView === "Yearly recap" && <YearlyRecap/> }
                {this.state.selectedView === "Farm & plant detail" && <FarmDetail/> }
                {this.state.selectedView === "Compliance" && <Compliance/> }
                {this.state.selectedView === "Supply chain" && <SupplyChain/> }
                {this.state.selectedView === "Alerts" && <Alerts/> }
                {this.state.selectedView === "Labs" && <Labs/> }
                {this.state.selectedView === "Settings" && <Settings/> }
            </div>
        </GridItem>
    </GridContainer>

    </div>
    <RenderAlerts alerts={this.props.userAlerts}/>

    <Footer />
    </div>
    );
    }
}

export default withStyles(portalPageStyle)(PortalPage);
