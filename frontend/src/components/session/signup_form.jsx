import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
      //       platform: "",
      // communityRating: 0.0,
      // bio: ""
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='split-su'>
        <div className="signup-form-container">
          <h1 id='signup-title'>Never drop in by yourself again</h1>
          <p id='signup-desc'>Find Your Squad helps you meet the perfect teammates</p>
          <form onSubmit={this.handleSubmit}>
            <div className="signup-form">

                <input type="text"
                  id='un-su'
                  autoComplete='off'
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              <br/>
                <input type="password"
                  id='pass-su'
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                />
              <br/>
                <input type="password"
                  id='pass-su'
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
              <br/>
              <input id='submit-btn' type="submit" value="Submit" />
              {this.renderErrors()}
            </div>
          </form>
        </div>
        <div className='signup-desc'>
            <h3>Join Squads to Elevate Your Gaming Experience</h3>
            <div id='text-1'>
              Find Your Squad helps you find a group to team up with! Join a 
              squad that best reflects your skill and intensity for a variety 
              of games. 
            </div>
            <h3>Can't Find a Squad You Like? Create Your Own</h3>
            <div id= 'text-2'>
              Form a squad attuned to your preferences to optimize your experience
              in and out of the game
            </div>
            <h3>Show Off Your Stats And Create a Profile</h3>
            <h3>To Let Others Know Who You Are</h3>
            <div id='text-3'>
              Help others learn a little bit about you and see other profiles to
              find like-minded teammates that you can have fun with
            </div>
            <h3>Hang Out And Communicate With Your Squad</h3>
            <div id='text-4'>
              Message each other in your own squad group chat and coordinate when
              everyone is free. 
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);