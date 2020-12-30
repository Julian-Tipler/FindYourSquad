import React from 'react';
import { withRouter } from 'react-router-dom';
import SquadBoxContainer from './squad_box_container';
import SearchSquadContainer from './search_squad_container'

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
          <div>
            <SearchSquadContainer/>
          </div>
          <h2>All Squads</h2>
          {this.state.squads.map(squad => (
            <SquadBoxContainer 
              squad={squad} 
              currentUserId={this.props.currentUserId} 
              updateSquad={this.props.updateSquad} 
              key={squad._id} 
              name={squad.name} 
              generalBio={squad.generalBio}
              skillLevel={squad.skillLevel} 
              game={squad.game}
              squadSize={squad.squadSize}
              />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Squad);