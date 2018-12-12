import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import portalPageStyle from 'assets/jss/site-styles/views/portalPage.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'assets/scss/slide-pane.css';
import 'assets/scss/sidebar.css';

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
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


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

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    list: {
        padding: 0,
        margin: 0,
    },
    viewContainer: {
        minWidth: "110px",
        marginTop: "15px"
    },
    // offCanvas: {
    //     overFlowX: 'hidden',
    // },
    // offCanvasMenu: {
    //     marginTop: "172px",
    //     height: "100vh",
    //     backgroundPosition: "0 0",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "275px 100vh",
    //     backgroundImage: `url(${Background})`,
    //     borderRight: "1px solid paleblue",
    //     boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.35)",
    //     overflowX: 'hidden'
    // },
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
    // textField: {
    //     fontSize: 21
    // },

};


class PortalPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleSidebar = this.handleSidebar.bind(this);
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
        cols: 12,
        autoShow: true,
        isPaneOpen: true,
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

    handleSwitchChange() {
        this.setState({autoShow: !this.state.autoShow, alertDismissed: true});
    }

    handleSidebar() {
        //alert('hi');
        this.setState({cols:  !this.state.isMenuOpened ? 10 : 12, isMenuOpened: !this.state.isMenuOpened,});
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
        console.log('%cAfter setAffiliation: ' + JSON.stringify(this.state), 'color:green');
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
                isPaneOpen: this.state.autoShow
            });
            //console.log("%setFilters: " + this.state.audits, "color: orange");
        }

        handleSidebarClick = () => {
            this.setState({isMenuOpen: !this.state.isMenuOpen});
        };

        handleViewClick = async (index) => {
            this.setState({currentEntitlement: index});
            this.setFilters(index);
        };

        handleAffiliationChange = async (event) => {
            await this.setAffiliation(event.target.value);
        }

        render() {
            const { classes, ...rest } = this.props;

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

                <div style={{zIndex: '4', margin: '55px'}} >
                    <div style={{marginTop: '-50px'}} ref={ref => this.el = ref}>
                        <div className="appbar" >
                            <div className="welcome">
                                <Typography variant='title' color='inherit'>Welcome {this.props.userName}  (

                                    { this.props.affiliationNames.length === 1 &&
                                        <span>{this.props.defaultAffiliation}</span>
                                    }

                                    { this.props.affiliationNames.length > 1 &&
                                        <MuiThemeProvider theme={darktheme}>
                                            <Select
                                                value={this.state.defaultAffiliation}
                                                onChange={this.handleAffiliationChange}
                                                style={{ fontSize: "21px", textShadow: 'none!important' }}
                                            >
                                                { this.props.affiliationNames.map((item) =>
                                                    <MenuItem key={guidGenerator()} value={item}>{item}</MenuItem>
                                                )}
                                            </Select>
                                        </MuiThemeProvider>
                                    }
                                    )
                                    <span className="rightToolbar">
                                    <IconButton color='inherit' aria-label='Filters' onClick={() => this.setState({ isPaneOpen: !this.state.isPaneOpen })}>
                                        <FilterIcon />
                                    </IconButton>

                                    <IconButton color='inherit' aria-label='Print'>
                                        <PrintIcon />
                                    </IconButton>

                                    <IconButton color='inherit' aria-label='Download'>
                                        <SaveAltIcon />
                                    </IconButton>

                                    <IconButton color='inherit' aria-label='More Options'>
                                        <MoreVertIcon />
                                    </IconButton>
                                </span>
                                </Typography>
                            </div>
                            <SlidingPane
                                isOpen={ this.state.isPaneOpen }
                                width={"300px"}
                                title='Filters'
                                onRequestClose={ () => {
                                    this.setState({ isPaneOpen: false });
                                } }>
                                <div style={{height: '1500px'}}>
                                    { this.state.species.length > 0 &&
                                        <ExpansionPanel defaultExpanded>
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
                                        <ExpansionPanel >
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
                                        <ExpansionPanel>
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
                                        <ExpansionPanel >
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
                                        <ExpansionPanel >
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
                                            {/*}<Button color="primary" variant="outlined" style={{marginLeft: '10px'}}>Save</Button>*/}
                                                <div style={{float: 'right', verticalAlign: 'top'}}>
                                                    <FormControlLabel
                                                        control={
                                                          <Switch
                                                            checked={this.state.autoShow}
                                                            onChange={this.handleSwitchChange}
                                                            value="autoShow"
                                                            color="primary"
                                                          />
                                                        }
                                                        label="Always show"
                                                      />
                                                </div>
                                        </div>
                                    }

                                </div>
                                <br />

                            </SlidingPane>

                        </div>
                          <input type="checkbox" checked={this.state.isMenuOpened} class="openSidebarMenu"
                              id="openSidebarMenu" aria-label="Toggle sidebar" title="Toggle sidebar"
                              onChange={this.handleSidebar}/>
                          <label for="openSidebarMenu" class="sidebarIconToggle">
                            <div class="spinner diagonal part-1"></div>
                            <div class="spinner horizontal"></div>
                            <div class="spinner diagonal part-2"></div>
                          </label>

                          <div id="sidebarMenu">
                              <div className={classes.viewContainer}>
                                  <MuiThemeProvider theme={darktheme}>
                                      <List key={guidGenerator()} component='nav' style={{marginLeft: '-18px', marginRight: '-18px'}}>
                                          {this.state.entitlementNames.map((item) =>
                                              <Entitlements key={guidGenerator()} text={item} selected={this.state.currentEntitlement} handler={() => this.handleViewClick(item)}/>
                                          )}
                                      </List>
                                  </MuiThemeProvider>
                              </div>
                          </div>
                          <div id='center' class="main center">
                            <div class="mainInner">
                                { this.state.isMenuOpened === true &&
                                    <GridContainer alignContent="center" style={{marginLeft: '310px', width: 'calc(100vw - 320px)', paddingRight: '80px'}}>
                                        <GridItem>
                                            {this.state.currentEntitlement === 'Scorecard' && <Scorecard/> }
                                            {this.state.currentEntitlement === 'Yearly recap' && <YearlyRecap/> }
                                            {this.state.currentEntitlement === 'Supply chain analysis' && <FarmDetail/> }
                                            {this.state.currentEntitlement === 'Non-conformities' && <Compliance/> }
                                            {this.state.currentEntitlement === 'Supply chain' && <SupplyChain/> }
                                            {this.state.currentEntitlement === 'Notifications' && <Notifications/> }
                                            {this.state.currentEntitlement === 'Labs' && <Labs/> }
                                            {this.state.currentEntitlement === 'Settings' && <Settings/> }
                                        </GridItem>
                                    </GridContainer>
                                }
                                { this.state.isMenuOpened === false &&
                                    <GridContainer alignContent="center" style={{marginLeft: '20px', width: '100%', paddingRight: '20px'}}>
                                        <GridItem>
                                            {this.state.currentEntitlement === 'Scorecard' && <Scorecard/> }
                                            {this.state.currentEntitlement === 'Yearly recap' && <YearlyRecap/> }
                                            {this.state.currentEntitlement === 'Supply chain analysis' && <FarmDetail/> }
                                            {this.state.currentEntitlement === 'Non-conformities' && <Compliance/> }
                                            {this.state.currentEntitlement === 'Supply chain' && <SupplyChain/> }
                                            {this.state.currentEntitlement === 'Notifications' && <Notifications/> }
                                            {this.state.currentEntitlement === 'Labs' && <Labs/> }
                                            {this.state.currentEntitlement === 'Settings' && <Settings/> }
                                        </GridItem>
                                    </GridContainer>
                                }
                            </div>
                          </div>
                    </div>
                </div>


        <Footer></Footer>
    </div>
);
}
}

export default withStyles(styles)(PortalPage);
