import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errors from './errors_reducer';
import squads from './squads_reducer';
import ui from './ui_reducer';
import games from './games_reducer'
import users from './users_reducer'

const RootReducer = combineReducers({
  session: SessionReducer, 
  errors,
  squads,
  ui,
  games,
  users
});

export default RootReducer;