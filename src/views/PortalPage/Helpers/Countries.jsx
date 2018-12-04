import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import guidGenerator from './guidGenerator.jsx';

class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries,
            bangladesh: true,
            brazil: true,
            canada: true,
            chile: true,
            china: true,
            equador: true,
            guatamala: true,
            india: true,
            indonesia: true,
            thailand: true,
            unitedstates: true,
            vietnam: true,
        };
        console.log('%cRendering countries: ' + JSON.stringify(this.state), "color:blue");
    }

    handleChange = name => event => {
        const { target: { value } } = event;

        //console.log('%country: ' + name + ' checked: ' + JSON.stringify(event.target.checked) + " value: " + JSON.stringify(value), "color:blue");
        //console.log('%chandleChange - before: ' + JSON.stringify(this.state), "color:blue");

        // TODO - Rewrite this crappy heavy-handed code
        switch (value) {
            case 'bangladesh': { this.setState({ bangladesh: !this.state.bangladesh}); break; }
            case 'brazil': { this.setState({ brazil: !this.state.brazil}); break; }
            case 'canada': { this.setState({ canada: !this.state.canada}); break; }
            case 'chile': { this.setState({ chile: !this.state.chile}); break; }
            case 'china': { this.setState({ china: !this.state.china}); break; }
            case 'equador': { this.setState({ equador: !this.state.equador}); break; }
            case 'guatamala': { this.setState({ guatamala: !this.state.guatamala}); break; }
            case 'india': { this.setState({ india: !this.state.india}); break; }
            case 'indonesia': { this.setState({ indonesia: !this.state.indonesia}); break; }
            case 'thailand': { this.setState({ thailand: !this.state.thailand}); break; }
            case 'unitedstates': { this.setState({ unitedstates: !this.state.unitedstates}); break; }
            case 'vietnam': { this.setState({ vietnam: !this.state.vietnam}); break; }
            default: {}
        }
        console.log('%chandleChange - after: ' + JSON.stringify(this.state), "color:blue");
    };


    render() {
        let checkBoxComponentList = [];

        for (let i=0; i<this.props.countries.length; i++){
            let val = this.props.countries[i].trim().toLowerCase().replace(/\s/g, "");
            //console.log('render countries: i=' + i + ': ' + props.countries[i]);
            checkBoxComponentList.push(
                <MuiThemeProvider theme={this.props.theme}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                key={guidGenerator()}
                                color='primary'
                                onChange={this.handleChange(val)}
                                checked= {  val === "bangladesh" ? this.state.bangladesh :
                                            val === "brazil" ? this.state.brazil :
                                            val === "canada" ? this.state.canada :
                                            val === "chile" ? this.state.chile :
                                            val === "china" ? this.state.china :
                                            val === "equador" ? this.state.equador :
                                            val === "guatamala" ? this.state.guatamala :
                                            val === "indonesia" ? this.state.indonesia :
                                            val === "india" ? this.state.india :
                                            val === "thailand" ? this.state.thailand :
                                            val === "unitedstates" ? this.state.unitedstates :
                                            val === "vietnam" ? this.state.vietnam :
                                            false }
                                value={val}
                            />
                        }
                        label={this.props.countries[i]} />
                </MuiThemeProvider>
            );
        }

        return checkBoxComponentList;
    }
}

export default Countries;
