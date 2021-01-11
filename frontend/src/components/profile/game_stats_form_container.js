import { connect } from 'react-redux';
// import { fetchUserSquads } from '../../actions/squad_actions';
import { fetchUser, addUserStats } from '../../actions/user_actions';
import { fetchGames } from '../../actions/game_actions'
import GameStatsForm from './game_stats_form';

const mapStateToProps = (state, ownProps) => {
  return {
    // currentUserId: state.session.user.id,
    // profileUserId: ownProps.match.params.userId,
    // profileUser: state.users.profileUser,
    // games: state.games.all
    game: ownProps.game,
    profileUserId: ownProps.profileUserId,
    type: ownProps.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchGames: () => dispatch(fetchGames()),
    addUserStats: (data) => dispatch(addUserStats(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsForm);


    // const newStat = new Stat({
    //     user: req.params.id,
    //     game: req.body.gameId,
    //     gameName: req.body.gameName,
    //     stats: req.body.stats
    // });