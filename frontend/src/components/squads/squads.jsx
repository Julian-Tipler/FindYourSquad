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
    // this.fetchSquads = this.props.fetchSquads.bind(this);
  }

  componentDidMount() {
    this.props.fetchSquads();
  }

  // refresh() {
  //   this.props.fetchSquads();
  // }

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
              game={squad.game}
              key={squad._id} 
              name={squad.name} 
              generalBio={squad.generalBio}
              skillLevel={squad.skillLevel} 
              squadSize={squad.squadSize}
              members={squad.members}
              leader={squad.leader}
              />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Squad);