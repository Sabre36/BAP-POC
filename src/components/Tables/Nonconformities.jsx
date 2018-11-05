import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

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
import nonConformitiesGrid from "assets/jss/site-styles/components/nonConformitiesGrid.jsx";


import nonconf from './../../assets/data/Kroger/nonconf.json';

import nonconformitiesData from './../../assets/data/Kroger/non_conformities.json';
import geoData from "assets/data/all_geo.json";
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

// function groupBy(list, keyGetter) {
//     const map = new Map();
//     list.forEach((item) => {
//         const key = keyGetter(item);
//         const collection = map.get(key);
//         if (!collection) {
//             map.set(key, [item]);
//         } else {
//             collection.push(item);
//         }
//     });
//     return map;
// }

function groupByBAPID(array, col, value1, value2, value3, value4) {
    var r = [], o = {};
    array.forEach(function (a) {
        if (!o[a[col]]) {
            o[a[col]] = {};
            o[a[col]][col] = a[col];
            o[a[col]][value1] = 0;
            o[a[col]][value2] = 0;
            o[a[col]][value3] = 0;
            o[a[col]][value4] = 0;
            r.push(o[a[col]]);
        }
        o[a[col]][value1] += +a[value1];
        o[a[col]][value2] += +a[value2];
        o[a[col]][value3] += +a[value3];
        o[a[col]][value4] += +a[value4];
    });
    return r;
};


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

class AuditData extends GridDetailRow {
    state = {
        tabIndex: 0,
    }

    handleTabChange = (event, value) => {
        this.setState({ tabIndex: value });

    };


    render() {
        const { classes } = this.props;
        const dataItem = this.props.dataItem;

        const minor = [], major = [], critical = [];

        dataItem.Audits.forEach(function(el) {
            if (el.AuditAnswer === "No - Minor")
                minor.push(el);
            if (el.AuditAnswer === "No - Major")
                major.push(el);
            if (el.AuditAnswer === "No - Critical")
                critical.push(el);
        });

        const styles = {
            rowAlign: {
                verticalAlign: 'top'
            }
        }

        console.log("auditdata detail");

        return (

            <section>
                <Tabs value={this.state.tabIndex} fullWidth={true} color="white" onChange={this.handleTabChange}>
                    <Tab label='Minor'/>
                    <Tab label='Major'/>
                    <Tab label='Critical'/>
                </Tabs>

                {/* TAB 1 */}
                { this.state.tabIndex === 0 &&
                    <Paper>
                        <Grid data={minor} sortable={true} style={{width: "100%"}}>
                            <Column field="AuditDate" title="Audit Date" type="date" format="{0:MM dd, yyyy}" width="130px"  />
                            <Column field="Question" title="Question" width="400px"  />
                            <Column field="AuditDetail" title="Audit Detail" width="400px" />
                            <Column field="ReferenceNumber" title="Reference #" width="130px"  />
                            <Column field="Suppliers" title="Suppliers" width="250px" />
                            <Column field="Species" title="Species" width="130px"/>
                        </Grid>
                        {/* <Table >
                            <TableHead>
                                <TableRow>
                                    <TableCell date>Audit Date</TableCell>
                                    <TableCell>Question</TableCell>
                                    <TableCell>Audit Detail</TableCell>
                                    <TableCell>Reference #</TableCell>
                                    <TableCell>Suppliers</TableCell>
                                    <TableCell>Species</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                { dataItem.Audits.map((item) =>
                                    <TableRow hover={true}>
                                        <TableCell date style={styles.rowAlign}>{item.AuditDate}</TableCell>
                                        <TableCell style={styles.rowAlign}>{item.Question}</TableCell>
                                        <TableCell style={styles.rowAlign}>{item.AuditDetail}</TableCell>
                                        <TableCell style={styles.rowAlign}>{item.ReferenceNumber}</TableCell>
                                        <TableCell style={styles.rowAlign}>{item.Suppliers}</TableCell>
                                        <TableCell style={styles.rowAlign}>{item.Species}</TableCell>
                                    </TableRow>
                                ) }
                            </TableBody>
                        </Table> */}
                    </Paper>
                }


                {/* TAB 1 */}
                { this.state.tabIndex === 1 &&
                    <Paper>
                        <Grid data={major} sortable={true} style={{width: "100%"}}>
                            <Column field="AuditDate" title="Audit Date" type="date" format="{0:MM dd, yyyy}" width="130px"  />
                            <Column field="Question" title="Question" width="400px"  />
                            <Column field="AuditDetail" title="Audit Detail" width="400px" />
                            <Column field="ReferenceNumber" title="Reference #" width="130px"  />
                            <Column field="Suppliers" title="Suppliers" width="250px" />
                            <Column field="Species" title="Species" width="130px"/>
                        </Grid>
                    </Paper>
                }
                {/* TAB 2 */}
                { this.state.tabIndex === 2 &&
                    <Paper>
                        <Grid data={critical} sortable={true} style={{width: "100%"}}>
                            <Column field="AuditDate" title="Audit Date" type="date" format="{0:MM dd, yyyy}" width="130px"  />
                            <Column field="Question" title="Question" width="400px"  />
                            <Column field="AuditDetail" title="Audit Detail" width="400px" />
                            <Column field="ReferenceNumber" title="Reference #" width="130px"  />
                            <Column field="Suppliers" title="Suppliers" width="250px" />
                            <Column field="Species" title="Species" width="130px"/>
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
