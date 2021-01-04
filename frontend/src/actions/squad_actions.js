import * as APISquad from '../util/squad_api_util';
import MySocket from "../socket";

export const RECEIVE_SQUAD = "RECEIVE_SQUAD";
export const RECEIVE_SQUADS = "RECEIVE_SQUADS";
export const RECEIVE_USER_SQUADS = "RECEIVE_USER_SQUADS";
export const RECEIVE_NEW_SQUAD = "RECEIVE_NEW_SQUAD";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
export const receiveSquad = squad => ({
  type: RECEIVE_SQUAD,
  squad
});

export const receiveSquads = squads => ({
  type: RECEIVE_SQUADS,
  squads
});

export const receiveUserSquads = squads => ({
  type: RECEIVE_USER_SQUADS,
  squads
});

export const receiveNewSquad = squad => ({
  type: RECEIVE_NEW_SQUAD,
  squad
});



export const fetchSquad = id => dispatch => (
  APISquad.getSquad(id)
    .then(squad => dispatch(receiveSquad(squad)),
        err => (
        dispatch(receiveErrors(err.response.data))
    )))


export const fetchSquads = () => dispatch => (
  APISquad.getSquads()
    .then(squads => dispatch(receiveSquads(squads)),
        err => (
        dispatch(receiveErrors(err.response.data))
    )))


export const fetchFilteredSquads = (searchParams) => dispatch => (
  APISquad.getFilteredSquads(searchParams)
    .then(squads => dispatch(receiveSquads(squads)),
        err => (
        dispatch(receiveErrors(err.response.data))
    )))

// export const fetchUserSquads = id => dispatch => (
//   APISquad.getUserSquads(id)
//     .then(squads => dispatch(receiveUserSquads(squads)))
//     .catch(err => console.log(err))
// );

export const createSquad = data => dispatch => (
  APISquad.formSquad(data)
    .then(squad => dispatch(fetchSquads()),
    err => (
        dispatch(receiveErrors(err.response.data))
    )))


export const updateSquad = data => dispatch => (
  APISquad.editSquad(data)
    .then((squad) => dispatch(receiveSquad(squad)))
    .catch(err => console.log(err))
);

export const postMessage = (data) => dispatch => {
    return (
        APISquad.postMessage(data)
            .then((squad) => {
                dispatch(receiveSquad(squad));
                MySocket.getSocket().emit('new-message', squad);
            })
            .catch(err => console.log(err))
    )
};
