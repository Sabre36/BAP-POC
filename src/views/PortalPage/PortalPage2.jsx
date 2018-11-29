import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import portalPageStyle from 'assets/jss/site-styles/views/portalPage.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// Core Material-UI components
import AppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


// Misc components
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { Helmet } from 'react-helmet';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import Slider from '@material-ui/lab/Slider'; // not yet released officially
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
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
import RenderAlerts from './Helpers/RenderAlerts.jsx';
import TabContainer from './Helpers/TabContainer.jsx';


// Sections
import Compliance from './Sections/Compliance.jsx';
import FarmDetail from './Sections/FarmDetail.jsx';
import Labs from './Sections/Labs.jsx';
import Notifications from './Sections/Notifications.jsx';
import Scorecard from './Sections/Scorecard.jsx';
import Settings from './Sections/Settings.jsx';
import SupplyChain from './Sections/SupplyChain1.jsx';
import YearlyRecap from './Sections/YearlyRecap.jsx';


// Icons and SVGs
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PrintIcon from '@material-ui/icons/Print';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

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

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: '#DFDFDF'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        backgroundColor: '#DFDFDF',
        marginLeft: '15px'
    },
    rightToolbar: {
        marginLeft: 'auto',
        marginRight: -12,
    },
});


class PortalPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleAffiliationChange = this.handleAffiliationChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSliderTextChange = this.handleSliderTextChange.bind(this);
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
        alertList: this.props.alertList,
        alertDismissed: false,
        isMenuOpen: true,
        cols: 10,
        value: 100,
        open: true,
        value: 100
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    async handleSidebar() {
        await this.setState({
            cols:  !this.state.isMenuOpened ? 10 : 12,
            isMenuOpened: !this.state.isMenuOpened,
        });
    }


    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });
    };

    handleSliderChange = (event, value) => {
        this.setState({ value });
    };

    handleSliderTextChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
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
                                }

                                if (co != null) {
                                    _countries = co;
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
                alertDismissed: true,
                //isMenuOpened: !this.state.isMenuOpened
            });
        };

        handleAffiliationChange = async (event) => {
            let _defaultAffiliation = event.target.value;
            let _entitlementNames = [];
            let _alertList = [];
            let _defaultEntitlement = null;

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

                    _defaultEntitlement = _entitlementNames[0];
                    break;
                }
            }

            await this.setState({
                defaultAffiliation: _defaultAffiliation,
                entitlementNames: _entitlementNames,
                defaultEntitlement: _defaultEntitlement,
                alertList: _alertList,
                tabIndex: 0,
                alertDismissed: false
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

        itemRender = (li, itemProps) => {
            const itemChildren =
            <span key={guidGenerator()} style={{fontSize: "18px", fontWeight: 400, paddingRight: "50px" }}>
                {li.props.children}
            </span>;

            return React.cloneElement(li, li.props, itemChildren);
        }


    render() {
      const { classes, theme, ...rest } = this.props;
      const { value } = this.state;

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
                  <img src={img_portal} style={{width: '100%', zIndex: '999999'}} alt="fish swimming"/>
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


              <CssBaseline />
              <AppBar position='sticky' style={{backgroundColor: '#1463AC', position: 'fixed', top: '110px'}}
                  className={classNames(classes.appBar, {
                      [classes.appBarShift]: this.state.open,
                  })}
                  >
                  <Toolbar disableGutters={!this.state.open}>
                      <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                          onClick={this.handleDrawerOpen}
                          className={classNames(classes.menuButton, {
                              [classes.hide]: this.state.open,
                          })}
                          >
                          <MenuIcon />
                      </IconButton>
                      <Typography variant='title' color='inherit'>Welcome {this.props.userName}  (

                              { this.props.affiliationNames.length === 1 &&
                                  <span>{this.props.defaultAffiliation}</span>
                              }
                              { this.props.affiliationNames.length > 1 &&
                                  <DropDownList style={{display: 'inline-block', width: 'auto', minWidth: '150px', color: '#ffffff'}}
                                      data={this.props.affiliationNames}
                                      key={guidGenerator()}
                                      defaultValue={this.props.defaultAffiliation}
                                      itemRender={this.itemRender}
                                      valueRender={this.valueRender}
                                      header={<div style={{ paddingTop: '20px' }}></div>}
                                      onChange={this.handleAffiliationChange}
                                      dataItemKey='defaultAffiliation'
                                      />
                              }
                          )
                      </Typography>
                      <section className={classes.rightToolbar}>
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

          <div className={classes.root}>
                  {/*<CssBaseline />*/}
              <Drawer
                  variant="permanent"
                  className={classNames(classes.drawer, {
                      [classes.drawerOpen]: this.state.open,
                      [classes.drawerClose]: !this.state.open,
                  })}
                  classes={{
                      paper: classNames({
                          [classes.drawerOpen]: this.state.open,
                          [classes.drawerClose]: !this.state.open,
                      }),
                  }}
                  open={this.state.open}
                  >
                  <div className={classes.toolbar}>
                      <IconButton onClick={this.handleDrawerClose}>
                          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                      </IconButton>
                  </div>
                  <Divider />

                  <List key={guidGenerator()} component='nav' style={{marginLeft: '-8px'}}>
                      {this.state.entitlementNames.map((item) =>
                          <Entitlements key={guidGenerator()} text={item} selected={this.state.defaultEntitlement} handler={() => this.handleViewClick(item)}/>
                      )}
                </List>

                  <Divider />

                    <h4 style={{marginLeft: '20px'}}>Filters</h4>
                      <ExpansionPanel style={{backgroundColor: 'transparent', color: '#fff'}}>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Species</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                              <FormControl component='fieldset' className={classes.formControl}>
                                  <Species species={this.state.species} userAffiliation={this.state.defaultAffiliation} />
                              </FormControl>
                          </ExpansionPanelDetails>
                      </ExpansionPanel>



                      <ExpansionPanel style={{backgroundColor: 'transparent', color: '#fff'}}>
                          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Countries</Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                          <FormControl component='fieldset' className={classes.formControl}>
                              <Countries countries={this.state.countries} userAffiliation={this.state.defaultAffiliation} />
                          </FormControl>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>



                          <ExpansionPanel style={{backgroundColor: 'transparent', color: '#fff'}}>
                              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>Yield conversion</Typography>
                              </ExpansionPanelSummary>
                              <ExpansionPanelDetails>
                              <FormControl component='fieldset' className={classes.formControl}>
                                  <br/>
                                      <TextField
                                           id="standard-number"
                                           label="Percent"
                                           value={value}
                                           onChange={this.handleSliderTextChange('value')}
                                           type="number"
                                           className={classes.textField}
                                           InputLabelProps={{shrink: true}}
                                           margin="normal"
                                       />
                                      <br/>
                                      <Slider
                                        classes={{ container: classes.slider }}
                                        value={value}
                                        min={0}
                                        max={100}
                                        step={1}
                                        aria-labelledby="label"
                                        onChange={this.handleSliderChange}
                                      />
                              </FormControl>
                              </ExpansionPanelDetails>
                          </ExpansionPanel>
                          <br/>
                          <br/>

                      <div style={{textAlign: 'left', display: 'inline' }}>
                          <Button color="primary">
                              APPLY
                          </Button>

                          <Button color="secondary">
                              SAVE FILTERS
                          </Button>
                      </div>


              </Drawer>
              <main className={classes.content}>



                        <Scorecard/>



              </main>
          </div>
      </div>
      );
    }
  }

PortalPage.propTypes = {
classes: PropTypes.object.isRequired,
theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PortalPage);
//export default withStyles(portalPageStyle)(PortalPage);
