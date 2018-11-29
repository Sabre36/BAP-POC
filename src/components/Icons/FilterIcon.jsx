import React from "react";
import icon from './../../assets/img/svg/thin-filter.svg';
import ReactSVG from 'react-svg';
import './../../assets/scss/site-styles.css';

class FilterIcon extends React.Component {

    render() {
        return (
            <ReactSVG src={icon} />
        );
    }
}

export default FilterIcon;
