import React from 'react';

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

    handleSubmit(e) {
        e.preventDefault();
        let searchParams = {
            game: this.state.game,
            squadSize: this.state.squadSize,
            skillLevel: this.state.skillLevel,
        };
        this.props.fetchFilteredSquads(searchParams)
    }

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
                <select onChange={this.update("game")}>
                  <option value="">Game</option>
                  <option value="Apex">Apex</option>
                  <option value="Call of Duty">Call of Duty</option>
                </select>
                <select onChange={this.update("squadSize")}>
                  <option value="">Squad Size</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
          </div>
        );
    }
}

export default SearchSquad;




// import React from "react";







// import SquadBox from './squad_box';

// class SquadCreate extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       generalBio: "",
//       newSquad: "",
//       skillLevel: "",
//       game: "",
//       squadSize: "",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSquad: nextProps.newSquad.text});
  // }

//   handleSubmit(e) {
//     e.preventDefault();
//     let squad = {
//       name: this.state.name,
//       generalBio: this.state.generalBio,
//       skillLevel: this.state.skillLevel,
//       game: this.state.game,
//       squadSize: this.state.squadSize,
//     };

//     this.props.createSquad(squad);
//     this.setState({ name: "" });
//     this.setState({ generalBio: "" });
//     this.setState({ skillLevel: "" });
//     this.setState({ game: "" });
//     this.setState({ squadSize: "" });
//   }

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

//   update(field) {
//     return (e) =>
//       this.setState({
//         [field]: e.currentTarget.value,
//       });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.update("name")}
//               placeholder="Name your squad..."
//             />
//             <br />
//             <input
//               type="textarea"
//               value={this.state.generalBio}
//               onChange={this.update("generalBio")}
//               placeholder="Squad Bio"
//             />
//             <input
//               type="textarea"
//               value={this.state.skillLevel}
//               onChange={this.update("skillLevel")}
//               placeholder="Skill level"
//             />
//             <input
//               type="textarea"
//               value={this.state.game}
//               onChange={this.update("game")}
//               placeholder="Game"
//             />
//             <input
//               type="textarea"
//               value={this.state.squadSize}
//               onChange={this.update("squadSize")}
//               placeholder="Squad Size"
//             />

//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <br />
//         {/* <SquadBox currentUserId={this.props.currentUserId} updateSquad={this.props.updateSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
//       </div>
//     );
//   }
// }

//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.update("name")}
//               placeholder="Name your squad..."
//             />
//             <br />
//             <input
//               type="textarea"
//               value={this.state.generalBio}
//               onChange={this.update("generalBio")}
//               placeholder="Squad Bio"
//             />
//             <input
//               type="textarea"
//               value={this.state.skillLevel}
//               onChange={this.update("skillLevel")}
//               placeholder="Skill level"
//             />
//             <input
//               type="textarea"
//               value={this.state.game}
//               onChange={this.update("game")}
//               placeholder="Game"
//             />
//             <input
//               type="textarea"
//               value={this.state.squadSize}
//               onChange={this.update("squadSize")}
//               placeholder="Squad Size"
//             />

//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <br />
//         {/* <SquadBox currentUserId={this.props.currentUserId} updateSquad={this.props.updateSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
//       </div>
//     );
//   }
// }

//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.update("name")}
//               placeholder="Name your squad..."
//             />
//             <br />
//             <input
//               type="textarea"
//               value={this.state.generalBio}
//               onChange={this.update("generalBio")}
//               placeholder="Squad Bio"
//             />
//             <input
//               type="textarea"
//               value={this.state.skillLevel}
//               onChange={this.update("skillLevel")}
//               placeholder="Skill level"
//             />
//             <input
//               type="textarea"
//               value={this.state.game}
//               onChange={this.update("game")}
//               placeholder="Game"
//             />
//             <input
//               type="textarea"
//               value={this.state.squadSize}
//               onChange={this.update("squadSize")}
//               placeholder="Squad Size"
//             />

//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <br />
//         {/* <SquadBox currentUserId={this.props.currentUserId} updateSquad={this.props.updateSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
//       </div>
//     );
//   }
// }

//             <input
//               type="text"
//               value={this.state.name}
//               onChange={this.update("name")}
//               placeholder="Name your squad..."
//             />
//             <br />
//             <input
//               type="textarea"
//               value={this.state.generalBio}
//               onChange={this.update("generalBio")}
//               placeholder="Squad Bio"
//             />
//             <input
//               type="textarea"
//               value={this.state.skillLevel}
//               onChange={this.update("skillLevel")}
//               placeholder="Skill level"
//             />
//             <input
//               type="textarea"
//               value={this.state.game}
//               onChange={this.update("game")}
//               placeholder="Game"
//             />
//             <input
//               type="textarea"
//               value={this.state.squadSize}
//               onChange={this.update("squadSize")}
//               placeholder="Squad Size"
//             />

//             <input type="submit" value="Submit" />
//           </div>
//         </form>
//         <br />
//         {/* <SquadBox currentUserId={this.props.currentUserId} updateSquad={this.props.updateSquad} key={squad._id} name={squad.name} generalBio={squad.generalBio} /> */}
//       </div>
//     );
//   }
// }

