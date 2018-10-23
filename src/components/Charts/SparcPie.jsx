import React from "react";
const { PieChart, Pie, Sector, Cell } = Recharts;

const data = [{name: 'Group A', value: 75}, {name: 'Group B', value: 25}];

const COLORS = ['darkgreen', 'transparent'];

const Pie75 = React.createClass({
	render () {
  	return (
    	<PieChart width={32} height={32}>
        <Pie
          data={data} labelLine={false} label={false}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
})

export default Pie75;
