import { connect } from 'react-redux';
import { fetchSquads } from '../../actions/squad_actions';
import Squads from './squads';

const mapStateToProps = (state) => {
  return {
    squads: Object.values(state.squads.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSquads: () => dispatch(fetchSquads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Squads);