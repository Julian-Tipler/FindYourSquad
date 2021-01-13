import { connect } from 'react-redux';
import { fetchSquad, updateSquad, fetchSquadMessages } from '../../../actions/squad_actions';
import SquadShow from './squad_show';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        currentSquad: state.squads.currentSquad,
        currentUser: state.session.user,
        squadId: ownProps.match.params.squadId,
        messages: state.squads.currentSquad.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // otherForm: (
        //     <button className="request-button" onClick={() => dispatch (openModal( { word: 'request', squad: ownProps.match.params.squadId} ))}>
        //         Request to Join Squad
        //     </button>
        // ),
        fetchSquad: id => dispatch(fetchSquad(id)),
        updateSquad: data => dispatch(updateSquad(data)),
        closeModal: () => dispatch(closeModal()),
        fetchSquadMessages: id => dispatch(fetchSquadMessages(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadShow);