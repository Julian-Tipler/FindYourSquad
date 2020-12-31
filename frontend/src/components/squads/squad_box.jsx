import React from 'react';
import { Link } from 'react-router-dom';
import Member from './member'

class SquadBox extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    // let requestToJoinSquad
    // if 
    return (
      <div>
        <h3>
          <Link to={`/squads/${this.props.squadId}`}>{this.props.name}</Link>
        </h3>
        {/* <h3>{this.props.name}</h3> */}
        <span>{this.props.squad.generalBio}</span>
        <span>{this.props.squad.skillLevel} </span>
        <span>{this.props.squad.game.name} </span>
        <span>{this.props.squad.squadSize}</span>

        <div>
          {this.props.squad.members.map((member) => {
            return (
              <li key={member._id}>
                <Member member={member} />
              </li>
            );
          })}
        </div>

        {/* <button
          style={{ color: "grey" }}
          onClick={() => this.props.updateSquad(data)}
        >
          Request to Join Squad
        </button> */}
        
        <span>{this.props.otherForm}</span>
      </div>
    );
  }
}

export default SquadBox;









//this was under render before:
    // const data = {
    //   id: this.props.squad._id,
    //   newMemberId: this.props.currentUserId,
    //   type: "addRequest"
    // }