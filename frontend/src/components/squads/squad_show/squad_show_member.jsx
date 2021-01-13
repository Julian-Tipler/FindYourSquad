import React from "react";
import { Link } from "react-router-dom";
import './squad_overview.css'
import { withRouter } from 'react-router-dom'

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
    this.handleDeleteSquad = this.handleDeleteSquad.bind(this);

  }

  handleRemoveMember(e) {
    e.preventDefault();
    this.props.updateSquad(this.state);
  }
  
  handleDeleteSquad(e) {
    e.preventDefault();
    this.props.deleteSquad(this.state.id);
    this.props.history.push('/squads');
  }

  renderButton() {
    if (this.props.currentUser.id===this.props.currentSquad.leader && this.state.memberId === this.props.currentSquad.leader) {
      return (
        <div>
          <button id='ss-rm' onClick={this.handleDeleteSquad}>Delete Squad</button>
        </div>
      )
    } else if (this.props.currentUser.id === this.props.currentSquad.leader){
      return (
        <div>
          <button id='ss-rm' onClick={this.handleRemoveMember}>Remove</button>
        </div>
      )
    }
  }

  render() {

    if (!this.props.member){
      return <> </>
    }
    return (
      <div className='member-box'>
        <div>{this.props.member.username}</div>
        <div>
          <Link id='ss-gp' to={`/profile/${this.props.member._id}`}>Go to Profile</Link>
        </div>
        <div>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default withRouter(SquadShowMember);
