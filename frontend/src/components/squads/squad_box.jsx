import React from 'react';
import { Link } from 'react-router-dom';

class SquadBox extends React.Component {
  constructor(props){
    super(props);
    // console.log(props)
  }
  
  render() {
    
    // const data = {
    //   id: this.props.squad._id,
    //   newMemberId: this.props.currentUserId,
    //   type: "addRequest"
    // }

    return (
      <div>
        <h3><Link to={`/squads/${this.props.squadId}`}>{this.props.name}</Link></h3>
        {/* <h3>{this.props.name}</h3> */}
        <span>{this.props.generalBio}</span>
        <span>{this.props.skillLevel} </span>
        <span>{this.props.game} </span>
        <span>{this.props.squadSize}</span>
        {/* <button
          style={{ color: "grey" }}
          onClick={() => this.props.updateSquad(data)}
        >
          Request to Join Squad
        </button> */}
        <span>
          {this.props.otherForm}
        </span>
      </div>
    );
  }
}

export default SquadBox;