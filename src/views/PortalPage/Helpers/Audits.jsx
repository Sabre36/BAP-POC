import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import guidGenerator from './guidGenerator.jsx';

const styles = {
  root: {
    width: 300,
  }
};


class Audits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'all'
        };

        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleRadioChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const {selectedValue} = this.state;

        return (

            <MuiThemeProvider theme={this.props.theme}>
                <FormControl component="fieldset" className={classes.formControl}>
                     <RadioGroup
                        key={guidGenerator()}
                        aria-label="Audit period"
                        name="audits"
                        className={classes.group}
                        value={this.state.selectedValue}
                        onChange={this.handleRadioChange}
                    >

                    { this.props.audits.map((item) =>
                        <FormControlLabel key={guidGenerator()} value={item.toLowerCase()} control={<Radio color='primary'/>} label={item}/>
                    )}

                  </RadioGroup>
                </FormControl>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Audits);
