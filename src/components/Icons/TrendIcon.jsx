import React from "react";
import icon from './../../assets/img/svg/TrendIcon.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class TrendIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} />
        );
    }
}

export default TrendIcon;
