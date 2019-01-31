import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import MenuIcon from '@material-ui/icons/Menu';
import PlantMapNew from './../Maps/PlantMapNew.jsx';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import infoGraphicStyle from 'assets/jss/site-styles/components/infoGraphicStyle.jsx';

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


class VolumeByPlantMap extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        view: 'shipments',
        color: '#02419A',
        units: 'lbs',
        data: []
    }

    handleClick() {
        alert('click');
    }

    componentDidMount(){
        this.processData();
    }

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
                <Card style={{height: '375px', overflow: 'sroll'}}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Plant {this.state.view} volume
                            <Tooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon}>
                                    <i className={'fa fa-sm fa-info-circle'}/>
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

                </Card>
            </div>
        );
    }
}

export default withStyles(infoGraphicStyle)(VolumeByPlantMap);
