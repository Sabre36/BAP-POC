import React from 'react';
import Snackbar from 'components/Snackbar/Snackbar.jsx';

import guidGenerator from './guidGenerator.jsx';

class Message extends React.Component {
    state = {
        open: this.props.open,
    };

    handleRequestClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        //console.log('%cCurrent props: ' + JSON.stringify(this.props), 'color: cyan');
        return (
            <Snackbar
                key={guidGenerator()}
                autoHideDuration={6000}
                open={this.state.open}
                message={this.props.message}
                color={this.props.color}
                icon={this.props.icon}
                handleClose={this.handleRequestClose}
            />
        );
    }
}

export default Message;
