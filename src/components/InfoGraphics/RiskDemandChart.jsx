import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text, Cell, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";


Array.prototype.sortBy = function(key_func, reverse=false){
    return this.sort( (a, b) => ( key_func(b) - key_func(a) ) * (reverse ? 1 : -1) )
}

class RiskDemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        const data = [
            {name: 'C.P Foods', ships: 3, total: 2},
            {name: 'Sunnyvale', ships: 4, total: 1,},
            {name: 'Beaver Street', ships: 1, total: 4},
            {name: 'Aquastar', ships: 4, total: 1},
            {name: 'The Fishin Company', ships: 2, total: 3,},
            {name: 'Chicken of the Sea', ships: 3, total: 2},
            {name: 'XYZ', ships: 1, total: 4},
        ];

        data.sortBy(el => el.ships, true);

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>Risk - Shippments meeting demand </h4>
                    </CardActions>

                    <span>
                        <label className={classes.riskLabelLowest}>LOWEST</label>
                        <label className={classes.riskLabelHighest}>HIGHEST</label>
                    </span>

                    <div className={classes.riskBarsContainer} >
                        <ResponsiveContainer width="130%" height={300}>
                            <BarChart
                                data={data}
                                layout="vertical"
                                margin={{top: 20, right: 30, left: 20, bottom: 5}}>

                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" width={200} />

                                <Bar dataKey="ships" stackId="a" fill="#ab0520">
                                    {data.map((entry, index) => (
                                        <Cell fill={entry.ships < 2 ? '#37611A' : entry.ships < 3 ? '#FFCC03'  : '#ab0520' }/>
                                    ))}
                                </Bar>
                                <Bar dataKey="total" stackId="a" fill="rgba(0,0,0,.1)" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
            </div>
    );
}
}



export default withStyles(infoGraphicStyle)(RiskDemandChart);
