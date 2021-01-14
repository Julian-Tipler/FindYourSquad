import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import VG4 from './VG4.jpg'
import './squad_create.css'

class SquadCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      generalBio: "",
      newSquad: "",
      skillLevel: "",
      game: "",
      squadSize: "",
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentDidMount() {
    this.props.fetchGames()
  }

  handleSubmit(e) {
    e.preventDefault();
    let squad = {
      name: this.state.name,
      generalBio: this.state.generalBio,
      skillLevel: this.state.skillLevel,
      game: this.state.game,
      squadSize: this.state.squadSize,
    };

    this.props.createSquad(squad).then( squad => {
      console.log(squad)
      if (!squad.errors){
        this.setState({ redirect: true })
      }
    })
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  renderErrors() {
      if (this.props.errors.length !== 0){
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
          </li>
        ))}
      </ul>
    );
  }}



  render() {
      if (Object.values(this.props.games).length === 0) {
        return <> </>
      }
      if (this.state.redirect === true){
        return (
          <Redirect to='/squads'/>
        )
      }

    return (

      <div className='create-page'>
        <div className='left-side'>
          <img className='create-pic' src={VG4} />
        </div>
        <div className='right-side'>
          <h1 id='create-title'>Create Your Squad In Few Short Steps</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2 id='steps'>1. Name your squad</h2>
              <input
                type="text"
                id='info'
                value={this.state.name}
                onChange={this.update("name")}
                placeholder="Name your squad..."
              />
              <br />
              <h2 id='steps'>2. Give your squad a bio</h2>
              <input
                type="textarea"
                id='info'
                value={this.state.generalBio}
                onChange={this.update("generalBio")}
                placeholder="Squad Bio"
              />
              <h2 id='steps'>3. Select a game and desired preferences</h2>
              <select className='create-bar' onChange={this.update("game")}>
                <option value="">Game</option>
                  {this.props.games.map((game) => {
                    return (
                      <option key={`${game._id}`} value={`${game._id}`}>{game.name}</option>
                    );
                  })}
              </select>
              <select className='create-bar' onChange={this.update("squadSize")}>
                <option value="">Squad Size</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select className='create-bar' onChange={this.update("skillLevel")}>
                <option value="">Skill Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Skilled">Skilled</option>
                <option value="Expert">Expert</option>
                <option value="Master">Master</option>
              </select> 
              <br/>
              <input type="submit" id='create-submit-btn' value="Submit" /> 
            </div>        
          {this.renderErrors()}
        </form>
        </div>
      </div>
    );
  }
}

export default SquadCreate;