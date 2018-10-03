import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";
import SearchIcon from '@material-ui/icons/Search';

class SearchField extends React.Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render () {

        // const styles = {
        //   'input-label': {
        //     textOverflow: 'ellipsis',
        //     whiteSpace: 'nowrap',
        //     overflow: 'hidden',
        //     width: '100%',
        //     color: 'red'
        //   },
        //
        //   'input': {
        //     '&::placeholder': {
        //       textOverflow: 'ellipsis !important',
        //       color: '#fff'
        //     }
        //   }
        // };

        const containerDiv = {
            float: "right",
            margin: "0",
            padding: "0"
        };

        const searchField = {
            border: "0",
            borderBottom: "1px solid white",
            outline: "0",
            color: "#fff",
            fontSize: "14px",
            backgroundColor: "transparent",
            minWidth: "300px",

            ":placeholder": {
                color: "#fff"
            }
        };

        return (
            <div style={containerDiv}>
                { !this.state.isHidden && <input style={searchField} type="text"  placeholder="Search..." /> }

                <Tooltip
                    id="search-site"
                    title="Search this site"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: this.props.tooltip }}
                    >
                        <Button
                            href="#"
                            color="transparent"
                            className={this.props.navLink}
                            onClick={this.toggleHidden.bind(this)}
                            ><SearchIcon/>
                        </Button>
                </Tooltip>
        </div>
    )
}
}

export default SearchField;
