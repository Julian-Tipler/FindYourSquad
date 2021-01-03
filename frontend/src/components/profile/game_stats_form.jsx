import React from 'react';
import { withRouter } from 'react-router-dom';
// import SquadBox from './squad_box';

class GameStatsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kd: "",
      kills: "",
      wins: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSquad: nextProps.newSquad.text});
  // }
 

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      id: this.props.profileUser._id,
      gameId: this.props.game._id,
      gameName: this.props.game.name,
      stats: this.state
    };

    this.props.addUserStats(data);
    this.setState({ kd: "" });
    this.setState({ kills: "" });
    this.setState({ wins: "" });
    // this.setState({ game: "" });
    // this.setState({ squadSize: "" });
    // this.props.history.push('/squads');  /// goes to squad page, but without new squad 
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }



  render() {
    //   if (Object.values(this.props.games).length === 0) {
    //     return <> </>
    //   }
    // console.log(this.props.game._id)
      
    return (

      <div className="user-stat-form" key={`${this.props.game.name}form`}>
          <h2>Fill out your {this.props.game.name} stats</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
                <input
                type="text"
                value={this.state.kd}
                onChange={this.update("kd")}
                placeholder="K/D"
                />
                <br />
                <input
                type="text"
                value={this.state.kills}
                onChange={this.update("kills")}
                placeholder="Kills"
                />
                <input
                type="text"
                value={this.state.wins}
                onChange={this.update("wins")}
                placeholder="Wins"
                />
    

                <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default GameStatsForm;