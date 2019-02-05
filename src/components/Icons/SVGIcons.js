import React from "react";
import ReactSVG from 'react-svg';

import './../../assets/scss/site-styles.css';

import infoGraphic1 from './../../assets/img/svg/InfoGraphic1.svg';
import infoGraphic2 from './../../assets/img/svg/InfoGraphic2.svg';
import infoGraphic3 from './../../assets/img/svg/InfoGraphic3.svg';
import fishIcon from './../../assets/img/svg/Fishicon.svg';
import filterIcon from './../../assets/img/svg/thin-filter.svg';

export class InfoGraphicIcon1 extends React.Component {
    render() {
        return (
            <ReactSVG src={infoGraphic1} />
        );
    }
}

export class InfoGraphicIcon3 extends React.Component {
    render() {
        return (
            <ReactSVG src={infoGraphic2} />
        );
    }
}

export class InfoGraphicIcon2 extends React.Component {
    render() {
        return (
            <ReactSVG src={infoGraphic3} />
        );
    }
}

export class FishIcon extends React.Component {
    render() {
        return (
            <ReactSVG src={fishIcon} svgStyle={{ width: 22 }}/>
        );
    }
}


export class FilterIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={filterIcon} />
        );
    }
}
