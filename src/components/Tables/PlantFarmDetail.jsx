import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { orderBy } from '@progress/kendo-data-query';

import products from './products.json';
import plantData from './../../assets/data/plantData.json';

function round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

function formatNum(value, decimals) {
    let n = round(value, decimals);
    let newValue = isNaN(n) ? '-' : n;

    return newValue;
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
            <td style={{ color: value > 0 ? '#37611A' : '#ab0520', textAlign: 'right' , fontWeight: 400}}>
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
                    <Tab label='Farm detail'> </Tab>
                    <Tab label='Plant Recap'/>
                    <Tab label='Risk'/>
                </Tabs>

                { this.state.tabIndex === 0 &&
                    <div>
                    { dataItem.FarmData.map((item) =>
                        <p><strong style={{marginRight: "8px"}}>{item.BAPId}:</strong> {item.Name}, {item.Country}</p>
                    ) }
                    </div>
                }

                { this.state.tabIndex === 1 &&
                    <div>
                        <p><strong>2017 - Total Production:</strong> {dataItem.TotalProduction} MT</p>
                        <p><strong>2016 - Production (2 Star):</strong> {dataItem.Production2Star} MT</p>
                        <p><strong>2016 - Shipped:</strong> {dataItem.Shipped2016} MT</p>
                        <p><strong>2017 - Projected:</strong> {dataItem.Projected2017} MT</p>
                        <p><strong>2017 - Shipped:</strong> {dataItem.Shipped2017} MT</p>
                    </div>
                }

                { this.state.tabIndex === 2 &&
                    <div>
                        there
                    </div>

                }


            </section>
        );
    }
}

class PlantFarmDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: plantData.slice(0,10),
            sort: [],
            skip: 0,
        };
        this.expandChange = this.expandChange.bind(this);
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
                <Column field="BAPId" title="BAP ID" minResizableWidth="110px" width="110px" filterable={true}  />
                <Column field="Name" title="Plant Name" minResizableWidth="200px" width="400px" />
                <Column field="Country" title="Country"  />
                <Column field="Farms" title="# Farms" type="number" width="100px" cell={cellIntegerRight}/>
                <Column field="TotalProduction" title="Total Production" width="140px" type="number" cell={cellFloatRight}/>
                <Column field="Projected2017" title="Total Projected" type="number" width="140px" cell={cellFloatRight} />
                <Column field="Delta" title="Risk" type="number" width="140px" cell={cellFloatRightColorize}  />

                {/* <Column field="Production2Star" title="2 Star Production" format="{0:n01}" cell={cellWithBackGround}/>
                <Column field="Shipped2016" title="2016 Shipped" format="{0:n01}" cell={cellWithBackGround}/>
                <Column field="Shipped2017" title="2017 Shipped" format="{0:n01}" cell={cellWithBackGround} /> */}
            </Grid>
        );
    }
}

export default PlantFarmDetail;
