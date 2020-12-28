import React from 'react';

class SquadBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.name}</h3>
            <span>{this.props.generalBio}</span>
            <button style={{color: "grey"}}>Join Group</button>
        </div>
    );
  }
}

export default SquadBox;