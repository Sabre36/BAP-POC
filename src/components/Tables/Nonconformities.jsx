import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { orderBy } from '@progress/kendo-data-query';
import Paper from '@material-ui/core/Paper';
import nonConformitiesGrid from "assets/jss/site-styles/components/nonConformitiesGrid.jsx";
import Moment from 'react-moment';
import nonconf from './../../assets/data/Kroger/nonconf.json';
//import nonconformitiesData from './../../assets/data/Kroger/non_conformities.json';
//import geoData from "assets/data/all_geo.json";
import round from "./../../views/PortalPage/Helpers/round.jsx";

function formatNum(value, decimals) {
    let n = round(value, decimals);
    let newValue = isNaN(n) ? '-' : n;

    return newValue;
}

// function groupByBAPID(array, col, value1, value2, value3, value4) {
//     var r = [], o = {};
//     array.forEach(function (a) {
//         if (!o[a[col]]) {
//             o[a[col]] = {};
//             o[a[col]][col] = a[col];
//             o[a[col]][value1] = 0;
//             o[a[col]][value2] = 0;
//             o[a[col]][value3] = 0;
//             o[a[col]][value4] = 0;
//             r.push(o[a[col]]);
//         }
//         o[a[col]][value1] += +a[value1];
//         o[a[col]][value2] += +a[value2];
//         o[a[col]][value3] += +a[value3];
//         o[a[col]][value4] += +a[value4];
//     });
//     return r;
// };

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

class cellVerticalAlign extends React.Component {
    render() {
        const style = {
            verticalAlign: "top",
        };

        const value = this.props.dataItem[this.props.field];

        return (
            <td style={style}>
                {value}
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
            <td style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} title={value}>
                {value}
            </td>
        );
    }
}

class AuditData extends GridDetailRow {
    constructor(props) {
        super(props);

        this.state = {
            sort: [
                { field: 'AuditDate', dir: 'asc' }
            ],
            tabIndex: 0,
        };
    }

    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });
    };

    render() {
        const dataItem = this.props.dataItem;
        let minor = [], major = [], critical = [];

        dataItem.Audits.forEach(function(el) {
            if (el.AuditAnswer === "No - Minor") {
                minor.push(el);
            }
            if (el.AuditAnswer === "No - Major") {
                major.push(el);
            }
            if (el.AuditAnswer === "No - Critical") {
                critical.push(el);
            }
        });

        return (
            <section>
                <Tabs value={this.state.tabIndex} fullWidth={true} color="white" onChange={this.handleTabChange}>
                    <Tab label='Minor'/>
                    <Tab label='Major'/>
                    <Tab label='Critical'/>
                </Tabs>

                {/* TAB 0 */}
                { this.state.tabIndex === 0 &&
                    <Paper>
                        <Grid
                            data={orderBy(minor, this.state.sort)}
                            resizable={true}
                            reorderable={true}
                            sortable
                            sort={this.state.sort}
                            onSortChange={(e) => {
                                this.setState({
                                    sort: e.sort
                                });
                            }}
                            style={{width: "100%", minHeight: "300px", padding: 0}}>
                            <Column field="AuditDate" title="Audit Date" type="date" cell={cellDate} />
                            <Column field="Question" title="Question" cell={cellVerticalAlign} />
                            <Column field="AuditDetail" title="Audit Detail"  cell={cellVerticalAlign}/>
                            <Column field="ReferenceNumber" title="Reference #"  cell={cellVerticalAlign}/>
                            <Column field="Suppliers" title="Suppliers" cell={cellVerticalAlign}/>
                            <Column field="Species" title="Species"  cell={cellVerticalAlign}/>
                        </Grid>
                    </Paper>
                }


                {/* TAB 1 */}
                { this.state.tabIndex === 1 &&
                    <Paper>
                        <Grid
                            data={major}
                            resizable={true}
                            reorderable={true}
                            sortable
                            sort={this.state.sort}
                            onSortChange={(e) => {
                                this.setState({
                                    sort: e.sort
                                });
                            }}
                            style={{width: "100%", minHeight: "300px"}}>
                            <Column field="AuditDate" title="Audit Date" type="date"  cell={cellDate} />
                            <Column field="Question" title="Question"  cell={cellVerticalAlign} />
                            <Column field="AuditDetail" title="Audit Detail"  cell={cellVerticalAlign}/>
                            <Column field="ReferenceNumber" title="Reference #" cell={cellVerticalAlign} />
                            <Column field="Suppliers" title="Suppliers"  cell={cellVerticalAlign}/>
                            <Column field="Species" title="Species" cell={cellVerticalAlign}/>
                        </Grid>
                    </Paper>
                }
                {/* TAB 2 */}
                { this.state.tabIndex === 2 &&
                    <Paper>
                        <Grid
                            data={critical}
                            resizable={true}
                            reorderable={true}
                            sortable
                            sort={this.state.sort}
                            onSortChange={(e) => {
                                this.setState({
                                    sort: e.sort
                                });
                            }}
                            style={{width: "100%", minHeight: "300px"}}>
                            <Column field="AuditDate" title="Audit Date" type="date" cell={cellDate} />
                            <Column field="Question" title="Question" cell={cellVerticalAlign}/>
                            <Column field="AuditDetail" title="Audit Detail" cell={cellVerticalAlign}/>
                            <Column field="ReferenceNumber" title="Reference #"  cell={cellVerticalAlign}/>
                            <Column field="Suppliers" title="Suppliers" cell={cellVerticalAlign}/>
                            <Column field="Species" title="Species"  cell={cellVerticalAlign}/>
                        </Grid>
                    </Paper>
                }
            </section>
        );
    }
}



class Nonconformities extends React.Component {
    constructor(props) {
        super(props);

        this.gridRef = React.createRef();

        this.state = {
            data: nonconf.slice(0,10),
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
            data: nonconf.slice(event.page.skip, event.page.skip + event.page.take),
            skip: event.page.skip
        })
    }


    render() {

        const { classes } = this.props;
        // let temp = [];
        // let newData = [];
        // let plantData = [];
        // let farmData = [];
        // let hatcheryData = [];
        // let feedmillData = [];
        //
        //
        // let lastID = null;
        // let lastObj = [];
        //
        // let minor = 0;
        // let major = 0;
        // let critical = 0;
        // let total = 0;
        //
        // nonconformitiesData.forEach(function(el) {
        //     if (lastID === null)
        //         lastID = el.BAPNumber;
        //
        //     let thisID = el.BAPNumber;
        //
        //     if (thisID === lastID){
        //         el.Minor = (el.AuditAnswer === "No - Minor") ? 1 : 0;
        //         el.Major = (el.AuditAnswer === "No - Major") ? 1 : 0;
        //         el.Critical = (el.AuditAnswer === "No - Critical") ? 1 : 0;
        //
        //         total = (el.Minor + el.Major + el.Critical);
        //         el.Total = total;
        //
        //         el.BAPID = el.BAPNumber;
        //
        //         temp.push(el);
        //     }
        //     else {
        //         lastID = thisID;
        //     }
        //
        // });
        //
        // const reduced = groupByBAPID(temp, 'BAPID', 'Minor', 'Major', 'Critical', 'Total');
        //
        // const mergeArray = (source, merge, by) => source.map(item => ({
        //     ...item,
        //     ...(merge.find(i => i[by] === item[by]) || {}),
        // }));
        //
        // plantData = mergeArray(reduced, geoData, 'BAPID');
        //
        // //``console.log(reduced);
        //
        // plantData.forEach(function(e) {
        //     console.log(e.BAPID + ',' + e.Name + ',' + e.Country + ',' + e.Minor + ',' + e.Major + ',' + e.Critical + ',' + e.Total);
        // });



        return (
            <div ref={this.gridRef}>
                <Grid
                    data={this.state.data}
                    detail={AuditData}
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
                    style={{ height: 'calc(100vh - 220px' }}
                    expandField="expanded"
                    onExpandChange={this.expandChange}
                    >
                        <Column field="BAPID" title="BAP ID" width="110px" filterable={true}  />
                        <Column field="Name" title="Facility Name" minResizableWidth={150} width="250px" cell={cellEllipsis} />
                        <Column field="Country" title="Country" width="120px" cell={cellEllipsis}/>
                        <Column field="Minor" type="number" title={
                            <span>
                                <span className={classes.yellowCircle} ><i className={"fa fa-md fa-circle"} /></span>
                                Minor
                            </span>
                        }
                            cell={cellIntegerRight}/>
                        <Column field="Major"  type="number" title=
                            {
                                <span>
                                    <span className={classes.orangeCircle} ><i className={"fa fa-md fa-circle"} /></span>
                                    Major
                                </span>
                            }
                            cell={cellIntegerRight}/>
                        <Column field="Critical" type="number"
                            title=
                            {
                                <span>
                                    <span className={classes.redCircle} ><i className={"fa fa-md fa-circle"} /></span>
                                    Critical
                                </span>
                            }
                            cell={cellIntegerRight} />
                        <Column field="Total"  type="number" title=
                            {
                                <span>
                                    <span className={classes.grayCircle} ><i className={"fa fa-md fa-circle"} /></span>
                                    Total
                                </span>
                            }
                            cell={cellIntegerRight} />
                    </Grid>
                </div>
            );
        }
    }

export default withStyles(nonConformitiesGrid)(Nonconformities);
