import React from 'react';
import { withRouter } from 'react-router-dom';
import SquadBoxContainer from './squad_box_container';
import SearchSquadContainer from './search_squad_container'
import './squads.css';

class Squad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      squads: []
      
    }
  }

  componentDidMount() {
    this.props.fetchSquads();
  }

  UNSAFE_componentWillReceiveProps(newState) {
    this.setState({ squads: newState.squads });
  }

  render() {
    if (this.props.squads.length === 0) {
      return (
        <div className="squad-index-main">
          <h2 id='squad-forum-title'>Squad Forum</h2>
          <div id='search-bar'>
            <SearchSquadContainer/>
          </div>
          There are no Squads
        </div>
      )
    } else {
      return (
        <div className="squad-index-main">
          <h2 id='squad-forum-title'>Squad Forum</h2>
          <h2 id='search-desc'>Can't find what you're looking for?
          Use the search bar below</h2>
          <div id='search-bar'>
            <SearchSquadContainer/>
          </div>
          <div id='squad-boxes'>
            {this.props.squads.map(squad => (
              <SquadBoxContainer 
                squad={squad} 
                currentUserId={this.props.currentUserId} 
                updateSquad={this.props.updateSquad}
                key={squad._id} 
                />
            ))}

          </div>
          <footer className="squads-footer"></footer>
        </div>
      );
    }
  }
}

export default withRouter(Squad);