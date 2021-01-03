import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div id='nav-bar-loggedin'>
              <ul>
                <Link className='nav-bar-login-link' to={'/squads'}>All Squads</Link>
                <Link className='nav-bar-login-link' to={`/profile/${this.props.currentUser.id}`}>Profile</Link>
                <Link className='nav-bar-login-link' to={'/new_squad'}>Create a Squad</Link>
                <button id='nav-bar-logout' onClick={this.logoutUser}>Logout</button>
              </ul>
            </div>
        );
      } else {
        return (
          <div id='nav-link'> 
              <ul>
                <Link id='nav-signup-link' to={'/signup'}>Signup</Link>
                <Link id='nav-login-link' to={'/login'}>Login</Link>
              </ul>
            </div>

        );
      }
  }

  render() {
      return (
        <div className='navbar'>
            <div id='navbar-title'>FindYourSquad.com</div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
