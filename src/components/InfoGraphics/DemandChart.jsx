import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import MUITooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MenuIcon from '@material-ui/icons/Menu';
import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";


const tooltipTitle = () => {
    return (
        <Typography>
            <strong>Demand</strong>, or <emphasis> projected</emphasis> volume, is compared to <strong>actual</strong> shipments and <strong>production</strong> (from audit data).
        </Typography>
    );
};

class DemandChart extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        const data = [
            //{name: '2016', shipped: 28872.39, projected: null, production: null},
            {name: '2017', "shipped 2016": 30010.33, "projected: 2017": 24907.73, "production 2017": 96104.01},
            //{name: '2018', shipped: null, projected: null, production: 90207},
        ];

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Demand versus capacity
                            <MUITooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </MUITooltip>
                        </h4>
                    </CardActions>

                    <ResponsiveContainer height={300} aspect={4.0/1.5}>
                        <BarChart data={data} margin={{top: 50, right: 10, left: 20, bottom: 0}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend align="right" verticalAlign="middle" layout="vertical"/>
                            <Bar dataKey="projected 2017" name="Demand" fill="#8AA2C8" />
                            <Bar dataKey="shipped 2016" name="Shipped" fill="#02419A" />
                            <Bar dataKey="production 2017" name="Production" fill="#4C8623" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
        </div>
    );
}
}



export default withStyles(infoGraphicStyle)(DemandChart);
