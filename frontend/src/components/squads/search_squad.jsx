import React from 'react';
import './squads.css';

class SearchSquad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: "",
      squadSize: "",
      skillLevel: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchParams = {};
    if (this.state.game !== "") {
      Object.assign(searchParams, { game: this.state.game });
    }
    if (this.state.squadSize !== "") {
      Object.assign(searchParams, { squadSize: this.state.squadSize });
    }
    if (this.state.skillLevel !== "") {
      Object.assign(searchParams, { skillLevel: this.state.skillLevel });
    }

    this.props.fetchFilteredSquads(searchParams);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {

    if (Object.values(this.props.games).length === 0) {
      return <> </>;
    }

    return (
      <div>
        <form className='custom-select' onSubmit={this.handleSubmit}>
            <select className='search-bar' onChange={this.update("game")}>
              <option value="">Game</option>
               {this.props.games.map((game) => {
                  return (
                    <option key={`${game._id}`} value={`${game._id}`}>{game.name}</option>
                  );
                })}
            </select>
            <select className='search-bar' onChange={this.update("squadSize")}>
              <option value="">Squad Size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select className='search-bar' onChange={this.update("skillLevel")}>
              <option value="">Skill Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Skilled">Skilled</option>
              <option value="Expert">Expert</option>
              <option value="Master">Master</option>
            </select>

            <input id='search-submit' type="submit" value="Submit" />
        </form>
        <br/>
      </div>
    );
  }
}

export default SearchSquad;
