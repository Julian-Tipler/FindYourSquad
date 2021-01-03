import './squads.css'
import React from 'react';
import { Link } from 'react-router-dom';
import Member from './member'

class SquadBox extends React.Component {
  constructor(props){
    super(props);
    
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
            Game image
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

            <span>{this.props.otherForm}</span>
          </div>
        </div>  
      </div>
    }


    
    
    else {
      chooseDisplay = 
        <div className="squad-box-body">
          <div className="squad-box-picture">
            Game image
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

            <span>{this.props.otherForm}</span>
          </div>
          {/* <h3>{this.props.name}</h3> */}




          <div className="squad-box-members-div">
            {this.props.squad.members.map((member) => {
              return (
                <li className="squad-box-member-li"
                  key={member._id}>
                  <Member member={member} />
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









//this was under render before:
    // const data = {
    //   id: this.props.squad._id,
    //   newMemberId: this.props.currentUserId,
    //   type: "addRequest"
    // }