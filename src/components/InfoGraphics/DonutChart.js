import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, Sector } from 'recharts';
//import Dimensions from 'react-dimensions';

const renderActiveShape = ({ cx, cy, innerRadius, startAngle, endAngle, fill, payload, percent }) => {

  let
    innerRadiusPadding = cx < 100 ? 8 : 24,
    outerRadiusPadding = cx < 100 ? 6 : 20,
    radiusPadding = cx < 100 ? 20 : 80,
    fontHeight1 = cx < 100 ? 14 : 22,
    fontHeight2 = cx < 100 ? 11 : 20,
    fontDY1 = cx < 100 ? 2 : 0,
    fontDY2 = cx < 100 ? 20 : 28;

  return (
    <g>
      <text x={cx} y={cy} dy={fontDY1} textAnchor="middle" fontSize={fontHeight1} fill={fill}>{payload.name}</text>
      <text x={cx} y={cy} dy={fontDY2} textAnchor="middle" fontSize={fontHeight1} fill={fill}>
        {`${payload.value} (${(percent * 100).toFixed(1)}%)`}
      </text>
      {
        ({ radius }) => (
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={radius}
            fill={fill}
          />
        )
      }

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - innerRadiusPadding}
        outerRadius={innerRadius - outerRadiusPadding}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius}
        outerRadius={innerRadius + radiusPadding}
        fill={fill}
      />

    </g>
  );
};

class DonutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };

    this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render () {
    const
      ht = this.props.containerHeight,
      wi = this.props.containerWidth,
      thickness = ht/11,
      radius = ht/2 - thickness,
      cyOffset = this.props/9,
      COLORS = ["#164250", "#255869", "#487483", "#487483", "#006666"],
      wrapperStyle = {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      };

    return (
      <div style={wrapperStyle}>
        <PieChart
          width={radius*2}
          height={ht}
          onMouseEnter={this.onPieEnter} >

          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.props.data}
            cx={radius}
            cy={radius+cyOffset}
            innerRadius={radius-thickness}
            outerRadius={radius}>
          {
            this.props.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
        </PieChart>
      </div>
    );
  }
}

DonutChart.propTypes = {
  data: PropTypes.array,
  height: PropTypes.number,
};

export default DonutChart;
