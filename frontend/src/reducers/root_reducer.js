import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errors from './errors_reducer'
import tweets from './tweets_reducer'

const RootReducer = combineReducers({
  session: SessionReducer, 
  errors,
  tweets
});

export default RootReducer;