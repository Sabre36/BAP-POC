import React from "react";
import react2tree from 'react2tree';
import TreeChart from './components/TreeChart';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";

class SupplyChain extends React.Component {
    render() {
        const { classes } = this.props;


        import { tree } from 'd3-state-visualizer';

        const appState = {
          todoStore: {
            todos: [
              { title: 'd3'},
              { title: 'state' },
              { title: 'visualizer' },
              { title: 'tree' }
            ],
            completedCount: 1
          }
        };

        const render = tree(document.getElementById('root'), {
          state: appState,
          id: 'treeExample',
          size: 1000,
          aspectRatio: 0.5,
          isSorted: false,
          widthBetweenNodesCoeff: 1.5,
          heightBetweenNodesCoeff: 2,
          style: {border: '1px solid black'},
          tooltipOptions: {offset: {left: 30, top: 10}, indentationSize: 2}
        });

render();

        return (
            <div className={classes.section}>
                <GridContainer  style={{minHeight: "100vh"}}>
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>Supply chain</h2>
                        <h4 className={classes.description}>

                        <render/>

                        </h4>
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(aboutBAPStyle)(SupplyChain);
