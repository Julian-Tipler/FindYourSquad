import { connect } from 'react-redux';
import { updateSquad } from '../../actions/squad_actions';
import RequestMessage from './request_message';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => ({
    currentUserId: state.session.user.id,
    currentUsername: state.session.user.username,
    squad: state.ui.modal.squad
})

const mdp = dispatch => {
    return{
        updateSquad: (data) => dispatch(updateSquad(data)),
        closeModal: () => dispatch(closeModal())
    }
    
}

export default connect(msp,mdp)(RequestMessage)