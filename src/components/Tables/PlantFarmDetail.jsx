import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Tooltip from "@material-ui/core/Tooltip";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { orderBy } from '@progress/kendo-data-query';

import products from './products.json';
import plantData from './../../assets/data/plantData.json';

const red = 0,
    yellow = 60,
    green = 120,
    turquoise = 180,
    blue = 240,
    pink = 300;

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

function formatNum(value, decimals) {
    let n = round(value, decimals);
    let newValue = isNaN(n) ? '-' : n;

    return newValue;
}

function formatMT(value, units) {
    if (isNaN(value) || value <= 0)
        return '-';
    else
        return value + units;
}

function hsl_col_perc(percent, start, end) {
    var a = percent / 100,
    b = (end - start) * a,
    c = b + start;

    return 'hsl('+c+', 100%, 50%)'; // Return a CSS HSL string
}

function colorMap(value) {
    let color = '#fcfcfc';
    let isNeg = value < 0 ? true : false;
    let absValue = round(Math.abs(value),0);

    if (isNeg) {
        if (absValue >= 0 && absValue < 25)
            color = '#FFCC03';
        else if (absValue >= 25 && absValue <= 50)
            color = '#F89C05';
        else if (absValue > 50)
            color = '#ab0520';
    } else {
        if (absValue >= 0 && absValue <= 25)
            color = '#65B12F';
        else if (absValue >= 25 && absValue <= 50)
            color = '#43A546';
        else if (absValue > 50 )
            color = '#37611A';
    }

    return color;
}


class cellPercentDiff extends React.Component {
    render() {
        let value = this.props.dataItem[this.props.field];
        //value = value < 0 ? 0 : value;

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
                    {round(this.props.dataItem[this.props.field], 1)}
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
        return (
            <td style={{ color: value > 0 ? 'initial' : '#ab0520', textAlign: 'right'}}>
                {value}
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
    constructor(props) {
        super(props);
    }

    state = {
        tabIndex: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });

    };


    render() {
        const dataItem = this.props.dataItem;
        const { classes, ...rest } = this.props;

        return (

            <section>
                <Tabs value={this.state.tabIndex} fullWidth={true} color="white" onChange={this.handleTabChange}>
                    <Tab label='Plant Recap'/>
                    <Tab label='Risk Analysis'/>
                    <Tab label='Farm detail'/>
                </Tabs>

                {/* TAB 1 */}
                { this.state.tabIndex === 0 &&
                    <div>
                        <GridContainer>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>Total production (2017)</strong></p>
                                    <p><strong>Projected (2018)</strong></p>
                                    <p><strong>Shipped (2017)</strong> </p>
                                    <p><strong>Shipped (2016)</strong></p>
                                </div>
                            </GridItem>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left'}}>
                                    <p> {dataItem.TotalProduction} {dataItem.TotalProduction > 0 ? ' MT' : '-'} </p>
                                    <p> {dataItem.Projected2017} {dataItem.Projected2017 > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.Shipped2017} {dataItem.Shipped2017 > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.Shipped2016} {dataItem.Shipped2016 > 0 ? ' MT' : '-'}</p>

                                </div>
                            </GridItem>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>2 star production (2018):</strong></p>
                                    <p><strong>Number of farms:</strong></p>
                                </div>
                            </GridItem>

                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left'}}>
                                    <p> {dataItem.Production2Star} {dataItem.Production2Star > 0 ? ' MT' : '-'} </p>
                                    <p> {dataItem.Farms}</p>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                }

                {/* TAB 2 */}
                { this.state.tabIndex === 2 &&
                    <div>
                        <br/>
                        { dataItem.FarmData.map((item) =>
                            <p><strong style={{marginRight: "8px"}}>{item.BAPId}:</strong> {item.Name}, {item.Country}</p>
                        ) }
                    </div>
                }

                {/* TAB 1 */}
                { this.state.tabIndex === 1 &&
                    <div>
                        <GridContainer>
                            <GridItem md={3}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>Production</strong></p>
                                    <p><strong>Projected</strong></p>
                                    <p><strong>Shortfall vs. surplus (#)</strong> </p>
                                    <p><strong>Shortfall vs. surplus (%)</strong></p>
                                </div>
                            </GridItem>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left'}}>
                                    <p> {dataItem.TotalProduction} {dataItem.TotalProduction > 0 ? ' MT' : '-'} </p>
                                    <p> {dataItem.Projected2017} {dataItem.Projected2017 > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.Delta} {dataItem.Delta > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.Risk} {dataItem.Risk > 0 ? '%' : '-'}</p>

                                </div>
                            </GridItem>
                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'right'}}>
                                    <p><strong>Number of farms</strong></p>
                                    <p><strong>Farm/plant ratio <i className={"fa fa-sm fa-info-circle"} title="The farm-to-plant ratio (1:1 is idea)"/>:</strong></p>
                                    <p><strong>Average farm volume <i className={"fa fa-sm fa-info-circle"} title="Average farm volume is computed..."/>:</strong></p>
                                    <p><strong>Adjusted farm volume <i className={"fa fa-sm fa-info-circle"} title="Farms that service more than plant have had their volumes adjusted"/>:</strong></p>
                                </div>
                            </GridItem>

                            <GridItem md={2}>
                                <br/>
                                <div style={{textAlign: 'left'}}>
                                    <p> {dataItem.Farms}</p>
                                    <p> {dataItem.FarmPlantRatio}</p>
                                    <p> {dataItem.AvgFarm} {dataItem.AvgFarm > 0 ? ' MT' : '-'}</p>
                                    <p> {dataItem.AdjFarm} {dataItem.AdjFarm > 0 ? ' MT' : '-'}</p>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
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
            data: plantData.slice(0,10),
            sort: [],
            skip: 0,
        };
        this.expandChange = this.expandChange.bind(this);
    }

    componentDidMount(){
        var ths = this.gridRef.current.getElementsByTagName('th');

        for(var i = 0; i < ths.length; i++){

            ths[i].setAttribute("style", "font-weight: 500; font-size: 14px");

            // For the last 4 columns, right justify the headings
            if ( i > 3 && i < 8 ) {
                ths[i].setAttribute("style", "text-align: right; font-weight: 500; font-size: 14px;");
            } else if ( i === 8 ) {
                ths[i].setAttribute("style", "text-align: center; font-weight: 500; font-size: 14px;");
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

    handlePageChange = (event) => {
        this.setState({
            data: plantData.slice(event.page.skip, event.page.skip + event.page.take),
            skip: event.page.skip
        })
    }

    render() {
        return (
            <div ref={this.gridRef}>
                <Grid
                    data={this.state.data}
                    detail={DetailComponent}
                    sortable={true}
                    onSortChange={this.handleSortChange}
                    sort={this.state.sort}
                    onPageChange={this.handlePageChange}
                    total={plantData.length}
                    skip={this.state.skip}
                    pageable={true}
                    pageSize={10}
                    style={{ height: 'calc(100vh - 220px' }}
                    expandField="expanded"
                    onExpandChange={this.expandChange}
                    >
                        <Column field="BAPId" title="BAP ID" minResizableWidth="110px" filterable={true}  />
                        <Column field="Name" title="Plant Name" minResizableWidth="150px" width="200px" cell={cellEllipsis} />
                        <Column field="Country" title="Country" width="100px" cell={cellEllipsis}/>
                        <Column field="Farms" title="Farms" type="number" cell={cellIntegerRight}/>
                        <Column field="TotalProduction" title="Total Production" type="number" cell={cellFloatRight}/>
                        <Column field="Projected2017" title="Total Projected" type="number"  cell={cellFloatRight} />
                        <Column field="Delta" title="Difference" type="number" cell={cellFloatRightColorize}  />
                        <Column field="Risk" title="Risk %" type="number" width="130px" cell={cellPercentDiff}  />

                        {/* <Column field="Production2Star" title="2 Star Production" format="{0:n01}" cell={cellWithBackGround}/>
                        <Column field="Shipped2016" title="2016 Shipped" format="{0:n01}" cell={cellWithBackGround}/>
                        <Column field="Shipped2017" title="2017 Shipped" format="{0:n01}" cell={cellWithBackGround} /> */}
                    </Grid>
                </div>
            );
        }
    }

    export default PlantFarmDetail;
