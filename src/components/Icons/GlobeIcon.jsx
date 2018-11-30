import React from "react";
import icon from './../../assets/img/svg/globe.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class GlobeIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} svgStyle={{ width: 20 }}  />
        );
    }
}

export default GlobeIcon;
