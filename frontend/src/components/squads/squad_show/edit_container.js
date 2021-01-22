import { connect } from 'react-redux';
import { updateSquad } from '../../../actions/squad_actions';
import Edit from './edit';
import { closeModal } from '../../../actions/modal_actions';


const msp = (state) => {
    return {

        currentUserId: state.session.user.id,
        squads: state.squads.currentSquad
    }
}

const mdp = dispatch => {
    return{
        updateSquad: (data) => dispatch(updateSquad(data)),
        closeModal: () => dispatch(closeModal())
    }
    
}

export default connect(msp,mdp)(Edit)