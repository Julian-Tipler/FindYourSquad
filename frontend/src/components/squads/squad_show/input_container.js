import React, { Component } from 'react';

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sender: "",
            squad: "",
            content: "",
        }
    };

    // update(field) {
    //     return e =>
    //         this.setState({
    //             [field]: e.currentTarget.value
    //         });
    // };

    // handleSubmit(e) {
    //     e.preventDefault();
    //     // App.cable.subscriptions.subscriptions[0].speak({
    //     //     message: this.state.body
    //     // });
    //     this.props.action(this.state);
    //     this.setState(this.baseState);
    // };

    render() {
        return (
            <div></div>
            // // <form onSubmit={this.handleSubmit}>
            //     {/* <textarea
            //         value={this.state.body}
            //         onChange={this.update("body")}
            //         placeholder={`Message #${Halleluigh}`}>
            //     </textarea>
            //     <input type="submit" value={this.props.formType} /> */}
            // // </form>
        );
    };
}

export default InputContainer;