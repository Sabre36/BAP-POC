import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider } from '@material-ui/core/styles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
            Species: this.props.Species,
            catfish: true,
            mussels: true,
            pangasius: true,
            salmon: true,
            shrimp: true,
            tilapia: true,
            trout: true,
            all: true,
            value: 100,
            showSlider: true
        };

        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleSliderTextChange = this.handleSliderTextChange.bind(this);

        console.log('%cRendering Species: ' + JSON.stringify(this.state), "color:blue");
    }




    handleChange = name => event => {
        const { target: { value } } = event;

        //console.log('%chandleChange - before: ' + JSON.stringify(this.state), "color:blue");
        // TODO - Rewrite this crappy heavy-handed code
        switch (value) {
            case 'all': { this.setState({ all: !this.state.all}); break; }
            case 'catfish': { this.setState({ catfish: !this.state.catfish}); break; }
            case 'mussels': { this.setState({ mussels: !this.state.mussels}); break; }
            case 'pangasius': { this.setState({ pangasius: !this.state.pangasius}); break; }
            case 'salmon': { this.setState({ salmon: !this.state.salmon}); break; }
            case 'shrimp': { this.setState({ shrimp: !this.state.shrimp}); break; }
            case 'tilapia': { this.setState({ tilapia: !this.state.tilapia}); break; }
            case 'trout': { this.setState({ trout: !this.state.trout}); break; }
            default: {}
        }
        console.log('%chandleChange - after: ' + JSON.stringify(this.state), "color:blue");
    };

    handleSliderChange = (event, value) => {
        this.setState({ value });
    };

    handleSliderTextChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        let checkBoxComponentList = [];
        let val = "all";

        checkBoxComponentList.push(
            <MuiThemeProvider theme={this.props.theme}>
                <FormControlLabel
                    control={
                        <Checkbox
                            key={guidGenerator()}
                            color='primary'
                            onChange={this.handleChange(val)}
                            checked= {  val === "all" ? this.state.all : false }
                            value={val}
                        />
                    }
                    label="All" />
            </MuiThemeProvider>
        );

        for (let i=0; i<this.props.species.length; i++) {
            val = this.props.species[i].trim().toLowerCase().replace(/\s/g, "");
            //console.log('render Species: i=' + i + ': ' + props.Species[i]);
            checkBoxComponentList.push(
                <MuiThemeProvider theme={this.props.theme}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                key={guidGenerator()}
                                color='primary'
                                onChange={this.handleChange(val)}
                                checked= {  val === "all" ? this.state.all :
                                            val === "catfish" ? this.state.catfish :
                                            val === "mussels" ? this.state.mussels :
                                            val === "pangasius" ? this.state.pangasius :
                                            val === "salmon" ? this.state.salmon :
                                            val === "shrimp" ? this.state.shrimp :
                                            val === "tilapia" ? this.state.tilapia :
                                            val === "trout" ? this.state.trout :
                                            false }
                                value={val}
                            />
                        }
                        label={this.props.species[i]} />
                </MuiThemeProvider>
            );
        }

        checkBoxComponentList.push(<br/>);
        checkBoxComponentList.push(
            <MuiThemeProvider theme={this.props.theme}>
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
             </MuiThemeProvider>
        );

        checkBoxComponentList.push(
            <Slider
              classes={{ container: classes.slider }}
              value={value}
              min={0}
              max={100}
              step={1}
              aria-labelledby="label"
              onChange={this.handleSliderChange}
            />
       );










        return checkBoxComponentList;
    }
}

export default withStyles(styles)(Species);
