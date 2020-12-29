import axios from 'axios';

export const getSquads = () => {
  return axios.get('/api/squads')
};

// export const getSpecificSquads = data {
//   return axios.get('api/squads',data)
// }

export const getUserSquads = id => {
  return axios.get(`/api/squads/user/${id}`)
};


// export const getUser = id => {
//   return axios.get(`/api/user/${id}`)   need this on user_util
// };

export const formSquad = data => {
  return axios.post('/api/squads/', data)
}


export const updateSquad = (data) => {
  return axios.put(`/api/squads/${data.id}`, data);
};

// id: group id
// type: remove or add
// user_id: memberId

// onclick={()=this.updateSquad}


// const updateSquad = () => {
//   const data = {
//     id: this.props.groupID,
//     newUser: this.props.currentUser
//   }
// }