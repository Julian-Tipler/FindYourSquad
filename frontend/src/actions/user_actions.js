import * as APIUser from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER"


export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const removeUser = () => ({
  type: REMOVE_USER
})

export const fetchUser = id => dispatch => (
  APIUser.getUser(id)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);


export const addUserStats = data => dispatch => (
  APIUser.createUserStats(data)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);


export const editUserStats = data => dispatch => (
  APIUser.changeUserStats(data)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
);

export const deleteUserImage = data => dispatch => (
  APIUser.deleteUserImage(data)
  .then(user => dispatch(receiveUser(user)))
  .catch(err => console.log(err))
)