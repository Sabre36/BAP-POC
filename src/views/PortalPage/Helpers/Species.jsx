import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import guidGenerator from './guidGenerator.jsx';

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
        };
        console.log('%cRendering Species: ' + JSON.stringify(this.state), "color:blue");
    }

    handleChange = name => event => {
        const { target: { value } } = event;

        //console.log('%chandleChange - before: ' + JSON.stringify(this.state), "color:blue");
        // TODO - Rewrite this crappy heavy-handed code
        switch (value) {
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


    render() {
        let checkBoxComponentList = [];

        checkBoxComponentList.push(
            <MuiThemeProvider theme={this.props.theme}>
                <FormLabel component='legend'>Species</FormLabel>
            </MuiThemeProvider>
        );

        for (let i=0; i<this.props.species.length; i++){
            let val = this.props.species[i].trim().toLowerCase().replace(/\s/g, "");
            //console.log('render Species: i=' + i + ': ' + props.Species[i]);
            checkBoxComponentList.push(
                <MuiThemeProvider theme={this.props.theme}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                key={guidGenerator()}
                                color='primary'
                                onChange={this.handleChange(val)}
                                checked= {  val === "catfish" ? this.state.catfish :
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

        return checkBoxComponentList;
    }
}

export default Species;
