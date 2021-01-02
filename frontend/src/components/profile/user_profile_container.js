import { connect } from 'react-redux';
// import { fetchUserSquads } from '../../actions/squad_actions';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    currentUserId: state.session.user.id,
    profileUserId: ownProps.match.params.userId,
    profileUser: state.users.profileUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);


//is it a good to call fetch user and get all data and references for that user or to have separate actions all at once for different slices of states to fetch 