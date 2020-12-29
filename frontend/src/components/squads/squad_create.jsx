import React from 'react';
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
  }

  // updateName() {
  //   return (e) =>
  //     this.setState({
  //       name: e.currentTarget.value,
  //     });
  // }

  // updateBio() {
  //   return (e) =>
  //     this.setState({
  //       generalBio: e.currentTarget.value,
  //     });
  // }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
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
            <input
              type="textarea"
              value={this.state.skillLevel}
              onChange={this.update("skillLevel")}
              placeholder="Skill level"
            />
            <input
              type="textarea"
              value={this.state.game}
              onChange={this.update("game")}
              placeholder="Game"
            />
            <input
              type="textarea"
              value={this.state.squadSize}
              onChange={this.update("squadSize")}
              placeholder="Squad Size"
            />

            <input type="submit" value="Submit" />
          </div>
        </form>
        <br />
        {/* <SquadBox currentUserId={this.props.currentUserId} editSquad={this.props.editSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
      </div>
    );
  }
}

export default SquadCreate;