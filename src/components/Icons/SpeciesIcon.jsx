import React from "react";
import icon from './../../assets/img/svg/fish.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class FishIcon extends React.Component {
    render() {
        return (
            <ReactSVG src={icon} svgStyle={{ width: 22 }}/>
        );
    }
}

export default FishIcon;
