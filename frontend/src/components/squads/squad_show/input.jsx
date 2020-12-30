import React, { Component } from 'react';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sender: this.props.currentUser.username,
            squad: this.props.currentSquad.name,
            content: "",
        }
    };

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.postMessage(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.content}
                    onChange={this.update("content")}
                    placeholder={`Message #${this.props.currentSquad.name}`}>
                </textarea>

                <input type="submit" value={"Send"} />
            </form>
        );
    };
}

export default InputContainer;