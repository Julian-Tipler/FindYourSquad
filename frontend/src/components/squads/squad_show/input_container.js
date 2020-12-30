import { connect } from 'react-redux';
import { postMessage } from '../../../actions/squad_actions';
import Input from './input';

const mapStateToProps = (state) => ({
    currentSquad: state.squads.currentSquad,
    currentUser: state.session.user
})

const mapDispatchToProps = dispatch => {
    return{
        postMessage: (data) => dispatch(postMessage(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input)