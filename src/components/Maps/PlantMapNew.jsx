import React from "react";
import Datamap from 'react-datamaps';
import withStyles from '@material-ui/core/styles/withStyles';
import { ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";
import infoGraphicStyle from 'assets/jss/site-styles/components/infoGraphicStyle.jsx';
import './PlantMapNew.css';

class PlantMapNew extends React.Component {


    addClickHandlers = (ref) => {
        if (ref && ref.map) {
            ref.map.svg.selectAll('.datamaps-bubble').on('click', (bubble) => {
                alert(`${bubble.bapid} ${bubble.name}`);
            });
        }
    };


    render() {
        //console.log("IN PLANTMAP: " + JSON.stringify(this.props.data));
        return (
            <div style={{padding: '10px'}}>
                <ResponsiveContainer  height={275} aspect={4.0/1.5}>
                    <Datamap
                        ref={this.addClickHandlers}
                        geographyConfig={{
                            popupOnHover: false,
                            highlightOnHover: true,
                            highlightFillColor: 'rgba(0,0,0,.4)',
                            highlightBorderColor: 'rgba(0, 0, 0, 0.2)',
                            highlightBorderWidth: 1,
                        }}
                        fills={{
                            defaultFill: '#ccc',
                            SHIPS: '#02419A',
                            PROJECTED: '#8AA2C8',
                            PRODUCTION: '#4C8623',
                        }}
                        bubbles={this.props.data}
                        bubbleOptions={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.2)',
                            popupOnHover: true,
                            highlightOnHover: true,
                            highlightFillColor: this.props.color,
                            highlightBorderColor: 'rgba(0, 0, 0, 0.2)',
                            highlightBorderWidth: 2,
                            highlightBorderOpacity: 1,
                            highlightFillOpacity: 0.85,

                            popupTemplate: (geography, data) =>
                            `<div class="hoverContainer">
                                <label><strong>BAP Id:</strong> ${data.bapid}</label><br/>
                                <label><strong>Name:</strong> ${data.name}</label><br/>
                                <label><strong>Country:</strong> ${data.country}</label><br/>
                                <label><strong>Shipments:</strong> ${data.shipped} ${this.props.units}</label> <br/>
                                <label><strong>Projected:</strong> ${data.projected} ${this.props.units}</label> <br/>
                                <label><strong>Production:</strong> ${data.production} ${this.props.units}</label> <br/>
                            </div>`,
                         }}

                    />
            </ResponsiveContainer>
        </div>
    );
}
}


PlantMapNew.propTypes = {
    mapStyle: PropTypes.object,
    data: PropTypes.array,
    color: PropTypes.string,
    units: PropTypes.string
};

export default withStyles(infoGraphicStyle)(PlantMapNew);
