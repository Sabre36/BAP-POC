import React from "react";
import icon from './../../assets/img/svg/InfoGraphic1.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class InfoGraphicIcon1 extends React.Component {
    render() {
        return (
            <ReactSVG src={icon} />
        );
    }
}

export default InfoGraphicIcon1;
