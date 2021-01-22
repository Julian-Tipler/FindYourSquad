import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo4 from './Logo4.png'


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getLogoLink = this.getLogoLink.bind(this);
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
                <Link className='nav-bar-login-link' to={`/profile/${this.props.currentUser.id}`} id='username'>{this.props.currentUser.username}</Link>
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
                <Link id='nav-login-link' to={'/login'}>Login</Link>
                <Link id='nav-signup-link' to={'/signup'}>Signup</Link>
              </ul>
            </div>

        );
      }
  }

  getLogoLink(){
    if (this.props.loggedIn){
      return(
        <Link to={'/squads'}>
          <img id='navbar-logo' src={Logo4} alt='navbar-logo'/>
        </Link>
      );
    } else {
      return(
        <Link to={'/'}>
          <img id='navbar-logo' src={Logo4} alt='navbar-logo'/>
        </Link>
      );
    }

  }

  render() {
      return (
        <div className='navbar'>
            { this.getLogoLink() }
            <div>{ this.getLinks() }</div> 
        </div>
      );
  }
}

export default NavBar;
