import React from 'react';
import SquadBox from './squad_box';

class SquadCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          generalBio: "",
          newSquad: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newSquad: nextProps.newSquad.text});
  // }

  handleSubmit(e) {
    e.preventDefault();
    let squad = {
      name: this.state.name,
      generalBio: this.state.generalBio
    };

    this.props.createSquad(squad); 
    this.setState({name: ''})
    this.setState({generalBio: ''})
  }

  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }

  updateBio() {
    return e => this.setState({
      generalBio: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div> 
                    <input type="text"
                        value={this.state.name}
                        onChange={this.updateName()}
                        placeholder="Name your squad..."
                    />
                    <br/>
                    <input type="textarea"
                        value={this.state.generalBio}
                        onChange={this.updateBio()}
                        placeholder="Squad Bio"
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <SquadBox text={this.state.newSquad} />
        </div>
    )
  }
}

export default SquadCreate;