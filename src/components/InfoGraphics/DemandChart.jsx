import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";


class DemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        const data = [
            {name: '2016', shipped: 28872.39, projected: null, production: null},
            {name: '2017', shipped: 30010.33, projected: 24907.73, production: 96104.01},
            {name: '2018', shipped: null, projected: null, production: 90207},
        ];

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>Demand versus capacity</h4>
                    </CardActions>

                    <ResponsiveContainer height={300} aspect={4.0/1.5}>
                        <BarChart data={data} margin={{top: 50, right: 10, left: 20, bottom: 0}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend align="right" verticalAlign="middle" layout="vertical"/>
                            <Bar dataKey="projected" name="Demand" fill="#8AA2C8" />
                            <Bar dataKey="shipped" name="Shipped" fill="#02419A" />
                            <Bar dataKey="production" name="Production" fill="#4C8623" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
        </div>
    );
}
}



export default withStyles(infoGraphicStyle)(DemandChart);
