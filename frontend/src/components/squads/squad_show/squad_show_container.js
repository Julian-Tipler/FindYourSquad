import { connect } from 'react-redux';
import { fetchSquad, updateSquad} from '../../../actions/squad_actions';
import SquadShow from './squad_show';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps)
    return {
        currentSquad: state.squads.currentSquad,
        currentUser: state.session.user,
        squadId: ownProps.match.params.squadId
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
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquadShow);