import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import SankeyHelper from './SankeyHelper.jsx';
import Dimensions from 'react-dimensions';

class SankeyChart extends React.Component {
    constructor(props) {
        super(props);

        this.diagram = SankeyHelper.createDiagram(this.props.graph);
        this.units = 'Widgets';
        this.margin = {
            top: 10,
            right: 20,
            bottom: 10,
            left: 20,
        };

        this.state = {
            ...this.getWidthAndHeight()
        };
    }

    getWidthAndHeight = () => {
        return {
            width: this.props.containerWidth - this.margin.left - this.margin.right,
            height: window.innerHeight * 0.80 - this.margin.top - this.margin.bottom
        }
    };

    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate() {
        this.drawChart();
    }

    componentWillReceiveProps() {
        this.setState(this.getWidthAndHeight());
    }

    render() {
        return (
            <div id="topology"/>
        );
    }

    drawChart() {
        d3.selectAll('svg').remove();

        // Append the svg canvas to the page
        const { diagram, margin } = this;
        const { width, height } = this.state;
        const SIDEBAR = 400;

        // Set the sankey diagram properties
        diagram
        .nodeWidth(20)
        .nodePadding(25)
        .size([width-SIDEBAR, height])
        .layout();

        const svg = d3.select('#topology').append('svg:svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

        const path = d3.svg.diagonal()
        .source((d) => ({
            x: d.source.y + d.source.dy / 2,
            y: d.source.x + diagram.nodeWidth() / 2,
        }))
        .target((d) => ({
            x: d.target.y + d.target.dy / 2,
            y: d.target.x + diagram.nodeWidth() / 2,
        }))
        .projection((d) => [d.y, d.x]);

        this.addLinks(svg, path);
        this.addNodes(svg, path);
    };

    addLinks = (svg, path) => {
        return svg.append('g').selectAll('.link')
        .data(this.diagram.links())
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', path)
        .style('fill', 'none')
        .style('stroke', 'tan')
        .style('stroke-opacity', '.33')
        .on('mouseover', function () {
            d3.select(this).style('stroke-opacity', '.5');
        })
        .on('mouseout', function () {
            d3.select(this).style('stroke-opacity', '.2');
        })
        .style('stroke-width', (d) => Math.max(1, Math.sqrt(d.dy)))
        .sort((a, b) => b.dy - a.dy)
        .append('title')
        .text((d) => `${d.source.name} → ${d.target.name}\n${this.textFormat(d.value)}`);
    };

    textFormat = (d) => `${d3.format(',.0f')(d)} ${this.units}`; // zero decimal places

    addNodes = (svg) => {
        const nodeWidth = this.diagram.nodeWidth();
        const diagramWidth = this.state.width;
        const node = svg.append('g').selectAll('.node')
        .data(this.diagram.nodes())
        .enter().append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${d.x},${d.y})`);
        // .call(d3.behavior.drag()
        // .origin((d) => d)
        // .on('dragstart', function () {
        //   this.parentNode.appendChild(this);
        // })
        // .on('drag', this.dragmove));

        // add the circles for the nodes
        node.append('circle')
        .attr('cx', nodeWidth / 2)
        .attr('cy', (d) => d.dy / 2)
        .attr('r', (d) => Math.sqrt(d.dy))
        // .style('fill', (d) => d.color = color(d.name.replace(/ .*/, "")))
        .style('fill', (d) => d.color)

        .style('fill-opacity', '.8')
        .style('shape-rendering', 'auto' /*crispEdges*/)
        .style('stroke', (d) => d3.rgb(d.color).darker(2))
        .append('title')
        .text((d) => `${d.name}\n${this.textFormat(d.value)}`);

        // add in the title for the nodes
        node.append('text')
        .attr('x', (d) => -6 + nodeWidth / 2 - Math.sqrt(d.dy))
        .attr('y', (d) => d.dy / 2)
        .attr('dy', '.35em')
        .attr('text-anchor', 'end')
        .attr('text-shadow', '0 1px 0 #fff')
        .attr('font-size', 14)
        .style('font-family', 'Open Sans')
        .style('font-weight', (d) => d.id === this.props.graph.sourceId ? '800' : '400')
        .attr('transform', null)
        .text((d) => d.name)
        .filter((d) => d.x < diagramWidth / 2)
        .attr('x', (d) => 6 + nodeWidth / 2 + Math.sqrt(d.dy))
        .attr('text-anchor', 'start');
    };

    // dragMove = (d) => {
    //   d3.select(this).attr('transform',
    //     `translate(${
    //       d.x = Math.max(0, Math.min(this.width - d.dx, d3.event.x))},${
    //       d.y = Math.max(0, Math.min(this.height - d.dy, d3.event.y))})`);
    //   this.diagram.relayout();
    //   link.attr('d', path);
    // };
}

SankeyChart.propTypes = {
    title: PropTypes.string,
    graph: PropTypes.shape({
        sourceId: PropTypes.string,
        nodes: PropTypes.array.isRequired,
        links: PropTypes.array.isRequired
    }).isRequired,
};

export default Dimensions()(SankeyChart);
