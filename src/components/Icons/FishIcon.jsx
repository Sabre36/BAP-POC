import React from "react";
import icon from './../../assets/img/svg/Fishicon.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class FishIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} />
        );
    }
}

export default FishIcon;
