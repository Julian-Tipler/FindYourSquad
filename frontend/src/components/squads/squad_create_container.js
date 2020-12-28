import { connect } from 'react-redux';
import { createSquad } from '../../actions/squad_actions';
import SquadCreate from './squad_create';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newSquad: state.squads.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSquad: data => dispatch(createSquad(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadCreate);