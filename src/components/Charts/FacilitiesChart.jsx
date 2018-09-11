import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

//const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} = Recharts;
const data = [
{year: '2004', numFacilities: 15},
{year: '2005', numFacilities: 29},
{year: '2006', numFacilities: 74},
{year: '2007', numFacilities: 122},
{year: '2008', numFacilities: 141},
{year: '2009', numFacilities: 272},
{year: '2010', numFacilities: 433},
{year: '2011', numFacilities: 404},
{year: '2012', numFacilities: 495},
{year: '2013', numFacilities: 648},
{year: '2014', numFacilities: 791},
{year: '2015', numFacilities: 1058},
{year: '2016', numFacilities: 1558},
{year: '2017', numFacilities: 1850},
];

class FacilitiesChart extends React.Component {

    render() {
        return (
            <div>

                <AreaChart width={500} height={275} data={data}
                    margin={{top: -20, right: 30, left: 0, bottom: 0}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="year"/>
                <YAxis/>
                <Tooltip/>
                <Area type='monotone' dataKey='numFacilities' stroke='#000' fill='#43a546' />
              </AreaChart>

              <br/>
        </div>

        );
    }
}

export default FacilitiesChart;
