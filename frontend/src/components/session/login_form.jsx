import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/squads');
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
      password: this.state.password
      // platform: "",
      // communityRating: 0.0,
      // bio: ""
    };

    this.props.login(user); 
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


      <div className="session-container">

        <section className="auth-sidebar-section">
          <div className="auth-sidebar-div">
            <header className="auth-side-header"></header>
          </div>

        </section>

        <div className="main-auth-right">
          <div className="session-form-div">
            <form onSubmit={this.handleSubmit}>
              <div>
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                <br/>
                <input type="submit" value="Submit" />
                {this.renderErrors()}
              </div>
            </form>
          </div>
          </div>
      
      </div>
    );
  }
}

export default withRouter(LoginForm);