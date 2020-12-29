import { connect } from 'react-redux';
import SearchSquad from './search_squad'
import {fetchFilteredSquads} from '../../actions/squad_actions'

const msp = (state) => ({

})

const mdp = dispatch => ({
    fetchFilteredSquads: searchParams => dispatch(fetchFilteredSquads(searchParams))
})

export default connect(msp,mdp)(SearchSquad)