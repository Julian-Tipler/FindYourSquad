import React from "react";
    import './user_profile.css';
import SquadBoxContainer from '../squads/squad_box_container'
import GameStatsFormContainer from './game_stats_form_container'
import CarouselContainer from './carousel_container'
import ImageUpload from './image_upload'

class UserProfile extends React.Component{
    // constructor(props){
    //     super(props);
    //     // if (this.props.games[0] !== undefined){
    //     // this.state = {
    //     //     gameState: this.props.games[0]
    //     // }}


    // }

    componentDidMount(){
        this.props.fetchUser(this.props.profileUserId)
        this.props.fetchGames()
        .then(games => 
         this.setState({gameState:games.games.data[0]._id})   )
    }

    componentWillUnmount(){
        this.props.removeUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profileUserId !== this.props.profileUserId) {
            this.props.fetchUser(this.props.profileUserId)
        }
    }
    // componentDidReceiveProps(){
    //     this.props.fetchUser(this.props.profileUserId)
    //     this.props.fetchGames()
    //     .then(games => 
    //      this.setState({gameState:games.games.data[0]._id})   )
    // }

    render() {
        // {
        //     // this.setState({gameState: this.props.games[0]._id})
        //     return <> </>
        // }

        if (!this.props.profileUser || !this.props.profileUser.squads || !this.state){
            return <> </>
        }
        const { profileUser, profileUserId} = this.props

        return(
            <div className="user-profile-container">
                <div className="profile-squad-boxes">
                    <h3 className="profile-users-squads-title">Associated Squads</h3>
                    {profileUser.squads.map(squad => (
                        <SquadBoxContainer 
                        squad={squad} 
                        currentUserId={this.props.currentUserId} 
                        key={squad._id} 
                        comingFromProfile={true}
                        />
                    ))}
                </div>

                <div className="user-profile-body">
                    <h2>{profileUser.username}'s Profile Page</h2>
                    <div className='user-profile-carousel'>
                        <CarouselContainer
                            currentUserId= {this.props.currentUserId}
                            profileUserId= {this.props.profileUserId}
                            />
                    </div>
                    <span className='img-upload'>
                        {this.props.currentUserId === profileUserId ? <ImageUpload fetchUser={this.props.fetchUser} profileUserId={profileUserId}/> : <> </>}
                    </span>

                    <header className='user-profile-header'>
                            <h3 id='user-name'>Player Stats Breakdown</h3>
                    </header>

                    <div id='pp-game-btn-container'>
                        {/* <h1 id='profile-title'>Click a game to view your stats</h1> */}
                        {this.props.games.map((game) => {
                            if (game._id === this.state.gameState){
                                return (
                                    <button id='active-game-button' onClick={()=> this.setState({gameState: game._id})} key={`${game._id}`} >{game.name}</button> 
                                )
                            } else {
                                return (
                                    <button id='pp-game-button' onClick={()=> this.setState({gameState: game._id})} key={`${game._id}`} >{game.name}</button> //value={`${game._id}`}
                                );
                            }
                        })}
                    </div>
                    <div className="">
                        <div className="user-profile-main">
                            <div className="user-stat-section">
                            {profileUser.userStats.map(stat => {
                                if (stat.game === this.state.gameState){
                                    return (
                                        <div key={`${profileUser.username}${stat._id}`}className="user-stat-box">
                                            <h3 id="stat-date">{(stat.updatedAt).slice(0,10)}</h3>
                                            <h2 id='profile-stat-name'>{stat.gameName} Stats</h2>
                                            {Object.keys(stat.stats).map((key, idx) => {
                                                return (
                                                    <h3 id='profile-stat' key={`${idx}${stat.game}`} className="stat-item">{key.length < 3 ? key.toUpperCase().split("").join("/") : key.slice(0,1).toUpperCase() + key.slice(1)}: {stat.stats[key]}</h3> 
                                                )
                                            })}
                                        </div> )
                                }
                                return <></>
                            })}
                            </div>

                        {this.props.games.map((game, idx) => {
                            // if (game.id )
                            if (game._id !== this.state.gameState){
                                return <div key={idx}> </div>
                            }
                            if (this.props.currentUserId === profileUserId){ 
                            if (profileUser.userStats.find(stat => stat.game === this.state.gameState)){
                                    return (
                                        <div key={idx} className="user-stat-form-section">
                                            <GameStatsFormContainer statId={(profileUser.userStats.find(stat => stat.game === this.state.gameState))._id} key={`${game._id}${idx}`} type="edit" game={game} profileUserId={profileUserId} profileUser={profileUser} /> 
                                        </div>
                                    )}
                                    
                            else {
                                return (
                                    <div key={idx}className="user-stat-form-section">
                                            <GameStatsFormContainer key={`${game._id}${idx}`} type="create" game={game} profileUserId={profileUserId} profileUser={profileUser} /> 
                                        </div>
                                )
                            }
                            
                            
                            ;}
                        return <></>})
                        }   


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;


