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


class Units extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 'mt'
        };

        this.handleRadioChange = this.handleRadioChange.bind(this);
    }

    handleSliderChange = (event, value) => {
        this.setState({ value });
    };

    handleRadioChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const {selectedValue} = this.state;

        return (
            <MuiThemeProvider theme={this.props.theme}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component='legend'>UNITS</FormLabel>
                     <RadioGroup
                        aria-label="Units"
                        name="units"
                        className={classes.group}
                        value={this.state.selectedValue}
                        onChange={this.handleRadioChange}
                    >

                    { this.props.species.map((item) =>
                        <FormControlLabel value={item} control={<Radio color='primary'/>} label={item}/>
                    )}
                  </RadioGroup>
                </FormControl>
            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Units);