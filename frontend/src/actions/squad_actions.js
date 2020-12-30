// import {
//     getSquad,
//     getSquads, 
//     getUserSquads, 
//     formSquad,
//     postMessage, 
//     editSquad, 
//     getFilteredSquads 
// } from '../util/squad_api_util';

import * as APISquad from '../util/squad_api_util';

export const RECEIVE_SQUAD = "RECEIVE_SQUAD";
export const RECEIVE_SQUADS = "RECEIVE_SQUADS";
export const RECEIVE_USER_SQUADS = "RECEIVE_USER_SQUADS";
export const RECEIVE_NEW_SQUAD = "RECEIVE_NEW_SQUAD";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";



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
    .then(squad => dispatch(receiveSquad(squad)))
    .catch(err => console.log(err))
);

export const fetchSquads = () => dispatch => (
  APISquad.getSquads()
    .then(squads => dispatch(receiveSquads(squads)))
    .catch(err => console.log(err))
);

export const fetchFilteredSquads = (searchParams) => dispatch => (
  APISquad.getFilteredSquads(searchParams)
    .then(squads => dispatch(receiveSquads(squads)))
    .catch(err => console.log(err))
)

export const fetchUserSquads = id => dispatch => (
  APISquad.getUserSquads(id)
    .then(squads => dispatch(receiveUserSquads(squads)))
    .catch(err => console.log(err))
);

export const createSquad = data => dispatch => (
  APISquad.formSquad(data)
    .then(squad => dispatch(receiveNewSquad(squad)))
    .catch(err => console.log(err))
);

export const updateSquad = data => dispatch => (
  APISquad.editSquad(data)
    .then((squad) => dispatch(receiveNewSquad(squad)))
    .catch(err => console.log(err))
);

export const postMessage = data => dispatch => (
  APISquad.postMessage(data)
    .then((squad) => dispatch(receiveNewSquad(squad)))
    .catch(err => console.log(err))
);