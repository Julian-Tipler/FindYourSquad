import { connect } from 'react-redux';
import { fetchSquads, updateSquad } from '../../actions/squad_actions';
import Squads from './squads';

const mapStateToProps = (state) => {
  return {
    squads: Object.values(state.squads.all),
    currentUserId: state.session.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSquads: () => dispatch(fetchSquads()),
    updateSquad: (data) => dispatch(updateSquad(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Squads);