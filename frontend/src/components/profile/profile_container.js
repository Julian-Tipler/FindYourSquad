import { connect } from 'react-redux';
import { fetchUserSquads } from '../../actions/squad_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    squads: Object.values(state.squads.user),
    currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserSquads: id => dispatch(fetchUserSquads(id)),
    otherForm: (
      <button onClick={() => dispatch (openModal('login'))}>
        Request to Join Group
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);