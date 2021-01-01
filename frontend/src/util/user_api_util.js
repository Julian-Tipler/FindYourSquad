import axios from 'axios';

export const getUser = id => {
  return axios.get(`/api/users/${id}`);
};

export const editUser = (data) => {
  return axios.put(`/api/users/${data.id}`, data);
};

export const editUserStats = (data) => {
  return axios.put(`/api/users/${data.id}/stats`, data);
};

export const createUserStats = (data) => {
  return axios.post(`/api/users/${data.id}/stats`, data);
};

