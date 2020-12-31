import React from 'react';
import { Link } from 'react-router-dom';
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
        console.log(this.props.currentUserId)
        return (
            <div>
                <Link to={'/squads'}>All Squads</Link>
                <Link to={`/profile/${this.props.currentUser.id}`}>Profile</Link>
                <Link to={'/new_squad'}>Create a Squad</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>FindYourSquad.com</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
