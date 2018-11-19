import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Dimensions from 'react-dimensions';

const topPad = -100;
const bottomPad = 115;

class RadialGauge extends React.Component {

  componentDidMount() {
    this.drawArc();
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  drawArc() {
    const context = this.setContext();

    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
    this.drawText(context);
    this.drawTitle(context);
    this.drawFooter(context);
  }

  redrawArc() {
    const context = d3.select(`#${this.props.id}`);
    context.remove();
    this.drawArc();
  }

  arcTween(transition, newAngle, arc) {
    transition.attrTween('d', (d) => {
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc = d;
      return (t) => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      };
    });
  }

  drawTitle(context) {
    return context.append('text')
      .attr("x", topPad)
      .attr("y", topPad)
      .attr("text-anchor", "left")
      .attr("font-size", 15)
      .style("font-family", "Open Sans")
      .style("opacity", .4)
      .text( this.props.title );
  }

  drawFooter(context) {
    return context.append('text')
      .attr("y", bottomPad)
      .attr("text-anchor", "middle")
      .attr("font-size", 15)
      .attr("fill", "black")
      .style("font-family", "Open Sans")
      .style("font-weight", "700")
      .style("text-transform", "uppercase")
      .style("opacity", .55)
      .text( this.props.footer );
  }

  drawText(context) {
    return context.append('text')
      .attr("dy", 15)
      .attr("font-size", 42)
      .attr("text-anchor", "middle")
      .text( this.props.value );
  }

  updatePercent(context) {
    return this.setForeground(context).transition()
      .duration(this.props.duration)
      .call(this.arcTween, this.tau * this.props.percentComplete, this.arc());
  }


  setForeground(context) {
    return context.append('path')
      .datum({ endAngle: 0 }) // <- (instead of tau * our percentage)
      .style('fill', this.props.foregroundColor)
      .attr('d', this.arc());
  }

  setBackground(context) {
    return context.append('path')
      .datum({ endAngle: this.tau })
      .style('fill', this.props.backgroundColor)
      .attr('d', this.arc());
  }

  tau = Math.PI * 2;

  arc() {
    return d3.svg.arc()
      .innerRadius(this.props.innerRadius)
      .outerRadius(this.props.outerRadius)
      .startAngle(0)
  }

  setContext() {
    return d3.select(this.refs.arc).append('svg')
      .attr('height', this.props.containerHeight+30)
      .attr('width', this.props.containerWidth+30)
      .attr('id', this.props.id)
      .append('g')
      .attr('transform', 'translate(' + this.props.containerWidth/2 +',' + this.props.containerHeight/2 +')');
  }

  render() {
    return (
      <div ref="arc" />
    )
  }
}

RadialGauge.propTypes = {
  id: PropTypes.string,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  percentComplete: PropTypes.number,
  value: PropTypes.string
};

export default Dimensions()(RadialGauge);
//export default RadialGauge;
