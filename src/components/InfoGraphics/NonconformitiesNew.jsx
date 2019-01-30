import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import MenuIcon from '@material-ui/icons/Menu';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';

import scorecardData from './../../assets/data/scorecard.json';

import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

const tooltipTitle = () => {
    return (
        <Typography>
            Minor, major, and critical aggregate <strong>audit</strong> results are displayed; clicking on a row will display the detail audit data.
        </Typography>
    );
};


class Nonconformities extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        let data = [];

        scorecardData.forEach(function(section) {
            let nc = section.nonconformitiesData;

            nc.forEach(function(el) {
                data.push(el);
            });
        });

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Non-conformance (last audit)
                            <Tooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </Tooltip>
                        </h4>
                    </CardActions>

                    <CardContent style={{paddingTop: '4px'}}>
                         <Paper className={classes.nonConfTable} >
                            <Table padding="dense" >
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.th} />

                                        <TableCell className={classes.th} numeric>
                                            <label title="Minor">Minor</label>
                                            <span className={classes.yellowCircle}>
                                                <i className={"fa fa-md fa-circle"} />
                                            </span>
                                        </TableCell>
                                        <TableCell className={classes.th} numeric>
                                            <label title="Major">Major</label>
                                            <span className={classes.orangeCircle}>
                                                <i className={"fa fa-md fa-circle"} />
                                            </span>
                                        </TableCell>
                                        <TableCell className={classes.th} numeric>
                                            <label title="Critical">Critical</label>
                                            <span className={classes.redCircle}>
                                                <i className={"fa fa-md fa-circle"}/>
                                            </span>
                                        </TableCell>
                                        <TableCell numeric className={classes.tdtotal}>
                                            <label title="Total">Total</label>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    { data.map((item) =>
                                        <TableRow className={classes.tr} key={guidGenerator()} >
                                            <TableCell className={classes.td} key={guidGenerator()}>{item.name}</TableCell>
                                            <TableCell className={classes.td} numeric> {item.minor}</TableCell>
                                            <TableCell className={classes.td} numeric> {item.major}</TableCell>
                                            <TableCell className={classes.td} numeric>{item.critical}</TableCell>
                                            <TableCell className={classes.tdtotal} numeric>{item.total}</TableCell>
                                        </TableRow>
                                    ) }
                                </TableBody>
                            </Table>
                        </Paper>
                    </CardContent>
                </Card>
            </div>
        );
    }
}



export default withStyles(infoGraphicStyle)(Nonconformities);
