import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Messages extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.messages){
            return <> </>
        } else {
            return(
                <div>
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={"c" + idx}>
                                <strong>{message.sender}</strong>
                                <div>{message.content}</div>
                            </li>
                        );
                    })}
                </div>
            )
        }
    }

}

export default withRouter(Messages);