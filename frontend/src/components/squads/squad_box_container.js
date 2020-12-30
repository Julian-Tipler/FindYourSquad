import { connect } from 'react-redux';
import SquadBox from './squad_box';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  // console.log(ownProps)
  return {
    groupId: ownProps.squad._id
  }
} 

const mdp = (dispatch, ownProps) => {
  return{
    otherForm: (
      <button onClick={() => dispatch (openModal( { word: 'request', squad: ownProps.squad} ))}>
        Request to Join Squad
      </button>
    ),
    closeModal: () => dispatch(closeModal())
   }
    
}

export default connect(msp,mdp)(SquadBox)