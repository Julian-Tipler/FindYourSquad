import { connect } from 'react-redux';
import { fetchSquads, editSquad } from '../../actions/squad_actions';
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
    editSquad: (data) => dispatch(editSquad(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Squads);