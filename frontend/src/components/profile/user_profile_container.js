import { connect } from 'react-redux';
// import { fetchUserSquads } from '../../actions/squad_actions';
import { fetchUser } from '../../actions/user_actions';
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
    fetchGames: () => dispatch(fetchGames())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


//is it a good to call fetch user and get all data and references for that user or to have separate actions all at once for different slices of states to fetch 