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

                <p><strong>Number of Farms:</strong> {dataItem.Farms.length}</p>
                <p><strong>Farms:</strong> {dataItem.Farms}</p>
                <p><strong>2016 - Production (2 Star):</strong> {dataItem.Production2Star} (m/t)</p>
                <p><strong>2016 - Shipped:</strong> {dataItem.Shipped2016} (m/t)</p>
                <p><strong>2017 - Projected:</strong> {dataItem.Projected2017} (m/t)</p>
                <p><strong>2017 - Shipped:</strong> {dataItem.Shipped2017} {dataItem.Shipped2017 > 0 && <span>(m/t)</span> }</p>
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
                <Column field="BAPId" title="BAP ID" />
                <Column field="Name" title="Plant Name" width="300px" />
                <Column field="Country" title="Country"  />
                <Column field="Production2Star" title="2 Star Production" />
                <Column field="Shipped2016" title="2016 Shipped" />
                <Column field="Projected2017" title="2017 Projected" />
                <Column field="Shipped2017" title="2017 Shipped" />
            </Grid>
        );
    }
}

export default PlantFarmDetail;
