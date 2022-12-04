import React, { Component } from "react";

//SFC => remember remove this and add props!!!
const LikeSFC = (props) => {
    let classes = "fa fa-heart";
    classes += props.liked !== true ? "-o" : "";

    return (
        <React.Fragment>
            <i
                className={classes}
                onClick={props.onClick}
                style={{ cursor: "pointer" }}
            ></i>
        </React.Fragment>
    );
};

class Like extends Component {
    // state = {};

    render() {
        let classes = "fa fa-heart";
        classes += this.props.liked !== true ? "-o" : "";

        return (
            <React.Fragment>
                <i
                    className={classes}
                    onClick={this.props.onClick}
                    style={{ cursor: "pointer" }}
                ></i>
            </React.Fragment>
        );
    }
}

export default Like;
