import React from 'react';
import { Redirect } from 'react-router-dom';
import './main.css';
import VG3 from './VG3.jpg'

class MainPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      redirect: null
    }
    this.signup = this.signup.bind(this)
  }

  signup(){
    this.setState({ redirect: `/signup` })
  }

  render() {
    if (this.state.redirect != null) {
      return <Redirect to={this.state.redirect}/>
    }

    return (
      <div id='main-page'>
        <div id='left'>
          <img className='left-pic' src={VG3} />
        </div>
        <div id='middle'>
          <h1 id='main-h1'>Squad Finding Made Easy</h1>
          <p id='main-text'>
              Intuitive competitive gaming platform to not only join and create 
              squads but to also communicate with other squad members in the 
              same group. Find the perfect gaming squad for you and get right 
              into the battlefield to win competitions, have fun, and climb
              the leaderboards.
          </p>
          <button id='main-demo' onClick={this.signup}>Sign up now!</button>
        </div>
      </div>
    );
  }
}

export default MainPage;