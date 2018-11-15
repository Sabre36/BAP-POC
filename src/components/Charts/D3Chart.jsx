import React from 'react'
import PropTypes from 'prop-types'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
//import './style.css'

function generateData( maxDepth, maxChildren ) {

    var tree = {};
    var name = 0;
    var nodes = [];

    // Recursive builder function to build the tree.
    function innerBuilder( depth ) {

        var number_of_children = Math.floor(
            Math.random() * ( maxChildren + 1 ) );

        // Force there to be a child of the zeroth node.
        if ( depth === 0 && number_of_children === 0 ) {
            number_of_children = 2;
        }

        // Build the node.
        var node = {
            name: name,
            children: []
        };
        // Push the node onto the node array for cross-edge building.
        nodes.push( node );

        // Increment the name.
        name++;

        // Add children based on the position and parameters.
        if ( depth < maxDepth && number_of_children > 0 ) {
            depth++
            for ( var i = 0; i < number_of_children; i++ ) {
                var child = innerBuilder( depth );
                node.children.push( child );
            }
        }

        return node;
    }

    var root = innerBuilder( 0 );

    // Build random links.
    var crosslink_data = [];
    var a = null;
    var b = null;
    // Repeat the link building process sever times to make a more dense set of
    // links than a single pass would.
    for ( var i = 0; i < 4; i++ ) {
        // Shuffle a copy of the nodes array.
        var shuffled = d3.shuffle( nodes.slice() );
        // Pop two nodes off the shuffled nodes array and link them.
        while ( a = shuffled.pop(), b = shuffled.pop() ) {
            if ( a !== b ) {
                var entry = { source: a, target: b };
                if ( crosslink_data.indexOf( entry ) === -1 ) {
                    crosslink_data.push( entry );
                }
            }
        }
    }

    return {
        root: root,
        links: crosslink_data
    };
}


//////////////////////////

class Chart extends React.Component {
  constructor (props) {
    super(props)
    this.renderD3 = this.renderD3.bind(this)
    this.updateD3 = this.updateD3.bind(this)
  }

  componentDidMount () {
    this.renderD3()
  }

  componentDidUpdate (prevProps, prevState) {
    // do not compare props.chart as it gets updated in updateD3()
    if (this.props.data !== prevProps.data) {
      this.updateD3()
    }
  }

  render () {
    return (
      <div>
        {this.props.chart}
      </div>
    )
  }

  renderD3 () {
    var data = this.props.data

    // This will create a faux div and store its virtual DOM in state.chart
    var faux = this.props.connectFauxDOM('div', 'chart')

    /*
       D3 code below by Alan Smith, http://bl.ocks.org/alansmithy/e984477a741bc56db5a5
       The only changes made for this example are...
       1) feeding D3 the faux node created above
       2) calling this.animateFauxDOM(duration) after each animation kickoff
       3) move data generation and button code to parent component
       4) data and title provided as props by parent component
       5) reattach to faux dom for updates
       6) move rejoining of data and chart updates to updateD3()
    */

    var xBuffer = 50
    var yBuffer = 150
    var lineLength = 400

    var svgDoc = d3.select(faux).append('svg')

    svgDoc
      .append('text')
      .attr('x', xBuffer + lineLength / 2)
      .attr('y', 50)
      .text(this.props.title)

    // create axis line
    svgDoc
      .append('line')
      .attr('x1', xBuffer)
      .attr('y1', yBuffer)
      .attr('x1', xBuffer + lineLength)
      .attr('y2', yBuffer)

    // create basic circles
    svgDoc
      .append('g')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d, i) {
        var spacing = lineLength / data.length
        return xBuffer + i * spacing
      })
      .attr('cy', yBuffer)
      .attr('r', function (d, i) {
        return d
      })
  }

  updateD3 () {
    var data = this.props.data

    /* code below from Alan Smith except changes mentioned previously */

    var xBuffer = 50
    var yBuffer = 150
    var lineLength = 400

    // reattach to faux dom
    var faux = this.props.connectFauxDOM('div', 'chart')
    var svgDoc = d3.select(faux).select('svg')

    // rejoin data
    var circle = svgDoc.select('g').selectAll('circle').data(data)

    circle.exit().remove() // remove unneeded circles
    circle.enter().append('circle').attr('r', 0) // create any new circles needed

    // update all circles to new positions
    circle
      .transition()
      .duration(500)
      .attr('cx', function (d, i) {
        var spacing = lineLength / data.length
        return xBuffer + i * spacing
      })
      .attr('cy', yBuffer)
      .attr('r', function (d, i) {
        return d
      })

    this.props.animateFauxDOM(800)

    d3.select('text').text(this.props.title)
  }
}

Chart.defaultProps = {
  chart: 'loading...'
}

Chart.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired
}

const D3Graph = withFauxDOM(Chart);

export default D3Graph;
