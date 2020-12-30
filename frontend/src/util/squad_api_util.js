import axios from 'axios';

export const getSquad = id => {
  return axios.get(`/api/squads/${id}`);
};

export const getSquads = () => {
  return axios.get('/api/squads')
};

export const getUserSquads = id => {
  return axios.get(`/api/squads/user/${id}`)
};

export const formSquad = data => {
  return axios.post('/api/squads/', data)
}
