import React from "react";
import { Link } from "react-router-dom";
import './squad_overview.css'

class SquadShowRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.squadId,
      requestId: this.props.request._id,
      type: "",
    };
    this.handleAcceptMember = this.handleAcceptMember.bind(this);
    this.handleDeclineRequest = this.handleDeclineRequest.bind(this);
    this.renderButtons = this.renderButtons.bind(this)
  }

  handleAcceptMember(e) {
    e.preventDefault();
    this.setState({
      type:"acceptMember"
    })
    // this.state.type = "acceptMember";
    // this.setState({type: "acceptMember"});
    this.props.updateSquad(this.state);
  }

  handleDeclineRequest(e) {
    e.preventDefault();
    this.state.type = "declineRequest";
    // this.setState({type: "declineRequest"});
    this.props.updateSquad(this.state);
  }

  renderButtons() {
    if (this.props.currentUser.id===this.props.currentSquad.leader) {
      return (
        <div id='sr-btns'>
          <button id='sr-am' onClick={this.handleAcceptMember}>Accept</button>
          <button id='sr-dr' onClick={this.handleDeclineRequest}>Decline</button>
        </div>
      )
    }
  }

  renderStats() {
    let userStats = this.props.request.userStats.filter(userStat => userStat.gameName === this.props.currentSquad.game.name);
    if (userStats.length === 0) {
        return <></>
    } else {
        return (
            <div className="userStats">
                <div className="user-box-kd">KD: {userStats[0].stats.kd}</div>
                <div className="user-box-kills">Kills: {userStats[0].stats.kills}</div>
                <div className="user-box-wins">Wins: {userStats[0].stats.wins}</div>
            </div>
        )
    }
  }

  render() {



    return (
      <div className='request-box'>
        <div><Link id='sr-gp' to={`/profile/${this.props.request._id}`}>{this.props.request.username}</Link></div>
        {this.renderStats()}
        <div>
          {this.renderButtons()}
        </div>
        

      </div>
    );
  }
}
export default SquadShowRequest;
