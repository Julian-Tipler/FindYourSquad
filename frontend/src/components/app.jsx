import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import '../app.css';

import Modal from './modal/modal';
import SquadsContainer from './squads/squads_container';
import MainPage from './main/main_page';
import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SquadShowContainer from './squads/squad_show/squad_show_container';
import SquadCreateContainer from './squads/squad_create_container';
import UserProfileContainer from './profile/user_profile_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Modal />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/profile/:userId" component={UserProfileContainer} />
      <ProtectedRoute exact path="/squads/:squadId" component={SquadShowContainer} />
      <ProtectedRoute exact path="/squads" component={SquadsContainer} />
      <ProtectedRoute exact path="/new_squad" component={SquadCreateContainer} />
    </Switch>
  </div>
);

export default App;