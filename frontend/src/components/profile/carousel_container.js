import { connect } from 'react-redux';
import Carousel from './carousel'
import {deleteUserImage} from '../../actions/user_actions'

const msp = (state) => ({
    images: state.users.profileUser.profileImages
})

const mdp = dispatch => ({
    deleteUserImage : (data) => dispatch(deleteUserImage(data))
})

export default connect(msp,mdp)(Carousel)