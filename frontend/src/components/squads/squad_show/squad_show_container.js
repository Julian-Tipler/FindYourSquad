import { connect } from 'react-redux';
import { fetchSquad } from '../../../actions/squad_actions';
import SquadShow from './squad_show';

const mapStateToProps = (state,ownProps) => {
    // console.log(ownProps)
    return {
        currentSquad: state.squads.currentSquad,
        currentUser: state.session.user,
        squadId: ownProps.match.params.squadId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSquad: id => dispatch(fetchSquad(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadShow);