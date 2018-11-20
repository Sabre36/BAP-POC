import React from 'react';
import PropTypes from 'prop-types';
import SankeyChart from './SankeyChart.jsx';


class SankeyContainer extends React.Component {

  render() {


    const style = {
      //textAlign: 'center',
      //verticalAlign: 'middle',
      width: '1900px',
      height: '100vh',
      //marginBottom: '10px',
      // marginLeft: '230px',
      // marginTop: '230px'
    };

    const { source, type, state } = this.props;

    //const graph = Topology.generateGraph(getData, type, state);

    const graph = {
        "nodes": [
            { "name":"Kroger", "type":"endorser", "shipped": 22.1, "node":0 },
            { "name":"Eastern Seafood", "type":"supplier", "shipped": 12.2, "node":1 },
            { "name":"Aquastar", "type":"supplier", "shipped": 9, "node":2 },
            { "name":"Pacific Fish", "type":"supplier", "shipped": 22, "node":3 },
            { "name":"P10002", "type":"plant", "shipped": 8.8, "node":4 },
            { "name":"P10003", "type":"plant", "shipped": 14.2, "node":5 },
            { "name":"P10004", "type":"plant", "shipped": 19.2, "node":6 },
            { "name":"P10005", "type":"plant", "shipped": 42.1, "node":7 },
            { "name":"P10006", "type":"plant", "shipped": 7.1, "node":8 },
            { "name":"P10007", "type":"plant", "shipped": 9.1, "node":9 },
            { "name":"F10001", "type":"farm", "shipped": 2.2, "node":10 },
            { "name":"F10002", "type":"hatchery", "shipped": .89, "node":11 },
            { "name":"F10003", "type":"farm", "shipped": 11.1, "node":12 },
            { "name":"F10004", "type":"farm", "shipped": 13.2, "node":13 },
            { "name":"F10005", "type":"feedmill", "shipped": 14.2, "node":14 },
            { "name":"F10006", "type":"farm", "shipped": 1, "node":15 }
        ],
        "links": [
            {"source":0, "target":1,"value":10},
            {"source":0,"target":2,"value":10},
            {"source":0,"target":3,"value":10},

            {"source":1,"target":4,"value":5},
            {"source":1,"target":7,"value":5},
            {"source":2,"target":5,"value":5},
            {"source":2,"target":7,"value":5},
            {"source":2,"target":9,"value":5},
            {"source":3,"target":6,"value":5},
            {"source":3,"target":8,"value":5},
            {"source":3,"target":9,"value":5},

            {"source":3,"target":10,"value":5},
            {"source":3,"target":12,"value":5},
            {"source":4,"target":10,"value":5},
            {"source":5,"target":11,"value":5},
            {"source":5,"target":12,"value":5},
            {"source":5,"target":13,"value":5},
            {"source":6,"target":10,"value":5},
            {"source":6,"target":12,"value":5},
            {"source":6,"target":13,"value":5},
            {"source":7,"target":14,"value":5},
            {"source":7,"target":15,"value":5},
            {"source":8,"target":10,"value":5},
            {"source":8,"target":11,"value":5},
            {"source":9,"target":15,"value":5}
        ],
        "sourceId":"group59bc678fc3e5960254ac1f2f"
    };

    return (
      <div style={style}>
        <SankeyChart
          graph={graph} type="endorser"
        />
      </div>
    );
  }
}

SankeyContainer.propTypes = {
  id: PropTypes.string.isRequired,
  foregroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default SankeyContainer;
