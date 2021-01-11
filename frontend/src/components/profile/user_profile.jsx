import React from "react";
import { Link } from 'react-router-dom';
import './user_profile.css';
import SquadBoxContainer from '../squads/squad_box_container'
import GameStatsFormContainer from './game_stats_form_container'
import ImageUpload from './image_upload'

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        // if (this.props.games[0] !== undefined){
        // this.state = {
        //     gameState: this.props.games[0]
        // }}


    }

    componentDidMount(){
        this.props.fetchUser(this.props.profileUserId)
        this.props.fetchGames()
        .then(games => 
         this.setState({gameState:games.games.data[0]._id})   )
        
    }

    render() {
        // {
        //     // this.setState({gameState: this.props.games[0]._id})
        //     return <> </>
        // }
        // console.log(this.state)

        if (!this.props.profileUser.squads || !this.state){
            return <> </>
        }
        const { profileUser, profileUserId} = this.props

        return(
            <div>
                {/* <header className='user-profile-header'>
                        <h2>{profileUser.username}'s Profile Page</h2>
                       <div className="user-header-div">
                           <span>Bio:{`${profileUser.bio}`}</span>
                           <span>Platform:{`${profileUser.platform}`}</span> */}
                           
                           {/* <span>Community Rating:{`${profileUser.communityRating}`}</span> */}
                       {/* </div> */}
                {/* </header> */}
                <div id='pp-game-btn-container'>
                    {/* <h1 id='profile-title'>Click a game to view your stats</h1> */}
                    {this.props.games.map((game) => {
                    return (
                        <button id='pp-game-button' onClick={()=> this.setState({gameState: game._id})} key={`${game._id}`} >{game.name}</button> //value={`${game._id}`}
                    );
                    })}
                </div>
                <div className="user-profile-body">
                    <div className="user-profile-main">
                        <div className="user-stat-section">
                          {profileUser.userStats.map(stat => {
                            if (stat.game === this.state.gameState){
                                return (
                                    <div key={`${profileUser.username}${stat._id}`}className="user-stat-box">

                                    <h2>{stat.gameName}</h2>
                                    <h3>{(stat.updatedAt).slice(0,10)}</h3>

                                    <h2 id='profile-stat-name'>{stat.gameName} Stats</h2>


                                    {Object.keys(stat.stats).map((key, idx) => {
                                        return (
                                            
                                            <h3 id='profile-stat' key={`${idx}${stat.game}`} className="stat-item">{key}: {stat.stats[key]}</h3> 
                                            
                                        )
                                    })}
                                    </div> )
                            }
                          })}
                        </div>

                    {this.props.games.map((game, idx) => {
                        // if (game.id )
                        if (game._id !== this.state.gameState){
                            return <> </>
                        }
                        if (this.props.currentUserId === profileUserId){
                        return (
                        <div className="user-stat-form-section">
                            <GameStatsFormContainer key={`${game._id}${idx}`} type="create" game={game} profileUserId={profileUserId} profileUser={profileUser} /> 
                        </div>
                        );}
                    })}   
                    {/* <div className="user-images-section">
                        {profileUser.profileImages.map(image => {
                            return (
                                <img className="user-image" key={`${image}`} src={`${image}`} alt=""/>
                            )
                        })}

                    </div>

                    {this.props.currentUserId === profileUserId ? <ImageUpload profileUserId={profileUserId}/> : <> </>}
    
                        
                

                        <ImageUpload profileUserId={profileUserId}/>  */}

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


