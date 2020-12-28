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

  componentWillMount() {
    this.props.fetchSquads();
  }

  componentWillReceiveProps(newState) {
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
            <SquadBox key={squad._id} text={squad.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Squad);