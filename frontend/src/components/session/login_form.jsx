import React from 'react';
import { withRouter } from 'react-router-dom';
import "./session.css"
import VG1 from './VG1.jpg'

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
    this.demo = this.demo.bind(this);
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
    };

    this.props.login(user); 
  }

  demo(){
    this.setState({ username: 'demoUser', password: 'password' })
  }

  renderErrors() {
    return(
      <div className="login-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </div>
    );
  }

  render() {
    return (
        <div>
            <div className="session-container">
                <div className='split-screen'>
                <div className='main-auth-left'>
                    <img className='login-pic' src={VG1} alt='login-pic' />
                </div>
                <div className="main-auth-right">
                    
                    <div className="session-form-div">
                        <h1 id='login-title'>Welcome to Find Your Squad</h1>
                        <p id='login-desc'>Log In Below</p>

                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <div>
                                <input type="text"
                                id='un'
                                autoComplete='off'
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                                />
                            <br/>
                                <input type="password"
                                id='pass'
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                />
                            {this.renderErrors()}
                            <input id='login-button' type="submit" value="Login" />
                            <button id='demo-button' onClick={this.demo}>Try A Demo</button>
                           
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <footer>
                <div className="github-links">
                    <a href="https://github.com/jylee19" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i><p>Justin Lee</p></a>
                    <a href="https://github.com/Julian-Tipler" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i><p>Julian Tipler</p></a>
                    <a href="https://github.com/wellsniko" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i><p>Niko Wells</p></a>
                    <a href="https://github.com/matteeyao" target="_blank" rel="noreferrer"><i className="fab fa-github fa-3x"></i><p>Matt Yao</p></a>
                </div>
            </footer>
        </div>
    );
  }
}

export default withRouter(LoginForm);