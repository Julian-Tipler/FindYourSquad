import React from 'react';
import SquadBox from './squad_box';

class SquadCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
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
      text: this.state.text
    };

    this.props.createSquad(squad); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update()}
                        placeholder="Create your squad..."
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