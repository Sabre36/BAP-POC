import React from 'react';
import PropTypes from 'prop-types';
import SankeyChart from './SankeyChart.jsx';
//import Topology from './Topology.jsx';

function getData() {
    return {
        "nodes": [{
        "node": 0,
        "name": "node0"
    }, {
        "node": 1,
        "name": "node1"
    }, {
        "node": 2,
        "name": "node2"
    }, {
        "node": 3,
        "name": "node3"
    }, {
        "node": 4,
        "name": "node4"
    }, {
        "node": 5,
        "name": "node5"
    }, {
        "node": 6,
        "name": "node6"
    }, {
        "node": 7,
        "name": "node7"
    }],
        "links": [{
        "source": 0,
        "target": 2,
        "value": 25
    }, {
        "source": 1,
        "target": 2,
        "value": 5
    }, {
        "source": 1,
        "target": 3,
        "value": 20
    }, {
        "source": 2,
        "target": 4,
        "value": 29
    }, {
        "source": 2,
        "target": 5,
        "value": 1
    }, {
        "source": 3,
        "target": 4,
        "value": 10
    }, {
        "source": 3,
        "target": 5,
        "value": 2
    }, {
        "source": 3,
        "target": 6,
        "value": 8
    }, {
        "source": 4,
        "target": 7,
        "value": 39
    }, {
        "source": 5,
        "target": 7,
        "value": 3
    }, {
        "source": 6,
        "target": 7,
        "value": 8
    }]};
}

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
            {
                "id":"asset59bc678fc3e5960254ac1f1b",
                "name":"Kroger",
                "objId":"59bc678fc3e5960254ac1f1b",
                "type":"server",
                "node":0
            },{
                "id":"asset59bc678fc3e5960254ac1f1a",
                "name":"Eastern Seafood",
                "objId":"59bc678fc3e5960254ac1f1a",
                "type":"asset",
                "node":1
            },{
                "id":"group59bc678fc3e5960254ac1f2f",
                "name":"Aquastar",
                "objId":"59bc678fc3e5960254ac1f2f",
                "type":"asset",
                "node":2
            },{
                "id":"user59bc6790c3e5960254ac1fc4",
                "name":"Pacific Fish",
                "objId":"59bc6790c3e5960254ac1fc4",
                "type":"asset",
                "node":3
            },{
                "id":"user59bc6790c3e5960254ac1fc4",
                "name":"P10002",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":4
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"P10003",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":5
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"P10004",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":6
            },{
                "id":"user59bc6790c3e5960254ac1fc4",
                "name":"P10005",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":7
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"P10006",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":8
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"P10007",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"group",
                "node":9
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10001",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":10
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10002",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":11
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10003",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":12
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10004",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":13
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10005",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":14
            },{
                "id":"user59bc6790c3e5960254ac1ff4",
                "name":"F10006",
                "objId":"59bc6790c3e5960254ac1fa4",
                "type":"user",
                "node":15
            }
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
          graph={graph} type="server"
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
