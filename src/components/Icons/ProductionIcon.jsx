import React from "react";
import icon from './../../assets/img/svg/ProductionIcon.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class ProductionIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} />
        );
    }
}

export default ProductionIcon;
