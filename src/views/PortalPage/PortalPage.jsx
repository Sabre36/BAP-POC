import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import TopNavLinks from 'components/Header/TopNavLinks.jsx';
import portalPageStyle from 'assets/jss/site-styles/views/portalPage.jsx';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import Snackbar from 'components/Snackbar/Snackbar.jsx';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

import Notifications from './Sections/Notifications.jsx';
import Compliance from './Sections/Compliance.jsx';
import FarmDetail from './Sections/FarmDetail.jsx';
import Labs from './Sections/Labs.jsx';
import Scorecard from './Sections/Scorecard.jsx';
import Settings from './Sections/Settings.jsx';
import SupplyChain from './Sections/SupplyChain.jsx';
import YearlyRecap from './Sections/YearlyRecap.jsx';


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
import LabSVG from "components/Icons/LabIcon.jsx";
import FilterIcon from 'assets/img/svg/filters.svg';
import ViewIcon from 'assets/img/svg/puzzle.svg';

const dashboardRoutes = [];

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

var img_portal = process.env.PUBLIC_URL + '/bap/slide-portal.png';

function TabContainer(props) {
    return (
        <Typography component='div' style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
// TabContainer.propTypes = {
//     children: PropTypes.node.isRequired,
// };


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
        //console.log('%cCurrent props: ' + JSON.stringify(this.props), 'color: cyan');
        return (
            <Snackbar
                key={guidGenerator()}
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
            key={guidGenerator()}
            onClick={this.props.handler}
            selected={this.props.selected === this.props.text }
            >
                { this.props.text === 'Scorecard' && <BarchartIcon color="primary" /> }
                { this.props.text === 'Yearly recap' && <TimeIcon color="primary"/> }
                { this.props.text === 'Plant and farm detail' && <GridIcon color="primary" /> }
                { this.props.text === 'Non-conformities' && <CheckCircleIcon color="primary"/> }
                { this.props.text === 'Supply chain' && <LinkIcon color="primary"/> }
                { this.props.text === 'Settings' && <SettingsIcon color="primary"/> }
                {/* { this.props.text === 'Labs' && <img src={LabIcon} height={22} /> } */}
                { this.props.text === 'Labs' && <LabSVG fill="green"/> }
                { this.props.text === 'Notifications' && <NotificationIcon color="primary"/> }

                <ListItemText primary={this.props.text}  />
            </ListItem>;
        }
    }

function RenderSpecies(props){
    let checkBoxComponentList = [];

    //console.log("species size: " + props.species.length + " " + JSON.stringify(props.species) );
    for (let i=0; i<props.species.length; i++){
        //console.log('render species: i=' + i + ': ' + props.species[i]);
        checkBoxComponentList.push(<FormControlLabel
            control={
                <Checkbox key={guidGenerator()} color='primary' checked={true} /*onChange={this.handleTabChange('gilad')}*/ value={props.species[i]} />
            }
            label={props.species[i]} />
        );
    }

    return checkBoxComponentList;
}

function RenderCountries(props){
    let checkBoxComponentList = [];
    for (let i=0; i<props.countries.length; i++){
        //console.log('render countries: i=' + i + ': ' + props.countries[i]);
        checkBoxComponentList.push(<FormControlLabel
            control={
                <Checkbox key={guidGenerator()} color='primary' checked={true} /*onChange={this.handleTabChange('gilad')}*/ value={props.countries[i]} />
            }
            label={props.countries[i]} />
        );
    }
    return checkBoxComponentList;
}

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


class PortalPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
    }

    state = {
        activeSlide : 5,
        tabIndex: 0,
        defaultAffiliation: this.props.defaultAffiliation,
        defaultEntitlement: this.props.defaultEntitlement,
        entitlementNames: this.props.entitlementNames,
        filterList: this.props.filterList,
        species: this.props.species,
        countries: this.props.countries,
        message: null,
        displayAlert: true,
        isMenuOpen: true,
        cols: 10,
    }

    componentWillMount() {
        // sets the initial state
        this.setState({
            isMenuOpened: true,
            cols: this.state.isMenuOpen ? 10 : 12,
        })
    }

    async handleSidebar() {
        await this.setState({
            cols:  !this.state.isMenuOpened ? 10 : 12,
            isMenuOpened: !this.state.isMenuOpened,
        });
    }


    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });

    };

    handleViewClick = async (index) => {

        console.log("view index=" + index);

        let _filterList = [];
        let _species = [];
        let _countries = [];

        for (let i=0; i<this.props.affiliationList.length; i++) {
            //console.log('%chandleAffiliation state: ' + JSON.stringify(this.props.affiliationList[i].affiliation), 'color:orange');
            if (this.props.affiliationList[i].affiliation === this.state.defaultAffiliation) {
                for (let en=0; en<this.props.affiliationList[i].entitlements.length; en++) {
                    let name = this.props.affiliationList[i].entitlements[en].entitlement;

                    if (name === index) {

                        _filterList = this.props.affiliationList[i].entitlements[en].filters;

                        for (let fi=0; fi<
                            _filterList.length; fi++) {
                            let sp = _filterList[fi].species;
                            let co = _filterList[fi].countries;

                            if (sp != null) {
                                _species = sp;
                                //console.log('sp:' + sp + " len: " + sp.length);
                            }

                            if (co != null) {
                                _countries = co;
                                //console.log('co:' + co + " len: " + co.length);
                            }
                        }


                    }
                }
                break;
            }
        }

        await this.setState({
            defaultEntitlement: index,
            countries: _countries,
            species: _species,
            isMenuOpened: !this.state.isMenuOpened
        });
    };

    handleAffiliationChange = async (event) => {
        let _defaultAffiliation = event.target.value;
        let _entitlementNames = [];
        let _defaultEntitlement = null;

        for (let i=0; i<this.props.affiliationList.length; i++) {
            //console.log('%chandleAffiliation state: ' + JSON.stringify(this.props.affiliationList[i].affiliation), 'color:orange');
            if (this.props.affiliationList[i].affiliation === _defaultAffiliation) {
                for (let en=0; en<this.props.affiliationList[i].entitlements.length; en++) {
                    let name = this.props.affiliationList[i].entitlements[en].entitlement;
                    _entitlementNames.push(name);



                }
                _defaultEntitlement = _entitlementNames[0];
                break;
            }
        }

        // TODO change filters,
        // TODO: consider changing alerts, as well?

        await this.setState({
            defaultAffiliation: _defaultAffiliation,
            entitlementNames: _entitlementNames,
            defaultEntitlement: _defaultEntitlement,
            tabIndex: 0
        });
        console.log('%cRendering state: ' + JSON.stringify(this.state), 'color:orange');
    }

    valueRender = (element, value) => {
        if (!value) {
            return element;
        }
        const children = [
            <span key={guidGenerator()} style={{color: '#fff', fontSize: '21px', fontWeight: 500}}>
                {value}
            </span>,
        ];
        return React.cloneElement(element, { ...element.props }, children);
    }



    render() {
        const { classes, ...rest } = this.props;
        //const { value } = this.state;

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
                backgroundColor: 'rgba(0,0,0.3)'
            },
        };

        return (
            <div>
                <Helmet>
                    <meta name='description' content='BAP - Portal' />
                    <meta property='og:url' content='https://www.bapcertification.org/' />
                    <meta property='og:site_name' content='Best Aquaculture Practices Certification - Portal' />
                    <meta name='twitter:card' content='portal' />
                    <meta name='twitter:title' content='Best Aquaculture Practices Certification - Portal' />
                    <link rel='canonical' href='http://www.bestaquaculturepractices.org' />
                    <title>BAP - Portal</title>
                </Helmet>

                <div style={{width: '100%', height: '120px', overflow: 'hidden'}}>
                    <img src={img_portal} style={{width: '100%', zIndex: '1'}} alt="fish swimming"/>
                </div>

                <Header
                    color='semiTransparent'
                    routes={dashboardRoutes}
                    brand='Best Aquaculture Practices'
                    rightLinks={<HeaderLinks itemIndex={this.state.activeSlide}/>}
                    topLinks={<TopNavLinks authenticated={this.props.authenticated} />}
                    top
                    fixed
                    changeColorOnScroll={{
                        height: 2,
                        color: 'primary'
                    }}
                    {...rest}
                />

                <AppBar position='sticky' style={{backgroundColor: '#1463AC', position: 'fixed', top: '110px'}}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} aria-label='Menu' color='inherit' onClick={this.handleSidebar.bind(this)}>
                            <MenuIcon />
                        </IconButton>


                        <Typography variant='title' color='inherit'>Welcome {this.props.userName}  (
                            <DropDownList style={{display: 'inline-block', width: 'auto', color: '#ffffff', borderBottom: 0, bottomBorderColor: '#fff'}}
                                data={this.props.affiliationNames}
                                defaultValue={this.props.defaultAffiliation}
                                valueRender={this.valueRender}
                                onChange={this.handleAffiliationChange}
                                dataItemKey='defaultAffiliation'
                            />
                        )
                    </Typography>

                    <section style={styles.rightToolbar}>
                        <IconButton color='inherit' aria-label='Print'>
                            <PrintIcon />
                        </IconButton>
                        <IconButton color='inherit' aria-label='Download'>
                            <SaveAltIcon />
                        </IconButton>
                        <IconButton color='inherit' aria-label='More Options'>
                            <MoreVertIcon />
                        </IconButton>
                    </section>
                </Toolbar>
            </AppBar>

            <div style={{zIndex: '4', margin: '55px', color: '#000'}}>

            <OffCanvas width={275} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"}>
                <OffCanvasBody className={styles.bodyClass} >
                    <div style={{marginTop: '-50px'}}>
                        <GridContainer>

                            <GridItem xs={this.state.cols} sm={this.state.cols} md={this.state.cols} >
                                {this.state.defaultEntitlement === 'Scorecard' && <Scorecard/> }
                                {this.state.defaultEntitlement === 'Yearly recap' && <YearlyRecap/> }
                                {this.state.defaultEntitlement === 'Plant and farm detail' && <FarmDetail/> }
                                {this.state.defaultEntitlement === 'Non-conformities' && <Compliance/> }
                                {this.state.defaultEntitlement === 'Supply chain' && <SupplyChain/> }
                                {this.state.defaultEntitlement === 'Notifications' && <Notifications/> }
                                {this.state.defaultEntitlement === 'Labs' && <Labs/> }
                                {this.state.defaultEntitlement === 'Settings' && <Settings/> }
                            </GridItem>
                        </GridContainer>

                        <Footer />
                    </div>
                </OffCanvasBody>

                <OffCanvasMenu className={styles.menuClass} style={{backgroundColor: "rgba(0,0,0,.025)", borderRight: "1px solid rgba(0,0,0,.03)", height: "100vh"}}>
                    <div style={{marginTop: "185px"}}>
                        <Tabs value={this.state.tabIndex} fullWidth={true} onChange={this.handleTabChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
                            <Tab label='Views' icon={<img src={ViewIcon} height={18}  alt="Views"/>} style={{minWidth: '110px'}} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}> </Tab>
                            <Tab  label='Filters' icon={<img src={FilterIcon} height={18} alt="Filters"/>} style={{minWidth: '120px'}} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
                        </Tabs>
                    </div>

                    {this.state.tabIndex === 1 && <TabContainer>
                        <div>
                            { this.state.species.length > 0 &&
                                <div>
                                    <FormControl component='fieldset' className={classes.formControl}>
                                        <FormLabel component='legend'>Species</FormLabel>
                                        <FormGroup>
                                            <RenderSpecies species={this.state.species}/>
                                        </FormGroup>
                                    </FormControl>
                                    <br/>
                                    <br/>
                                </div>
                            }

                            { this.state.countries.length > 0 &&
                                <div>
                                    <FormControl component='fieldset' className={classes.formControl}>
                                        <FormLabel component='legend'>Countries</FormLabel>
                                        <FormGroup>
                                            <RenderCountries countries={this.state.countries} userAffiliation={this.state.defaultAffiliation} />
                                        </FormGroup>
                                    </FormControl>
                                    <br/>
                                </div>
                            }
                            </div>
                            </TabContainer>
                        }

                        { this.state.tabIndex === 0 && <TabContainer>
                            <List key={guidGenerator()} component='nav' style={{marginLeft: '-18px', marginRight: '-18px'}}>
                                {this.state.entitlementNames.map((item) =>
                                    <ViewItem key={guidGenerator()} text={item} selected={this.state.defaultEntitlement} handler={() => this.handleViewClick(item)}/>
                                )}
                            </List>

                        </TabContainer>
                    }
                </OffCanvasMenu>
              </OffCanvas>
    </div>
    <RenderAlerts alerts={this.props.msgList}/>


    </div>
    );
    }
}

export default withStyles(portalPageStyle)(PortalPage);
