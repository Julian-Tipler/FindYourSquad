import './squads.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Member from './member'

class SquadBox extends React.Component {
  constructor(props) {  
    super(props)
    this.renderRequestToJoinButton = this.renderRequestToJoinButton.bind(this)
  }

  renderRequestToJoinButton() {
    let members = this.props.squad.members.map(member => (
      member._id
    ))
    if (members.includes(this.props.currentUser.id)) {
      return <div className='already-a-member'>-Already a member-</div>
    }
    else {
      return(<span>{this.props.otherForm}</span>)
    }
  }
  render() {
    // let requestToJoinSquad
    if (Object.values(this.props).length < 1){
      return <> </>
    }

    
    let chooseDisplay
    if (this.props.comingFromProfile === true) {
      chooseDisplay = 
      <div className="squad-box-profile">
        <div className="squad-box-body">
          <div className="squad-box-picture">
            <img className="squad-box-image" src={`${this.props.squad.game.images[0]}`} alt="squad-box"/>
          </div>
          <div className="squad-box-left-div">
            <h3 className="squad-box-h3">
              <Link id='squad-link' to={`/squads/${this.props.squadId}`} className="squad-box-show-link">{this.props.squad.name}</Link>
            </h3>
            <span className="squad-box-game">{this.props.squad.game.name}</span>
            <div className="squad-box-game-skill-div">
              <div>
                <span>Skill Level: </span>
                <span className="squad-box-skill">{this.props.squad.skillLevel} </span>
              </div>
            </div>
            <div>
              <span>Squad Size: </span>
              <span>{this.props.squad.squadSize}</span>
            </div>
            {this.renderRequestToJoinButton()}
          </div>
        </div>  
      </div>
    }


    
    
    else {
      chooseDisplay = 
        <div className="squad-box-body">
          <div className="squad-box-picture">
            <img className="squad-box-image" src={`${this.props.squad.game.images[0]}`} alt="squad-box"/>
          </div>
          <div className="squad-box-left-div">
            <h3 className="squad-box-h3">
              <Link id='squad-link' to={`/squads/${this.props.squadId}`} className="squad-box-show-link">{this.props.squad.name}</Link>
            </h3>
            <span className="squad-box-game">{this.props.squad.game.name}</span>
            <div className="squad-box-game-skill-div">
              <div>
                <span>Skill Level: </span>
                <span className="squad-box-skill">{this.props.squad.skillLevel} </span>
              </div>
            </div>
            <div>
              <span>Squad Size: </span>
              <span>{this.props.squad.squadSize}</span>
            </div>

           {this.renderRequestToJoinButton()}
          </div>
          <div className="squad-box-members-div">
            {this.props.squad.members.map((member) => {
              return (
                <li className="squad-box-member-li"
                  key={member._id}>
                  <Member member={member} groupGameId={this.props.squad.game._id}/>
                </li>
              );
            })}
          </div>
        </div>
    }
  

    return (
      chooseDisplay
    );
  }
}

export default SquadBox;