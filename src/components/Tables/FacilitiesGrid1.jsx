import React from 'react';

import StarIcon from "@material-ui/icons/StarRate";
import { withState } from './with-state.jsx';
import { GridColumn, Grid, GridToolbar, GridPDFExport } from '@progress/kendo-react-grid';
import './../../assets/plugins/kendo/all.css';
import { ExcelExport } from '@progress/kendo-react-excel-export';
//import { GridPDFExport } from '@progress/kendo-react-pdf';

import facilities from 'assets/data/facilities.json';
import Moment from 'react-moment';
import FilterIcon from 'assets/img/svg/thin-filter.svg';


const StatefulGrid = withState(Grid);

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


class KendoGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showFilters: false,
        };

        this.state = this.createState(0, 10);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    gridPDFExport;
    lastSelectedIndex = 0;

    createState(skip, take) {
        return {
            items: facilities.slice(skip, skip + take),
            skip: skip,
            pageSize: take
        };
    }

    pageChange = (event) => {
        this.setState(this.createState(event.page.skip, event.page.take));
    }


    exportPDF = () => {
        this.raisePDFExportRequestedFlag();
        this.gridPDFExport.save(this.state.items, this.lowerPDFExportRequestedFlag);
    }

    raisePDFExportRequestedFlag = () => {
        this.setState({ pdfExportRequested: true });
    }

    lowerPDFExportRequestedFlag = () => {
        this.setState({ pdfExportRequested: undefined });
    }

    toggleFilters(event) {
        this.setState({showFilters: !this.state.showFilters});
    }


    _export;
    exportExcel = () => {
        this._export.save();
    }

    render() {
        const styles = {
            toolbaricon: {
                marginRight: '6px'
            }
        };

        const grid = (
            <div>
                <ExcelExport
                    data={facilities}
                    resizable={true}
                    reorderable={true}
                    pageSize={10}
                    onPageChange={this.pageChange}
                    data={this.state.items}
                    skip={this.state.skip}
                    pageable={true}
                    total={this.state.items.length}
                    ref={(exporter) => { this._export = exporter; }}
                    >
                        <StatefulGrid data={this.state.items} style={{ height: 'auto' }}>
                            <GridToolbar >
                                <div style={{float: "right"}}>
                                    <button
                                        title="Export Excel"
                                        className="k-button k-primary"
                                        onClick={this.toggleFilters}
                                        >
                                            <img src={FilterIcon} height={18} alt="Filters" style={styles.toolbaricon}/>

                                            {this.state.showFilters ? "Hide Filters" : "Show Filters"}
                                    </button>
                                    <button
                                        title="Export PDF"
                                        className="k-button k-primary"
                                        icon="filter"
                                        onClick={this.exportPDF}
                                        //disabled={this.state.pdfExportRequested}
                                        >
                                            Save as PDF
                                        </button>
                                        <button
                                            title="Export Excel"
                                            className="k-button k-primary"
                                            onClick={this.exportExcel}
                                            //disabled={this.state.pdfExportRequested}
                                            >
                                                Save as Excel
                                            </button>
                                        </div>
                                    </GridToolbar>

                                    { this.props.authenticated && <GridColumn field="bapNo" title="BAP ID" minResizableWidth={120} filterable={this.state.showFilters} /> }

                                    <GridColumn field="location" title="Name" filterable={this.state.showFilters} cell={cellEllipsis}/>

                                    { this.props.authenticated && <GridColumn field="facilityType" title="Type" filterable={this.state.showFilters} />}

                                    { this.props.authenticated && <GridColumn field="country" title="Country" filterable={this.state.showFilters}/> }
                                    { !this.props.authenticated && <GridColumn field="country" title="Country" width="250px" filterable={this.state.showFilters}/>}

                                    { this.props.authenticated && <GridColumn field="species" title="Species"  filterable={this.state.showFilters}/>}
                                    { this.props.authenticated && <GridColumn field="expiration" title="Expiration" type="date" filter="date" cell={cellDate} filterable={this.state.showFilters} />}
                                    { this.props.authenticated && <GridColumn field="rating" title="Rating" cell={cellWithStars} filterable={this.state.showFilters} />}

                        </StatefulGrid>
                    </ExcelExport>
                </div>

        );

        return (
            <div>
                {grid}
                <GridPDFExport ref={(element) => { this.gridPDFExport = element; }} >
                    {grid}
                </GridPDFExport>
            </div>

                    );
                }
            }
export default KendoGrid;
