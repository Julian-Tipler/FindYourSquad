import React, { Component } from 'react';

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squadId: this.props.currentSquad._id,
      sender: this.props.currentUser.username,
      squad: this.props.currentSquad.name,
      content: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserKeyPress = this.handleUserKeyPress.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        squadId: this.props.currentSquad._id,
        squad: this.props.currentSquad.name,
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({
      content: "",
    });
  }

  handleUserKeyPress (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      this.handleSubmit(e);
    }
  };

  render() {
    if (Object.keys(this.props.currentSquad).length === 0) {
      return <> </>;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.content}
            onChange={this.update("content")}
            placeholder={`Message #${this.props.currentSquad.name}`}
            onKeyPress={this.handleUserKeyPress}
          />
          <button type="submit">Send</button>
        </form>
      );
    }
  }
}

export default InputContainer;