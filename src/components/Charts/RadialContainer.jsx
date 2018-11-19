import React from 'react';
import PropTypes from 'prop-types';
import RadialGauge from './RadialGauge.jsx';

class RadialContainer extends React.Component {

  render() {
    const style = {
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '230px',
      height: '230px',
      marginBottom: '10px',
      // marginLeft: '230px',
      // marginTop: '230px'
    };

    return (
      <div style={style}>
        <RadialGauge
          innerRadius={80} outerRadius={90}
          id={this.props.id}
          backgroundColor="#e6e6e6" foregroundColor={this.props.foregroundColor}
          percentComplete={this.props.percent} value={this.props.value}
          title={this.props.title} footer={this.props.footer} duration={2000}
        />
      </div>
    );
  }
}

RadialContainer.propTypes = {
  id: PropTypes.string.isRequired,
  foregroundColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default RadialContainer;
