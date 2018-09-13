import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

//const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
const data = [
{year: '2004', Facilities: 15},
{year: '2005', Facilities: 29},
{year: '2006', Facilities: 74},
{year: '2007', Facilities: 122},
{year: '2008', Facilities: 141},
{year: '2009', Facilities: 272},
{year: '2010', Facilities: 433},
{year: '2011', Facilities: 404},
{year: '2012', Facilities: 495},
{year: '2013', Facilities: 648},
{year: '2014', Facilities: 791},
{year: '2015', Facilities: 1058},
{year: '2016', Facilities: 1558},
{year: '2017', Facilities: 1850},
];

class FacilitiesChart extends React.Component {

    render() {
        return (
            <div style={{height: "300px"}}>
                <ResponsiveContainer height="100%">
                    <AreaChart width={500} height={300} data={data}
                        margin={{top: -20, right: 30, left: 0, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="year" padding={{left: 25, right: 0}}/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='Facilities' label='Number of facilities' stroke='#000' fill='#43a546' />
                  </AreaChart>
              </ResponsiveContainer>
          </div>

        );
    }
}

export default FacilitiesChart;
