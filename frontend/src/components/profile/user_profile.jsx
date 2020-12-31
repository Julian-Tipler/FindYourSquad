import React from "react";
import { Link } from 'react-router-dom';
import './user_profile.css';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            game: "Apex Legends"
        }


    }

    render() {
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
         

        return(
            <div>
                <header className='user-profile-header'>
                    <nav className='user-profile-nav'>
                        {/* <img className='logo' src=""/> */}
                        <ul className='up-nav-list'>
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
                        </ul>
                    </nav>
                </header>
                <br/>
                <button id="COD-button">Call of Duty</button>
                <button id="Apex-button">Apex Legends</button>
                <div>{this.state.game}</div>
                <li>{bio}</li>
                <li>{kd}</li>
                <li>{level}</li>
                <li>{main}</li>
                    
                

            </div>
        )

    }

}


export default UserProfile;