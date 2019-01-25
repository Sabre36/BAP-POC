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
import MUITooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import guidGenerator from './../../views/PortalPage/Helpers/guidGenerator.jsx';

import infoGraphicStyle from "assets/jss/site-styles/components/infoGraphicStyle.jsx";

const tooltipTitle = () => {
    return (
        <Typography>
            Minor, major, and critical audit summary results are displayed; clicking on a row will display Supply chain analysis audit data.
        </Typography>
    );
};


class Nonconformities extends React.Component {

    handleClick() {
        alert('click');
    }

    render() {
        const { classes } = this.props;

        const data = [
            {name: 'Food Safety',      Minor:  3, Major: 4, Critical: 0, Total: 7},
            {name: 'Social',           Minor:  12, Major: 1, Critical: 0, Total: 13},
            {name: 'Environmental',    Minor:  6, Major: 0, Critical: 1, Total: 7},
            {name: 'Animal welfare',   Minor:  3, Major: 1, Critical: 1, Total: 5},
            {name: 'Total',            Minor:  24, Major: 6, Critical: 3, Total: 32},

            // {name: 'Minor', yr1: 21, yr1Label: 2017, yr2: 26, yr2Label: 2018, delta: null},
            // {name: 'Major', yr1: 17, yr1Label: 2017, yr2: 1, yr2Label: 2018, delta: null},
            // {name: 'Critical', yr1: 6, yr1Label: 2017, yr2: 3, yr2Label: 2018, delta: null},
            // {name: 'Total', yr1: 44, yr1Label: 2017, yr2: 30, yr2Label: 2018, delta: null},
        ];

        // let label1 = '';
        // let label2 = '';
        //
        // data.forEach(function(element) {
        //     element.delta = Math.round((element.yr2 - element.yr1) / element.yr2 * 100);
        //     label1 = element.yr1Label;
        //     label2 = element.yr2Label;
        // });

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Non-conformance (last audit)
                            <MUITooltip
                                classes={{ tooltip: classes.lightTooltip }}
                                title={tooltipTitle()}>
                                <span className={classes.tooltipIcon}>
                                    <i className={"fa fa-sm fa-info-circle"}/>
                                </span>
                            </MUITooltip>
                        </h4>
                    </CardActions>

                    <CardContent>
                         <Paper className={classes.nonConfTable}>
                            <Table padding="dense">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>

                                        <TableCell className={classes.th} numeric>
                                            <span className={classes.yellowCircle} title="Minor">Minor
                                                <i className={"fa fa-md fa-circle"} style={{marginLeft: '2px'}}/>
                                            </span>
                                        </TableCell>
                                        <TableCell className={classes.th} numeric>
                                            <span className={classes.orangeCircle} title="Major">Major
                                                <i className={"fa fa-md fa-circle"} style={{marginLeft: '2px'}}/>
                                            </span>
                                        </TableCell>
                                        <TableCell className={classes.th} numeric>
                                            <span className={classes.redCircle} title="Critical">Critical
                                                <i className={"fa fa-md fa-circle"} style={{marginLeft: '2px'}}/>
                                            </span>
                                        </TableCell>
                                        <TableCell className={classes.th} numeric>Total</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    { data.map((item) =>
                                        <TableRow className={classes.tr} key={guidGenerator()} style={{lineHeight: '18px', margin: 0, padding: 0}}>
                                            <TableCell className={classes.td} key={guidGenerator()} style={{maxWidth: '20px!important'}}>{item.name}</TableCell>
                                            <TableCell className={classes.td} numeric> {item.Minor}</TableCell>
                                            <TableCell className={classes.td} numeric> {item.Major}</TableCell>
                                            <TableCell className={classes.td} numeric>{item.Critical}</TableCell>
                                            <TableCell className={classes.td} numeric>{item.Total}</TableCell>
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
