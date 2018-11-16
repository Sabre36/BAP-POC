import React from 'react';
import ReactDOM from 'react-dom';
import geoData from "assets/data/all_geo.json";

import StarIcon from "@material-ui/icons/StarRate";
import { withState } from './with-state.jsx';
import { GridColumn, Grid, GridToolbar } from '@progress/kendo-react-grid';
import { savePDF } from '@progress/kendo-react-pdf';
import './../../assets/plugins/kendo/all.css';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import facilities from 'assets/data/facilities.json';
import Moment from 'react-moment';
import FilterIcon from 'assets/img/svg/thin-filter.svg';
import ExcelIcon from 'assets/img/svg/doc-excel.svg';
import PDFIcon from 'assets/img/svg/doc-pdf.svg';
import LocationIcon from "@material-ui/icons/LocationOn";
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import LocateMap from "./../Maps/LocateMap.jsx";

const StatefulGrid = withState(Grid);


function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class cellWithStars extends React.Component {
    render() {
        const icon = this.props.dataItem.rating === 1 ? <span><StarIcon/></span> :
        this.props.dataItem.rating === 2 ? <span><StarIcon/><StarIcon/></span> :
        this.props.dataItem.rating === 3 ? <span><StarIcon/><StarIcon/><StarIcon/></span> :
        this.props.dataItem.rating === 4 ? <span><StarIcon/><StarIcon/><StarIcon/><StarIcon/></span> : "N/A";

        return (
            <td >
                {icon}
            </td>
        );
    }
}

class cellDate extends React.Component {
    render() {
        const style = {
            verticalAlign: "top",
        };

        const dateToFormat = this.props.dataItem[this.props.field];

        return (
            <td style={style}>
                <Moment format="MM/DD/YYYY" date={dateToFormat}/>
            </td>
        );
    }
}

class cellEllipsis extends React.Component {
    render() {
        const value = this.props.dataItem[this.props.field];
        return (
            <td style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', verticalAlign: 'top'}} title={value}>
                {value}
            </td>
        );
    }
}


class cellWithButton extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        open: false,
    };


    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick(e) {
        this.setState({ open: true });
    }

    render() {

        return (
            <div>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="lg"
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    TransitionComponent={Transition}
                    keepMounted
                    >
                        <DialogTitle id="alert-dialog-title">{this.props.dataItem.BAPID} - {this.props.dataItem.location}</DialogTitle>
                        <DialogContent >
                            <DialogContentText id="alert-dialog-description">
                                <p>Latitude: {this.props.dataItem.latitude} </p>
                                <p>Longitude: {this.props.dataItem.longitude}</p>
                            </DialogContentText>
                            <LocateMap latitude={this.props.dataItem.latitude} longitude={this.props.dataItem.longitude} name={this.props.dataItem.location}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <td style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', verticalAlign: 'top'}} title={this.props.dataItem.latitude + ',' + this.props.dataItem.longitude}>
                        <LocationIcon onClick={this.handleClick}/>
                    </td>
                </div>
            );
        }
    }


    class KendoGrid extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                showFilters: false,

            };
            this.toggleFilters = this.toggleFilters.bind(this);
        }

        //gridPDFExport;
        lastSelectedIndex = 0;

        toggleFilters(event) {
            this.setState({showFilters: !this.state.showFilters});
        }

        exportPDF = () => {
            savePDF(ReactDOM.findDOMNode(this.grid), { paperSize: 'Letter' });
        }


        _export;
        exportExcel = () => {
            this._export.save();
        }



        render() {
            //console.log('%cRendering grid props: ' + JSON.stringify(this.props), "color:orange");

            const styles = {
                toolbaricon: {
                    marginRight: '6px',
                    marginTop: '2px',
                    marginBottom: '2px'
                }
            };

            const mergeArray = (source, merge, by) => source.map(item => ({
                ...item,
                ...(merge.find(i => i[by] === item[by]) || {}),
            }));

            const facilitiesData = mergeArray(facilities, geoData, 'BAPID');


            return (
                <Paper>

                    <ExcelExport ref={(exporter) => { this._export = exporter; }}>
                        <StatefulGrid data={facilitiesData} ref={(grid) => this.grid = grid}>
                            <GridToolbar >
                                <div style={{float: "right"}}>
                                    <button
                                        title="Export Excel"
                                        className="k-button k-primary"
                                        onClick={this.toggleFilters}>
                                        <img src={FilterIcon} height={22} alt="Filters" style={styles.toolbaricon}/>
                                        {this.state.showFilters ? "Hide Filters" : "Show Filters"}
                                    </button>
                                    <button
                                        title="Export PDF"
                                        className="k-button k-primary"
                                        icon="filter"
                                        onClick={this.exportPDF}>
                                        <img src={PDFIcon} height={20} alt="Filters" style={styles.toolbaricon}/>
                                        Save as PDF
                                    </button>
                                    <button
                                        title="Export Excel"
                                        className="k-button k-primary"
                                        onClick={this.exportExcel}>
                                        <img src={ExcelIcon} height={20} alt="Filters" style={styles.toolbaricon}/>
                                        Save as Excel
                                    </button>
                                </div>
                            </GridToolbar>

                            { this.props.authenticated && <GridColumn field="BAPID" title="BAP ID" minResizableWidth={120} filterable={this.state.showFilters} /> }

                            <GridColumn field="location" title="Name" filterable={this.state.showFilters} cell={cellEllipsis}/>

                            { this.props.authenticated && <GridColumn field="facilityType" title="Type" filterable={this.state.showFilters} />}

                            { this.props.authenticated && <GridColumn field="country" title="Country" filterable={this.state.showFilters}/> }
                            { !this.props.authenticated && <GridColumn field="country" title="Country" width="250px" filterable={this.state.showFilters}/>}

                            { this.props.authenticated && <GridColumn field="species" title="Species"  filterable={this.state.showFilters}/>}
                            { this.props.authenticated && <GridColumn field="expiration" title="Expiration" type="date" filter="date" cell={cellDate} filterable={this.state.showFilters} />}
                            { this.props.authenticated && <GridColumn field="rating" title="Rating" cell={cellWithStars} filterable={this.state.showFilters} />}

                            <GridColumn field="latitude" title="Map" width="100px" cell={cellWithButton} filterable={false} />

                        </StatefulGrid>
                    </ExcelExport>
                </Paper>
            );
        }
    }
    export default KendoGrid;
