import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { PieChart, Pie, Sector, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import MUITooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";



const data01 = [
	{name: 'Group A', value: 400, fill: '#8884d8',},
	{name: 'Group B', value: 300, fill: '#9cacf1',},
 	{name: 'Group C', value: 300, fill: '#8dd1e1'},
  {name: 'Group D', value: 200, fill: '#82ca9d'},
  {name: 'Group E', value: 278, fill: '#a4de6c'},
  {name: 'Group F', value: 189, fill: '#d0ed57'},
];

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

const colors = ['red', 'green', 'purple', 'blue', 'black', 'silver']

class ProductionChart extends React.Component {
	render () {
  	return (
    <ResponsiveContainer>
    	<PieChart width={700} height={300}>
        <Pie data={data02} cx="50%" cy="50%" outerRadius={50} label>
          {
            data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>
        <Legend verticalAlign="bottom" height={36}/>
        <Tooltip/>
       </PieChart>
    </ResponsiveContainer>
);
}
}

export default ProductionChart;
