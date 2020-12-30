import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Comment } from 'semantic-ui-react';

class MessagesContainer extends Component {

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

export default withRouter(MessagesContainer);