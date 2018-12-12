import React from 'react';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { orderBy } from '@progress/kendo-data-query';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import plantData from './../../assets/data/plantData.json';
import supplyChainData from './../../assets/data/supplyChainData.json';
import round from "./../../views/PortalPage/Helpers/round.jsx";


function formatNum(value, decimals) {
    let n = round(value, decimals);
    let newValue = isNaN(n) ? '-' : n;

    return newValue;
}

// function hsl_col_perc(percent, start, end) {
//     var a = percent / 100,
//     b = (end - start) * a,
//     c = b + start;
//
//     return 'hsl('+c+', 100%, 50%)'; // Return a CSS HSL string
// }

function colorMap(value) {
    let color = '#fcfcfc';
    let isNeg = value < 0 ? true : false;
    let absValue = round(Math.abs(value),0);

    if ( isNaN(value) || value === null ) {
        color = 'transparent';
    } else if (isNeg) {
        if (absValue >= 0 && absValue < 25)
        color = '#FFCC03';
        else if (absValue >= 25 && absValue < 50)
        color = '#F89C05';
        else if (absValue >= 50)
        color = '#ab0520';
    } else {
        if (absValue >= 0 && absValue < 25)
        color = '#65B12F';
        else if (absValue >= 25 && absValue < 50)
        color = '#43A546';
        else if (absValue >= 50 )
        color = '#37611A';
    }

    return color;
}


class cellPercentDiff extends React.Component {
    render() {
        let value = this.props.dataItem[this.props.field];
        let strValue = isNaN(value) ? value : round(this.props.dataItem[this.props.field], 1).toString() + "%";



        const style = {
            textAlign: "center",
            minWidth: "90px",
            color: "#fff",
            fontWeight: 500,
            //backgroundColor: hsl_col_perc(value, red, green)
            backgroundColor: colorMap(value)
        };

        return (
            <td style={{padding: "4px"}}>
                <div style={style}>
                    {/* {round(this.props.dataItem[this.props.field], 1)} */}
                    {strValue}
                </div>
            </td>
        );
    }
}


class cellIntegerRight extends React.Component {
    render() {
        const style = {
            textAlign: "right",
        };

        return (
            <td style={style}>
                {formatNum(this.props.dataItem[this.props.field],0)}
            </td>
        );
    }
}

class cellFloatRight extends React.Component {
    render() {
        const style = {
            textAlign: "right",
        };

        return (
            <td style={style}>
                {formatNum(this.props.dataItem[this.props.field],1)}
            </td>
        );
    }
}

class cellFloatRightColorize extends React.Component {
    render() {
        const value = formatNum(this.props.dataItem[this.props.field],1);
         let strValue = (isNaN(value) || value < 0) ? value : "+" + value.toString();

        return (
            <td style={{ color: value > 0 ? 'initial' : '#ab0520', textAlign: 'right'}}>
                {strValue}
            </td>
        );
    }
}

class cellEllipsis extends React.Component {
    render() {
        const value = this.props.dataItem[this.props.field];
        return (
            <td style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} title={value}>
                {value}
            </td>
        );
    }
}

class DetailComponent extends GridDetailRow {
    state = {
        tabIndex: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });

    };


    render() {
        const dataItem = this.props.dataItem;

        return (

            <section>
                <Tabs value={this.state.tabIndex} fullWidth={true} onChange={this.handleTabChange}>
                    <Tab label='Farm detail'/>
                    <Tab label='Plant summary'/>
                </Tabs>

                {/* TAB 0 */}
                { this.state.tabIndex === 0 &&
                    <Paper style={{height: '500px', paddingBottom: '25px', overflowX: 'hidden', overflowY: 'auto'}}>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="dense">BAP ID</TableCell>
                                    <TableCell padding="dense">FACILITY NAME</TableCell>
                                    <TableCell padding="dense">COUNRTRY</TableCell>
                                    <TableCell padding="dense"numeric># PLANTS SERVED</TableCell>
                                    <TableCell padding="dense" date>EXPIRATION</TableCell>
                                    <TableCell padding="dense">SPECIES</TableCell>
                                    <TableCell padding="dense" numeric>PRODUCTION VOLUME</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                { dataItem.farmData.map((item) =>
                                    <TableRow>
                                        <TableCell padding="none">{item.bapid}</TableCell>
                                        <TableCell padding="none">{item.facilityName}</TableCell>
                                        <TableCell padding="none">{item.country}</TableCell>
                                        <TableCell numeric padding="dense">{item.plantsServed}</TableCell>
                                        <TableCell padding="dense">{item.expiration}</TableCell>
                                        <TableCell padding="dense">Shrimp</TableCell>
                                        <TableCell padding="dense">222</TableCell>
                                    </TableRow>
                                ) }
                            </TableBody>
                        </Table>
                    </Paper>
                }

                {/* TAB 1 */}
                { this.state.tabIndex === 1 &&
                    <Paper style={{minHeight: '500px'}}>
                        <GridContainer>
                            <GridItem md={3}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>BAP id</strong></p>
                                    <p><strong>Plant name</strong></p>
                                    <p><strong>Country</strong></p>
                                    <p><strong>Rating</strong></p>
                                    <p><strong># of farms</strong></p>
                                    <p><strong># of suppliers served</strong></p>
                                    <p><strong>Suppliers</strong></p>
                                </div>
                            </GridItem>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left', fontSize: '20px!important'}}>
                                    <p> {dataItem.bapid}</p>
                                    <p> {dataItem.facilityName}</p>
                                    <p> {dataItem.country}</p>
                                    <p> {dataItem.rating}</p>
                                    <p> {dataItem.farmCount}</p>
                                    <p> {dataItem.suppliersServed}</p>

                                    <ul style={{listStylePosition: "inside", paddingLeft: 0}}>
                                    { dataItem.suppliersList.map((item) =>
                                        <li >{item}</li>
                                    ) }
                                    </ul>

                                </div>
                            </GridItem>
                            <GridItem md={3}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>Total plant production</strong></p>
                                    <p><strong>Total farm production</strong></p>
                                    <p><strong>Projected {dataItem.year1ProjectedLabel}</strong></p>
                                    <p><strong>Projected {dataItem.year2ProjectedLabel}</strong></p>
                                    <p><strong>Shipped {dataItem.year1ShippedLabel}</strong> </p>
                                    <p><strong>Shipped {dataItem.year2ShippedLabel}</strong></p>
                                </div>
                            </GridItem>

                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left'}}>
                                    <p> {dataItem.totalPlantProduction} {dataItem.totalPlantProduction > 0 ? ' MT' : '-'} </p>
                                    <p> {dataItem.totalFarmProduction} {dataItem.totalFarmProduction > 0 ? ' MT' : '-'} </p>
                                    <p> {dataItem.year1Projected} {dataItem.year1Projected > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.year2Projected} {dataItem.year2Projected > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.year1Shipped} {dataItem.year1Shipped > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.year2Shipped} {dataItem.year2Shipped > 0 ? ' MT' : '-'}</p>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </Paper>
                }

            </section>
        );
    }
}

class PlantFarmDetail extends React.Component {
    constructor(props) {
        super(props);

        this.gridRef = React.createRef();

        this.state = {
            data: supplyChainData.slice(0,10),
            sort: [],
            skip: 0,
            showDilution: false
        };
        this.expandChange = this.expandChange.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }

    componentDidMount(){
        var ths = this.gridRef.current.getElementsByTagName('th');

        for(var i = 0; i < ths.length; i++){

            ths[i].setAttribute("style", "height: '150px; font-weight: 500; font-size: 14px;");

            // For the last 4 columns, right justify the headings
            if ( i > 3 && i < 10 ) {
                ths[i].setAttribute("style", "text-align: right; font-weight: 500; font-size: 14px;");
            } else if ( i === 10 ) {
                ths[i].setAttribute("style", "text-align: center; font-weight: 500; font-size: 14px; ");
            }
        }
    }


    expandChange(event) {
        event.dataItem.expanded = !event.dataItem.expanded;
        this.forceUpdate();
    }

    handleSortChange = (event) => {
        this.setState({
            data: orderBy(this.state.data,event.sort),
            sort: event.sort
        })
    }

    handleSwitchChange() {
        this.setState({showDilution: !this.state.showDilution});
    }

    handlePageChange = (event) => {
        this.setState({
            data: plantData.slice(event.page.skip, event.page.skip + event.page.take),
            skip: event.page.skip
        })
    }

    render() {
        return (
            <div>
                <div style={{textAlign: 'right'}}>
                    <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.showDilution}
                            onChange={this.handleSwitchChange}
                            value="showDilution"
                            color="primary"
                          />
                        }
                        label="Show dilution"
                      />
                </div>
                <div ref={this.gridRef} >
                    <Grid
                        data={this.state.data}
                        detail={DetailComponent}
                        resizable={true}
                        reorderable={true}
                        sortable={true}
                        onSortChange={this.handleSortChange}
                        sort={this.state.sort}
                        onPageChange={this.handlePageChange}
                        total={this.state.data.length}
                        skip={this.state.skip}
                        pageable={true}
                        pageSize={10}
                        style={{ height: 'calc(100vh - 255px', padding: '15px' }}
                        expandField="expanded"
                        onExpandChange={this.expandChange}
                        >
                            <Column field="bapid" title="BAP ID" minResizableWidth={110} width="110px" filterable={true}  />
                            <Column field="facilityName" title="PLANT NAME" minResizableWidth={150} width="250px" cell={cellEllipsis} />
                            <Column field="country" title="COUNTRY" width="120px" cell={cellEllipsis}/>
                            <Column field="suppliersServed" title="# SUPPLIERS SERVED" type="number" cell={cellIntegerRight}/>
                            <Column field="farmCount" title="# FARMS" type="number" cell={cellIntegerRight}/>
                            <Column field="totalPlantProduction" title="Total Plant Production" type="number" cell={cellFloatRight}/>
                            <Column field="totalFarmProduction" title="Total Farm Production" type="number" cell={cellFloatRight}/>
                            <Column field="Projected2017" title="Total Projected" type="number"  cell={cellFloatRight} />
                            <Column field="Delta" title="DIFFERENCE" type="number" cell={cellFloatRightColorize}  />
                            <Column field="Risk" title="CONFIDENCE" type="number" width="140px" cell={cellPercentDiff}  />

                        </Grid>
                    </div>
                </div>
            );
        }
    }

    export default PlantFarmDetail;
