import React from "react";
import Tree from "react-d3-tree";

const debugData = [
    {
            name: "Kroger",
            children: [
                { name: "America's Catch-Supplier"},
                {
                    name: "Aquachile-Supplier",
                    children: [
                        {
                            name: 'P30100',
                            _collapsed: true,
                            children: [
                                { name: 'F20112'},
                                { name: 'F20113'},
                                { name: 'F20114'},
                                { name: 'F20115'},
                            ]
                        }
                    ]
                },
                {
                    name: "Aquastar",
                    children: [
                        {
                            name: 'P10001',
                            _collapsed: true,
                            children: [
                                { name: 'F20112'},
                                { name: 'F20113'},
                                { name: 'F20114'},
                                { name: 'F20115'},
                            ]
                        },
                        { name: 'P20002'}
                    ]
                }
            ]
        }

];

const containerStyles = {
    width: '100%',
    minWidth: '2000px',
    height: '100vh',
}

export default class CenteredTree extends React.PureComponent {
    state = {}

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            }
        });
    }

    render() {
        return (
            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                <Tree
                    data={debugData}
                    translate={this.state.translate}
                    orientation={'vertical'}
                    />
            </div>
        );
    }
}
