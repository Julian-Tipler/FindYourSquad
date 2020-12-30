import { connect } from 'react-redux';
import { fetchUserSquads } from '../../actions/squad_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);