import { connect } from 'react-redux';
import { 
    fetchSquad, 
    postMessage
} from '../../../actions/squad_actions';
import SquadShow from './squad_show';

const mapStateToProps = (state) => {
    return {
        currentSquad: state.squads.currentSquad,
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSquad: id => dispatch(fetchSquad(id)),
        postMessage: (data) => dispatch(postMessage(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadShow);