
import React from "react";
import { Link } from "react-router-dom";

class SquadShowRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.squadId,
      requestId: this.props.request._id,
      type: "",
    };
    this.handleAcceptMember = this.handleAcceptMember.bind(this);
    this.handleDeclineRequest = this.handleDeclineRequest.bind(this);
  }

  handleAcceptMember(e) {
    e.preventDefault();

    this.state.type = "acceptMember";
    // this.setState({type: "acceptMember"});
    this.props.updateSquad(this.state);
  }

  handleDeclineRequest(e) {
    e.preventDefault();
    this.state.type = "acceptMember";
    // this.setState({type: "declineRequest"});
    this.props.updateSquad(this.state);
  }

  render() {
    return (
      <div>
        <div>{this.props.request.username}</div>
        <div>
          <Link to={`/profile/${this.props.request._id}`}>Gamer Profile</Link>
        </div>
        <button onClick={this.handleAcceptMember}>Accept Member</button>
        <button onClick={this.handleDeclineRequest}>Decline Request</button>
      </div>
    );
  }
}
export default SquadShowRequest;
