import { getSquads, getUserSquads, formSquad, editSquad, getFilteredSquads } from '../util/squad_api_util';

export const RECEIVE_SQUADS = "RECEIVE_SQUADS";
export const RECEIVE_USER_SQUADS = "RECEIVE_USER_SQUADS";
export const RECEIVE_NEW_SQUAD = "RECEIVE_NEW_SQUAD";

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





export const fetchSquads = () => dispatch => (
  getSquads()
    .then(squads => dispatch(receiveSquads(squads)))
    .catch(err => console.log(err))
);

export const fetchFilteredSquads = (searchParams) => dispatch => (
  getFilteredSquads(searchParams)
    .then(squads => dispatch(receiveSquads(squads)))
    .catch(err => console.log(err))
)

export const fetchUserSquads = id => dispatch => (
  getUserSquads(id)
    .then(squads => dispatch(receiveUserSquads(squads)))
    .catch(err => console.log(err))
);

export const createSquad = data => dispatch => (
  formSquad(data)
    .then(squad => dispatch(receiveNewSquad(squad)))
    .catch(err => console.log(err))
);

export const updateSquad = data => dispatch => (
  editSquad(data)
    .then((squad) => dispatch(receiveNewSquad(squad)))
    .catch(err => console.log(err))
);