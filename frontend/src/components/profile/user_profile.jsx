import React from "react";
import { Link } from 'react-router-dom';
import './user_profile.css';
import SquadBoxContainer from '../squads/squad_box_container'
import GameStatsFormContainer from './game_stats_form_container'

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     game: "Apex Legends"
        // }


    }

    componentDidMount(){
        this.props.fetchUser(this.props.profileUserId)
        this.props.fetchGames()
    }

    render() {

        // console.log(this.props.profileUser.squads)
        if (!this.props.profileUser.squads){
            return <> </>
        }
        // let kd, level, main, bio;
        // if (this.state.game === "Apex Legends"){
        //     kd = 1.5;
        //     level = 500;
        //     main = "Horizon";
        //     bio = "I'm a casual apex player who can fit any playstyle";

        // } else {
        //     // kd = 
        //     // level = 
        //     // main = 
        //     // bio = 
        // }
        

        const { profileUser, profileUserId} = this.props

        return(
            <div>
                <header className='user-profile-header'>
                        <h2>{profileUser.username}</h2>
                       <div className="user-header-div">
                           <span>Bio:{`${profileUser.bio}`}</span>
                           <span>Platform:{`${profileUser.platform}`}</span>
                           
                           <span>Community Rating:{`${profileUser.communityRating}`}</span>
                       </div>
                </header>
                
                {this.props.games.map((game) => {
                  return (
                    <button key={`${game._id}`} >{game.name}</button> //value={`${game._id}`}
                  );
                })}
                <div className="user-profile-body">
                    <div className="user-profile-main">
                        <div className="user-stat-section">
                          {profileUser.userStats.map(stat => {
                            return (
                                <div className="user-stat-box">
                                 <h2>{stat.gameName}</h2>
                                {Object.keys(stat.stats).map(key => {
                                    return (
                                        
                                        <h3 className="stat-item">{key}: {stat.stats[key]}</h3> 
                                        
                                    )
                                })}
                                </div> )
                          })}
                        </div>

                {this.props.games.map((game) => {
                  return (
                    <div className="user-stat-form-section">
                        <GameStatsFormContainer game={game} profileUserId={profileUserId} profileUser={profileUser} /> 
                    </div>
                  );
                })}   
                        
                        
                    </div>
                    <div className="profile-squad-boxes">
                        <h3>{profileUser.username}'s Squads</h3>
                        {profileUser.squads.map(squad => (
                            
                            <SquadBoxContainer 
                            squad={squad} 
                            currentUserId={this.props.currentUserId} 
                            // updateSquad={this.props.updateSquad} 
                            // game={squad.game}
                            key={squad._id} 
                            comingFromProfile={true}
                            // name={squad.name} 
                            // generalBio={squad.generalBio}
                            // skillLevel={squad.skillLevel} 
                            // squadSize={squad.squadSize}
                            // members={squad.members}
                            // leader={squad.leader}
                            />
                        ))}
                        </div>
                    
                </div>

            </div>
        )

    }

}


export default UserProfile;



                {/* <nav className='user-profile-nav'>
                        {/* <img className='logo' src=""/> */
                        /* <ul className='up-nav-list'>
                            <li>
                                <Link id="nav-home" className="btn" to="/">Home</Link>
                            </li>
                            <li>
                                <Link id="nav-profile" className="btn" to="/profile">Profile</Link>
                            </li>
                            <li>
                                <p>Notifications</p>
                            </li>
                            <li>
                                <Link id="nav-squad" className="btn" to="/squads">Squad</Link>
                            </li>
                        </ul> */
                    /* </nav> */}

                      {/* <div>{this.state.game}</div>
                            <li>{bio}</li>
                            <li>{kd}</li>
                            <li>{level}</li>
                            <li>{main}</li> */}