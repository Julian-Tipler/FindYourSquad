import React from "react";
import { Link } from 'react-router-dom';
import './user_profile.css';
import SquadBoxContainer from '../squads/squad_box_container'

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            game: "Apex Legends"
        }


    }

    componentDidMount(){
        this.props.fetchUser(this.props.profileUserId)
    }

    render() {

        // console.log(this.props.profileUser.squads)
        if (!this.props.profileUser.squads){
            return <> </>
        }
        let kd, level, main, bio;
        if (this.state.game === "Apex Legends"){
            kd = 1.5;
            level = 500;
            main = "Horizon";
            bio = "I'm a casual apex player who can fit any playstyle";

        } else {
            // kd = 
            // level = 
            // main = 
            // bio = 
        }
        

        const { profileUser} = this.props

        return(
            <div>
                <header className='user-profile-header'>
                        <h2>{profileUser.username}</h2>
                       
                </header>

                
                <button id="COD-button">Call of Duty</button>
                <button id="Apex-button">Apex Legends</button>
                <div className="user-profile-body">
                    <div className="user-profile-main">
                        <div>
                            <div>{this.state.game}</div>
                            <li>{bio}</li>
                            <li>{kd}</li>
                            <li>{level}</li>
                            <li>{main}</li>
                        </div>   
                        
                    </div>
                    <div className="profile-squad-boxes">
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