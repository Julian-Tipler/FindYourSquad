import { connect } from 'react-redux';
import { fetchUser, addUserStats, editUserStats } from '../../actions/user_actions';
import { fetchGames } from '../../actions/game_actions'
import GameStatsForm from './game_stats_form';

const mapStateToProps = (state, ownProps) => {
  return {
    game: ownProps.game,
    profileUserId: ownProps.profileUserId,
    type: ownProps.type,
    statId: ownProps.statId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchGames: () => dispatch(fetchGames()),
    addUserStats: (data) => dispatch(addUserStats(data)),
    editUserStats: (data) => dispatch(editUserStats(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsForm);
