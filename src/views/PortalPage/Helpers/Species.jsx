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


class Species extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 100,
            showSlider: true,
            selectedValue: 'all'
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSliderTextChange = this.handleSliderTextChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);

        //console.log('%cRendering Species: ' + JSON.stringify(this.state), "color:blue");
    }


    handleSliderChange = (event, value) => {
        this.setState({ value });
    };

    handleSliderTextChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
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
                     <RadioGroup
                        aria-label="Species"
                        name="species"
                        className={classes.group}
                        value={this.state.selectedValue}
                        onChange={this.handleRadioChange}
                    >
                    <FormControlLabel value="all" control={<Radio color="primary"/>} label="All" />

                    { this.props.species.map((item) =>
                        <FormControlLabel value={item} control={<Radio color='primary'/>} label={item}/>
                    )}
                  </RadioGroup>
                </FormControl>

                { this.state.selectedValue != "all" &&
                    <div>
                        <br/>
                        <FormControl component='fieldset' className={classes.formControl}>
                            <TextField
                                 id="standard-number"
                                 label="Percent"
                                 value={value}
                                 onChange={this.handleSliderTextChange('value')}
                                 type="number"
                                 className={classes.textField}
                                 InputLabelProps={{shrink: true}}
                                 margin="normal"
                             />
                            <br/>
                            <Slider
                              classes={{ container: classes.slider }}
                              value={value}
                              min={0}
                              max={100}
                              step={1}
                              aria-labelledby="label"
                              onChange={this.handleSliderChange}
                            />
                        </FormControl>
                    </div>
                }

            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(Species);
