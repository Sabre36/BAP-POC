import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import OpenDialogIcon from '@material-ui/icons/OpenInNew';
import PlantMapNew from './../Maps/PlantMapNew.jsx';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import infoGraphicStyle from 'assets/jss/site-styles/components/infoGraphicStyle.jsx';

import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';

import { MergeArray, GetVolumeByUnits } from './../../views/PortalPage/Helpers/Utils.js';
import scorecardData from 'assets/data/scorecard.json';
import geoData from "assets/data/all_geo.json";

function getRadius(vol) {
    let newradius = 5;

    if (vol > 2000)
        newradius = 15;
    else if (vol >= 1000 && vol < 2000)
        newradius = 10;
    else if (vol >= 500 && vol < 1000)
        newradius = 7.5;
    else if (vol >= 250 && vol < 500)
        newradius = 5;
    else
        newradius = 2.5;

    return newradius;
}

const tooltipTitle = () => {
    return (
        <Typography>
            A geographic comparison of plant <strong>shipments</strong>, <strong>projected</strong>, and <strong>projected</strong> volumes for the most recent data available.
        </Typography>
    );
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class VolumeByPlantMap extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        tooltipOpen: false,
        dialogOpen: false,
        view: 'shipments',
        color: '#02419A',
        units: 'MT',
        data: []
    }


    componentDidMount(){
        this.processData();
    }

    handleDialogOpen() {
        this.setState( { dialogOpen: true } );
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false });
    };

    handleTooltipClose = () => {
        this.setState({ tooltipOpen: false });
    };

    handleTooltipOpen = () => {
        this.setState({ tooltipOpen: true });
    };

    async handleChange (event, view) {
        await this.setState({ view });
        this.processData();
    };

    async processData() {
        let transform = [];
        let units = this.state.units;
        let view = this.state.view;
        let pm;
        let temp = [];

        scorecardData.forEach(function(section) {
            pm = section.plantMapData;
        });

        temp = MergeArray(pm, geoData, 'bapid');

        temp.forEach(function(el) {

            if ( el.name !== null ) {
                transform.push({
                    bapid: el.bapid,
                    name: el.name,
                    country: el.country,
                    radius: getRadius(view === 'shipments' ? el.shipped : view === 'production' ? el.production : el.projected),
                    latitude: el.lat,
                    longitude: el.lon,
                    production: GetVolumeByUnits(el.production, units),
                    shipped: GetVolumeByUnits(el.shipped, units),
                    projected: GetVolumeByUnits(el.projected, units),
                    fillKey: view === 'shipments' ? 'SHIPS' : view === 'production' ? 'PRODUCTION' : 'PROJECTED',
                });
            }
        });

        await this.setState({
            data: transform
        });

        //console.log('PROCESSDATA: records=' + this.state.data.length + ' view=' + this.state.view + '\n\n' +  JSON.stringify(this.state.data));
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Dialog

                    open={this.state.dialogOpen}
                    onClose={this.handleDialogClose}
                    fullWidth
                    maxWidth="xl"
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    TransitionComponent={Transition}
                    keepMounted={false}
                    >
                    <div>
                        <DialogTitle>
                            <h4 className={classes.infoGraphicTitle}>
                                <IconButton onClick={this.handleDialogClose} title="Close" style={{float: 'right', marginTop: '-12px'}}>
                                    <CloseIcon/>
                                </IconButton>
                                Plant {this.state.view} volume
                            </h4>
                            <div className={classes.toggleContainer}>
                                <ToggleButtonGroup exclusive onChange={this.handleChange}>
                                    <ToggleButton value="shipments"
                                        className={ this.state.view === 'shipments' ? classes.toggleButtonSelected : classes.toggleButton }>
                                        Shipments
                                    </ToggleButton>

                                    <ToggleButton value="projected"
                                        className={ this.state.view === 'projected' ? classes.toggleButtonSelected : classes.toggleButton }>
                                        Projected
                                    </ToggleButton>

                                    <ToggleButton value="production"
                                        className={ this.state.view === 'production' ? classes.toggleButtonSelected : classes.toggleButton }>
                                        Production
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </DialogTitle>
                    </div>
                    <DialogContent style={{overflowY: 'hidden'}}>
                        <PlantMapNew data={this.state.data} units={this.state.units} view={this.state.view} isDialog={true}/>
                    </DialogContent>
                </Dialog>

                <Card className={classes.cardLarge}>
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <CardActions>
                            <IconButton aria-label='Menu' color='inherit' onClick={this.handleDialogOpen.bind(this)}>
                                <OpenDialogIcon className={classes.iconButtonStyle}/>
                            </IconButton>
                            <h4 className={classes.infoGraphicTitle}>
                                Plant {this.state.view} volume
                                <Tooltip
                                    classes={{ tooltip: classes.lightTooltip }}
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={this.handleTooltipClose}
                                    open={this.state.tooltipOpen}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={tooltipTitle()}>
                                    <span className={classes.tooltipIcon} onClick={this.handleTooltipOpen}>
                                        <i className={"fa fa-sm fa-info-circle"}/>
                                    </span>
                                </Tooltip>
                            </h4>
                        </CardActions>

                        <div className={classes.toggleContainer}>
                            <ToggleButtonGroup exclusive onChange={this.handleChange}>
                                <ToggleButton value="shipments"
                                    className={ this.state.view === 'shipments' ? classes.toggleButtonSelected : classes.toggleButton }>
                                    Shipments
                                </ToggleButton>

                                <ToggleButton value="projected"
                                    className={ this.state.view === 'projected' ? classes.toggleButtonSelected : classes.toggleButton }>
                                    Projected
                                </ToggleButton>

                                <ToggleButton value="production"
                                    className={ this.state.view === 'production' ? classes.toggleButtonSelected : classes.toggleButton }>
                                    Production
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>

                        <PlantMapNew data={this.state.data} units={this.state.units} view={this.state.view}/>
                    </ClickAwayListener>
                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(VolumeByPlantMap);
