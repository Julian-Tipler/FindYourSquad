import {
    RECEIVE_GAMES
} from '../actions/game_actions';
  
  const GamesReducer = (state = { all: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_GAMES:
            newState.all = action.games.data;
            return newState;
        default:
            return state;
    }
  };
  
  export default GamesReducer;
  