import React from 'react';
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.kd === "" || this.state.kills === "" || this.state.wins === "" ) return null


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
  
  }

    handleEditSubmit(e) {
    e.preventDefault();
    if (this.state.kd === "" || this.state.kills === "" || this.state.wins === "" ) return null


      var copied = Object.assign({}, this.state);
    delete copied.editFormOpen;


    let data = {
      id: this.props.profileUser._id,
      statId: this.props.statId,
      stats: copied
    };

    this.props.editUserStats(data);
    this.setState({ kd: "" });
    this.setState({ kills: "" });
    this.setState({ wins: "" });
    this.setState({editFormOpen: false})
  }

  

  update(field) {
    return (e) =>
    !Number(e.currentTarget.value) && (e.currentTarget.value !== "" ) && (e.currentTarget.value !== ".") ? null :
      this.setState({
        [field]: e.currentTarget.value,
      });
  }   



  render() {
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
          <form className="stats-form-form" onSubmit={this.handleEditSubmit}>
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
            <button id='edit-stat-btn' onClick={ ()=> this.setState({editFormOpen: true})}>Edit Stats

            </button>
          )}
    
  }
}

export default GameStatsForm;