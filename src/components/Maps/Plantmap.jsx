import React from "react";
import Datamap from 'react-datamaps';
import { ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

class Plantmap extends React.Component {

    addClickHandlers = (ref) => {
        if (ref && ref.map) {
            ref.map.svg.selectAll('.datamaps-bubble').on('click', (bubble) => {
                //alert(`You clicked on ${bubble.BAPID}`);
            });
        }
    };

    render() {
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
                            bubbleFill: this.props.color,
                        }}
                        bubbles={this.props.data}
                        bubbleOptions={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,.2)',
                            popupOnHover: true,

                            popupTemplate: (geography, data) =>
                            `<div class='hoverinfo'>
                            <label><strong>Company:</strong> ${data.Company}</label><br/>
                            <label><strong>Country:</strong> ${data.Country}</label><br/>
                            <label><strong>Shipments:</strong> ${data.MostRecentShipped}</label> <br/>
                            <label><strong>Projected:</strong> ${data.Projected2017}</label> <br/>
                            <label><strong>Production:</strong> ${data.TotalProduction}</label> <br/>
                        </div>`,

                        highlightOnHover: true,
                        highlightFillColor: this.props.color,
                        highlightBorderColor: 'rgba(0, 0, 0, 0.2)',
                        highlightBorderWidth: 2,
                        highlightBorderOpacity: 1,
                        highlightFillOpacity: 0.85,
                         }}

                    />
                </ResponsiveContainer>
            </div>
        );
    }
}


Plantmap.propTypes = {
    mapStyle: PropTypes.object,
    data: PropTypes.array,
    color: PropTypes.string
};

export default Plantmap;
