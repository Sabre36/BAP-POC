import React from "react";
import { Tree, treeUtil } from 'react-d3-tree';
//import Tree from 'react-d3-tree';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import aboutBAPStyle from "assets/jss/site-styles/views/landingPageSections/aboutBAPStyle.jsx";
import guidGenerator from './../Helpers/guidGenerator.jsx';
import CenteredTree from "components/Charts/CenteredTree.jsx";
import ReactSankey from 'react-sankey';

//import SankeyChart from "components/SankeyChart/SankeyChxart.jsx";

//import sankeyData from "assets/data/sankey.json";

//const csvSource = 'assets/data/testdata.csv';

class SupplyChain extends React.Component {
    constructor() {
        super();

        this.state = {
            data: null
        };
    }

    componentWillMount() {
        // treeUtil.parseCSV(csvSource)
        // .then((data) => {
        //     this.setState({ data })
        // })
        // .catch((err) => console.error(err));
    }

    render() {
        const { classes } = this.props;

        const styles = {
            fontFamily: 'Roboto',
            fontSize: '14px',
            textAlign: 'center',
        };


        const chartConfig = {
            padding: { top: 5, right: 0, bottom: 10, left: 0 },
            node: {
                width: 175,
                maxHeight: 200,
                minHeight: 100,
                rectMinHeight: 30,
                paddingBottom: 10,
            },
            link: {
                width: 100
            }
        };


        const createNode = (title, value, id) => ({ title, value, id });
        const createLink = (sourceId, targetId) => ({ sourceId, targetId });

        // const nodes = {
        //     0: {
        //         title: 'Col 1',
        //         value: 20,
        //         id: '0'
        //     },
        //     1: {
        //         title: 'Col 2.1',
        //         value: 10,
        //         id: '1'
        //     },
        //     2: {
        //         title: 'Col 2.2',
        //         value: 15,
        //         id: '2'
        //     },
        //     3: {
        //         title: 'Col 3.1',
        //         value: 5,
        //         id: '3'
        //     },
        //     4: {
        //         title: 'Col 3.2',
        //         value: 5,
        //         id: '4'
        //     }
        // };
        //
        // const links = [
        //     { sourceId: 0, targetId: 1 },
        //     { sourceId: 0, targetId: 2 },
        //     { sourceId: 1, targetId: 3 },
        //     { sourceId: 2, targetId: 3 },
        //     { sourceId: 2, targetId: 4 },
        // ];


        const nodes = {
            '0':  createNode('Kroger', 900, 0),
            '1':  createNode('Aquastar', 300, 1),
            '2':  createNode('America\'s Catch-Supplier', 200, 2),
            '3':  createNode('Blue Sea Products LLC', 400, 3),

            '100':  createNode('P10001', 100, 100),
            '101':  createNode('P10002', 150, 101),
            '102':  createNode('P10003', 50, 102),
            '103':  createNode('P10004', 100, 103),
            '104':  createNode('P10005', 150, 104),
            '105':  createNode('P10006', 50, 105),

            '200':  createNode('F10001', 50, 200),
            '201':  createNode('F10002', 25, 201),
            '202':  createNode('F10003', 10, 202),
            '203':  createNode('F10004', 14, 203),
            '204':  createNode('F10005', 10, 204)
        };

        const links = [
            createLink(0, 1), createLink(0, 2), createLink(0, 3),

            createLink(1,100), createLink(1,101), createLink(1,103),

            createLink(2, 102), createLink(2, 103),

            createLink(3, 104),

            createLink(100, 200), createLink(100,201),

            createLink(101, 202), createLink(101, 203),

            createLink(102, 201), createLink(102, 203), createLink(102,204)

        ];



        console.log(JSON.stringify(this.state.data));

        return (
            <div className={classes.section}>
                <GridContainer  style={{minHeight: "100vh"}}>
                    <GridItem xs={12} sm={12} md={6}>
                        <h2 className={classes.title}>
                            Supply chain
                        </h2>
                        <h4 className={classes.description}>

                            <div>
                                <style dangerouslySetInnerHTML={{__html: `
                                        .custom-arrow-class {
                                            stroke: #ccc;
                                            stroke-width: 1px
                                        }
                                        .custom-link-class {
                                            fill: url(#custom-linear-gradient);
                                        }
                                        `}}
                                        />
                                    <ReactSankey
                                        rootID={0}
                                        nodes={nodes}
                                        links={links}
                                        hasArrows={false}
                                        arrowClass="custom-arrow-class"
                                        linkClass="custom-link-class"
                                        chartConfig={chartConfig}

                                        customNode={(chartConfig, node) => {
                                            return (
                                                <g
                                                    key={node.id}
                                                    transform={`translate(${node.x},${node.y})`}>
                                                    <rect
                                                        height={node.height}
                                                        width={chartConfig.node.width}
                                                        style={{ stroke: 'rgba(0,0,0,.3)', fill: '#EEEFF1', strokeWidth: '1px' }} />

                                                        { node.height >= 40 &&
                                                            <text
                                                                x={chartConfig.node.width / 2}
                                                                y={node.height / 2 - 10}
                                                                style={{ fontSize: '14px', fontFamily: 'Roboto', fill: 'rgba(0,0,0,.86)', textAnchor: 'middle', alignmentBaseline: 'central' }}>
                                                                {`${node.title}`}
                                                            </text>
                                                        }
                                                        { node.height >= 40 &&
                                                            <text
                                                                x={chartConfig.node.width / 2}
                                                                y={node.height / 2 + 10}
                                                                style={{ fontSize: '12px', fontFamily: 'Roboto', fill: 'rgba(0,0,0,.86)', textAnchor: 'middle', alignmentBaseline: 'central' }}>
                                                                {`${node.value} MT`}
                                                            </text>
                                                        }
                                                        { node.height < 40 &&
                                                            <text
                                                                x={chartConfig.node.width / 2}
                                                                y={node.height / 2}
                                                                style={{ fontSize: '13px', fontFamily: 'Roboto', fill: 'rgba(0,0,0,.86)', textAnchor: 'middle', alignmentBaseline: 'central' }}>
                                                                {` ${node.title} (${node.value} MT)`}
                                                            </text>
                                                        }
                                                </g>
                                            )
                                        }}
                                        />
                                    <svg width={0} height={0}>
                                        <linearGradient id="custom-linear-gradient">
                                            <stop offset="0%" stopColor="rgba(21,123,220,.3)" />
                                            <stop offset="100%" stopColor="rgba(101,177,47,.3)" />
                                        </linearGradient>
                                    </svg>
                                </div>




                                </h4>
                            </GridItem>
                        </GridContainer>
                    </div>
                );
            }
        }

        export default withStyles(aboutBAPStyle)(SupplyChain);
