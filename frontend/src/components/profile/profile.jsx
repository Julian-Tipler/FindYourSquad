import React from 'react';
import SquadBox from '../squads/squad_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squads: []
        }
    }
    
    UNSAFE_componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserSquads(this.props.currentUser.id);
    }

    UNSAFE_componentWillReceiveProps(newState) {
        this.setState({ squads: newState.squads });
    }   
    
    render() {
        if (this.state.squads.length === 0) {
          return (<div>This user has no Squads</div>)
        } else {
          return (
            <div>
              <h2>All of {this.props.currentUser.username}'s Squads</h2>
              {this.state.squads.map(squad => (
                <SquadBox key={squad._id} name={squad.name} generalBio={squad.generalBio}/>
              ))}
            </div>
          );
        }
      }
}

export default Profile;