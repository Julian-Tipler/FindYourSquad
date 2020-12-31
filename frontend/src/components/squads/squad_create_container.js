import { connect } from 'react-redux';
import { createSquad } from '../../actions/squad_actions';
import { fetchGames} from '../../actions/game_actions'
import SquadCreate from './squad_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newSquad: state.squads.new,
    games: state.games.all
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSquad: data => dispatch(createSquad(data)),
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadCreate);