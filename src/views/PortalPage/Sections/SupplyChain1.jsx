import React from "react";
//import { Tree, treeUtil } from 'react-d3-tree';

import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Chart from "components/Charts/FauxChart.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";


class SupplyChain extends React.Component {
    constructor () {
        super()
        this.state = {
          dataArray0: [30, 35, 45, 55, 70],
          dataArray1: [50, 55, 45, 35, 20, 25, 25, 40],
          dataIndex: 1
        }

        //this.changeData = this.changeData.bind(this)
      }

    render() {
        return (
            <div style={{height: '100vh', width: '100%', paddingBottom: '40px'}}>
            <h2>test></h2>

            <Chart
              data={this.state['dataArray' + this.state.dataIndex]}
              title={'dataset ' + this.state.dataIndex}
            />
            </div>

        );
    }
}



export default withStyles(aboutBAPStyle)(SupplyChain);
