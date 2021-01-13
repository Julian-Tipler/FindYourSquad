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

// export const getFilteredSquads = (searchParams) => {
//   console.log(serialize(searchParams))
//   return axios.get(`/api/squads/`, searchParams);
// };

export const getFilteredSquads = (searchParams) => {
  return axios.get(`/api/squads/${serialize(searchParams)}`);
};

// export const getUserSquads = (id) => {
//   return axios.get(`/api/squads/user/${id}`);
// };


// export const getUser = id => {
//   return axios.get(`/api/user/${id}`)   need this on user_util
// };

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

// id: group id
// type: remove or add
// user_id: memberId

// onclick={()=this.editSquad}


// const editSquad = () => {
//   const data = {
//     id: this.props.groupID,
//     newUser: this.props.currentUser
//   }
// }

export const deleteSquad = (id) => {
  return axios.delete(`/api/squads/${id}`)
}