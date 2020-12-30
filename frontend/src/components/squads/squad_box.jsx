import React from 'react';
import { Link } from 'react-router-dom';

class SquadBox extends React.Component {
  render() {
    // debugger
    return (
        <div>
            <h3><Link to={`/squads/${this.props.id}`}>{this.props.name}</Link></h3>
            <span>{this.props.generalBio}</span>
            <button style={{color: "grey"}}>Join Group</button>
        </div>
    );
  }
}

export default SquadBox;