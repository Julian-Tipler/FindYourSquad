import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errors from './errors_reducer'
import squads from './squads_reducer'

const RootReducer = combineReducers({
  session: SessionReducer, 
  errors,
  squads
});

export default RootReducer;