import React from 'react';

import StarIcon from "@material-ui/icons/StarRate";
import { withState } from './with-state.jsx';
import { GridColumn, Grid, GridToolbar } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-material/dist/all.css';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import facilities from 'assets/data/facilities.json';

const StatefulGrid = withState(Grid);

class cellWithBackGround extends React.Component {
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


class KendoGrid extends React.Component {

    gridPDFExport;
    lastSelectedIndex = 0;

    _export;
    exportExcel = () => {
        this._export.save();
    }

    render() {
        return (
            <div>
                <ExcelExport
                    data={facilities}
                    ref={(exporter) => { this._export = exporter; }}
                    >

                        <StatefulGrid data={facilities} style={{ height: 'auto' }}>
                            <GridToolbar >
                                <div style={{float: "right"}}>
                                    <button
                                        title="Export PDF"
                                        className="k-button k-primary"
                                        //onClick={this.exportPDF}
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

                                    <GridColumn field="bapNo" title="BAP ID" width="160px" minResizableWidth="120" />
                                    <GridColumn field="location" title="Location" width="250px" minResizableWidth="120"/>
                                    <GridColumn field="facilityType" title="Type" />
                                    <GridColumn field="country" title="Country"  />
                                    <GridColumn field="species" title="Species"  />
                                    <GridColumn field="expiration" title="Expiration" type="date"  filter="date" width="100px"   />
                                    <GridColumn field="rating" title="Rating"  cell={cellWithBackGround}  width="160px" />
                                </StatefulGrid>
                            </ExcelExport>
                        </div>
                    );
                }
            }
export default KendoGrid;
