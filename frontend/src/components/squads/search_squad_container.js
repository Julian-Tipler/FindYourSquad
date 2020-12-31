import { connect } from 'react-redux';
import SearchSquad from './search_squad'
import {fetchFilteredSquads} from '../../actions/squad_actions'
import { fetchGames } from '../../actions/game_actions'

const msp = (state) => ({
  games: state.games.all,
});

const mdp = dispatch => ({
    fetchFilteredSquads: searchParams => dispatch(fetchFilteredSquads(searchParams)),
    fetchGames: ()=> dispatch(fetchGames())
})

export default connect(msp,mdp)(SearchSquad)