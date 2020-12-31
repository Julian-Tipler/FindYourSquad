import { connect } from 'react-redux';
import { updateSquad } from '../../actions/squad_actions';
import RequestMessage from './request_message'

const msp = (state) => ({
    currentUserId: state.session.user.id,
    squad: state.ui.modal.squad
})

const mdp = dispatch => {
    return{
        updateSquad: (data) => dispatch(updateSquad(data))
    }
    
}

export default connect(msp,mdp)(RequestMessage)