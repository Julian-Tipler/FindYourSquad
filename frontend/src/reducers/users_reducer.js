import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';


const UsersReducer = (state = { profileUser: {}, all: {}}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case RECEIVE_USER:
            newState.profileUser = action.user.data;
            return newState;
        case REMOVE_USER:
            newState.profileUser = {};
            return newState;
        default:
            return state;
    }
  };
  
  export default UsersReducer;