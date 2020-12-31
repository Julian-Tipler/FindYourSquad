import React from 'react';
import { withRouter } from 'react-router-dom';
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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.props.createSquad(squad);
    this.setState({ name: "" });
    this.setState({ generalBio: "" });
    this.setState({ skillLevel: "" });
    this.setState({ game: "" });
    this.setState({ squadSize: "" });
    this.props.history.push('/squads');
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }



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

      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name your squad..."
            />
            <br />
            <input
              type="textarea"
              value={this.state.generalBio}
              onChange={this.update("generalBio")}
              placeholder="Squad Bio"
            />
            <select onChange={this.update("game")}>
              <option value="">Game</option>
              {/* <option value="Apex">Apex</option>
              <option value="Call of Duty">Call of Duty</option> */}
                {this.props.games.map((game) => {
                  return (
                    <option key={`${game._id}`} value={`${game._id}`}>{game.name}</option>
                  );
                })}
            </select>
            <select onChange={this.update("squadSize")}>
              <option value="">Squad Size</option>
              <option value="1">1</option>
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

            <select onChange={this.update("skillLevel")}>
              <option value="">Skill Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Skilled">Skilled</option>
              <option value="Expert">Expert</option>
              <option value="Master">Master</option>
            </select>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
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