import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import portalPageStyle from 'assets/jss/site-styles/views/portalPage.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'assets/scss/slide-pane.css';

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// Core Material-UI components
import AppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';

// Misc components
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { Helmet } from 'react-helmet';
import FormLabel from '@material-ui/core/FormLabel';

// Custom components
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import TopNavLinks from 'components/Header/TopNavLinks.jsx';


// Helpers
import guidGenerator from './Helpers/guidGenerator.jsx';
import Entitlements from './Helpers/Entitlements.jsx';
import Countries from './Helpers/Countries.jsx';
import Species from './Helpers/Species.jsx';
import Units from './Helpers/Units.jsx';
import Audits from './Helpers/Audits.jsx';
import Facilities from './Helpers/Facilities.jsx';
import RenderAlerts from './Helpers/RenderAlerts.jsx';



// Sections
import Compliance from './Sections/Compliance.jsx';
import FarmDetail from './Sections/FarmDetail.jsx';
import Labs from './Sections/Labs.jsx';
import Notifications from './Sections/Notifications.jsx';
import Scorecard from './Sections/Scorecard.jsx';
import Settings from './Sections/Settings.jsx';
import SupplyChain from './Sections/SupplyChain1.jsx';
import YearlyRecap from './Sections/YearlyRecap.jsx';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GlobeIcon from '@material-ui/icons/Public';
import ScheduleIcon from '@material-ui/icons/DateRange';
import BuildingIcon from "@material-ui/icons/Business";



// Icons and SVGs
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PrintIcon from '@material-ui/icons/Print';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import WorldIcon from '@material-ui/icons/Language';
import FilterIcon from "components/Icons/FilterIcon";
import SpeciesIcon from "@material-ui/icons/Waves";
//import SpeciesIcon from "components/Icons/SpeciesIcon";

// Images
var Background = process.env.PUBLIC_URL + '/bap/portal-sidebar.png';
var img_portal = process.env.PUBLIC_URL + '/bap/slide-portal.png';

const dashboardRoutes = [];

const darktheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#fff' },
        secondary: { main: '#7bd34b' },
    },
    typography: {
        useNextVariants: true,
        fontSize: 16
    },
});


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
        currentEntitlement: this.props.currentEntitlement,
        entitlementNames: this.props.entitlementNames,
        species: [],
        countries: [],
        facilities: [],
        audits: [],
        units: [],
        alertList: this.props.alertList,
        alertDismissed: false,
        isMenuOpen: true,
        cols: 10,
        value: 100,

        isPaneOpen: false,
        isPaneOpenLeft: false
    }

    componentDidMount() {
        console.log("componentDidUpdate:" + this.props.currentEntitlement);
        Modal.setAppElement(this.el);

        // initially, set the first entitlement and then the first set of filters
        this.setAffiliation(this.state.defaultAffiliation);
        //this.setFilters(this.state.currentEntitlement);
    }

    componentWillMount() {
        console.log("componentWillUpdate:" + this.props.currentEntitlement);
        // sets the initial state
        this.setState({
            isMenuOpened: true,
            cols: 10
        })
    }

    async handleSidebar() {
        await this.setState({
            cols:  !this.state.isMenuOpened ? 10 : 12,
            isMenuOpened: !this.state.isMenuOpened,
        });
    }

    setAffiliation(index) {
        let _defaultAffiliation = index;
        let _entitlementNames = [];
        let _alertList = [];
        let _currentEntitlement = null;

        for (let i=0; i<this.props.affiliationList.length; i++) {
            //console.log('%chandleAffiliation state: ' + JSON.stringify(this.props.affiliationList[i].affiliation), 'color:orange');
            if (this.props.affiliationList[i].affiliation === _defaultAffiliation) {
                for (let en=0; en<this.props.affiliationList[i].entitlements.length; en++) {
                    let name = this.props.affiliationList[i].entitlements[en].entitlement;
                    _entitlementNames.push(name);
                }

                for (let al=0; al<this.props.affiliationList[i].alerts.length; al++) {
                    _alertList.push(this.props.affiliationList[i].alerts[al]);
                }

                _currentEntitlement = _entitlementNames[0];

                this.setFilters(_currentEntitlement);
                break;
            }
        }

        this.setState({
            defaultAffiliation: _defaultAffiliation,
            entitlementNames: _entitlementNames,
            currentEntitlement: _currentEntitlement,
            alertList: _alertList,
            tabIndex: 0,
            alertDismissed: false
        });
        console.log('%cAfter handleAffiliationChange: ' + JSON.stringify(this.state), 'color:green');
    }

    setFilters(index) {
        let _filterList = [];
        let _species = [];
        let _countries = [];
        let _facilities = [];
        let _audits = [];
        let _units = [];

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
                                let fa = _filterList[fi].facilities;
                                let un = _filterList[fi].units;
                                let au = _filterList[fi].audits;

                                if (sp != null) {
                                    _species = sp;
                                }

                                if (co != null) {
                                    _countries = co;
                                }

                                if (fa != null) {
                                    _facilities = fa;
                                }

                                if (un != null) {
                                    _units = un;
                                }

                                if (au != null) {
                                    _audits = au;
                                }
                            }
                        }
                    }
                    break;
                }
            }

            this.setState({
                countries: _countries,
                species: _species,
                facilities: _facilities,
                units: _units,
                audits: _audits,
                alertDismissed: true,
                isPaneOpen: false
            });
            //console.log("%chandleViewClick: " + this.state.audits, "color: orange");
        }

        handleViewClick = async (index) => {
            this.setState({currentEntitlement: index});

            this.setFilters(index);
        };

        handleAffiliationChange = async (event) => {
            await this.setAffiliation(event.target.value);
        }

        render() {
            const { classes, ...rest } = this.props;

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
                viewContainer: {
                    minWidth: "110px",
                    marginTop: "15px"
                },
                offCanvas: {
                    overFlowX: 'hidden',
                },
                offCanvasMenu: {
                    marginTop: "172px",
                    height: "100vh",
                    backgroundPosition: "0 0",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "275px 100vh",
                    backgroundImage: `url(${Background})`,
                    borderRight: "1px solid paleblue",
                    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.35)",
                    overflowX: 'hidden'
                },
                accordion: {
                    display: 'block',
                    whiteSpace: 'no-wrap',
                },
                accordionIcon: {
                    position: 'absolute',
                    top: '10px',
                    left: '25px'
                },
                accordionLabel: {
                    marginLeft: '35px'
                },
                textField: {
                    fontSize: 21
                 }
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

                                { this.props.affiliationNames.length === 1 &&
                                    <span>{this.props.defaultAffiliation}</span>
                                }

                                { this.props.affiliationNames.length > 1 &&
                                    <MuiThemeProvider theme={darktheme}>
                                        <Select
                                            value={this.state.defaultAffiliation}
                                            onChange={this.handleAffiliationChange}
                                            style={{ fontSize: "21px", border: 'none' }}
                                        >
                                            { this.props.affiliationNames.map((item) =>
                                                <MenuItem key={guidGenerator()} value={item}>{item}</MenuItem>
                                            )}
                                        </Select>

                                    </MuiThemeProvider>
                                }
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

                <div style={{zIndex: '4', margin: '55px', color: '#000'}} ref={ref => this.el = ref}>
                    <OffCanvas width={275} transitionDuration={300} isMenuOpened={this.state.isMenuOpened} position={"left"} style={styles.offCanvas}>
                        <OffCanvasBody>
                            <div style={{marginTop: '-50px'}}>
                                <GridContainer>
                                    <GridItem xs={this.state.cols} sm={this.state.cols} md={this.state.cols} >
                                        {this.state.currentEntitlement === 'Scorecard' && <Scorecard/> }
                                        {this.state.currentEntitlement === 'Yearly recap' && <YearlyRecap/> }
                                        {this.state.currentEntitlement === 'Plant and farm detail' && <FarmDetail/> }
                                        {this.state.currentEntitlement === 'Non-conformities' && <Compliance/> }
                                        {this.state.currentEntitlement === 'Supply chain' && <SupplyChain/> }
                                        {this.state.currentEntitlement === 'Notifications' && <Notifications/> }
                                        {this.state.currentEntitlement === 'Labs' && <Labs/> }
                                        {this.state.currentEntitlement === 'Settings' && <Settings/> }
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </OffCanvasBody>

                        <OffCanvasMenu style={styles.offCanvasMenu}>
                            <div className={classes.viewContainer}>
                                <MuiThemeProvider theme={darktheme}>
                                    <List key={guidGenerator()} component='nav' style={{marginLeft: '-18px', marginRight: '-18px'}}>
                                        {this.state.entitlementNames.map((item) =>
                                            <Entitlements key={guidGenerator()} text={item} selected={this.state.currentEntitlement} handler={() => this.handleViewClick(item)}/>
                                        )}
                                    </List>

                                    <div style={{overflowY: 'auto', height: '1500px'}}>
                                        <Divider/>
                                        { this.state.species.length > 0 &&
                                            <ExpansionPanel defaultExpanded style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <div style={styles.accordion}>
                                                        <FormLabel style={styles.accordionLabel}>
                                                            <SpeciesIcon style={styles.accordionIcon}/>Species
                                                        </FormLabel>
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <FormControl component='fieldset' className={classes.formControl}>
                                                        <Species species={this.state.species} userAffiliation={this.state.defaultAffiliation} />
                                                    </FormControl>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }

                                        { this.state.countries.length > 0 &&
                                            <ExpansionPanel style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                                                    <div style={styles.accordion}>
                                                        <FormLabel style={styles.accordionLabel}>
                                                            <GlobeIcon style={styles.accordionIcon}/>Countries
                                                        </FormLabel>
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <FormControl component='fieldset' className={classes.formControl}>
                                                        <Countries countries={this.state.countries} userAffiliation={this.state.defaultAffiliation} />
                                                    </FormControl>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }

                                        { this.state.facilities.length > 0 &&
                                            <ExpansionPanel style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <div style={styles.accordion}>
                                                        <FormLabel style={styles.accordionLabel}>
                                                            <BuildingIcon style={styles.accordionIcon}/>Facilities
                                                        </FormLabel>
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <FormControl component='fieldset' className={classes.formControl}>
                                                        <Facilities facilities={this.state.facilities} userAffiliation={this.state.defaultAffiliation} />
                                                    </FormControl>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }

                                        { this.state.audits.length > 0  &&
                                            <ExpansionPanel style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <div style={styles.accordion}>
                                                        <FormLabel style={styles.accordionLabel}>
                                                            <ScheduleIcon style={styles.accordionIcon}/>Audit Period
                                                        </FormLabel>
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <FormControl component='fieldset' className={classes.formControl}>
                                                        <Audits audits={this.state.audits} userAffiliation={this.state.defaultAffiliation} />
                                                    </FormControl>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }

                                        { this.state.units.length > 0 &&
                                            <ExpansionPanel style={{backgroundColor: 'rgba(255,255,255,.1)'}}>
                                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                                    <div style={styles.accordion}>
                                                        <FormLabel style={styles.accordionLabel}>
                                                            <WorldIcon style={styles.accordionIcon}/>Units
                                                        </FormLabel>
                                                    </div>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <FormControl component='fieldset' className={classes.formControl}>
                                                        <Units units={this.state.units} userAffiliation={this.state.defaultAffiliation} />
                                                    </FormControl>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }
                                        <br/>

                                        { (this.state.species.length > 0 || this.state.countries.length > 0 || this.state.facilities.length > 0 ||
                                            this.state.audits.length > 0 || this.state.units.length > 0) &&
                                            <div>
                                                <Button color="primary" variant="contained" style={{marginLeft: '20px'}}>Apply</Button>
                                                <Button color="primary" variant="outlined" style={{marginLeft: '10px'}}>Save</Button>
                                            </div>
                                        }

                                    </div>





                                </MuiThemeProvider>
                            </div>
                        </OffCanvasMenu>
                    </OffCanvas>
                </div>

        { !this.state.alertDismissed &&
            <RenderAlerts alerts={this.state.alertList}/>
        }
        <Footer></Footer>
    </div>
);
}
}

export default withStyles(portalPageStyle)(PortalPage);
