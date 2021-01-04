import React from 'react';
import { withRouter } from 'react-router-dom';
import VG4 from './VG4.jpg'
import './squad_create.css'
// import SquadBox from './squad_box';

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
      // errors: {}

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSquad: nextProps.newSquad.text});
  // }
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

    this.props.createSquad(squad)
    this.setState({ name: "" });
    this.setState({ generalBio: "" });
    this.setState({ skillLevel: "" });
    this.setState({ game: "" });
    this.setState({ squadSize: "" });
    
    // this.props.history.push('/squads');  /// goes to squad page, but without new squad 
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
        // let squadSizeDropdown = []
        // for (let num = 2; num <= this.props.games[this.state.game].squadSize; num++) {
        //   squadSizeDropdown.push(num)
        // }
        // console.log(squadSizeDropdown)

        //   this.props.games

      
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
                {/* <option value="Apex">Apex</option>
                <option value="Call of Duty">Call of Duty</option> */}
                  {this.props.games.map((game) => {
                    return (
                      <option key={`${game._id}`} value={`${game._id}`}>{game.name}</option>
                    );
                  })}
              </select>
              {/* <h2 id='steps'>4. Choose a squad size</h2> */}
              <select className='create-bar' onChange={this.update("squadSize")}>
                <option value="">Squad Size</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {/* <select onChange={this.update("squadSize")}>
                <option value="">Squad Size</option>
                {squadSizeDropdown.map(num => {
                  return(
                    <option key={`${num}`} value={`${num}`}>{num}</option>
                  )
                })}
              </select> */} 
              {/* <h2 id='steps'>5. Pick a skill level</h2> */}
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
        {/* <SquadBox currentUserId={this.props.currentUserId} updateSquad={this.props.updateSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
      </div>
    );
  }
}

export default SquadCreate;

{/* 
            // <input
            //   type="text"
            //   value={this.state.name}
            //   onChange={this.update("name")}
            //   placeholder="Name your squad..."
            // />
            // <br />
            // <input
            //   type="textarea"
            //   value={this.state.generalBio}
            //   onChange={this.update("generalBio")}
            //   placeholder="Squad Bio"
            // />
            // <input
            //   type="textarea"
            //   value={this.state.skillLevel}
            //   onChange={this.update("skillLevel")}
            //   placeholder="Skill level"
            // />
            // <input
            //   type="textarea"
            //   value={this.state.game}
            //   onChange={this.update("game")}
            //   placeholder="Game"
            // />
            // <input
            //   type="textarea"
            //   value={this.state.squadSize}
            //   onChange={this.update("squadSize")}
            //   placeholder="Squad Size"
            // /> */}