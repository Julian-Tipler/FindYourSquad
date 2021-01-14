import { connect } from 'react-redux';
import Carousel from './carousel'

const msp = (state) => ({
    images: state.users.profileUser.profileImages
})

const mdp = dispatch => ({

})

export default connect(msp,mdp)(Carousel)