import axios from 'axios';

export const getSquad = id => {
  return axios.get(`/api/squads/${id}`);
};

export const getSquads = () => {
  return axios.get('/api/squads')
};


 const serialize = (obj) => {
   let str =
     "?" +
     Object.keys(obj)
       .reduce(function (a, k) {
         a.push(k + "=" + encodeURIComponent(obj[k]));
         return a;
       }, [])
       .join("&");
   return str;
 }

export const getFilteredSquads = (searchParams) => {
  return axios.get(`/api/squads/${serialize(searchParams)}`);
};

export const formSquad = data => {
    return axios.post('/api/squads/', data)
}

export const getSquadMessages = id => {
    return axios.get(`/api/squads/${id}/messages`);
}

export const postMessage = data => {
    return axios.put(`/api/squads/${data.squadId}/messages`, data)
};

export const editSquad = (data) => {
    return axios.put(`/api/squads/${data.id}`, data);
};

export const deleteSquad = (id) => {
  return axios.delete(`/api/squads/${id}`)
}