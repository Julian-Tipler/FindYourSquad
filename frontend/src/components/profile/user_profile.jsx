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

        if (!this.props.profileUser.squads){
            return <> </>
        }
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
                        // if (game.id )
                        if (profileUser.userStats.map(stat => stat.game === game._id).length > 0){
                            return <> </>
                        }
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
                            key={squad._id} 
                            comingFromProfile={true}
                            />
                        ))}
                        </div>
                    
                </div>

            </div>
        )
    }
}

export default UserProfile;
