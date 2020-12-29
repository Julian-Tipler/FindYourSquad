import React from 'react';

class SquadBox extends React.Component {
  render() {
    
    const data = {
      id: this.props.squad._id,
      newMemberId: this.props.currentUserId,
      type: "addRequest"
    }


    return (
      <div>
        <h3>{this.props.name}</h3>
        <span>{this.props.generalBio}</span>
        <span>{this.props.skillLevel} </span>
        <span>{this.props.game} </span>
        <span>{this.props.squadSize}</span>
        <button
          style={{ color: "grey" }}
          onClick={() => this.props.editSquad(data)}
        >
          Request to Join Squad
        </button>
      </div>
    );
  }
}

export default SquadBox;