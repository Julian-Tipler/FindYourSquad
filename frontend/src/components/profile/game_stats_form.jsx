import React from 'react';
// import SquadBox from './squad_box';
import './user_profile.css';

class GameStatsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kd: "",
      kills: "",
      wins: "",
      editFormOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSquad: nextProps.newSquad.text});
  // }
 

  handleSubmit(e) {
    e.preventDefault();

    var copied = Object.assign({}, this.state);
    delete copied.editFormOpen;

    let data = {
      id: this.props.profileUser._id,
      gameId: this.props.game._id,
      gameName: this.props.game.name,
      stats: copied
    };

    this.props.addUserStats(data);
    this.setState({ kd: "" });
    this.setState({ kills: "" });
    this.setState({ wins: "" });
    // this.setState({ game: "" });
    // this.setState({ squadSize: "" });
    // this.props.history.push('/squads');  /// goes to squad page, but without new squad 
  }

    handleEditSubmit(e) {
      // console.log("editing")
      // console.log(this.props.statId)
    e.preventDefault();

      var copied = Object.assign({}, this.state);
    delete copied.editFormOpen;


    let data = {
      id: this.props.profileUser._id,
      // gameId: this.props.game._id,
      // gameName: this.props.game.name,
      statId: this.props.statId,
      stats: copied
    };

    this.props.editUserStats(data);
    this.setState({ kd: "" });
    this.setState({ kills: "" });
    this.setState({ wins: "" });
    // this.setState({ game: "" });
    // this.setState({ squadSize: "" });
    // this.props.history.push('/squads');  /// goes to squad page, but without new squad 
  }

  

  update(field) {
    return (e) =>
    !Number(e.currentTarget.value) ? null :
      this.setState({
        [field]: e.currentTarget.value,
      });
  }   



  render() {
    //   if (Object.values(this.props.games).length === 0) {
    //     return <> </>
    //   }

    




    if (this.props.type === "create"){

      return (

        <div className="user-stat-form" key={`${this.props.game.name}form`}>
            <h2 id='stats-title'>Fill out/update your {this.props.game.name} stats</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
                  <input
                  type="text"
                  id='user-stats'
                  value={this.state.kd}
                  onChange={this.update("kd")}
                  placeholder="K/D"
                  />
                  <br />
                  <input
                  type="text"
                  id='user-stats'
                  value={this.state.kills}
                  onChange={this.update("kills")}
                  placeholder="Kills"
                  />
                  <input
                  type="text"
                  id='user-stats'
                  value={this.state.wins}
                  onChange={this.update("wins")}
                  placeholder="Wins"
                  />
      

                  <input id='stats-btn' type="submit" value="Submit" />
              </div>
          </form>
        </div>
    );}

    else if (this.state.editFormOpen) {

      return (


        <div className="user-stat-form" key={`${this.props.game.name}form`}>
            <h2 id='stats-title'>Edit your {this.props.game.name} stats</h2>
          <form onSubmit={this.handleEditSubmit}>
            <div>
                  <input
                  id='user-stats'
                  value={this.state.kd}
                  onChange={this.update("kd")}
                  placeholder="K/D"
                  />
                  <br />
                  <input
                  type="text"
                  id='user-stats'
                  value={this.state.kills}
                  onChange={this.update("kills")}
                  placeholder="Kills"
                  />
                  <input
                  type="text"
                  id='user-stats'
                  value={this.state.wins}
                  onChange={this.update("wins")}
                  placeholder="Wins"
                  />
      

                  <input id='stats-btn' type="submit" value="Submit" />
              </div>
          </form>
        </div>)}
        else {

          return (
            <button onClick={ ()=> this.setState({editFormOpen: true})}>Edit Stats

            </button>
          )}
    
  }
}

export default GameStatsForm;