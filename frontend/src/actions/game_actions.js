import * as APIGame from '../util/game_api_util';

export const RECEIVE_GAMES = "RECEIVE_GAMES";

export const receiveGames = games => ({
    type: RECEIVE_GAMES,
    games
});

export const fetchGames = () => dispatch => (
    APIGame.getGames()
        .then(games => dispatch(receiveGames(games)))
        .catch(err => console.log(err))
);
