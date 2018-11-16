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
            Minor, major, and critical audit summary results are displayed; clicking on a row will display plant and farm detail audit data.
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
            {name: 'Minor', yr1: 21, yr1Label: 2017, yr2: 26, yr2Label: 2018, delta: null},
            {name: 'Major', yr1: 17, yr1Label: 2017, yr2: 1, yr2Label: 2018, delta: null},
            {name: 'Critical', yr1: 6, yr1Label: 2017, yr2: 3, yr2Label: 2018, delta: null},
            {name: 'Total', yr1: 44, yr1Label: 2017, yr2: 30, yr2Label: 2018, delta: null},
        ];

        let label1 = '';
        let label2 = '';

        data.forEach(function(element) {
            element.delta = Math.round((element.yr2 - element.yr1) / element.yr2 * 100);
            label1 = element.yr1Label;
            label2 = element.yr2Label;
        });

        return (
            <div>
                <Card className={classes.cardLarge}>
                    <CardActions>
                        <IconButton aria-label='Menu' color='inherit' onClick={this.handleClick.bind(this)}>
                            <MenuIcon className={classes.iconButtonStyle}/>
                        </IconButton>
                        <h4 className={classes.infoGraphicTitle}>
                            Non-conformance
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
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell className={classes.th} numeric>{label1}</TableCell>
                                        <TableCell className={classes.th} numeric>{label2}</TableCell>
                                        <TableCell className={classes.th} numeric>Change</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    { data.map((item) =>
                                        <TableRow className={classes.tr} key={guidGenerator()} >
                                            <TableCell className={classes.td} key={guidGenerator()} >

                                                { item.name === "Minor" &&
                                                    <span className={classes.yellowCircle} title={item.name}>
                                                        <i className={"fa fa-md fa-circle"}/>
                                                    </span>
                                                }

                                                { item.name === "Major" &&
                                                    <span className={classes.orangeCircle} title={item.name}>
                                                        <i className={"fa fa-md fa-circle"} />
                                                    </span>
                                                }

                                                { item.name === "Critical" &&
                                                    <span className={classes.redCircle} title={item.name}>
                                                        <i className={"fa fa-md fa-circle"} />
                                                    </span>
                                                }

                                                {item.name}
                                            </TableCell>
                                            <TableCell className={classes.td} numeric> {item.yr1}</TableCell>
                                            <TableCell className={classes.td} numeric>{item.yr2}</TableCell>
                                            <TableCell className={classes.td} numeric>
                                                {item.delta}%

                                                <span className={classes.arrows}>
                                                    { item.delta < 0 &&
                                                        <span className={classes.greenArrow}>
                                                            <i className={"fa fa-md fa-arrow-down"} title="Decrease"/>
                                                        </span>
                                                    }
                                                    { item.delta > 0 &&
                                                        <span className={classes.redArrow}>
                                                            <i className={"fa fa-md fa-arrow-up"} title="Increase"/>
                                                        </span>
                                                    }
                                                </span>

                                            </TableCell>
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
