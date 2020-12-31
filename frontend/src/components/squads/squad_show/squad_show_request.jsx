import React from "react";
import { Link } from "react-router-dom";

class SquadShowRequest extends React.Component {
  
  render() {
    return (
      <div>
        <div>{this.props.request.username}</div>
        <div>
          <Link to={`/profile/${this.props.request._id}`}>Gamer Profile</Link>
        </div>
        <div>acceptMember</div>
        <div>declineRequest</div>
      </div>
    );
  }
}
export default SquadShowRequest;

