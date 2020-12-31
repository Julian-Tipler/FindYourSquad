import { connect } from 'react-redux';
import Members from './members'

const mapStateToProps = (state) => ({
    members: state.squads.currentSquad.members
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Members)