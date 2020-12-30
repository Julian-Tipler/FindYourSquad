import { 
    RECEIVE_SQUAD,
    RECEIVE_SQUADS, 
    RECEIVE_USER_SQUADS, 
    RECEIVE_NEW_SQUAD 
} from '../actions/squad_actions';
  
  const SquadsReducer = (state = { all: {}, currentSquad: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_SQUAD:
            newState.currentSquad = action.squad.data;
            return newState;
        case RECEIVE_SQUADS:
            newState.all = action.squads.data;
            return newState;
        case RECEIVE_USER_SQUADS:
            newState.user = action.squads.data;
            return newState;
        case RECEIVE_NEW_SQUAD:
            newState.new = action.squad.data
            return newState;
        default:
            return state;
    }
  };
  
  export default SquadsReducer;