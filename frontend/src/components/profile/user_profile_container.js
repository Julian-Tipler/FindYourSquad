import { connect } from 'react-redux';
import { fetchUser, removeUser } from '../../actions/user_actions';
import { fetchGames } from '../../actions/game_actions'
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUserId: state.session.user.id,
    profileUserId: ownProps.match.params.userId,
    profileUser: state.users.profileUser,
    games: state.games.all

  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchGames: () => dispatch(fetchGames()),
    removeUser: () => dispatch(removeUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


