import React from "react";
import icon from './../../assets/img/svg/lab.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class LabIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} svgClassName="listStyle"  />
        );
    }
}

export default LabIcon;
