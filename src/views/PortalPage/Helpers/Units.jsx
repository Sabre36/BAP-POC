import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';

import Slider from '@material-ui/lab/Slider';
import TextField from '@material-ui/core/TextField';

import guidGenerator from './guidGenerator.jsx';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

function getValue(str) {
    let starting = str.indexOf( '(' );
    let ending = str.indexOf( ')' ) - 1;
    let len = ending - starting;

    return str.substr(starting+1, len).toLowerCase();
}


class Units extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'mt'
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
                        aria-label="Units"
                        name="units"
                        className={classes.group}
                        value={this.state.selectedValue}
                        onChange={this.handleRadioChange}
                    >

                    { this.props.units.length > 0 && this.props.units.map((item) =>
                        <FormControlLabel value={getValue(item)} control={<Radio color='primary'/>} label={item}/>
                    )}

                  </RadioGroup>
                </FormControl>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Units);
