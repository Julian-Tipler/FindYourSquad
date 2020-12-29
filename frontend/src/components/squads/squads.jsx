import React from 'react';
import { withRouter } from 'react-router-dom';
import SquadBox from './squad_box';

class Squad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squads: []
    }
  }

  UNSAFE_componentWillMount() {
    this.props.fetchSquads();
  }

  UNSAFE_componentWillReceiveProps(newState) {
    this.setState({ squads: newState.squads });
  }

  render() {
    if (this.state.squads.length === 0) {
      return (<div>There are no Squads</div>)
    } else {
      return (
        <div>
          <h2>All Squads</h2>
          {this.state.squads.map(squad => (
            <SquadBox 
              squad={squad} 
              currentUserId={this.props.currentUserId} 
              editSquad={this.props.editSquad} 
              key={squad._id} name={squad.name} 
              generalBio={squad.generalBio} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Squad);