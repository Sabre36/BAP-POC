import React from 'react';
import './ProgressBar.css';


class Filler extends React.Component {
    render() {

        let pct = this.props.percentage;
        let color;
        let adjPercent;

        if (pct >= 0 && pct < 20) {
            adjPercent = 20;
            color = 'rgba(55,97,26,.9)';
        } else if (pct >= 20 && pct < 40) {
            adjPercent = 40;
            color = 'rgba(255,204,3,.9)';
        } else if (pct >= 40 && pct < 60) {
            adjPercent = 60;
            color = 'rgba(248,156,5,.9)';
        } else if (pct >= 60 && pct < 80) {
            adjPercent = 80;
            color = 'rgba(171,5,32,.9)';
        } else {
            adjPercent = 100;
            color = 'rgba(171,5,32,.9)';
        }


        return (
            <div className="progress-filler" style={{ width: `${adjPercent}%`, backgroundColor: `${color}` }} />
        );
    }
}

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="progress-container">
                <label>{this.props.label}</label>
                <div className="progress-bar">
                    <Filler percentage={this.props.percentage} />
                </div>
            </div>
        );
    }
}



// const ProgressBar = (props) => {
//     const { classes } = this.props;
//
//     return (
//         <div className={classes.progressBar}>
//             <Filler percentage={props.percentage} />
//         </div>
//     )
// }

// const Filler = (props) => {
//     const { classes } = this.props;
//
//     return <div className={classes.filler} style={{ width: `${props.percentage}%` }} />
// }

export default ProgressBar;
