import React from 'react';
import { Link } from "react-router-dom";
import './squad_overview.css'


class SquadShowMember extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: this.props.squad._id,
    //   newMemberId: this.props.currentUserId,
    //   type: "removeMember",
    // };
    // this.handleRemoveMember = this.handleRemoveMember.bind(this)
  }

  // handleRemoveMember() {
  //   this.props.updateSquad(this.state);
  // }

  render() {
    return (
      <div className='member-box'>
        <div>{this.props.member.username}</div>
        <div>
          <Link to={`/profile/${this.props.member._id}`}>Gamer Profile</Link>
        </div>
        <button>removeMember</button>
      </div>
    );
  }
}

export default SquadShowMember
