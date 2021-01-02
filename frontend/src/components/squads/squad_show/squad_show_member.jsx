import React from "react";
import { Link } from "react-router-dom";

class SquadShowMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.squadId,
      memberId: this.props.member._id,
      type: "removeMember",
    };
    this.handleRemoveMember = this.handleRemoveMember.bind(this);
    this.renderButton = this.renderButton.bind(this)
  }

  handleRemoveMember(e) {
    e.preventDefault();
    this.props.updateSquad(this.state);
  }

  renderButton() {
    if (this.props.currentUser.id===this.props.currentSquad.leader) {
      return (
        <div>
          <button onClick={this.handleRemoveMember}>removeMember</button>
        </div>
      )
    }
  }

  render() {

    if (!this.props.member){
      return <> </>
    }
    return (
      <div>
        <div>{this.props.member.username}</div>
        <div>
          <Link to={`/profile/${this.props.member._id}`}>Gamer Profile</Link>
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default SquadShowMember;
