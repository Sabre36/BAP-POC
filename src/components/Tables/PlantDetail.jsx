import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridDetailRow } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';

import products from './products.json';
import plantData from './../../assets/data/plantData.json';

class DetailComponent extends GridDetailRow {
    render() {
        const dataItem = this.props.dataItem;
        return (
            <section>
                <p><strong>In Stock:</strong> {dataItem.UnitsInStock} units</p>
                <p><strong>On Order:</strong> {dataItem.UnitsOnOrder} units</p>
                <p><strong>Reorder Level:</strong> {dataItem.ReorderLevel} units</p>
                <p><strong>Discontinued:</strong> {dataItem.Discontinued}</p>
                <p><strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}</p>
            </section>
        );
    }
}

class PlantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: products.slice(0,10),
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
        data: products.slice(event.page.skip, event.page.skip + event.page.take),
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
                total={products.length}
                skip={this.state.skip}
                pageable={true}
                pageSize={15}
                style={{ height: 'calc(100vh - 220px' }}
                expandField="expanded"
                onExpandChange={this.expandChange}
            >
                <Column field="ProductName" title="Product" width="300px" />
                <Column field="ProductID" title="ID" width="50px" />
                <Column field="UnitPrice" title="Unit Price" width="100px" />
                <Column field="QuantityPerUnit" title="Qty Per Unit" />
            </Grid>
        );
    }
}

export default PlantDetail;
