import axios from 'axios';

export const getSquads = () => {
  return axios.get('/api/squads')
};

export const getUserSquads = id => {
  return axios.get(`/api/squads/user/${id}`)
};

export const formSquad = data => {
  return axios.post('/api/squads/', data)
}
