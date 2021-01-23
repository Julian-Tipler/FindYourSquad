import { connect } from 'react-redux';
import SquadBox from './squad_box';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    squadId: ownProps.squad._id,
    comingFromProfile: ownProps.comingFromProfile,
    squad: ownProps.squad,
    currentUser: state.session.user
  }
} 

const mdp = (dispatch, ownProps) => {
  return{
    otherForm: (
      <button className="request-button" onClick={() => dispatch (openModal( { word: 'request', squad: ownProps.squad} ))}>
        Request to Join Squad
      </button>
    ),
    closeModal: () => dispatch(closeModal())
   }
    
}

export default connect(msp,mdp)(SquadBox)