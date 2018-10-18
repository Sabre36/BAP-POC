import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import portalPageStyle from 'assets/jss/site-styles/views/portalPage.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

// Custom components
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import TopNavLinks from 'components/Header/TopNavLinks.jsx';


// Helpers
import guidGenerator from './Helpers/guidGenerator.jsx';
import Countries from './Helpers/Countries.jsx';
import Species from './Helpers/Species.jsx';
import Entitlements from './Helpers/Entitlements.jsx';
import RenderAlerts from './Helpers/RenderAlerts.jsx';
import TabContainer from './Helpers/TabContainer.jsx';


// Sections
import Compliance from './Sections/Compliance.jsx';
import FarmDetail from './Sections/FarmDetail.jsx';
import Labs from './Sections/Labs.jsx';
import Notifications from './Sections/Notifications.jsx';
import Scorecard from './Sections/Scorecard.jsx';
import Settings from './Sections/Settings.jsx';
import SupplyChain from './Sections/SupplyChain.jsx';
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
                //isMenuOpened: !this.state.isMenuOpened
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

        itemRender = (li, itemProps) => {
            const itemChildren =
                <span style={{fontSize: "18px", fontWeight: 400, paddingRight: "50px" }}>
                    {li.props.children}
                </span>;

            return React.cloneElement(li, li.props, itemChildren);
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
                tab: {
                    color: "#fff",
                    minWidth: "110px",
                    marginTop: "15px"
                },
                offCanvasMenu: {
                    marginTop: "172px",
                    height: "100vh",
                    //height: "100vh",
                    //backgroundPosition: "left 0 top 0",
                    backgroundPosition: "0 0",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "275px 100vh",
                    //backgroundSize: "275px 1200px",
                    //backgroundSize: "cover",
                    //backgroundSize: "cover",
                    backgroundImage: `url(${Background})`,
                    borderRight: "1px solid paleblue",
                    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.35)"
                },
                offCanvasContainer: {
                    //marginTop: "172px",
                    //width: "100%",
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
                    <RenderAlerts alerts={this.props.msgList}/>


                    <AppBar position='sticky' style={{backgroundColor: '#1463AC', position: 'fixed', top: '110px'}}>
                        <Toolbar>
                            <IconButton className={classes.menuButton} aria-label='Menu' color='inherit' onClick={this.handleSidebar.bind(this)}>
                                <MenuIcon />
                            </IconButton>


                            <Typography variant='title' color='inherit'>Welcome {this.props.userName}  (
                                <DropDownList style={{display: 'inline-block', width: 'auto', minWidth: '150px', color: '#ffffff'}}
                                    data={this.props.affiliationNames}
                                    defaultValue={this.props.defaultAffiliation}
                                    itemRender={this.itemRender}
                                    valueRender={this.valueRender}
                                    header={<div style={{ paddingTop: '20px' }}></div>}
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

                        <OffCanvasMenu style={styles.offCanvasMenu}>
                            <div style={styles.offCanvasContainer}>
                                <Tabs value={this.state.tabIndex} fullWidth={true} color="white" onChange={this.handleTabChange} classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}>
                                    {/* <Tab label='Views' icon={<img src={ViewIcon} height={18} alt="Views" />} style={styles.tab} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}> </Tab>
                                    <Tab  label='Filters' icon={<img src={FilterIcon} height={18} alt="Filters" />} style={styles.tab} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/> */}
                                    <Tab label='Views' style={styles.tab} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}> </Tab>
                                    <Tab label='Filters' style={styles.tab} classes={{ root: classes.tabRoot, selected: classes.tabSelected }}/>
                                </Tabs>
                            </div>

                            {this.state.tabIndex === 1 && <TabContainer>
                                <div>
                                    { this.state.species.length > 0 &&
                                        <div style={{marginLeft: "25px", marginTop: "10px"}}>
                                            <FormControl component='fieldset' className={classes.formControl}>
                                                <Species species={this.state.species} userAffiliation={this.state.defaultAffiliation} theme={darktheme}/>
                                            </FormControl>
                                            <br/>
                                            <br/>
                                        </div>
                                    }

                                    { this.state.countries.length > 0 &&
                                        <div style={{marginLeft: "25px"}}>
                                            <FormControl component='fieldset' className={classes.formControl}>
                                                <Countries countries={this.state.countries} userAffiliation={this.state.defaultAffiliation} theme={darktheme}/>
                                            </FormControl>
                                            <br/>
                                        </div>
                                    }
                                </div>
                            </TabContainer>
                        }

                        { this.state.tabIndex === 0 && <TabContainer>
                            <MuiThemeProvider theme={darktheme}>
                                <div style={{overflow: "auto", zIndex: "99999"}}>
                                    <List key={guidGenerator()} component='nav' style={{marginLeft: '-18px', marginRight: '-18px'}}>
                                        {this.state.entitlementNames.map((item) =>
                                            <Entitlements key={guidGenerator()} text={item} selected={this.state.defaultEntitlement} handler={() => this.handleViewClick(item)}/>
                                        )}
                                    </List>
                                </div>
                            </MuiThemeProvider>
                        </TabContainer>
                    }
                </OffCanvasMenu>
            </OffCanvas>
        </div>
    </div>
);
}
}

export default withStyles(portalPageStyle)(PortalPage);
