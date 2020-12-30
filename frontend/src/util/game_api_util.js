import axios from "axios";


export const getGames = () => {
  return axios.get("/api/games");
};
